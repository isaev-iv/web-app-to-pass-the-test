const dom = {
  testName: document.getElementById("test-name"),
  questionNumber: document.getElementById("question-number"),
  question: document.getElementById("question"),
  answers: document.getElementById("answers"),
  btn: document.getElementById("btn"),
};

//Функция рандомной пересортировки эл-ов массива;
// arr - массив для перетасовки;
// count - максимальное кол-во эл-ов в новом массиве;

const smashArray = (arr) => {
  let randomArr = [];

  while (arr.length) {
    const maxIdx = arr.length - 1;
    const randomIdx = Math.round(Math.random() * maxIdx);
    const cutQuestionArr = arr.splice(randomIdx, 1);
    randomArr.push(...cutQuestionArr);
  }
  return randomArr;
};
const newQuestionsArr = smashArray(data.questions);

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
  dom.answers.innerHTML = answersHtml.join();
};

//Отрисовка вопроса с ответами
const answers = newQuestionsArr[0].answers;
const rightAnswerNumber = newQuestionsArr[0].rightAnswer;
function renderQuestionWithAnswers(data, questionNumber) {
  const { answers, rightAnswer } = data;
  dom.question.innerHTML = data.question;
  dom.questionNumber.innerHTML = questionNumber;
  renderAnswers(answers, rightAnswerNumber);
}

renderQuestionWithAnswers(newQuestionsArr[0], 1);
