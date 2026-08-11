const textoElemento = document.getElementById('texto');

const teuBotaoElemento = document.getElementById('teuBotao');

teuBotaoElemento.addEventListener("click", function(){
    textoElemento.textContent = "Texto alterado com o click!"
})