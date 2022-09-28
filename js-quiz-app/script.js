const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const data = quizData[currentQuiz];
  questionEl.innerText = data.question;
  a_text.innerText = data.a;
  b_text.innerText = data.b;
  c_text.innerText = data.c;
  d_text.innerText = data.d;
}

function deselectAnswers() {
  answerEls.forEach((answer) => {
    answer.checked = false;
  });
}

function getSelected() {}

submitBtn.addEventListener("click", () => {
  answerEls.forEach((answer) => {
    if (answer.checked && answer.id == quizData[currentQuiz].correct) {
      score++;
    }
  });

  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    document.querySelector(
      ".quiz-header"
    ).innerHTML = `Your score is: ${score}`;

    submitBtn.style.display = "none";

    setTimeout(() => {
      document.location.reload();
    }, 10000);
  }
});
