/*
    1 - Crie uma classe para representar pressoas;
    Para cada pessoa teremos os atributos nome, peso e altura;
    As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura*altura));
    2 - Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor de seu IMC.
    3 - Classifique o IMC de José e imprima a classificação.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        return (imc < 18.5) ?
            "abaixo do peso." :
            (imc > 18.5 && imc < 25) ?
                "com o peso normal." :
                (imc > 25 && imc < 30) ?
                    "acima do peso." :
                    (imc > 30 && imc < 40) ?
                        "obeso." :
                        "em obesidade grave."
    }

}

const jose = new Pessoa('José', 70, 1.75)

console.log('O IMC de josé é ' + jose.calcularImc() + ' e ele está ' + jose.classificarImc());
