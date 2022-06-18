//Exercicio 1 
let inputOne = document.getElementById('numero1');
let resultOne = document.getElementById('resultado1');

const checkSecondNumber = () => {
    inputOne.value[0] % 2 == 0
    ? (resultOne.innerHTML = 'O numero ${inputOne.value} é par')
    : (resultOne.innerHTML = 'O numero ${inputOne.value} é impar');
};

//Exercicio 2

const sumNumbers = () => {
    resultTwo.innerHTML = `A soma dos numeros é ${
      parseInt(inputTwo.value[0]) +
      parseInt(inputTwo.value[1]) +
      parseInt(inputTwo.value[2])
    }`;
  };

