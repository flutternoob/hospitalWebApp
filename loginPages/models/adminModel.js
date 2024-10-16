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

const Admin = mongoose.model("Admin", adminSchema, "dbAdmin");

module.exports = Admin;