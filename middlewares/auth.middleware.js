import AppError from "../utils/AppError.js";
import asyncHandler from "./asyncHandler.middleware.js";
import jwt from 'jsonwebtoken';

export const isLoggedIn=asyncHandler(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new AppError("unauthorized! please login...",403));
    }
    const decoded=await jwt.verify(token,process.env.SECRET);
    if (!decoded) {
        return next(new AppError("Unauthorized, please login to continue", 403));
    }
    req.user=decoded;
    next();
});
export const authorizedRoles=(...roles)=>
    asyncHandler(async(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new AppError("You are not allowed to access this route",403))
        }
        next();
    });