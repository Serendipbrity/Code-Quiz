// switch cases for multiple choices?
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
var savePage = document.getElementById("save");
var allQuestions = [questionOne, questionTwo, questionThree, savePage];
console.log(allQuestions);
var currentQuestion = 0;
var next1 = document.getElementById("next-1");
var next2 = document.getElementById("next-2");
var next3 = document.getElementById("next-3");


// when start button clicked, hide start page, show first question
startBtn.addEventListener("click", function(event) {
var startScreen = document.querySelector(".start");
startScreen.classList.add("hide");
startScreen.classList.remove("show");

questions.classList.add("show");
questions.classList.remove("hide");

});
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
       
    };

// next button click to get next question
 next1.addEventListener("click", function(){getQuestion()});
 next2.addEventListener("click", function(){getQuestion()});
 next3.addEventListener("click", function(){getQuestion()});

  
 // show next question, hide last
  function getQuestion() { 
    for(var i = 0; i <= allQuestions.length; i++)
    
     {// hide current question
      allQuestions[currentQuestion].classList.remove('show');
      allQuestions[currentQuestion].classList.add('hide');
     
     }
  { // show next question
     allQuestions[currentQuestion + 1].classList.remove('hide');
     allQuestions[currentQuestion + 1].classList.add('show');

     console.log(currentQuestion);
  
      currentQuestion ++;
}
  };
// when I click a correct answer, add 10 seconds to timer
// var correct = document.getElementsByClassName("true").addEventListener('click', (updateCountdown() + 10));
// console.log("correct");
// // when I click a wrong answer, subtract 10 seconds from timer
// var wrong = document.getElementsByClassName("false").addEventListener('click', (updateCountdown() - 10));
// console.log("wrong");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
var a6 = document.getElementById("a6");
var a7 = document.getElementById("a7");
var a8 = document.getElementById("a8");
var a9 = document.getElementById("a9");
var a10 = document.getElementById("a10");

var answers = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]; 
 function checkAnswer() {
     for(var i = 0; i < answers.length; i++) { 
       if (answers[i].value="false") {
         updateCountdown() - 10
       }
       else {
         updateCountdown() + 10
       }
 };
 answers.addEventListener("click",checkAnswer());
};

 //{
//   console.log("correct");
// };
//wrong.addEventListener('click', (updateCountdown() - 10)); // {
//   console.log("wrong");
// }
  
// var correctAnswers = document.value("true");
// console.log(correctAnswers);

  function playQuiz() {
    //document.querySelector(`questions.${currentQuestion - 1}-answers`).addEventListener('click', function(event) {
         document.getElementsByClassName("answers").addEventListener("click", function(event){

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
      // check if question is correct or not
  
      // manage timer
  
      // currentQuestion++;
  
      };

      const initials = document.querySelector("#initials");
      const saveBtn = document.querySelector("#saveBtn");
      const form = document.querySelector("#save");

      form.addEventListener("submit", function(e) {
        e.preventDefault();
      });
      // when i click the save button, save initials to local storage
      saveBtn.addEventListener('click', function() {
        localStorage.setItem('text', initials.value);
        console.log(initials.value);
        //reset form box to empy
        form.reset();
      });

      const highScore = document.querySelector("#highscore");
      const score = document.querySelector('.score');
      // click highscore button to retrieve scores and initials
      highScore.addEventListener('click', function() {
        console.log("highscore clicked");
        // add saved initials to score form
         score.append(localStorage.getItem('text', initials.value));
         score.classList.remove('hide');
         score.classList.remove('show');
      });

      
// let inputs = [];
//     function saveInput() {
//       let initial = (document.getElementById("initials").value);
//         inputs.push(initial);
//         console.log(inputs);//localStorage
//     };

  
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

// function Points () {
//    if (countdownEl > 0) {
//       if ()
//    }
// }
// let questions = [
//   {
//       numb: 1,
//       question: "What are arrays enclosed in?",
//       answer: "[]",
//       options: [
//           "()",
//           "[]",
//           "''",
//           "{}"
//       ]
//   },
//   {
//       numb: 2,
//       question: "What is nNOT an example of a primitive data type?",
//       answer: "Condition",
//       options: [
//           "Boolean",
//           "String",
//           "Condition",
//           "Undefined"
//       ]
//   },
//   {
//       numb: 3,
//       question: "True of False: reset() method only only works for the form element",
//       answer: "True",
//       options: [
//           "True",
//           "False"
//       ]
//   },
// ];
