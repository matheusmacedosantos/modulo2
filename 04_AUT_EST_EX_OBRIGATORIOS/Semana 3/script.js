let velocidadeInicial = document.getElementById("velocidadeInicial");

let alturaMaxima = document.getElementById("alturaMaxima");

let tempoTotal = document.getElementById("tempoTotal");

let formulario = document.getElementById("form");

const gravidade = 10;

function rodarFuncao() {
  let valorDaVelocidadeInicial = parseInt(velocidadeInicial.value);

  let altura = valorDaVelocidadeInicial ** 2 / (2 * gravidade);
  let tempo = valorDaVelocidadeInicial / gravidade;

  alturaMaxima.innerHTML = altura + " metros";
  tempoTotal.innerHTML = tempo + " segundos";
};

// faz o formulario nao atualizar a pagina
document.onreadystatechange = () => {
  form.addEventListener("submit", (e) => e.preventDefault());
};