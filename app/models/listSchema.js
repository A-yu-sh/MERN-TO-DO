import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Listings =
  mongoose.model.ToDoTask || mongoose.model("ToDoTask", ListSchema);
export default Listings;
