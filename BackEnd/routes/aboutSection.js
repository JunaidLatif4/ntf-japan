const router = require("express").Router();
const mongoose = require("mongoose");
const { findOneAndUpdate } = require("../models/Section1");

const AboutModel = require("../models/Section1")





// Getting AboutData :
router.get("/", async (req, res) => {

    try {
        const data = await AboutModel.find()
        if (!data || data.length == 0) {
            let newAbout = await new AboutModel({ sectionName: "about" })
            newAbout.save()
            res.status(201).json({ msg: "Data CREATED ", data: newAbout })
        } else {
            res.json({ msg: "Data Found", data: data[0] })
        }
    } catch (err) {
        res.status(500).json({ msg: "Internal Server Error" })
    }

})
// Editing AboutData :
router.post("/", async (req, res) => {
    // console.log("BODY ==== " , JSON.parse(req.body.path));

    try {
        const data = await AboutModel.find()
        if (!data || data.length == 0) {
            let newAbout = await new AboutModel({ sectionName: "about" })
            newAbout.save()
            res.status(201).json({ msg: "Data CREATED " })
        } else {
            let doc = await AboutModel.findOneAndUpdate({ "sectionName": "about" }, {
                $set: { [req.body.path]: `${req.body.content}` }
            }, { new: true })
            res.json({ msg: "Data Found", doc })
        }
    } catch (err) {
        res.status(500).json({ msg: "Internal Server Error" })
    }

})





module.exports = router;