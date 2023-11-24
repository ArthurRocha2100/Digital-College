// const nomeInput = prompt('Digite seu nome');

/* Para evitar erro de Assignação com as variâveis abaixo.
é necessário declaralas como variâveis do tipo let */
// let valorUm = prompt('Digite o primeiro valor');
// let valorDois = prompt('Digite o segundo valor');
// let valorTres = prompt('Digite o terceiro valor');


/*Quando os valores das variâveis são recebidas via prompt
elas recebem um valor do tipo String, por conta disso, para essa 
situação será necessário converter o tipo dela para Number para que 
as operações matemáticas possam ocorrer da forma correta.*/
// valorUm = Number(valorUm);
// valorDois = Number(valorDois);
// valorTres = Number(valorTres);

// const idade = Number(prompt('Digite sua idade aqui'));
// const acompanhado = prompt('Você está acompanhado? (s/n)').toLowerCase;

// greet(nomeInput);
// add(valorUm, valorDois);
// multiplicacao(valorUm, valorDois, valorTres);
// checarSePodeEntrar(idade, acompanhado);


function greet(nome) {
    let msg = alert(`Olá ${nome}`);
    return msg
}

function add(valorA, valorB) {
    let result;

    if(isNaN(valorA) || isNaN(valorB)){
        result = alert('Verifique os valores informado.');
    } else {
        const result = valorA + valorB;
        alert(result);
    }

    return result;
}

function multiplicacao(valorA, valorB, valorC) {

    let result;

    if(isNaN(valorA) || isNaN(valorB) || isNaN(valorC)){
        result = alert('Verifique os valores informado.');
    } else {
        const result = valorA * valorB * valorC;
        alert(`O resultado é: ${result}`);
    }

    return result;
}

function checarSePodeEntrar(idade, acompanhado = false) {
    
    let msg;

    const acompanhadonNovo = chevarValorAcompanhado(acompanhado);

    if(acompanhadonNovo || idade >= 18){
        return msg = alert('pode entrar!');
    }

    return msg = alert('Não pode entrar!');
}

function chevarValorAcompanhado(resposta) {

    if( resposta == 's'){
        resposta = true;
        return resposta;
    } else if (resposta == 'n') {
        resposta = false;
        return resposta;
    }
    return resposta;
}

// function imprimirSeguenciaDenumeros(quantidadeDeLooping) {
    
//     while(quantidadeDeLooping){
//         console.log(i);
//         i--;
//     }

//     for(i = 0; i < quantidadeDeLooping; 1--){
//         console.log(i);        
//     }

//     do {

//     }
// }




// Hash que você encontrou sniffando a rede insegura, não altere
const hashFound = "c64d00c8fa236a076c00379129e8c0fc6198859e95975041a75265da36f0df90"

// Não altere o código abaixo
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
//

async function myForceBruteFunction() {
    // Exemplo de como usar a função
    // const hash = await hashString("Hello, world!")

    // Exemplo de como retornar o resultado
    // console.log(hash)

    // --- Implemente seu código aqui 👇🏼 ---

    let senhaFraca = 100000;

    while(senhaFraca <= 999999){
        let x  = await hashString(senhaFraca);
        
        if(hashFound == x){
            return console.log(`deu bom ${senhaFraca}`);
        }

        senhaFraca++;
    }
	
    // --- Implemente seu código aqui 👆🏼 ---
}

myForceBruteFunction(); // Não altere