// Crie um programa que dado um número, imprima sua tabuada.

const tabuada = [];

tabuada.push(0);
tabuada.push(1);
tabuada.push(2);
tabuada.push(3);
tabuada.push(4);
tabuada.push(5);
tabuada.push(6);
tabuada.push(7);
tabuada.push(8);
tabuada.push(9);
tabuada.push(10);

const numero = 2;
let soma = 0;
let multiplicacao = 0;
let divisao = 0;

for (let i = 0; i < tabuada.length; i++) {
    const numeroOperado = tabuada[i];
    soma = numero + numeroOperado;
    console.log(numero, '+', numeroOperado, '=', soma);
}

for (let i = 0; i < tabuada.length; i++) {
    const numeroOperado = tabuada[i];
    subtracao = numero - numeroOperado
    console.log(numero, '-', numeroOperado, '=', subtracao)
}

for (let i = 0; i < tabuada.length; i++) {
    const numeroOperado = tabuada[i];
    multiplicacao = numero * numeroOperado;
    console.log(numero, 'x', numeroOperado, '=', multiplicacao);
}

for (let i = 0; i < tabuada.length; i++) {
    const numeroOperado = tabuada[i];
    divisao = numero / numeroOperado;
    console.log(numero, '/', numeroOperado, '=', divisao);
}