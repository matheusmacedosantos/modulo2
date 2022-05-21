function entrar() {
    var area = $("#area")
    var texto = prompt('Digite seu nome')

    area.text("Bem vindo ao meu currículo, " + texto + "!")
}
