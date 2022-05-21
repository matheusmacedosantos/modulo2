// Exercicio 1
var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var resultado1 = document.getElementById("resultado1");

function somar() {
    if (n1 != "" && n2 != "") {
        let li = document.createElement('li')
        li.innerHTML = `${parseInt(n1.value)} + ${parseInt(n2.value)} = ${parseInt(n1.value) + parseInt(n2.value)}`;
        resultado1.appendChild(li);
    } else {
        alert("Preencha os campos");
    }
}

function subtrair() {
    if (n1 != "" && n2 != "") {
        let li = document.createElement('li')
        li.innerHTML = `${parseInt(n1.value)} - ${parseInt(n2.value)} = ${parseInt(n1.value) - parseInt(n2.value)}`;
        resultado1.appendChild(li);
    } else {
        alert("Preencha os campos");
    }
}

function multiplicar() {
    if (n1 != "" && n2 != "") {
        let li = document.createElement('li')
        li.innerHTML = `${parseInt(n1.value)} x ${parseInt(n2.value)} = ${parseInt(n1.value) * parseInt(n2.value)}`;
        resultado1.appendChild(li);
    } else {
        alert("Preencha os campos");
    }
}

function dividir() {
    if (n1 != "" && n2 != "") {
        let li = document.createElement('li')
        li.innerHTML = `${parseInt(n1.value)} / ${parseInt(n2.value)} = ${parseInt(n1.value) / parseInt(n2.value)}`;
        resultado1.appendChild(li);
    } else {
        alert("Preencha os campos");
    }
}

function porcentagem() {
    if (n1 != "" && n2 != "") {
        let li = document.createElement('li')
        li.innerHTML = `${parseInt(n1.value)} % ${parseInt(n2.value)} = ${parseInt(n1.value) % parseInt(n2.value)}`;
        resultado1.appendChild(li);
    } else {
        alert("Preencha os campos");
    }
}

// Exercicio 2
let valorTotal = document.querySelector("#valorTotal");
let resultado2 = document.querySelector("#resultado2");

function calcularNotas() {
    let notas = [200, 100, 50, 20, 10, 5, 2, 1];
    let valor = parseInt(valorTotal.value);
    let notasDisponiveis = [];
    let li = document.createElement('li');

    for (let i = 0; i < notas.length; i++) {
        let qtdNotas = parseInt(valor / notas[i]);
        valor = valor % notas[i];
        notasDisponiveis.push(qtdNotas);
    }

    li.innerHTML = `
        ${notasDisponiveis[0] == 0 ? "Nenhuma nota" : `${notasDisponiveis[0]} notas`} de R$ 200,00,
        ${notasDisponiveis[1] == 0 ? "nenhuma nota" : `${notasDisponiveis[1]} notas`} de R$ 100,00,
        ${notasDisponiveis[2] == 0 ? "nenhuma nota" : `${notasDisponiveis[2]} notas`} de R$ 50,00,
        ${notasDisponiveis[3] == 0 ? "nenhuma nota" : `${notasDisponiveis[3]} notas`} de R$ 20,00,
        ${notasDisponiveis[4] == 0 ? "nenhuma nota" : `${notasDisponiveis[4]} notas`} de R$ 10,00,
        ${notasDisponiveis[5] == 0 ? "nenhuma nota" : `${notasDisponiveis[5]} notas`} de R$ 5,00,
        ${notasDisponiveis[6] == 0 ? "nenhuma nota" : `${notasDisponiveis[6]} notas`} de R$ 2,00,
        ${notasDisponiveis[7] == 0 ? "nenhuma nota" : `${notasDisponiveis[7]} notas`} de R$ 1,00       
    `;
    resultado2.appendChild(li);
}

// Exercicio 3 
let listaInput = document.querySelector("#listaInput");
let resultado3 = document.querySelector("#resultado3");

function sortList(list) {
    let lista = list.value.split(',');
    lista = lista.map(item => parseInt(item));
    let listaOrdenada = lista.sort();

    return listaOrdenada;
}

function ordernarLista() { 
    let li = document.createElement('li');
    li.innerHTML = sortList(listaInput).join(', ');
    resultado3.appendChild(li);
}

