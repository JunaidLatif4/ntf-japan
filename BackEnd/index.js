const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

const aboutRoute = require("./routes/aboutSection")

const app = express()
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))
dotenv.config()

mongoose.connect("mongodb://localhost/nftjapan" || process.env.mongodb)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error While Connecting to DB ===== ", err))


app.use("/api/about", aboutRoute)

app.listen(process.env.port, () => {
    // console.clear();
    console.log("Server Running at 5000 Port")
})