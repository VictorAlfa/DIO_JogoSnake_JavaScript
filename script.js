let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo(){    

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, 100);


/*
//Criando o elemento Canvas 2d que irá rodar o jogo
let canvas=document.getElementById("snake");
let context=canvas.getContext("2d");
let box=32;

//Crinado snake como lista coordenadas
let snake=[];
snake[0]={
    x:8*box,
    y:8*box
}

let direction="right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//Criando BackGround
function criarBG(){
    context.fillStyle="lightgreen";
    context.fillRect(0 , 0 , 16*box , 16*box); //retângulo
}
//Criando Snake
function criarSnake(){
    for(i=0 ; i<snake.length ; i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x , snake[i].y , box , box);
    }
}
function drawFood(){
    context.fillStyle="red";
    context.fillRect(food.x , food.y , box , box);
}
//Criando Controles
document.addEventListener('keydown' , update);

function update(event){
    //a snake não pode ir na drireção oposta, não pode voltar contrário
    if(event.keyCode == 37 && direction != 'right')direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up')   direction = 'down';
}
//Criando Jogo
function iniciarJogo(){
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left')       snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down")  snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up')         snake[0].y = 16 * box;
    
    for(i = 1 ; i < snake.length ; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }
    
    criarBG();
    criarSnake();
    drawFood();

    let snake_x=snake[0].x;
    let snake_y=[0].y;

    if(direction=="right")snake_x += box; //right
    if(direction=="left") snake_x -= box; //left
    if(direction=="up")   snake_y += box; //up
    if(direction=="down") snake_y -= box; //down

    if(snake_x != food.x || snake_y != food.y){
        snake.pop(); //reduzir pop tira o ultimo elemento da lista
    }else{
        food.x = Math.floor(Math.random()*15+ 1)*box;
        food.y = Math.floor(Math.random()*15+1)*box;
    }
    let newHead={
        x:snake_x ,
        y:snake_y
    }
    snake.unshift(newHead); //acrescentar unshift adiciona como primeiro quadrado
}
let jogo=setInterval(iniciarJogo , 100);
*/