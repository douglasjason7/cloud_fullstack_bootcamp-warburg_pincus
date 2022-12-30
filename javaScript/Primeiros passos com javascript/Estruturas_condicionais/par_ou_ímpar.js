// Descubra se um número é par

const numero = 10;

//para um número ser par, o resto da divisão deste número por dois deve dar 0
const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar) {
    console.log("O número é par");
} else {
    console.log("O número é impar");
}