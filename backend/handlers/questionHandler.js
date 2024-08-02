const Question = require('../db/question');

// add, create question
async function addQuestion(questionModel) {
    let question = new Question({
        ...questionModel
    });
    await question.save();
    return question.toObject();
}

// get, read questions
async function getQuestions(){
    const questions = await Question.find();
    return questions.map(x => x.toObject());
}

// get only question with id
async function getQuestion(id){
    const question = await Question.findById(id);
    return question.toObject();
}

// update, edit question
async function updateQuestion(id, questionModel){
    const filter = { _id: id };
    await Question.findOneAndUpdate(filter, questionModel);
}

// delete question
async function deleteQuestion(id){
    await Question.findByIdAndDelete(id);
}

module.exports = { addQuestion, getQuestions, getQuestion, updateQuestion, deleteQuestion };
