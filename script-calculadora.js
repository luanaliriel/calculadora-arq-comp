function converterDecimal(){

resultadoconversao.innerHTML = ``

var decimal = Number(numero_decimal.value)

var octal = decimal.toString(8)

var hexa = decimal.toString(16)

var binaria = decimal.toString(2)

const baseSelecionada = bases.value


if(baseSelecionada == `binario`){
    resultadoconversao.innerHTML = `${binaria}`
    } else if (baseSelecionada == `octal`){
    resultadoconversao.innerHTML = `${octal}`
    } else if (baseSelecionada == `hexa`){
        resultadoconversao.innerHTML = `${hexa}`
    } 
}