const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text: String,
    isCorrect: Boolean
});

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [optionSchema]
});

const Question = mongoose.model('questions', questionSchema);
module.exports = Question;
