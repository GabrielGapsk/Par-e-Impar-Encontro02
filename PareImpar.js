// Considere a quantidade de alunos presentas na sala, percorra do zero até o numero total de alunos 
// se o numero for par, escreva ´par´e o numero correspondente.
// se o numero for impar, escreva ímpar´e o numero correspondente.
// se o numero for zero, escreva ´zero´e o numero correspondente.

const rs = require("readline-sync");

let alunospresentes = 17

for(let aluno = 0; aluno <= alunospresentes; aluno++){

    if(aluno == 0){
        console.log("zero " + aluno);
    }

    if (aluno % 2 == 0){
        console.log("par " + aluno);
    }else{
        console.log("Impar " + aluno);
    }
}