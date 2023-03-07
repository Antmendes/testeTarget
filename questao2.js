let entrada = 1597;
let fibo = [0, 1];
let controle = 0;


while(controle < entrada){
let i = fibo.length - 1;
controle = fibo[i] + fibo[i -1];
fibo.push(controle);
}

if(fibo.includes(entrada)){
    console.log(`${entrada} pertence a sequência!`) 
}else{
    console.log(`${entrada} não pertence a sequência!`) 
}








