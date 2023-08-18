import express from "express";
import {
  userInformation,
  userInformationGet,
} from "../controller/portfolioController.js";

const router = express.Router();

router.route("/").get(userInformationGet).post(userInformation);

//export
export default router;
