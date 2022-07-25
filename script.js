/*//load
function load(){
    alert("Pagina carregada");
}*/

//Criando o elemento Canvas 2d que irá rodar o jogo
let canvas=document.getElementById("snake");
let context=canvas.getContext("2d");
let box=32;

//Criando BackGround
function criarBG(){
    context.fillStyle="lightgreen";
    context.fillRect(0 , 0 , 16*box , 16*box);
}

criarBG();
