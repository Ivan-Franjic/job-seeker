import User from "../Models/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const jobs = await Promise.all(user.jobs.map((id) => User.findById(id)));
    const formattedJobs = jobs.map(
      ({ _id, name, description, location, image, role }) => {
        return { _id, name, description, location, image, role };
      }
    );
    res.status(200).json(formattedJobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addRemoveUserJobs = async (req, res) => {
  try {
    const { id, jobId } = req.params;
    const user = await User.findById(id);
    const job = await User.findById(jobId);
    if (user.jobs.includes(jobId)) {
      user.jobs = user.jobs.filter((id) => id !== jobId);
    } else {
      user.jobs.push(jobId);
    }
    await user.save();

    const jobs = await Promise.all(user.jobs.map((id) => User.findById(id)));
    const formattedJobs = jobs.map(
      ({ _id, name, description, location, image, role }) => {
        return { _id, name, description, location, image, role };
      }
    );
    res.status(200).json(formattedJobs);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
