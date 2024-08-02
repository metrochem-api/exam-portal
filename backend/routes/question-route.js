const express = require('express');
const router = express.Router();
const {
    addQuestion, 
    getQuestions, 
    getQuestion, 
    updateQuestion, 
    deleteQuestion
} = require("../handlers/questionHandler");

router.post("/questions", async (req, res) => {
    let question = await addQuestion(req.body);
    res.send(question);
});

router.get("/questions", async (req, res) => {
    let questions = await getQuestions();
    res.send(questions);
});

router.get("/questions/:id", async (req, res) => {
    let question = await getQuestion(req.params["id"]);
    res.send(question);
});

router.put("/questions/:id", async (req, res) => {
    await updateQuestion(req.params["id"], req.body);
    res.send({});
});

router.delete("/questions/:id", async (req, res) => {
    await deleteQuestion(req.params["id"]);
    res.send({});
});

module.exports = router;
