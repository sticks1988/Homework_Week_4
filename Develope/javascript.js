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

function generateQuizQuestion(){
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

function startQuiz(){
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    testSection.style.display = "block";
}
function showScore(){
    testSection.style.display = "none"
    doneDiv.style.display = "flex";
    clearInterval(timerInterval);
    scoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

submitScoreBtn.addEventListener("click", function highscore(){

    if(scoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = scoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        scoreContainer.style.display = "flex";
        scoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

function generateHighscores(){
    scoreDisplayName.innerHTML = "";
    scoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        scoreDisplayName.appendChild(newNameSpan);
        scoreDisplayScore.appendChild(newScoreSpan);
    }
}

function showHighscore(){
    scoreContainer.style.display = "flex";
    scoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

function clearScore(){
    window.localStorage.clear();
    scoreDisplayName.textContent = "";
    scoreDisplayScore.textContent = "";
}

function replayQuiz(){
    testSection.style.display = "none"
    doneDiv.style.display = "none";
    scoreContainer.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
}

// Answer Checker 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        timeLeft -=5;
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
    }else{
        showScore();
    }
}


startQuizButton.addEventListener("click", startQuiz);