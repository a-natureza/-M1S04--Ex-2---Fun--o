function verificarParOuImpar(numero) {
    // Verifica se o número é par
    if (numero % 2 === 0) {
    return "O número " + numero + " é par.";
    } else {
    // Se não for par, então é ímpar
    return "O número " + numero + " é ímpar.";
    }
    }
    
    // Testando a função
    console.log(verificarParOuImpar(4)); // Deve retornar que o número é par
    console.log(verificarParOuImpar(5)); // Deve retornar que o número é ímpar