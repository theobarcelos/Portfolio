const caixas = document.getElementById("caixa-projeto");
var flechaBaixo = document.getElementById("down-arrow");
var flechaCima = document.getElementById("up-arrow");
var btn = document.getElementById("button-arrow")

function MyFunction(){
    if (caixas.style.display = "none"){
        caixas.style.display = "flex";
        flechaCima.style.display = "grid";
        flechaBaixo.style.display = "none";
    }   
}