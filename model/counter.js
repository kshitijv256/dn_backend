import { Schema, model } from "mongoose";
const counterSchema = Schema({
  count: Number,
});
var counter = model("counter", counterSchema);
export default counter;
