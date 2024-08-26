const btn = document.querySelector('#submitbtn')

const texto_inicial = document.querySelector('#texto_boasvindas')
const previsao = document.querySelector('#texto_previsao')

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const cidade = document.querySelector('#escolha_cidade').value
    
    texto_inicial.innerHTML = "Olá, " + nome + " de " + cidade
    previsao.innerHTML = "Esta é a previsão do tempo para " + cidade + " nesta semana." 
})
