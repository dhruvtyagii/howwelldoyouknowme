const { question } = require('readline-sync');
let readlineSync = require('readline-sync');

console.log('Welcome to Quiz! Are You Excited?');
console.log('How much do you know me?');
console.log();

var userName = readlineSync.question("May I know your Name?");
console.log("welcome  " + userName);

let score = 0;

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer) {
    console.log("Yeah! you got it correct");
    console.log();
    score += 1;
  }
  else {
    console.log('Sorry! You loose :-( ');
    console.log();
    score = score - 1;
  }
}
console.log('');
console.log('Ready to Play this Exciting Game? ');
console.log('');
console.log('Your current score is ' + score);
console.log('');
console.log('Remeber there is -1 for every wrong answer ');
console.log('');

let questions = [
  {
    question: "How old I(Abdul) am?",
    answer: "22"
  },
  {
    question: "where do I(Abdul) live?",
    answer: "BINA"
  },
  {
    question: "What is my favourite food ?",
    answer: "PIZZA"
  },
  {
    question: "What is my favourite sport ?",
    answer: "BADMINTON"
  },
  {
    question: "what is my favorite color ?",
    answer: "RED"
  },
  {
    question: "which brand mobile I use ?",
    answer: "ONEPLUS"
  }
];

//LOOP aorund the above object

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log('Game Over!! Here is your Score .');
console.log('Yayyyy! You scored : ' + score);