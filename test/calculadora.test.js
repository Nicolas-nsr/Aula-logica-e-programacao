const { somarNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function() {
    it('A funçao deve ser capaz dois números positivos', function() {
        //COLETA O RESULTADO DA FUNÇÃO
        const resultadoDaSoma = somarNumeros(5, 3);
        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um numero negativo', function(){
        // Coleta o resultado da função
        const resultadoDaSoma = somarNumeros(50, -15);
        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });
});