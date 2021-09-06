import express from "express";
import artsController from "../controllers/artsController.js";

const router = express.Router();

router.post("/", artsController.createArt);
router.get("/",artsController.readAll);


export default router;