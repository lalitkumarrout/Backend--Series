import { asyncHandler } from "../utils/asyncHandler.js";

const registeruser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"chai aur code"

    })
})

export {registeruser,}