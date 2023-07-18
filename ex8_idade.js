// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// // maior que 18.

let prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade: ")


while(idade < 18){

    console.log("idade não permitida")
    idade = prompt("Digite sua idade: ")
}

console.log("Idade Permitida")