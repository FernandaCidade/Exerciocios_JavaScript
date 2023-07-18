// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let prompt = require("prompt-sync")();

let numero = prompt("Digite um número: ")


while(numero >0){

    console.log("Número não permitido")
    numero = prompt("Digite um número: ")
}

console.log("Número Permitido")