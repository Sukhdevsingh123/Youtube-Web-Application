import { createError } from "../error"
import User from "../models/User.js"

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {

        try {
            const updatedUser = await User.findByIdAndUpdate(req.param.id, {
                $set: res.body
            })
            res.status(200).json(updatedUser)
        }
        catch (err) {
            next(err)
        }
    }
    else {
        return next(createError("403", "you can upadate only your account"))
    }
}
export const deleteUser = (req, res, next) => {

}
export const getUser = (req, res, next) => {

}
export const subscibe = (req, res, next) => {

}
export const unSubscribe = (req, res, next) => {

}


export const like = (req, res, next) => {

}
export const dislike = (req, res, next) => {

}