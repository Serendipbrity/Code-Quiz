// switch cases for multiple choices
// view high score link/dropdown on left top
// right or wrong after answer (affects time)
// high score and time left in header (or hero)
// event listeners single click 
// css hover change color
var startBtn = document.getElementById("startBtn");
let questions = document.querySelector(".questions");
var questionOne = document.getElementById("q1");
var questionTwo = document.getElementById("q2");
var questionThree = document.getElementById("q3");
var allQuestions = [questionOne, questionTwo, questionThree];
console.log(allQuestions);
var currentQuestion = 0;
var next = document.getElementById("next");


// when start button clicked, hide start page, show first question
startBtn.addEventListener("click", function(event) {
var startScreen = document.querySelector(".start");
startScreen.classList.add("hide");
startScreen.classList.remove("show");

questions.classList.add("show");
questions.classList.remove("hide");



// timer starts at 2 minutes
const startingMinutes = 2;
// multiply by 60 (seconds)
let time = startingMinutes * 60;
// timer
const countdownEl = document.getElementById('countdown');
 setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = minutes + ":" + seconds;
        time--; 
        time = time < 0 ? 0: time;
    }
});
// next button click to get next question
 next.addEventListener("click", function(){getQuestion()});


    console.log("here");
  
 // show next question, hide last
  function getQuestion() { 
    for(var i = 0; i < 3; i++);
    
     {
      allQuestions[currentQuestion].classList.remove('show');
      allQuestions[currentQuestion].classList.add('hide');
     
     }
  
     currentQuestion = allQuestions[currentQuestion + 1].classList.remove('hide');
     currentQuestion = allQuestions[currentQuestion + 1].classList.add('show');
     console.log(currentQuestion);
  
     currentQuestion = i;
    
    
    console.log("try");
};
  
var correctAnswers = document.value("true");
console.log(correctAnswers);

  function playQuiz() {
    //document.querySelector(`questions.${currentQuestion - 1}-answers`).addEventListener('click', function(event) {
         document.querySelector(".answers").addEventListener("click", function(event){

      var btnClicked = event.target;

      // if (currentQuestion < allQuestions.length) {
      //   currentQuestion++;
      //       // getQuestion();
      //     } else {
      //       questions.classList.add('hide');
      //       questions.classList.remove('show');
      //     }
      console.log(btnClicked);
        });
      // check if question is correct or now
  
      // manage timer
  
      // currentQuestion++;
  
      };

  
//   function playQuiz() {
//    currentQuestion++;
//    getQuestion();

//    if (currentQuestion < allQuestions.length) {
//     getQuestion();
//   } else {
//     questions.classList.add('hide');
//     questions.classList.remove('show');

//     var endScreen = document.querySelector('.end');
//     endScreen.classList.add('show');
//     endScreen.classList.remove('hide');
// }
//   }

