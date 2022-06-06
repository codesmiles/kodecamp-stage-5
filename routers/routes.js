const express = require("express"); //import express
const router = express.Router(); //import express router
const schema = require("../model/schema"); //import schema

// get route
router.get("/", async (req, res) => {
  try {
    const data = await schema.find();
    res.json(data);
  } catch (err) {
    console.log(`error: ${err}`);
  }
});

// post route
router.post("/", async (req, res) => {
  try {
    const data = await schema.create(req.body);
    res.json(data);
  } catch (err) {
    console.log(`error: ${err}`);
  }
});

// update route
router.put("/:id", async (req, res) => {
  try {
      const data = await schema
          .findByIdAndUpdate(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    console.log(`error: ${err}`);
  }
});

// delete route
router.delete("/:id", async (req, res) => {
  try {
    const data = await schema.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(`error: ${err}`);
  }
});

module.exports = router;
