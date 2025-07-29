import mongoose from "mongoose";
const { Schema, model } = mongoose;
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const Note =
  mongoose.models.Note || model("Note", noteSchema);
