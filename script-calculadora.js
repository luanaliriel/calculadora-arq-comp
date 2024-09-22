function converterDecimal() {

    resultadoconversao.innerHTML = ``

    var decimal = Number(numero_decimal.value)

    var octal = decimal.toString(8)

    var hexa = decimal.toString(16)

    var binaria = decimal.toString(2)

    const baseSelecionada = bases.value


    if (baseSelecionada == `binario`) {
        resultadoconversao.innerHTML = `${binaria}`
    } else if (baseSelecionada == `octal`) {
        resultadoconversao.innerHTML = `${octal}`
    } else if (baseSelecionada == `hexa`) {
        resultadoconversao.innerHTML = `${hexa}`
    }

}


const caixaTexto = document.getElementById("caixaTexto")

function mostrarTexto(texto) {
    caixaTexto.textContent = texto
}

const navItems = document.querySelectorAll('.nav-item')

navItems.forEach(item => {
    item.onmouseover = function () {
        if (item.textContent === "Decimal") {
            mostrarTexto(`A base decimal é o sistema numérico mais comum e mais utilizado por humanos; ela é composta pelos dígitos de 0 a 9. É aplicada em cálculos do dia a dia no comércio, na contabilidade e praticamente todas as situações de contagem.`)
        } else if (item.textContent === "Binário") {
            mostrarTexto(`A base binária é o sistema de numeração essencial em computadores. Ela é aplicada na computação pois todas as operações da máquina são realizadas com números binários, 0 e o 1, já que os circuitos eletrônicos digitais utilizam apenas dois estados: ligado ou desligado.`)
        } else if (item.textContent === "Octal") {
            mostrarTexto(`A base octal é um sistema de numeração menos comum, mas foi bastante utilizado em sistemas de computação antigos. Hoje em dia ele costuma ser utilizado ocasionalmente como uma forma mais curta de representar números binários já 1 dígito octal corresponde a 3 bits binários. Também é utilizado no permissionamento de arquivos do Linux.`)
        } else if (item.textContent === "Hexadecimal") {
            mostrarTexto(`A base hexadecimal é um sistema de numeração que usa os números de 0 a 9 e as letras A a F para representar os valores de 10 a 15. Ele tem uma utilização constante representando os números no CSS, e também é comumente usado para representar endereços de memória.`)
        }

        caixaTexto.style.display = 'block'

    }
    item.onmouseout = function () {
        mostrarTexto('')
        caixaTexto.style.display = 'none'
    }
})

function mostrarTexto(texto) {
    caixaTexto.textContent = texto
}


