import Job from "../Models/job.js";

export const getJobs = async (req, res) => {
  try {
    const job = await Job.find();
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getJobDetails = async (req, res) => {
  try {
    const { jobId } = req.params;
    const job = await Job.findById(jobId);
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
