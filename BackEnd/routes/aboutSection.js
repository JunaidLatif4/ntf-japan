const router = require("express").Router();
const mongoose = require("mongoose")

const AboutModel = require("../models/Section1")





// Getting AboutData
router.post("/", async (req, res) => {

    try {
        const data = await AboutModel.find()
        res.json({ data })
    } catch (err) {
        res.status(500).json({ msg: "Internal Server Error" })
    }

})





module.exports = router;