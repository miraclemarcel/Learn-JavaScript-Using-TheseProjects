const quizGame = [
    {
        question: "Is this boolean?",
        option: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "we are not learning right now, are we?",
        option: ["Yes", "No"],
        correctAnswer: "No"
    }
];

let currentQuestion = 0;
let score = 0;


const questionElement = document.getElementById("questions");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");

function loadQuestions() {
    const currentQuizData = quizGame[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML="";

    currentQuizData.option.forEach((option) => {
        const button = document.createElement("button")
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => 
        checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}


function checkAnswer (userAnswer) {
    const currentQuizData = quizGame[currentQuestion];
    if (userAnswer === currentQuizData.correctAnswer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizGame.length ){
        loadQuestions()
    } else {
        showResult();
    }
}

function showResult() {
    resultElement.innerText = `Your score is: ${score} out of ${quizGame.length}`;

}

submitButton.addEventListener("click", loadQuestions);

// initial questions load =========
loadQuestions();