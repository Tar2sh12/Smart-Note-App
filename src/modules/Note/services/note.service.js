import { Note } from "../../../../DB/models/note.model.js";
import { ErrorClass ,successResponse} from "../../../utils/index.js";
import { geminiService } from "../../../Services/index.js";

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns return response { user}
 * @description create note 
 */
export const createNote = async (req, res,next ) => {
    const {authUser} = req; // to get only the _id from the authUser object => {authUser:{_id}}= req
    const {title,content}= req.body;
    const note = new Note({
        title,
        content,
        ownerId:authUser._id
    });
    await note.save();
    return successResponse(res, note, "note created", 200);
}

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns return response {data ,message, statusCode}
 * @description summarize note with gemini
 */
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


/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns return response {data ,message, statusCode}
 * @description delete note by id
 */
export const deleteNote = async (req, res, next) => {
    const { id } = req.params;
    const note = await Note.findOneAndDelete({ _id: id, ownerId: req.authUser._id });
    if (!note) {
        return next(new ErrorClass("Note not found", 404, "Note not found"));
    }
    return successResponse(res, note, "Note deleted successfully", 200);
}