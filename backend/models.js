const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminUsername: {
        type: String,
        required: true
    },
    adminPassword: {
        type: String,
        required: true
    }
}, {timestamps: true});

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

const Admin = mongoose.model("Admin", adminSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);
const Patient = mongoose.model("Patient", patientSchema);

module.exports = Admin;
module.exports = Doctor;
module.exports = Patient;