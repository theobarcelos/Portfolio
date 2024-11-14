const caixas = document.getElementById("caixa-projeto");
var flechaBaixo = document.getElementById("down-arrow");
var flechaCima = document.getElementById("up-arrow");

function MyFunction(){
    if (flechaBaixo.style.display = "grid"){
        caixas.style.display = "flex";
        flechaCima.style.display = "grid";
        flechaBaixo.style.display = "none";
    }
}

function FecharCaixas(){
    if (flechaCima.style.display = "grid"){
        caixas.style.display = "none";
        flechaBaixo.style.display = "grid";
        flechaCima.style.display = "none";
    }
}