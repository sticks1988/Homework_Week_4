var questionsEl = document.getElementById("questions");
var finalScoreEl = document.getElementById("finalScore");
var doneDiv = document.getElementById("game-done");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var testSection = document.getElementById("test");
var outcomeEl = document.getElementById("result");
var quizTimer = document.getElementById("timer");
var scoreDiv = document.getElementById("scorePage");
var scoreInputName = document.getElementById("name");
var scoreContainer = document.getElementById("scoreContainer");
var scoreDisplayName = document.getElementById("highscore-name");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var scoreDisplayScore = document.getElementById("score-score");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("start");

var quizQuestions = [{
    question: "What language styles a page for HTML?",
    choiceA: "Javascript",
    choiceB: "CSS",
    choiceC: "HTML Syntax",
    choiceD: "Cool Whip",
    correctAnswer: "b"},
  {
    question: "Where can we see errors in our code when on a website?",
    choiceA: "While inspecting page",
    choiceB: "By checking our code off the page",
    choiceC: "Phoning a friend",
    choiceD: "In safe mode",
    correctAnswer: "a"},
   {
    question: "What is used to create functions?",
    choiceA: "JavaScript",
    choiceB: "CSS",
    choiceC: "HTML",
    choiceD: "Bootstrap",
    correctAnswer: "a"},
    {
    question: "What is it called to change elements in a DOM tree?",
    choiceA: "maniputlation",
    choiceB: "walking",
    choiceC: "running",
    choiceD: "sprinting",
    correctAnswer: "a"},
    {
    question: "How to tell if your CSS code is incorrect?",
    choiceA: "The page simply will not display correctly",
    choiceB: "It will always tell you why it isn't working",
    choiceC: "By reloading the page over and over until it works",
    choiceD: "You can't",
    correctAnswer: "a"},  
    {
    question: "What does WWW stand for?",
    choiceA: "World When Winter",
    choiceB: "When We're Wet",
    choiceC: "Well We Will",
    choiceD: "World Wide Web",
    correctAnswer: "d"},
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "class",
    choiceB: "src",
    choiceC: "href",
    choiceD: "index",
    correctAnswer: "b"},
        
    
    ];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;