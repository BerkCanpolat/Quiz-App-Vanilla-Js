const questionList = [
  new Question(
    "Which one is a markup language?",
    { a: "Html", b: "Css", c: "Javascript", d: "React" },
    "a"
  ),
  new Question(
    "Which one is the language of stilling?",
    { a: "Next.js", b: "Css", c: "Python", d: "C#" },
    "b"
  ),
  new Question(
    "What technology is used for the backend?",
    { a: "Node.js", b: "React.js", c: "Html", d: "Vue.js" },
    "a"
  ),
  new Question(
    "Did you like the app?",
    { a: "I can do it better", b: "I don't know", c: "I didn't like it", d: "You're amazing" },
    "d"
  ),
];

const quiz = new Quiz(questionList);
const ui = new UI();
let timerChange;
let timerSlider;

ui.spaceMain.classList.add("noBorder");
ui.resultMain.classList.add("noBorder");

function loadNames() {
    const saved = localStorage.getItem("saveName");
    quiz.namesArray = saved ? JSON.parse(saved) : [];
}

ui.startQuestion.addEventListener("click", function() {
     const myName = ui.mainInput.value.trim();
     if(myName === "") {
        alert("Pls something add");
     } else {
         quiz.userName = myName;
         quiz.namesArray.unshift({
             name: myName,
             correct: 0
            });

            startTime(10);
            startTimeSlider();
            ui.quizBox.classList.add("active");
            ui.startQuestion.classList.remove("active");
            ui.spaceMain.classList.remove("noBorder");
            ui.mainInput.classList.remove("active");
        
            ui.showQuestion(quiz.getQuestions());
            ui.showQuestionCount(quiz.questions.length, quiz.questionIndex + 1);
        
            savedNames();
     }

    
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {
    startTime(10);
    startTimeSlider();
    ui.showQuestion(quiz.getQuestions());
    ui.showQuestionCount(quiz.questions.length, quiz.questionIndex + 1);

    ui.btnNext.classList.remove("showNext");
  } else {

    if(quiz.namesArray.length > 0){
        const lastPlayerIndex = 0;
        quiz.namesArray[lastPlayerIndex].correct = quiz.correctAnswerQuestions;
        savedNames();
    }

    ui.showName(quiz.namesArray);

    ui.showScore(quiz.correctAnswerQuestions,quiz.questions.length);


    ui.scoreBoxMain.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.resultMain.classList.remove("noBorder");
    ui.resultMain.classList.remove("none");
}
});

function optionSelected(e) {
    clearInterval(timerChange);
    clearInterval(timerSlider);
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
    ui.btnNext.classList.add("showNext");
}

ui.btnQuit.addEventListener("click",function() {
    window.location.reload();
    ui.formName.classList.add("active");
});

ui.btnReplay.addEventListener("click", function() {
    quiz.questionIndex = 0;
    quiz.correctAnswerQuestions = 0;

    ui.startQuestion.click();
    ui.scoreBoxMain.classList.remove("active");
    ui.btnNext.classList.remove("showNext");
    ui.resultMain.classList.add("none");

});

function startTime(time) {
    timerChange = setInterval(timer, 1000);

    function timer() {
        console.log(time);
        ui.timeSecond.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(timerChange);
            ui.timeText.textContent = "time's up";
            ui.disableAllOption();

            quiz.questionIndex += 1;
            ui.btnNext.classList.add("showNext");
        }
    }
}

function startTimeSlider() {

    let widthAdd = 0;

    timerSlider = setInterval(timer, 20.9);

    function timer() {
        widthAdd += 1;

        ui.timeSlider.style.width = widthAdd + "px";

        if(widthAdd > 540) {
            clearInterval(timerSlider);
        }
    }
}

function savedNames() {
    localStorage.setItem("saveName", JSON.stringify(quiz.namesArray));
}

document.addEventListener("DOMContentLoaded", function() {
    loadNames();
});