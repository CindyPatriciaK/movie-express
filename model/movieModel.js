import mongoose from "mongoose";
import UserModel from "./UserModel.js";

const MovieSchema = new mongoose.Schema(
    {
        judul: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        tahunRilis: {
            type: String,
            required: true,
            trim: true,
        },
        sutradara: {
            type: String,
            required: true,
            trim: true,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: UserModel
        }
    },
    {
        timestpams: true
    }
);
const movieModel = mongoose.model("movie", MovieSchema);
export default movieModel