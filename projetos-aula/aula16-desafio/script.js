let num = document.querySelector("input#num")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = [] // Recebe os valores
// Verifica se o valor está entre 1 e 100
function inNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
// Verifica se o valor já existe na lista
function inLista(n, l) {
    if (l.indexOf (Number(n)) != -1){
        return true    
    } else {
        return false
    }
}
// Adiciona o valor na lista
function adicionar(){
    if (inNumero (num.value) && !inLista (num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = "" // limpa o resultado

    } else { 
    window.alert ('Valor inválido ou já encontrado na lista')

    }
    //apaga o valor já digitado
    num.value = ""
    num.focus()
}
function analisar() {
    if (valores.length == 0) {
        window.alert ('Adicione valores antes de finalizar!')

    
    } else {
        let total = valores.length
        let maior = valores [0] // o valor que está em 0 é o maior se não houver outro
        let menor = valores [0]  //o valor que está em 0 é o menor se não houver outro
        let soma = 0
        let media = 0
    // Analisa qual o número menor e qual o maior
        for (let pos in valores) {
            soma += valores[pos] // Soma todos os valores
            if (valores[pos] > maior )
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
    // Mostra o resultado
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
    
}

