import express  from "express";
const router = express.Router();
import { getNumbers, init } from '../controllers/UrlControllers';
router.get("/numbers", getNumbers);
router.get("/", init);
module.exports = router;