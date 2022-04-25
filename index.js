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

//Функция вывода вопроса;
const renderQuestion = (questions, idx) => {
  dom.questionNumber.innerHTML = ++idx;
  dom.question.innerHTML = newQuestionsArr[idx].question;
};
renderQuestion(newQuestionsArr, 1);
