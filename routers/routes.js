const express = require("express"); //import express
const router = express.Router(); //import express router
const schema = require("../model/schema"); //import schema



// get route
router.get("/", async(req, res) => {
    try {
        const data = await schema.find();
        res.json(data);
     }
    catch (err) {
        console.log(`error: ${err}`);
    }
});
 
router.post("/", async (req, res) => { 
    const newData = new schema({
        name: req.body.name,
        course: req.body.course,
        year: req.body.year
    });
    try {
        const data = await newData.save();
        res.json(data);
    }
    catch (err) {
        console.log(`error: ${err}`);
    }
});

 

module.exports = router;