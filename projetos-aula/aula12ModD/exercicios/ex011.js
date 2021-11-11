var idade = 20
console.log(`Você tem ${idade} anos`);
if (idade < 16){
console.log('Não vota');
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional');
    } else {
        console.log('Vota');
}

/* outra forma de escrever o código
var idade = 12
if (idade <16){
    console.log('Não vota')
} if (idade >=16 && idade < 18){
    console.log('Voto opcional')
} else {
    console.log('Vota')
}*/