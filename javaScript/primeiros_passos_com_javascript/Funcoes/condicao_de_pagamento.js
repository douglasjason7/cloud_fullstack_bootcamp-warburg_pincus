/*
    Calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento
    Código Condição de pagamento
        Cód 1 - A vista débito, recebe 10% de desconto;
        Cód 2 - A vista no dinheiro ou PIX, recebe 15% de desconto;
        Cód 3 - Em duas vezes, preço normal de etiqueta sem juros;
        Cód 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const condicaoPagamento = 4;

function aplicarDesconto (valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros (valor, juros) {
    return valor + (valor * (juros / 100));
}

if (condicaoPagamento === 1) {
    let precoProdutoFinal = aplicarDesconto(precoEtiqueta, 10);
    console.log("Pagamento a vista no débito - " + 'o valor final do produto é: ' + precoProdutoFinal);
} else if (condicaoPagamento === 2) {
    let precoProdutoFinal = aplicarDesconto(precoEtiqueta, 15);
    console.log("Pagamento a vista no dinheiro ou PIX - " + 'o valor final do produto é: ' + precoProdutoFinal);
} else if (condicaoPagamento === 3) {
    let precoProdutoFinal = precoEtiqueta;
    console.log("Pagamento em duas vezes - " + 'o valor final do produto é: ' + precoProdutoFinal);
} else {
    let precoProdutoFinal = aplicarJuros(precoEtiqueta, 10);
    console.log("Pagamento acima de duas vezes - " + 'o valor final do produto é: ' + precoProdutoFinal);
}