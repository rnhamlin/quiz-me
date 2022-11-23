const { mapOptionFieldNames } = require("sequelize/types/utils");

// elements--need to tie to html so it will generate correctly.
const startnow = document.getElementById("startnow");
const timer = document.getElementById("timer");
var question = document.getElementById("question");
const option1 = document.getElementById("One");
const option2 = document.getElementById("Two");
const option3 = document.getElementById("Three");
const progress = document.getElementById("progress");

// questions for the quiz

let question = [
  {
    question: "How do you add a comment in Javascript?",
    option1: "",
    option2: "",
    option3: "",
    correct: "1",
  },
  {
    question: "Is Javascript the same as Java?",
    option1: "",
    option2: "",
    option3: "",
    correct: "3",
  },
  {
    question:
      "How do you make something happen when a user clicks their mouse?",
    option1: "",
    option2: "",
    option3: "",
    correct: "1",
  },
  {
    question:
      "Where do you add the link to your Javascript file in your HTML file?",
    option1: "",
    option2: "",
    option3: "",
    correct: "2",
  },
];

// variables?

// functions to render questions - call questions

function askQuestion(){
  let q = questions[currentques];
  question.innerHTML = "<p>" = q.question + "</p>";
  option1.innerHTML = q.option1;
  option2.innerHTML = q.option2;
  option3.innerHTML = q.option3;
}

// function to start quiz

function startQuiz() {
  startQuiz.style.display = "none";
  renderQuestion();
  renderProgress();
  renderTimer();
  TIMER = setInterval(renderTimer, 2000);
}

// function to show progress

// timer/countdown function, I think

// display the user's answers

// what if the answer is right?

// what if the answer is wrong?
