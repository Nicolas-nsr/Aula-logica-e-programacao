function somarNumeros (valor1 ,valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2){
    //1. Soma todos os valores
    const resultadoDaSomaDeDoisValores = somarNumeros (valor1, valor2);

    //2. Divide pela quantidade de números passados
    const resultadoMediaDeDoisNumeros = resultadoDaSomaDeDoisValores/2;

    //3. retornar resultado
    return resultadoMediaDeDoisNumeros;
}

function realizarSomaDosCamposDaTela(){
    const valor1 = [];//primeiro valor
    const valor2 = [];//segundo valor
    const resultado = SomarNumeros(valor1, valor2);
    print = CaixaResultado(resultado);
}

module.exports = {
    somarNumeros
}