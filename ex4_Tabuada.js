// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero para saber sua multiplicação: "))


for(let contador = 0; contador <= 10; contador ++){

    console.log(numero + " x "+ contador + " = "+ numero * contador);
}

