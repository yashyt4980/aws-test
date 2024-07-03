import { Request, Response } from "express";
export const getNumbers = async (req:Request, res: Response) => {
    const url = req.params;
    res.status(200).json({
        data: url
    });
}

export const init = async (req: Request, res: Response) => {
    res.send(JSON.stringify({
        status: 200,
        message: `Server started at ${process.env.PORT}`
    }));
}