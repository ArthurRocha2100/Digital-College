
for(i = 1; i >= 100; i++) {
    const resto = i % 3

    if(resto === 0) {
        console.log(i);
    }
};


const userNumber = 0;

let total = 0;

for(let i = 0; i <= userNumber; i ++) {
    
    total += i;
}

console.log(total);


// com a lógica da PA
const primeiro = 1;
const ultimo = 10;

const soma = ((primeiro + ultimo) * (ultimo - primeiro + 1))/2
console.log(soma);


/* Loop For, For Of, While e ForEach em uma lista: Crie uma lista de cinco frutas e use um loop for para imprimir cada fruta da lista. */

const list = ['banana', 'mamao', 'abacaxi', 'abacate', 'acerola'];

for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
}


/* Escreva um programa que conte quantas letras "a" tem em uma frase. */

const frase = 'O javaScript trava isso como uma lista de caracteres';
let cont = 0;

for(let letra of frase) {
    letra = letra.toLowerCase();

    if(letra === 'a'){
        cont++;
    }
}

console.log(cont);



/* Faça um carrinho de compras com pelo menos 3 produtos e imprima o valor total dos produtos, cada produto deve ter nome e preço. */


const lista = [
    {
        nome:'Pera',
        preco: 10
    },
    {
        nome:'Uva',
        preco: 5
    },
    {
        nome:'Maça',
        preco: 3
    }
]

let totalCarrinho = 0;

for(let i = 0; i < lista.length; i++) {
    totalCarrinho += lista[i].preco;

    list.find('')
}

console.log(totalCarrinho);



/* Dado o seguinte array: [2, 4, 6, 15, 7, 9, 11, 300], retorne um outro array somente com os números menores do que 4 ou maiores do que 9. */


const arryaD1 = [2, 4, 6, 15, 7, 9, 11, 300];

const newArray = arryaD1.filter((number) => {
    return number > 9 || number < 4;
});

console.log(newArray);


/* Dado o seguinte array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] retorne um outro array somente com os números pares. */


const arrayD2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArrayD2 = arrayD2.filter((number) => {
    if(number % 2 === 0) {
        return number;
    }
})

console.log(newArrayD2);

/* Dado o seguinte array: [2, 4, 6, 15, 7, 9, 11, 300], retorne um novo array com o quadrado dos itens. */

const arrayD3 = [2, 4, 6, 15, 7, 9, 11, 300];

const newArrayD3 = arrayD3.map((number) => {
   return Math.pow(number, 2)
})

console.log(newArrayD3);