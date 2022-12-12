// elements--need to tie to html so it will generate correctly.
const startnow = document.getElementById("startnow");
const timer = document.getElementById("timer");
const option1 = document.getElementById("One");
const option2 = document.getElementById("Two");
const option3 = document.getElementById("Three");
let currentTime = document.querySelector("#currentTime");
let questionSection = document.querySelector("#questionsDiv");
let currentQuestion = document.getElementById("currentquestion");
var submitArea = document.querySelector("#submit-area");
var selectAnswer = document.querySelector("#options");

// questions for the quiz; an array with 1 question per indice

let question = [
  {
    question: "1. How do you add a comment in Javascript?",
    option1: "A. // comment",
    option2: "B. ~~ comment",
    option3: "C. <!--comment-->",
    correct: "A. // comment",
  },
  {
    question: "2. Is Javascript the same as Java?",
    option1: "A. Yes",
    option2: "B. What's coffee got to do with it?",
    option3: "C. No",
    correct: "D. No",
  },
  {
    question:
      "3. How do you make something happen when a user clicks their mouse?",
    option1: "A. Add an event listener",
    option2: "B. Draw an arrow",
    option3: "C. Write '===='",
    correct: "1",
  },
  {
    question:
      "4. Where do you add the link to your Javascript file in your HTML file?",
    option1: "A. In the footer",
    option2: "B. In the header or the body",
    option3: "C. In the header",
    correct: "2",
  },
];

// variables
let score = 0;
let questionIndex = 0;

// functions to render questions - call questions

function askQuestion() {
  let q = question[questionIndex];
  currentQuestion.innerHTML = "<p>" + q.question + "</p>";
  option1.textContent = q.option1;
  option2.textContent = q.option2;
  option3.textContent = q.option3;
}

// function to start quiz

function startQuiz() {
  startnow.style.display = "none";
  askQuestion();
  // countdown();
}

// timer/countdown function, I think
function countdown() {
  var timer = setInterval(tick, 1000);

  // function to show progress
  function tick() {
    countdown = setInterval(timer);
    currentTime.textContent = "Time: " + secondsLeft;

    // countdown is over
    if (secondsLeft <= 0) {
      clearInterval(holdInterval);
      allDone();
      currentTime.textContent = "Time's Up! Game over!";
    }
  }
}
// time calculations for minutes and seconds
//var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// function to submit answer to quiz
// what if the answer is right?
// what if the answer is wrong?
var checkAnswer = function (event) {
  console.log(event.target);
  if (event.target.matches(".option")) {
    //console.log(question[questionIndex].correct, event.target.textContent);
    if (question[questionIndex].correct === event.target.textContent[4]) {
      console.log("correct");
    } else {
      console.log("not correct");
    }
    questionIndex++;
    askQuestion();
    // var submitAnswer = event.target.
  }
};

// display the result in an element with id="clock"

//document.getElementById("clock").innerHTML = minutes + "min" + seconds + "sec";

// need function to subtract time from the timer for wrong answers (idk like 10 seconds?)

// event listeners go at the bottom
//need second event listener for submit answer button, which connects to countdown/tick

//Store the high scores in local storage, display them from local storage via "View High Scores" button

startnow.addEventListener("click", startQuiz);
selectAnswer.addEventListener("click", checkAnswer);
