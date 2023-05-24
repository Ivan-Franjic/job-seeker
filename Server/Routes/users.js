import express from "express";
import {
  getUser,
  getUserJobs,
  addRemoveUserJobs,
} from "../Controllers/users.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/:id/jobs", getUserJobs);
router.patch("/:id/:jobId", addRemoveUserJobs);

export default router;
