// models/Contact.js
const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status:{ type: String,enum: ["pending"], default:'pending'}
});

const contact = mongoose.model('contact', contactschema);

module.exports = contact;