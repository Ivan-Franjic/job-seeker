import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true, min: 2, max: 50 },
  email: { type: String, required: true, max: 50, unique: true },
  password: { type: String, required: true, min: 5 },
  jobs: { type: Array, default: [] },
});

const User = mongoose.model("User", userSchema);

export default User;
