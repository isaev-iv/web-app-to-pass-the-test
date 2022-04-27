const dom = {
  testName: document.getElementById("test-name"),
  questionNumber: document.getElementById("question-number"),
  questionBlock: document.getElementById("question-block"),
  question: document.getElementById("question"),
  answers: document.getElementById("answers"),
  btn: document.getElementById("btn"),
  result: document.getElementById("result"),
  resultIcon: document.getElementById("result-icon"),
  resultStatus: document.getElementById("result-status"),
};

//Global variables
let questionCount = 5;
let questionIdx = 1;
let isSelectAnswer = false;
let rightAnswersCount = 0;
let answersCountForTestComplete = 4;
const newQuestionsArr = smashArr(data.questions, questionCount);

//Функция рандомной пересортировки эл-ов массива;
// randomArr - массив для перетасовки;
// count - максимальное кол-во эл-ов в новом массиве;
function smashArr(arr, count) {
  let randomArr = [];

  while (arr.length && randomArr.length < count) {
    const maxIdx = arr.length - 1;
    const randomIdx = Math.round(Math.random() * maxIdx);
    const cutQuestionArr = arr.splice(randomIdx, 1);
    randomArr.push(...cutQuestionArr);
  }
  console.log(randomArr);
  return randomArr;
}

//Функция вывода ответов;
const renderAnswers = (answers, rightAnswerNumber) => {
  const answersHtml = [];

  for (let i = 0; i < answers.length; i++) {
    if (i + 1 === rightAnswerNumber) {
      answersHtml.push(
        `<div class='test__answer' data-valid>${answers[i]}</div>`
      );
    } else {
      answersHtml.push(`<div class='test__answer'>${answers[i]}</div>`);
    }
  }
  dom.answers.innerHTML = answersHtml.join("");
};

const answers = newQuestionsArr[0].answers;
const rightAnswerNumber = newQuestionsArr[0].rightAnswer;

//Отрисовка вопроса с ответами
function render(data, questionNumber) {
  const { answers, rightAnswer } = data;
  dom.question.innerHTML = data.question;
  dom.questionNumber.innerHTML = questionNumber;
  renderAnswers(answers, rightAnswerNumber);
  blockButton(true);
}

render(newQuestionsArr[0], 1);

console.log(newQuestionsArr[0]);

//Отслеживаем клик по кнопке перехода к следующему вопросу
dom.btn.onclick = () => {
  const question = newQuestionsArr[questionIdx];
  const nextQuestionIsFinish = newQuestionsArr[questionIdx + 1];
  let questionNumber = questionIdx + 1;
  if (question) {
    render(question, questionNumber);
    questionIdx++;
    isSelectAnswer = !isSelectAnswer;
    if (!nextQuestionIsFinish) {
      changeButton();
    }
  } else {
    renderResult();
  }
};

// Отслеживаем клик по выбору ответа
dom.answers.onclick = (event) => {
  const isAnswerClick = event.target.classList.contains("test__answer");
  if (isAnswerClick && !isSelectAnswer) {
    renderAnswersStatus(event.target);
    isSelectAnswer = !isSelectAnswer;
    blockButton(false);
  }
};

// Функция закраски статусов ответов
function renderAnswersStatus(answer) {
  if (answer.dataset.valid !== undefined) {
    answer.classList.add("valid");
    rightAnswersCount++;
  } else {
    const validAnswer = answer.parentNode.querySelector("[data-valid]");
    answer.classList.add("invalid");
    validAnswer.classList.add("valid");
  }
}

// Функция блокировки кнопки перехода, пока не указан ответ
function blockButton(isDisable) {
  if (isDisable) {
    dom.btn.classList.add("disable");
  } else {
    dom.btn.classList.remove("disable");
  }
}

// Функция смена наименования кнопки по окончании тестирования
function changeButton() {
  dom.btn.innerHTML = "Смотреть результат";
  dom.btn.dataset.result = true;
}

// Функция, которая рендерит результаты тестирования
function renderResult() {
  dom.questionBlock.style.display = "none";
  dom.answers.style.display = "none";
  dom.btn.style.display = "none";
  dom.testName.style.display = "none";

  if (testCompleteIsCorrect()) {
    dom.resultIcon.innerHTML = "🥳";
    dom.resultStatus.innerHTML = "Тест пройден!";
    dom.resultStatus.classList.add("valid");
  } else {
    dom.resultIcon.innerHTML = "🫣";
    dom.resultStatus.innerHTML = "Тест не пройден!";
    dom.resultStatus.classList.add("invalid");
  }
}

//Функция проверки завершения теста
function testCompleteIsCorrect() {
  return answersCountForTestComplete < rightAnswerNumber;
}
