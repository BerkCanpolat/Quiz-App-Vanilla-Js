function Quiz(questions) {
    this.questionIndex = 0;
    this.questions = questions;
    this.correctAnswerQuestions = 0;
}

Quiz.prototype.getQuestions = function() {
    return this.questions[this.questionIndex];
}