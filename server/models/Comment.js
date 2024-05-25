import mongoose from "mongoose";

const CommentSchema = new mongoose.schema({

    userId: {
        type: String,
        require: true,  
    },
    videoId: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    
}, 
{ timestamps: true }
);
export default mongoose.model("Comment", CommentSchema);