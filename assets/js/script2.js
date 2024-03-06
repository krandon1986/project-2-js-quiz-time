//Questions and Answers Objects
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Lyon", correct: false },
            { text: "Monte Carlo", correct: false },
        ],
    },
    {
        question: "In the Metal Gear Solid Series, which of the Snakes is not in the game?",
        answers: [
            { text: "Liquid", correct: false },
            { text: "Solidus", correct: false },
            { text: "Steam", correct: true },
            { text: "Solid", correct: false },
        ],
    },
    {
        question: "What is the starting and ending year of World War II?",
        answers: [
            { text: "1920 - 1926", correct: false },
            { text: "1950 - 1956", correct: false },
            { text: "1931 - 1937", correct: false },
            { text: "1939 - 1945", correct: true },
        ],
    },
    {
        question: "What is the official name for Big Ben?",
        answers: [
            { text: "Victoria Tower", correct: false },
            { text: "Charles Tower", correct: false },
            { text: "Elizabeth Tower", correct: true },
            { text: "Philip Tower", correct: false },
        ],
    },
    {
        question: "What is the largest planet in the Solar System?",
        answers: [
            { text: "Neptune", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false },
        ],
    },
    {
        question: "What year was the Empire State Building built?",
        answers: [
            { text: "1931", correct: true },
            { text: "1924", correct: false },
            { text: "1914", correct: false },
            { text: "1940", correct: false },
        ],
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Saltwater Crocodile", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Common Ostrich", correct: false },
        ],
    },
    {
        question: "Where did the Titanic sink?",
        answers: [
            { text: "North Pacific Ocean", correct: false },
            { text: "North Atlantic Ocean", correct: true },
            { text: "South Pacific Ocean", correct: false },
            { text: "South Atlantic Ocean", correct: false },
        ],
    },
    {
        question: "What year was YouTube created?",
        answers: [
            { text: "2000", correct: false },
            { text: "2010", correct: false },
            { text: "2015", correct: false },
            { text: "2005", correct: true },
        ],
    },
    {
        question: "Where did the Black Death orignated from?",
        answers: [
            { text: "England", correct: false },
            { text: "China", correct: true },
            { text: "Spain", correct: false },
            { text: "Italy", correct: false },
        ],
    },
    {
        question: "Where did the Great Fire of London started from?",
        answers: [
            { text: "Pudding Lane", correct: true },
            { text: "Baker Street", correct: false },
            { text: "Savile Row", correct: false },
            { text: "Oxford Street", correct: false },
        ],
    },
    {
        question: "How many years did the Stone Age last for?",
        answers: [
            { text: "1.2 Million", correct: false },
            { text: "2.3 Million", correct: false },
            { text: "3.4 Million", correct: true },
            { text: "4.5 Million", correct: false },
        ],
    },
    {
        question: "When was the European Union formed?",
        answers: [
            { text: "1963", correct: false },
            { text: "1973", correct: false },
            { text: "1983", correct: false },
            { text: "1993", correct: true },
        ],
    },
];

//Initial Reference
const message = document.getElementById("user-message");
const questionDisplay = document.querySelector(".questions");
const controls = document.querySelector(".controls-area");
const startBtn = document.getElementById("start");
const answerBtn = document.getElementById("answers");
const displayResult = document.getElementById("result");
const word = document.getElementById("word");
const scoreWon = document.getElementById("score1");
const scoreLoss = document.getElementById("score2");
let randomAnswer = "";
let randomQuestion = "";
let winCount = 0;
let lossCount = 0;
let victory = 0;
let lose = 0;

//Generate random question values
const generateRandomQuestion = (array) => Math.floor(Math.random() * array.length);

//Block all the buttons
const blocker = () => {
    stopGame();
};

//Generate Questions Function
const generateQuestion = (currentQuestionIndex) => {
    answerBtn.classList.remove("hide");
    questionDisplay.innerText = "";
    randomQuestion = questions[currentQuestionIndex];
    questionDisplay.innerHTML = `<div id="questionShown">
    <span>Question:</span><br>${randomQuestion.question}</div>`;

    //Display each element as span
    questionDisplay.innerHTML += `<div id='chancesCount'>Chances Left: ${lossCount}</div>`;
};

//Initial Game Function
const init = () => {
    winCount = 1;
    lossCount = 2;
    randomAnswer = "";
    word.innerText = "";
    randomQuestion = "";
    message.innerText = "";
    questionDisplay.innerHTML = "";
    answerBtn.classList.add("hide");
    answerBtn.innerHTML = "";

    let currentQuestionIndex = generateRandomQuestion(questions);
    generateQuestion(currentQuestionIndex);

    //Displaying the answers on the buttons
    let currentQuestion = questions[currentQuestionIndex];
    let randomAnswerObj = questions[currentQuestionIndex].answers.find((answer) => {
        return answer.correct === true;
    });
    randomAnswer = randomAnswerObj.text;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", pickAnswer);
    });
};

//Put the random answers to the buttons
function pickAnswer(e) {
    const selectedButton = e.target;
    const correctAns = selectedButton.dataset.correct === "true";
    if (correctAns) {
        correctAnswerHandle(selectedButton);
    } else {
        wrongAnswerHandle(selectedButton);
    }
}

function correctAnswerHandle(selectedButton) {
    selectedButton.classList.add("correct");
    winCount += 1;

    //If winCount equal the correct answer
    if ((winCount = 1)) {
        victory++;
        displayResult.innerHTML = "You've Won. Congratulation";
        word.innerHTML = `${randomAnswer}`;
        scoreWon.innerHTML = `Wins <span style="color:green; font-weight=bold">${victory}</span>`;
        startBtn.innerText = "Restart";

        //Block all buttons
        blocker();
    }
}

function wrongAnswerHandle(selectedButton) {
    selectedButton.classList.add("incorrect");
    lossCount -= 1;
    document.getElementById("chancesCount").innerText = `Chances Left: ${lossCount}`;
    message.innerText = `Incorrect Answer`;
    message.style.color = "#ff0000";

    //If the lossCount equal zero
    if (lossCount == 0) {
        lose++;
        word.innerHTML = `The correct answer was: <span>${randomAnswer}</span>`;
        displayResult.innerHTML = "Game Over";
        scoreLoss.innerHTML = `Losses: <span style="color:red; font-weight=bold">${lose}</span>`;

        blocker();
    }
}
//Start the Game
startBtn.addEventListener("click", () => {
    controls.classList.add("hide");
    init();
});

//Stop the Game
const stopGame = () => {
    controls.classList.remove("hide");
};

window.onload = () => {
    init();
};