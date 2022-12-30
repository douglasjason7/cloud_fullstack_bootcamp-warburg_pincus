/* 
    1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetros rodado.
    2 - Crie um método que dado a quantidade de quilômetros (distância) e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca, cor, gastoMedioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    calcularGastoDePercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioCombustivel * precoCombustivel;
    }
}

const focus = new Carro('Ford', 'prata', 1 / 7.2);
const corolla = new Carro('Toyota', 'branco', 1 / 12);

console.log(focus.calcularGastoDePercurso(100, 5.79));
console.log(corolla.calcularGastoDePercurso(100, 5.79));
