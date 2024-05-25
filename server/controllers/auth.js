import mongoose from "mongoose"
import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const signup=async(req,res)=>{
    try{
    const salt=bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(req.body.password, salt);
    const newUser=new User({...req.body,password: hash})
    await newUser.save()
    res.status(200).send("User has been created!");
  console.log(req.body);
    }catch(err){
console.log(err);
    }

}