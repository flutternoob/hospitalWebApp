const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctorUsername: {
        type: String,
        required: true
    },
    doctorPassword: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;