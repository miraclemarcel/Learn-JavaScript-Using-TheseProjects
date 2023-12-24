const quizGame = [
  {
    question: "Is this boolean?",
    option: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    question: "we are not learning right now, are we?",
    option: ["Yes", "No"],
    correctAnswer: "No",
  },
  {
    question: "is obi a boy?",
    option: ["A; maybe", "B; Yes", "C; No"],
    correctAnswer: "B; Yes",
  },
  {
    question: "there 36 states in nigeria",
    option: ["A; true", "B; false", "C; maybe"],
    correctAnswer: "A; true",
  },
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
  optionsContainer.innerHTML = "";

  currentQuizData.option.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}
// =======next button=======
function nextQuestion() {
  if (currentQuestion  <quizGame.length - 1) {
    // === operators====
    currentQuestion++; // "++" is used for the increment
    loadQuestions();
  } else {
    displayresult();
  }
}

// ===== previousQuestion=========

function previousQuestion() {
  if (currentQuestion > 0 ) {
    currentQuestion--;  // "--" is used for the decrement
    loadQuestions();
  }
}


function checkAnswer(userAnswer) {
  const currentQuizData = quizGame[currentQuestion];
  if (userAnswer === currentQuizData.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizGame.length) {
    loadQuestions();
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
