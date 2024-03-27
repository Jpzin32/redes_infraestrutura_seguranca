
function cripto() {

let text = document.getElementById('text').value

let split = text.split("")

let chars = split.length

const pre = ['Z','E','T','T','A','P','O','L','A','R','z','e','t','t','a','p','o','l','a','r']
const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
let rslt = document.getElementById('result')

for (i = 0; i < chars; i++) {
    let index = pre.indexOf(split[i])

    if(index === -1) {
        split[i] = split [i]
    } else {
        split[i] = pos[index]
    }

    const toString = split.join('')

    rslt.innerText = toString
} 
}


//function cripto() {: Declaração de uma função chamada cripto.
//let text = document.getElementById('text').value: Obtém o valor do elemento HTML com o id "text" e armazena na variável text.

//let split = text.split(""): Divide a string text em um array de caracteres individuais e armazena-o na variável split.

//let chars = split.length: Calcula o número de caracteres na string text e armazena-o na variável chars.

//const pre = ['Z','E','T','T','A','P','O','L','A','R','z','e','t','t','a','p','o','l','a','r']:

//Cria um array pre com caracteres específicos que serão substituídos.
//Letras maiúsculas e minúsculas são tratadas separadamente.
//const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']:

//Cria um array pos com os caracteres correspondentes para substituição.
//Os caracteres correspondentes estão na mesma ordem que os caracteres em pre.
//let rslt = document.getElementById('result'): Obtém a referência ao elemento HTML com o id "result" e armazena-a na variável rslt.

//for (i = 0; i < chars; i++) {: Loop que itera sobre cada caractere na string text.

//let index = pre.indexOf(split[i]): Procura o índice do caractere atual de split no array pre.

//if(index === -1) { split[i] = split [i] } else { split[i] = pos[index] }:

//Se o caractere não estiver presente em pre, mantém o caractere original.
//Caso contrário, substitui o caractere atual em split pelo caractere correspondente em pos com base no índice encontrado em pre.
//const toString = split.join(''): Junta os caracteres do array split de volta em uma única string.

//rslt.innerText = toString: Define o texto interno do elemento HTML com o id "result" como a string criptografada.