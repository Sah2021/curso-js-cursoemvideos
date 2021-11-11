var hora = 2
console.log(`Agora são exatamente ${hora} horas`);
if (hora >= 18 && hora <=24){
    console.log('Boa noite!!');
} else if (hora >= 13){
    console.log('Boa tarde!');
} else if (hora >= 6 ) {
    console.log('Bom dia!');
} else {
    console.log('Boa madrugada')
}