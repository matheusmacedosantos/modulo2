// Exercicio 1
const inputValue1 = document.getElementById("inputValue1");
const spanValue1 = document.getElementById("value1");

const checkInputValue = () => {
  inputValue1.value !== null
    ? (spanValue1.innerHTML = inputValue1.value)
    : (spanValue1.innerHTML = "");
};

const increment = () => {
  let incrementInputAndSpan = () => {
    inputValue1.value = parseInt(inputValue1.value) + 1;
    spanValue1.innerHTML = inputValue1.value;
  };

  inputValue1.value !== null ? incrementInputAndSpan() : alert("Valor vazio!");
};

const decrement = () => {
  let decrementInputAndSpan = () => {
    inputValue1.value = parseInt(inputValue1.value) - 1;
    spanValue1.innerHTML = inputValue1.value;
  };

  inputValue1.value !== null ? decrementInputAndSpan() : alert("Valor vazio!");
};

// Exercicio 2
const firstInputValue2 = document.getElementById("firstInput");
const secondInputValue2 = document.getElementById("secondInput");

const changeText = () => {
  let temp = firstInputValue2.value;

  firstInputValue2.value = secondInputValue2.value;
  secondInputValue2.value = temp;
};

// Exercicio 3
let inputPhoneNumber = document.getElementById("phoneNumber");
let resultThree = document.getElementById("resultado3");

const validateRegex = () => {
  let phoneNumberRegex = /^\([0-9]{2}\) [0-9]{1} [0-9]{4}-[0-9]{4}$/;

  if (phoneNumberRegex.test(inputPhoneNumber.value)) {
    resultThree.innerHTML = "Número válido!";
  } else {
    resultThree.innerHTML = "Número inválido!";
  }
};

// Exercicio 4
let inputFour = document.getElementById("input4");
let selectFour = document.getElementById("options4");
let resultFour = document.getElementById("resultado4");

const calculateTickets = () => {
  let calculateDaytime = (people) => {
    people <= 50
      ? (resultFour.innerHTML = 200 * people)
      : (resultFour.innerHTML = 120 * people);
  };

  let calculateNighttime = (people) => {
    people <= 50
      ? (resultFour.innerHTML = 100 * people)
      : (resultFour.innerHTML = 80 * people);
  };

  selectFour.value == "diurno"
    ? calculateDaytime(inputFour.value)
    : calculateNighttime(inputFour.value);
};

// Exercicio 5
let testGrades = document.getElementById("input5");
let projectGrades = document.getElementById("input6");

const separateList = (list) => {
  let listArray = list.split(",");
  listArray = listArray.map((item) => parseFloat(item));
  return listArray;
};

const calculateGrade = () => {
  let testGradesArray = separateList(testGrades.value);
  let projectGradesArray = separateList(projectGrades.value);

  let students =
    testGradesArray.length == projectGradesArray.length
      ? testGradesArray.length
      : 0;

  let mediaIndividual = [];
  for (let i = 0; i < students; i++) {
    mediaIndividual.push((testGradesArray[i] + projectGradesArray[i]) / 2);
  }

  let mediaGeral;
  mediaGeral =
    (testGradesArray.reduce((a, b) => a + b, 0) +
      projectGradesArray.reduce((a, b) => a + b, 0)) /
    students;

  let mediaProva = testGradesArray.reduce((a, b) => a + b, 0) / students;

  let mediaTrabalho = projectGradesArray.reduce((a, b) => a + b, 0) / students;

  let topTestGrade = Math.max(...testGradesArray);
  let topProjectGrade = Math.max(...projectGradesArray);
  let bottomTestGrade = Math.min(...testGradesArray);
  let bottomProjectGrade = Math.min(...projectGradesArray);

  document.getElementById("mediaFive").innerHTML = mediaIndividual;
  document.getElementById("mediaFiveGeral").innerHTML = mediaGeral.toFixed(2);
  document.getElementById("mediaFiveProva").innerHTML = mediaProva.toFixed(2);
  document.getElementById("mediaFiveTrabalhos").innerHTML =
    mediaTrabalho.toFixed(2);
  document.getElementById(
    "menorMaiorNota"
  ).innerHTML = `${topTestGrade} e ${bottomTestGrade}`;
  document.getElementById(
    "menorMaiorNotaTrabalho"
  ).innerHTML = `${topProjectGrade} e ${bottomProjectGrade}`;
};