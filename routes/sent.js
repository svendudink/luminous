import express from "express";
import sent from "../controller/sent.js";

const router = express.Router();

router.post("/", sent);

export default router;
