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

function getQuestion() {
    console.log(currentQuestion);
  
    if (currentQuestion > 0) {
      allQuestions[currentQuestion - 1].setAttribute("class", "hide");
    }
    console.log(allQuestions[currentQuestion]);
  
    allQuestions[currentQuestion].setAttribute("class", "show");
  
    playQuiz();
  }
  
  function playQuiz() {
    document.querySelector(`q.${currentQuestion + 1}-answers`).addEventListener('click', function(event) {
      var btnClicked = event.target;
  
      console.log(btnClicked);
  
      // check if question is correct or now
  
      // manage timer
  
      currentQuestion++;
  
      if (currentQuestion < allQuestions.length) {
        getQuestion();
      } else {
        questions.classList.add('hide');
        questions.classList.remove('show');
    
        var endScreen = document.querySelector('.end');
        endScreen.classList.add('show');
        endScreen.classList.remove('hide');
      }
    })
  };

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

// function getQuestion() {
//     for(var i = 0; i < 3; i++);
// }

// function getQuestion() { 
//     if (currentQuestion > 0) {
//         allQuestions[currentQuestion - 1].classList.remove('show');
//         allQuestions[currentQuestion - 1].classList.add('remove');
//       }
  
//     allQuestions[currentQuestion].classList.remove('hide');
//     allQuestions[currentQuestion].classList.add('show');
  
//     playQuiz(currentQuestion[i++]);
  
//     currentQuestion++;
//     getQuestion.addEventListener
//   }
  
//   function playQuiz() {
//    currentQuestion++;
//    getQuestion();
//   }