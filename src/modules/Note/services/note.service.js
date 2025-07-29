import { Note } from "../../../../DB/models/note.model.js";
import { ErrorClass ,successResponse} from "../../../utils/index.js";
import { geminiService } from "../../../Services/index.js";
export const createNote = async (req, res,next ) => {
    const {authUser} = req;
    const {title,content}= req.body;
    const note = new Note({
        title,
        content,
        ownerId:authUser._id
    });
    await note.save();
    return successResponse(res, note, "note created", 200);
}
export const summarizeNote = async (req, res, next) => {
    const { id } = req.params;
    const note = await Note.findById(id);
    if(!note) {
        return next(new ErrorClass("Note not found", 404, "Note not found"));
    }
    const prompt = `Summarize this note in a few sentences:\n\n${note.content}`;
    const model = geminiService();
    const result = await model.generateContent(prompt);
    const response = result.response;
    const summary = response.text();
    return successResponse(res, { summary }, "Note summarized", 200);

}

export const deleteNote = async (req, res, next) => {
    const { id } = req.params;
    const { authUser } = req;
    const note = await Note.findOneAndDelete({ _id: id, ownerId: req.authUser._id });
    if (!note) {
        return next(new ErrorClass("Note not found", 404, "Note not found"));
    }
    return successResponse(res, note, "Note deleted successfully", 200);
}