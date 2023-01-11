// Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Douglas', 'Vinicius', 'Sandra', 'Luh', 'Valquiria'];

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    if (nome.charAt(0) === 'V') {
    console.log(nomes[i]);
    }
}