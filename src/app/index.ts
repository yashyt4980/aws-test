import express, {Request} from 'express';
import cors from 'cors';
const urlRoutes = require('./routes/UrlRoutes');
require("dotenv").config();
export const init = async () => {
    const app = express();
    app.listen(process.env.PORT,() => {
        console.log(`Server started at ${process.env.PORT}`);
    });
    app.use(express.json());
    app.use(cors<Request>())
    app.use("/", urlRoutes);
} 
