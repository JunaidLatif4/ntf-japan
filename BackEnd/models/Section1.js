const mongoose = require("mongoose")

const Section1Schema = new mongoose.Schema({
    sectionName: {
        type: String,
        default: null
    },
    heading: {
        type: String,
        default: null
    },
    headingData1: {
        type: String,
        default: null
    },
    headingData2: {
        type: String,
        default: null
    },
    card1: {
        img: {
            type: String,
            default: null
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card2: {
        img: {
            type: String,
            default: null
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card3: {
        img: {
            type: String,
            default: null
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card4: {
        img: {
            type: String,
            default: ""
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card5: {
        img: {
            type: String,
            default: ""
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card6: {
        img: {
            type: String,
            default: ""
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card7: {
        img: {
            type: String,
            default: ""
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },
    card8: {
        img: {
            type: String,
            default: ""
        },
        heading: {
            type: String,
            default: null
        },
        signature: {
            type: String,
            default: null,
        },
        detail: {
            type: String,
            default: null
        }
    },


}, { timestamps: true })

module.exports = mongoose.model("AboutSectionModel", Section1Schema)