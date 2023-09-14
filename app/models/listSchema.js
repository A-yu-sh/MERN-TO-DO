import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Listings =
  mongoose.model.ToDoTask || mongoose.model("ToDoTask", ListSchema);
export default Listings;
