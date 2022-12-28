// O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.Corporal

// Fórmula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

// IMC em adultos - condição:
//     - Abaixo de 18.5 - abaixo do peso;
//     - Entre 18.5 E 25 - peso normal;
//     - Entre 25 e 30 - acima do peso;
//     - Entre 30 e 40 - obeso;
//     - Acima de 40 - obesidade grave;


const peso = 52;
const altura = 1.74;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("O IMC é " + imc + ", o indivíduo está abaixo do peso.");
} else if (imc > 18.5 && imc < 25) {
    console.log("O IMC é " + imc + ", o indivíduo está com o peso normal.");
} else if (imc > 25 && imc < 30) {
    console.log("O IMC é " + imc + ", o indivíduo está acima do peso.");
} else if (imc > 30 && imc < 40) {
    console.log("O IMC é " + imc + ", o indivíduo está obeso.");
} else {
    console.log("O IMC é " + imc + ", o indivíduo está em obesidade grave.");
}