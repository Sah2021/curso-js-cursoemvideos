function contar(){
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")

    if (num.value.length == 0){
        window.alert('Por favor, digite um número')     
    } else {
        var n = Number(num.value) //numero digitado
        var c = 1
        tab.innerHTML = "" //antes de mostrar a tabuada limpa a tela
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //não faz sentido no JS, mas em outras linguagens
            tab.appendChild (item)
            c++            
        }        
    }
    

}
/* Fiz alterações no código para deixar do jeito que eu queria */