function Quiz(questions) {
    this.questionIndex = 0;
    this.questions = questions;
}

Quiz.prototype.getQuestions = function() {
    return this.questions[this.questionIndex];
}