import { Router } from "express";
import {
  getAllData,
  createData,
  updateData,
  getCount,
  addCount,
} from "./controller/controller.js";

const router = Router();

router.route("/").get(getAllData).post(createData);
router.route("/count").get(getCount).post(addCount);
router.route("/:id").put(updateData);

export default router;
