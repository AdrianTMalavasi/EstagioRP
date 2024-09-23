//1) Sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1;

    // Função para verificar se o número pertence à sequência de Fibonacci
    while (b <= num) {
        if (b === num) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    return false;
}

// Número a ser verificado
const number = 21;  // Altere o valor aqui para testar outros números

if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}


//2) Contagem da Letra 'a' em uma String

function countLetterA(str) {
    let count = 0;
    // Converte a string para minúscula para considerar 'A' e 'a' de forma unificada
    str = str.toLowerCase();
    for (let char of str) {
        if (char === 'a') {
            count++;
        }
    }
    return count;
}

// String para verificar
const text = "A casa da árvore tem maçãs.";

// Verificação e resultado
const count = countLetterA(text);
console.log(`A letra 'a' aparece ${count} vez(es) na string.`);


//3) Valor da Variável SOMA

let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); 

/*
4) Complete o Próximo Elemento
a) Sequência: 1, 3, 5, 7, ___ 9 (Sequência de números ímpares)

b) Sequência: 2, 4, 8, 16, 32, 64, ____ 128 (Sequência de potências de 2)

c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____ 49 (Sequência dos quadrados dos números naturais)

d) Sequência: 4, 16, 36, 64, ____ 100 (Sequência dos quadrados dos números pares)

e) Sequência: 1, 1, 2, 3, 5, 8, ____ 13 (Sequência de Fibonacci)

f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____ 20
/*

/*
5) Identificação de Interruptores e Lâmpadas usando apenas duas idas à sala das lâmpadas:

Para identificar qual interruptor controla qual lâmpada, eu ligaria o primeiro interruptor e o deixaria ligado por alguns minutos. Depois, eu desligaria o primeiro interruptor, ligaria o segundo e, em seguida, iria até a sala das lâmpadas. A lâmpada que estiver acesa e quente será a controlada pelo primeiro interruptor, a lâmpada acesa e fria será controlada pelo segundo, e a lâmpada apagada e fria será controlada pelo terceiro interruptor.

*/