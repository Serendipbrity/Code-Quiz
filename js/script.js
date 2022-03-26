// switch cases for multiple choices
// view high score link/dropdown on left top
// right or wrong after answer (affects time)
// high score and time left in header (or hero)
// event listeners single click 
// css hover change color
var startBtn = document.getElementById("startBtn");
let questions = document.querySelector(".questions");
var questionOne = document.querySelector("#q1");
var questionTwo = document.querySelector("#q2");
var questionThree = document.querySelector("#q3");
var allQuestions = [questionOne, questionTwo, questionThree];
console.log(allQuestions);
var currentQuestion = 0;
//  function playQuiz() {
//     var buttons = document.querySelector.all()
//  }

// timer starts at 2 minutes
const startingMinutes = 2;
// multiply by 60 (seconds)
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');


startBtn.addEventListener("click", function(event) {
var startScreen = document.querySelector(".start");
startScreen.classList.add("hide");
startScreen.classList.remove("show");

questions.classList.add("show");
questions.classList.remove("hide");

    setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = minutes + ":" + seconds;
        time--; 
        time = time < 0 ? 0: time;
    }

    getQuestion();
    console.log("button was clicked");
});

// function getQuestion() {
//     for(var i = 0; i < 3; i++);
// }

function getQuestion() { 
    if (currentQuestion > 0) {
        allQuestions[currentQuestion - 1].classList.remove('show');
        allQuestions[currentQuestion - 1].classList.add('hide');
      }
  
    allQuestions[currentQuestion].classList.remove('hide');
    allQuestions[currentQuestion].classList.add('show');
  
    document.querySelector('.q1-choice').addEventListener('click', playQuiz);
  }
  
  function playQuiz() {
   currentQuestion++;
   getQuestion();
  }