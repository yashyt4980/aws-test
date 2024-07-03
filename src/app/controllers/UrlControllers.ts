import { Request, Response } from "express";
import URLService from "../util/URLService";
export const getNumbers = async (req: Request, res: Response) => {
  let { url } = req.query;
  if (!url) {
    return res.status(400).json({
      status: 400,
      message: "Inavlid Data",
    });
  }
  try {
    const urlArray = Array.isArray(url) ? url : [url];
    if (!urlArray) {
      return res.status(400).json({
        status: 400,
        message: "Inavlid Data",
      });
    }
    const filteredUrlArray = urlArray.filter(
      (u): u is string => typeof u === "string"
    );
    const areValidUrls: string[] | [] =
      URLService.ValidateURLS(filteredUrlArray);
    if (!areValidUrls) {
      return res.status(400).json({
        status: 400,
        message: "Inavlid URLS",
      });
    }
    const data = await URLService.getData(areValidUrls);
    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "URL Not Found",
      });
    }
    data.sort((a, b) => a - b);
    res.status(200).json({
      numbers:data,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: error.message || "Internal Server Error",
    });
  }
};

export const init = async (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      status: 200,
      message: `Server started at ${process.env.PORT}`,
    })
  );
};
