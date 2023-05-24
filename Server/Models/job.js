import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  name: { type: String, required: true, min: 2, max: 50 },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: String,
  role: String,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
