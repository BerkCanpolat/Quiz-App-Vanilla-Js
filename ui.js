function UI() {
  this.quizBox = document.getElementById("quizBox");
  this.body = document.getElementById("body");

  this.correctIcon = '<i class="fa-regular fa-circle-check"></i>';
  this.inCorrectIcon = '<i class="fa-regular fa-circle-xmark"></i>';

  this.btnNext = document.querySelector(".btnNext");
  this.scoreBoxMain = document.getElementById("scoreBoxMain");
  this.btnQuit = document.getElementById("btnQuit");
  this.btnReplay = document.getElementById("btnReplay");
  this.startQuestion = document.getElementById("startQuestion");
  this.spaceMain = document.querySelector(".spaceMain");
  this.timeSecond = document.querySelector(".timeSecond");
  this.timeText = document.querySelector(".timeText");
}

UI.prototype.showQuestion = function (question) {
  this.body.innerHTML = "";

  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  const questionTitle = document.createElement("h5");
  questionTitle.classList.add("questionTitle");
  questionTitle.textContent = question.questionText;

  const optionList = document.createElement("div");
  optionList.classList.add("optionList");

  for (let [key, value] of Object.entries(question.questionOptions)) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.addEventListener("click", optionSelected);

    const span = document.createElement("span");
    span.textContent = key + ") " + value;

    option.appendChild(span);
    optionList.appendChild(option);
  }

  cardBody.appendChild(questionTitle);
  cardBody.appendChild(optionList);

  this.body.appendChild(cardBody);
};

UI.prototype.disableAllOption = function() {
    const disable = document.querySelectorAll(".option");
    for(let o of disable) {
        o.classList.add("disable");
    }
}

UI.prototype.showQuestionCount = function(totalQuestions,currentQuestions) {
    const span = `<span>${totalQuestions} / ${currentQuestions}</span>`;
    document.querySelector(".questionIndex").innerHTML = span;
}

UI.prototype.showScore = function(correctAnswer,totalQuestions) {
    const span = `You Answered ${correctAnswer} Questions Correctly out of a total of ${totalQuestions} Questions`;
    document.querySelector(".scoreText").innerHTML = span;
}