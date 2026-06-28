import type { NextFunction, Request, Response } from "express";


export const errorhandler = (err:Error, _req:Request, res:Response, _next:NextFunction) => {
    console.log("Error", err.message)

    const statusCode = res.statusCode !== 200 ? res.statusCode :500

    const isDevelopment = process.env.NODE_ENV === "development"
    const message =
        statusCode >= 500 && !isDevelopment
            ? "Internal Server Error"
            : err.message || "Internal Server Error"
    res.status(statusCode).json({
        message,
        ...(isDevelopment && {stack:err.stack})
    })
}