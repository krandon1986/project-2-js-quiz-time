//Questions and Answers Objects
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Lyon", correct: false },
            { text: "Monte Carlo", correct: false },
        ]
    },
    {
        question: "In the Metal Gear Solid Series, which of the Snakes is not in the game?",
        answers: [
            { text: "Liquid", correct: false },
            { text: "Solidus", correct: false },
            { text: "Steam", correct: true },
            { text: "Solid", correct: false },
        ]
    },
    {
        question: "What is the starting and ending year of World War II?",
        answers: [
            { text: "1920 - 1926", correct: false },
            { text: "1950 - 1956", correct: false },
            { text: "1931 - 1937", correct: false },
            { text: "1939 - 1945", correct: true },
        ]
    },
    {
        question: "What is the official name for Big Ben?",
        answers: [
            { text: "Victoria Tower", correct: false },
            { text: "Charles Tower", correct: false },
            { text: "Elizabeth Tower", correct: true },
            { text: "Philip Tower", correct: false },
        ]
    },
    {
        question: "What is the largest planet in the Solar System?",
        answers: [
            { text: "Neptune", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false },
        ]
    },
    {
        question: "What year was the Empire State Building built?",
        answers: [
            { text: "1931", correct: true },
            { text: "1924", correct: false },
            { text: "1914", correct: false },
            { text: "1940", correct: false },
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Saltwater Crocodile", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Common Ostrich", correct: false },
        ]
    },
    {
        question: "Where did the Titanic sink?",
        answers: [
            { text: "North Pacific Ocean", correct: false },
            { text: "North Atlantic Ocean", correct: true },
            { text: "South Pacific Ocean", correct: false },
            { text: "South Atlantic Ocean", correct: false },
        ]
    },
    {
        question: "What year was YouTube created?",
        answers: [
            { text: "2000", correct: false },
            { text: "2010", correct: false },
            { text: "2015", correct: false },
            { text: "2005", correct: true },
        ]
    },
    {
        question: "Where did the Black Death orignated from?",
        answers: [
            { text: "England", correct: false },
            { text: "China", correct: true },
            { text: "Spain", correct: false },
            { text: "Italy", correct: false },
        ]
    },
    {
        question: "Where did the Great Fire of London started from?",
        answers: [
            { text: "Puddling Lane", correct: true },
            { text: "Baker Street", correct: false },
            { text: "Savile Row", correct: false },
            { text: "Oxford Street", correct: false },
        ]
    },
    {
        question: "How many years did the Stone Age last for?",
        answers: [
            { text: "1.2 Million", correct: false },
            { text: "2.3 Million", correct: false },
            { text: "3.4 Million", correct: true },
            { text: "4.5 Million", correct: false },
        ]
    },
    {
        question: "When was the European Union formed?",
        answers: [
            { text: "1963", correct: false },
            { text: "1973", correct: false },
            { text: "1983", correct: false },
            { text: "1993", correct: true },
        ]
    }
];

//Initial Reference
const message = document.getElementById("message");
const questionDisplay = document.querySelector(".questions");
const controls = document.querySelector(".controls-area");
const startBtn = document.getElementById("start");
const answerBtn = document.getElementById("answers");
const chance = document.getElementById("lives")
const resultDisplay = document.getElementById("result");
const word = document.getElementById("word");
const quiz = Object.keys(questions);
const scoreWon = document.getElementById("score1");
const scoreLoss = document.getElementById("score2");
let randomAnswer = "";
let randomQuestion = "";
let lossCount = 0;
let victory = 0;
let lose = 0;

//Generate random question values
const generateRandomquestion = (array) => Math.floor(Math.random() *  array.length);

//Block all the buttons
const blocker = () => {
    stopGame();
};

//Generate Questions Function
const generateQuestion = () => {
    answerBtn.classList.remove("hide");
    randomAnswer = quiz[generateRandomquestion(quiz)];
    randomQuestion = questions[randomAnswer];
    questionDisplay.innerHTML = `<div id="questionShown">
    <span>Question:</span><br>${randomQuestion}</div>`

    //Display each element as span
    chance.innerHTML += `<div id='chancesCount'>Chance Left: ${lossCount}</div>`;
};

//Initial Game Function
const init = () => {
    lossCount = 2;
    randomAnswer = "";
    word.innerText = "";
    randomQuestion = "";
    message.innerText = "";
    answerBtn.classList.add("hide");
    answerBtn.innerHTML = "";
    generateQuestion();

}