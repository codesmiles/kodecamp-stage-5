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

 

module.exports = router;