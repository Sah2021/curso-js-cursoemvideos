function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saud = window.document.getElementById('saud')
    var data = new Date()
    var hora = data.getHours()
    //var hora= 3
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 18 && hora <= 24) {
        //Boa noite        
        img.src = "images/noite.png"       
        document.body.style.background = `#333d60`
        saud.innerText = 'Boa noite!'
        
    } else if (hora >= 13){
        //Boa tarde
         img.src = "images/tarde.png"
         document.body.style.background = `#ffae81`
         saud.innerText = 'Boa tarde!'
    } else if (hora >= 6){
        //Bom dia
        img.src = "images/manha.png"
        document.body.style.background = `#fede89`
        saud.innerText = 'Bom dia!'
    } else {
        img.src = "images/madrugada2.png"
        document.body.style.background = `#303135`
        saud.innerText = 'Boa madrugada!'
    }
   
} 
