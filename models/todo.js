const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        count: {
            type: Number,
            required: false,
            default: 1,
        },
        desc: {
            type: String,
        },
        price: {
            type: Number,
        },
        category: {
            type: String,
        }
    },
    { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);