// Verifique se um número é divisível por outro


const numero = 3;

//para um número ser par, o resto da divisão deste número por dois deve ser 0
const isNumeroDivisivelPor5 = (numero % 2) === 0;


if (numero === 0) {
    console.log("O número é inválido!");
} else if (isNumeroDivisivelPor5) {
    console.log("Sim, o número é divisível.");
} else {
    console.log("Não, o número não é divisível.");
}