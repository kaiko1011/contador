let numeroAtual= document.getElementById("currentNumber");
let currentNumber= 0;

function increment(){
    currentNumber= currentNumber + 1;
    gestora();
}

function decrement(){
    currentNumber= currentNumber - 1;
   gestora();
    }

function gestora(){
    mudaCor();
    limites();
    atualiza();
}

function mudaCor(){
    if(currentNumber < 0){
        numeroAtual.style.color='red'; 
    }
    else{
        numeroAtual.style.color='blue'; 
    }
}

function limites(){
    if(currentNumber <= -10){
        currentNumber= -10;
    }
    if (currentNumber >= 10){
        currentNumber = 10;
        
    } 
}

function atualiza(){
    numeroAtual.innerHTML= currentNumber; 
}
    

    
      
