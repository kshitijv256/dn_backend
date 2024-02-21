import { Schema, model } from "mongoose";
const sampleSchema = Schema({
  data: {
    type: String,
    required: true,
  },
  registered_on: {
    type: Date,
    default: new Date(),
  },
});
var sample = model("sample", sampleSchema);
export default sample;
