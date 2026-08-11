const meuDivElemento = document.getElementById("meuDiv")

meuDivElemento.addEventListener("mouseover", function() {
    meuDivElemento.style.background = "lightgreen"
})

meuDivElemento.addEventListener("mouseout", function() {
    meuDivElemento.style.background = "lightblue"
})