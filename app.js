const questions = [
    {
        "que": "Which of the following is the markup language",
        "a": 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },

    {
        "que": "Does Java accept multiple inheritance",
        "a": 'YES',
        'b': 'NO',
        'c': 'BOTH',
        'd': 'NONE OF THESE',
        'correct': 'b'
    },

    {
        "que": "Father of Java",
        "a": 'James Gosling',
        'b': 'Guido van Rossum',
        'c': 'BOTH',
        'd': 'NONE',
        'correct': 'a'
    },
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.querySelector("#queBox");
const optionQuestion = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = `${index + 1}) ${data.que} `;
    optionQuestion[0].nextElementSibling.innerText = data.a;
    optionQuestion[1].nextElementSibling.innerText = data.b;
    optionQuestion[2].nextElementSibling.innerText = data.c;
    optionQuestion[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let selectedOption;
    optionQuestion.forEach(
        (input) => {
            if (input.checked) {
                selectedOption = input.value;
            }
        }
    );
    return selectedOption;
}

const reset = () => {
    optionQuestion.forEach(
        (input) => {
            input.checked = false;
        }
    );
}

const endQuiz = () => {
    document.getElementById("box").innerHTML =
        `<h3> Thank you for playing the quiz</h3>
        <h2> ${right}/${total} are correct </h2>
        `
}

loadQuestion();
