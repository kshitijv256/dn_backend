import sample from "../model/sample.js";
import counter from "../model/counter.js";

export async function getAllData(req, res) {
  try {
    const data = await sample.find();
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addCount(req, res) {
  try {
    const count = await counter.find();
    if (count.length > 0) res.json({ data: count, status: "success" });
    else {
      const data = await counter.create({ count: 0 });
      res.json({ data: data, status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getCount(req, res) {
  try {
    const data = await counter.find();
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createData(req, res) {
  try {
    const count = await counter.find();
    const data = await sample.create(req.body);
    await counter.findOneAndUpdate(count[0]._id, { count: count[0].count + 1 });
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateData(req, res) {
  try {
    const count = await counter.find();
    const updatedData = await sample.findByIdAndUpdate(req.params.id, req.body);
    await counter.findOneAndUpdate(count[0]._id, { count: count[0].count + 1 });
    res.json({ data: updatedData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
