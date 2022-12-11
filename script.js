const quizData = [
  {
    question: "How old are you?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },

  {
    question: "What Programming language do you use ?",
    a: "PHP",
    b: "Javascript",
    c: "C#",
    d: "Java",
    correct: "a",
  },

  {
    question: "Who is the president of Kenya?",
    a: "Ruto",
    b: "Raila",
    c: "Kipsang",
    d: "Mudavadi",
    correct: "a",
  },

  {
    question: "Which county is Mount Kenya most likely to be in to ?",
    a: "Kerio",
    b: "Kandara",
    c: "Kakamega",
    d: "Embu",
    correct: "d",
  },

  {
    question: "Who is the writter of the Harry Porter Book series ?",
    a: "J.K. Rowling",
    b: "Ngungi Wa Thiongo",
    c: "Ken wa Maria",
    d: "Michelle Njeri",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("btn");

let currentQuiz = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizdata.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  currentQuiz++;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("COMPLETED");
  }
});
