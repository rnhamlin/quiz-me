// elements--need to tie to html so it will generate correctly.
const startnow = document.getElementById("startnow");
const timer = document.getElementById("timer");
const option1 = document.getElementById("One");
const option2 = document.getElementById("Two");
const option3 = document.getElementById("Three");
let currentTime=document.querySelector("#currentTime");
let questionSection = document.querySelector("#questionsDiv")
let currentQuestion = document.getElementById("currentquestion")


// questions for the quiz

let question = [
  {
    question: "How do you add a comment in Javascript?",
    option1: "// comment",
    option2: "~~ comment",
    option3: "<!--comment-->",
    correct: "// comment",
  },
  {
    question: "Is Javascript the same as Java?",
    option1: "Yes",
    option2: "What's coffee got to do with it?",
    option3: "No",
    correct: "No",
  },
  {
    question:
      "How do you make something happen when a user clicks their mouse?",
    option1: "Add an event listener",
    option2: "Draw an arrow",
    option3: "Write '===='",
    correct: "1",
  },
  {
    question:
      "Where do you add the link to your Javascript file in your HTML file?",
    option1: "In the footer",
    option2: "In the header or the body",
    option3: "In the header",
    correct: "2",
  }
];

// variables
let score=0;
let questionIndex=0;

// functions to render questions - call questions

function askQuestion(){
  let q = question[questionIndex];
  currentQuestion.innerHTML = "<p>" = q.question + "</p>";
  option1.innerHTML = q.option1;
  option2.innerHTML = q.option2;
  option3.innerHTML = q.option3;
}



// function to start quiz

function startQuiz() {
  startQuiz.style.display = "none";
  askQuestion();
  countdown();
}

// function to show progress
function tick() {
        secondsLeft--;
      currentTime.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
          currentTime.textContent = "Time's Up! Game over!";
      }
}


// timer/countdown function, I think
function countdown() {
  var clock = setInterval(tick, 1000);
};


// display the user's answers

// what if the answer is right?

// what if the answer is wrong?


// event listeners go at the bottom
//need second event listener for submit answer button, which connects to countdown/tick

startnow.addEventListener("click",startQuiz)

