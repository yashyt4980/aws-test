import express from 'express';
const urlRoutes = require('./routes/UrlRoutes');
require("dotenv").config();
export const init = async () => {
    const app = express();
    app.listen(process.env.PORT,() => {
        console.log(`Server started at ${process.env.PORT}`);
    });
    app.use("/", urlRoutes);
} 
