import express from "express"

//import Contact from "../Controller/Contact.Controller.js"
import { contactfunc } from "../Controller/Contact.Controller.js";

const router = express.Router();

router.post("/contact",contactfunc);

export default router;