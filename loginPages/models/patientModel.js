const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    patientFirstName: {
        type: String,
        required: true
    },
    patientLastName: {
        type: String,
        required: true
    },
    patientDOB: {
        type: String,
        required: true
    },
    patientAge: {
        type: String,
        required: true
    },
    caretakerName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    hospitalNumber: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: false
    },
    currentTime: {
        type: String,
        required: false
    },
    caseSummary: {
        type: String,
        required: false
    },
    prescription: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;