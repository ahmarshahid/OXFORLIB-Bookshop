import express from "express";
import { GETBOOK } from "../Controller/Book.Controller.js";

const router= express.Router()

router.get("/",GETBOOK);

export default router;