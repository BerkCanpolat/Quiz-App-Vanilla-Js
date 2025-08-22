function Question(questionText,questionOptions,questionAnswer) {
    this.questionText = questionText;
    this.questionOptions = questionOptions;
    this.questionAnswer = questionAnswer;
}

Question.prototype.correctAnswer = function(answer) {
    return answer === this.questionAnswer;
};