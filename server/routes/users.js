import express from "express";
import {update,deleteUser,getUser,subscibe,unSubscribe,like,dislike} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router=express.Router();

//update a user
router.put("/:id",update,verifyToken)

//delete user
router.delete("/:id",deleteUser)


//get a user
router.get("/find/:id",getUser)


//subscribe a user
router.put("/sub/:id",subscibe)

//unsubscribe
router.put("/unsub/:id",unSubscribe)

//like a video
router.put("/like/:videoId",like)


//dislike a video
router.put("/dislike/videoId",dislike)

export default router;