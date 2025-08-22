const questionList = [
  new Question(
    "Beşiktaş kaç yılında kuruldu?",
    { a: "1903", b: "1900", c: "1950", d: "1951" },
    "a"
  ),
  new Question(
    "Şenol Güneş Kaç Yaşındadır?",
    { a: "55", b: "73", c: "31", d: "90" },
    "b"
  ),
  new Question(
    "Süperligde Namağlup Şampiyon Kimdir?",
    { a: "Beşiktaş", b: "Galatasaray", c: "Fenerbahçe", d: "Trabzonspor" },
    "a"
  ),
  new Question(
    "Bu uygulamayı kim geliştiriyor?",
    { a: "beni seçme", b: "Cevap d knk", c: "Ben değil", d: "Tabiki ben" },
    "d"
  ),
];

const quiz = new Quiz(questionList);
const ui = new UI();

ui.spaceMain.classList.add("noBorder");

ui.startQuestion.addEventListener("click", function() {
    ui.quizBox.classList.add("active");
    ui.startQuestion.classList.remove("active");
    ui.spaceMain.classList.remove("noBorder");

    ui.showQuestion(quiz.getQuestions());
    ui.showQuestionCount(quiz.questions.length, quiz.questionIndex + 1);
    
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {
    ui.showQuestion(quiz.getQuestions());
    ui.showQuestionCount(quiz.questions.length, quiz.questionIndex + 1);
  } else {
    ui.showScore(quiz.correctAnswerQuestions,quiz.questions.length);
    ui.scoreBoxMain.classList.add("active");
    ui.quizBox.classList.remove("active");
}
});

function optionSelected(e) {
    let selectedElement = e.target;

    if(selectedElement.nodeName == "SPAN") {
        selectedElement = selectedElement.parentElement;
    }

    let answer = e.target.textContent[0];
    let question = quiz.getQuestions();

    if(question.correctAnswer(answer)) {
        quiz.correctAnswerQuestions += 1;
        console.log(quiz.correctAnswerQuestions);
        
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
        
    } else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }

    ui.disableAllOption();
    quiz.questionIndex += 1;   
}

ui.btnQuit.addEventListener("click",function() {
    window.location.reload();
});

ui.btnReplay.addEventListener("click", function() {
    quiz.questionIndex = 0;
    quiz.correctAnswerQuestions = 0;

    ui.startQuestion.click();
    ui.scoreBoxMain.classList.remove("active");
});

