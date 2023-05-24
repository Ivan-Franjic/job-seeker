import express from "express";
import { getJobs, getJobDetails } from "../Controllers/jobs.js";

const router = express.Router();

router.get("/jobs", getJobs);
router.get("/jobs/:jobId", getJobDetails);

export default router;
