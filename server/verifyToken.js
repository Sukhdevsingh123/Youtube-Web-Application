import jwt from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token) return next(createError("401","user is not authenticate!"))
jwt.verify(token,"sajauwu222",(err,user)=>{
    if(err) return next(createError("403","token is not valid"))
        req.user=user;
    next()
})
}