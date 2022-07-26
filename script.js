/*//load
function load(){
    alert("Pagina carregada");
}*/

//Criando o elemento Canvas 2d que irá rodar o jogo
let canvas=document.getElementById("snake");
let context=canvas.getContext("2d");
let box=32;
let snake=[];

snake[0]={
    x:8*box,
    y:8*box
}

//Criando BackGround
function criarBG(){
    context.fillStyle="lightgreen";
    context.fillRect(0 , 0 , 16*box , 16*box);
}

function criarSnake(){
    for(i=0 ; snake.length ; i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x , snake[i].y , box , box);
    }
}

criarBG();
criarSnake();
