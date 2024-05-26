import express from "express";
import { signup,signin } from "../controllers/auth.js";

const router=express.Router();

//craete a user
router.post("/signup",signup)
//Sign in
router.post("/signin",signin)


//Google Auth
router.post("/google")


// router.get("/test",test)

export default router;