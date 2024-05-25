import mongoose from "mongoose";

const VideoSchema = new mongoose.schema({

    userId: {
        type: String,
        require: true,
        unique: true,
    },
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    imgUrl: {
        type: String,
        require: true,
    },
    videoUrl: {
        type: Number,
        require: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },

}, 
{ timestamps: true }
);
export default mongoose.model("Video", VideoSchema);