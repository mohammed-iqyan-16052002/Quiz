const quizData = [
    {
        question: "Which planet in the solar system is the smallest?",
        a: "Pluto",
        b: "Earth",
        c: "Mercury",
        d: "Mars",
        correct: "a",
    },
    {
        question: "Who is the father of our Nation?",
        a: "Mahtma Gandhi",
        b: "Rabidranath Tagore",
        c: "Dr Ambedhkar",
        d: "Sardar Valla Bhai Patel",
        correct: "a",
    },
    {
        question: "Which is the biggest continent in world?",
        a: "South Africa",
        b: "Australia",
        c: "Asia",
        d: "Europe",
        correct: "c",
    },
    {
        question: "When is National Voters day celebrated in India ?",
        a: "5 January",
        b: "5 December",
        c: "25 January",
        d: "25 December",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            displayResult();
        }
    }
});

function displayResult() {
    let resultHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`;
    quizData.forEach((question, index) => {
        resultHTML += `<p><strong>Question ${index + 1}:</strong> ${question.question} - Correct Answer: ${question[question.correct]}</p>`;
    });
    resultHTML += `<button onclick="location.reload()">Reload</button>`;
    quiz.innerHTML = resultHTML;
}
