// Shuffle function to randomize questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "who is my fav avenger?",
        options: ["iron man", "vision", "hottie wanda", "black widow"],
        correctAnswer: "iron man"
    },
    {
        question: "How many balls you have?",
        options: ["1", "3", "2", "0"],
        correctAnswer: "0"
    },
    // Add more questions 
];

let currentQuestionIndex = 0;
let score = 0;
let quizEnded = false;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");

// Function to load question and options
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <div id="options-container">
            ${shuffleArray(currentQuestion.options).map(option => `<button class="option">${option}</button>`).join('')}
        </div>
    `;
    
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            checkAnswer(button.textContent);
        });
    });
}

// Function to check the answer
function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        resultContainer.innerHTML = "Correct!";
        score++;
    } else {
        resultContainer.innerHTML = `Wrong! The correct answer is ${correctAnswer}.`;
    }

    // next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Load next question
        loadQuestion();
    } else {
        // Quiz is finished
        quizEnded = true;
        questionContainer.innerHTML = "<h2>Quiz Completed</h2>";
        resultContainer.innerHTML = `Your Score: ${score} out of ${questions.length}.`;
    }
}

// Start the quiz 
shuffleArray(questions);
loadQuestion();
