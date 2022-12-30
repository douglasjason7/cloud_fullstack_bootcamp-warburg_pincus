// Dado as 3 notas tiradas por uma luno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

//     Média = (nota 1 + nota 2 + nota 3) / 3;

//     classificação:
//         - Média menor que 5, reprovação;
//         - Média entre 5 e 7, recuperação;
//         - Média acima de 7, passou de semestre


const nota_1 = 10;
const nota_2 = 5;
const nota_3 = 10;

const media = (nota_1 + nota_2 + nota_3) / 3;

if (media < 5) {
    console.log("A média é " + media + ", o aluno está reprovado.");
} else if (media >= 5 && media <= 7) {
    console.log("A média é " + media + ", o aluno está em recuperação.");
} else {
    console.log("A média é " + media + ", o aluno está aprovado para o próximo semestre.");
}