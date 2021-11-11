function verificar(){
   var data = new Date()
   var ano = data.getFullYear() //pega o ano com 4 digitos
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('Verifique os dados e tente novamente')
   } else {
      // window.alert('Tudo ok!') Validou os dados
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      // res.innerHTML = `Idade calculada: ${idade}`
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto') //cria um id para imagens
      
      // Sexo masculino
      if (fsex[0].checked){
          genero = 'Homem'
          //Bebê
          if(idade >= 0 && idade < 4 ){
            img.setAttribute('src', 'imagens/bebem.png')
          //Criança    
        } else if (idade >= 4 && idade < 10){
            img.setAttribute('src', 'imagens/menino.png')
          //Adolescente
        } else if (idade >= 10 && idade < 18){
            img.setAttribute('src', 'imagens/adolescentem.png') 
          //Jovem
        } else if (idade >= 18 && idade < 30){
            img.setAttribute('src', 'imagens/jovemm.png')
          //Adulto
        } else if (idade >= 30 && idade < 60){
            img.setAttribute('src', 'imagens/homem.png')
          //Idoso  
        } else {
            img.setAttribute('src', 'imagens/idoso.png')

        }

      //Sexo feminino
      } else if (fsex[1].checked){
          genero = 'Mulher'
           //Bebê
           if(idade >= 0 && idade < 4 ){
            img.setAttribute('src', 'imagens/bebef.png')
            //Criança    
          } else if (idade >= 4 && idade < 10){
            img.setAttribute('src', 'imagens/menina.png')
            //Adolescente
          } else if (idade >= 10 && idade < 18){
            img.setAttribute('src', 'imagens/adolescentef.png')
            //Jovem
          } else if (idade >= 18 && idade < 30){
            img.setAttribute('src', 'imagens/jovemf.png')
            //Adulto
          } else if (idade >= 30 && idade < 60){
            img.setAttribute('src', 'imagens/mulher.png')
            //Idoso  
          } else {
            img.setAttribute('src', 'imagens/idosa.png')
  
          }
  
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}