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
//  function playQuiz() {
//     var buttons = document.querySelector.all()
//  }


// timer starts at 2 minutes
const startingMinutes = 2;
// multiply by 60 (seconds)
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

// when start button clicked, hide start page, show first question
startBtn.addEventListener("click", function(event) {
var startScreen = document.querySelector(".start");
startScreen.classList.add("hide");
startScreen.classList.remove("show");

questions.classList.add("show");
questions.classList.remove("hide");

// timer
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

 next.addEventListener("click", function(){getQuestion()});


    console.log("here");
  
 
  function getQuestion() { 
    for(var i = 0; i < 2; i++);
     {
        allQuestions[currentQuestion + 1].classList.remove('.hide');
        allQuestions[currentQuestion + 1].classList.add('.show');
        console.log(currentQuestion);
     }
  
    allQuestions[currentQuestion].classList.remove('.show');
    allQuestions[currentQuestion].classList.add('.hide');
  
    playQuiz(currentQuestion[i++]);
    
    
    console.log("try");
};
  

// function getQuestion() {
//     console.log(currentQuestion);
  
//     if (currentQuestion >= 0) {
//       allQuestions[currentQuestion + 1].setAttribute("class", "show");
//     }
//     console.log(allQuestions[currentQuestion]);
  
//     allQuestions[currentQuestion].setAttribute("class", "hide");
  
//     playQuiz();
//   }

  function playQuiz() {
    //document.querySelector(`questions.${currentQuestion - 1}-answers`).addEventListener('click', function(event) {
         document.querySelector(".answers").addEventListener("click", function(event){

      var btnClicked = event.target;
  
      console.log(btnClicked);
        });
      // check if question is correct or now
  
      // manage timer
  
      currentQuestion++;
  
      };
  

// function getQuestion() {
//     for(var i = 0; i < 3; i++);
// }



  
  function playQuiz() {
   currentQuestion++;
   getQuestion();

   if (currentQuestion < allQuestions.length) {
    getQuestion();
  } else {
    questions.classList.add('hide');
    questions.classList.remove('show');

    var endScreen = document.querySelector('.end');
    endScreen.classList.add('show');
    endScreen.classList.remove('hide');
}
  }

