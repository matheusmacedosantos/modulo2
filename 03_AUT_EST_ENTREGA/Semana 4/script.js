function entrar () {
    var area = document.getElementById("area");
    var texto = prompt('Digite seu nome')

    area.innerHTML = ("Bem vindo ao meu currículo, ") + texto + ("!");
    }
