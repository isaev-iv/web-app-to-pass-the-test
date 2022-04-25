const data = {
  title: "some information",
  questions: [
    {
      id: "1",
      question: "React - это ... ?",
      answers: ["библиотека", "фреймворк", "приложение"],
      rightAnswer: 1,
    },
    {
      id: "2",
      question: "Что можно сделать с помощью ReactJS?",
      answers: [
        "полететь на луну",
        "разработать веб-приложение",
        "создать искусственный интеллект",
      ],
      rightAnswer: 2,
    },
    {
      id: "3",
      question: "Компонент - это ...",
      answers: [
        "часть приложения или страницы",
        "приложение",
        "мы все в этом бренном мире",
      ],
      rightAnswer: 1,
    },
    {
      id: "4",
      question: "Можно ли создавать несколько компонентов?",
      answers: [
        "Нет, только один компонент",
        "Можно, но лучше создать максимум 1-2 компонента",
        "Да, можно",
      ],
      rightAnswer: 1,
    },
    {
      id: "5",
      question: "Зачем нужны пропсы?",
      answers: [
        "Чтобы компонент смог отобразиться",
        "Чтобы передавать данные в компонент",
        "Без пропсов компонент не сможет корректно рендериться",
      ],
      rightAnswer: 2,
    },
    {
      id: "6",
      question: "Сколько пропсов можно передавать в компоненте?",
      answers: ["Только один", "Сколько угодно"],
      rightAnswer: 2,
    },
    {
      id: "7",
      question: "Что за тип данных props?",
      answers: [
        "Это объект",
        "Это массив объектов",
        "Это массив строк",
        "Это функция",
      ],
      rightAnswer: 1,
    },
    {
      id: "8",
      question:
        "С помощью какого атрибута можно задавать стили для JSX-элемента?",
      answers: ["cssText", "className", "style"],
      rightAnswer: 2,
    },
    {
      id: "9",
      question:
        "Что необходимо передавать в style для того, чтобы применять CSS-стили?",
      answers: ["объект", "строку", "массив свойств"],
      rightAnswer: 2,
    },
    {
      id: "10",
      question:
        "Как правильно описывается в атрибуте style писать стиль шрифта?",
      answers: ["font-family", "fontFamily"],
      rightAnswer: 2,
    },
    {
      id: "11",
      question: "В каком случае функция считается компонентом?",
      answers: [
        "Если она возвращает JSX-разметку",
        "Если просто указана функция",
        "Если в имени функции указано Component",
      ],
      rightAnswer: 1,
    },
    {
      id: "12",
      question: "Как из функционального компонента вытащить пропсы?",
      answers: [
        "Вытащить можно через контекст this.props",
        "Достаточно просто заюзать специальный хук",
        "В каждом ФК есть первый аргумент, в котором хранятся все пропсы",
      ],
      rightAnswer: 3,
    },
    {
      id: "13",
      question: "Можно ли создавать компонент с помощью стрелочной функции?",
      answers: ["Да", "Нет"],
      rightAnswer: 1,
    },
    {
      id: "14",
      question: "Как в классовом компоненте вытащить данные из пропсов?",
      answers: [
        "this.properties",
        "this.props",
        "this",
        "props",
        "Что за пропсы?",
      ],
      rightAnswer: 2,
    },
    {
      id: "15",
      question: "Зачем нужен extends React.Component?",
      answers: [
        "Для улучшения производительности компонента",
        "Наследование от класса React.Component",
        "Для того, чтобы функциональный-компонент корректно рендерился",
      ],
      rightAnswer: 2,
    },
    {
      id: "16",
      question: "Можно ли в children передавать строку?",
      answers: ["Да", "Нет"],
      rightAnswer: 1,
    },
    {
      id: "17",
      question: "В каждом компоненте есть children?",
      answers: ["Да", "Нет"],
      rightAnswer: 2,
    },
    {
      id: "18",
      question: "Можно ли использовать компонент без children?",
      answers: ["Да", "Нет"],
      rightAnswer: 1,
    },
    {
      id: "19",
      question: "С помощью какого инструмента создается React-приложение?",
      answers: ["NPM", "GitHub", "Create React App", "NodeJS"],
      rightAnswer: 3,
    },
    {
      id: "20",
      question: "Зачем нужен NPM?",
      answers: [
        "Для отправки запросов на бэкенд",
        "Для установки библиотек",
        "Для запуска NodeJS-сервера",
        "Контроль версий",
      ],
      rightAnswer: 2,
    },
    {
      id: "21",
      question: "Можно ли без NodeJS запустить React-приложение?",
      answers: [
        "Можно",
        "NodeJS не запускается пока не установишь React",
        "Нельзя",
      ],
      rightAnswer: 3,
    },
    {
      id: "22",
      question: "В какой атрибут надо передавать событие клика?",
      answers: ['onclick="...""', "onClick={...}", "click={...}"],
      rightAnswer: 2,
    },
    {
      id: "23",
      question: "Можно ли передавать анонимную функцию в onClick?",
      answers: ["Нет", "Да"],
      rightAnswer: 2,
    },
    {
      id: "24",
      question: "Как вытащить значение из инпута?",
      answers: ["event.value", "event.target.value", "event.target"],
      rightAnswer: 2,
    },
    {
      id: "25",
      question: "",
      answers: ["полететь", "разработать", "создать"],
      rightAnswer: 2,
    },
  ],
};
