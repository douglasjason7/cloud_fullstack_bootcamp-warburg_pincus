// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis. Sendo elas:

//     1- Preço do etanol;
//     2- Preço da gasolina;
//     3- O tipo de conbustível que está no seu Carro;
//     4- Gasto médio de combustível do carro por KM;
//     5- Distância em KM da Viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.


const precoEtanol = 3.29;
const precoGasolina = 4.79;
const gastoMedioVeiculoPorKm = 10;
const distanciaViagem = 300;

const isTipoCombustivelEtanol = false;

const valorGastoEtanol = (distanciaViagem / gastoMedioVeiculoPorKm) * precoEtanol;
const valorGastoGasolina = (distanciaViagem / gastoMedioVeiculoPorKm) * precoGasolina;


if (isTipoCombustivelEtanol) {
    console.log("O valor total da viagem foi: R$" + valorGastoEtanol + " em etanol");
} else {
    console.log("O valor total da viagem foi: R$" + valorGastoGasolina + " em gasolina");
}