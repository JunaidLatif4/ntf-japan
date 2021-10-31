const mongoose = require("mongoose")

const Section1Schema = new mongoose.Schema({
    heading: {
        type: String,
        default: "THE 8 BUSHIDO CODES"
    },
    headingData1: {
        type: String,
        default: `Bushidō (武士道, "The way of the warrior") is a moral code relating to 侍 (Samurai) attitudes, behaviour and lifestyle, where all Samurais live and die by.`
    },
    headingData2: {
        type: String,
        default: `These 8 virtues of the Bushido code are each embodied by the 8 legendary Shoguns (将軍, shōgun):`
    },
    card: [
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Gi"
            },
            signature: {
                type: String,
                default: "Shogun of Justice",
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Si"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Li"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Gi"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Gi"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Gi"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Gi"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
        {
            img: {
                type: String,
                default: ""
            },
            heading: {
                type: String,
                default: "Gi"
            },
            signature: {
                type: String,
                default: "Shogun of Justice"
            },
            detail: {
                type: String,
                default: "Samurais make a full commitment to their decisions."
            }
        },
    ]

}, { timestamps: true })

module.exports = mongoose.model("AboutSectionModel", Section1Schema)