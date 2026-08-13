import express from "express";

import {
  getRiders,
  getRider,
  createRider
} from "../controllers/riderController.js";


const router = express.Router();


router.get("/", getRiders);


router.get("/:id", getRider);


router.post("/", createRider);


export default router;