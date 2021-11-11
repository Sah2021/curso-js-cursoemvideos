let valores = [8, 1, 7, 4, 2, 9]
console.log(valores);
valores.sort()

/*for (let pos = 0; pos < valores.length; pos++) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`);    
}*/

//Forma mais simplificada e moderna
for (let pos in valores) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
let posicao = valores.indexOf(4)
console.log(`\nO valor 4 está na posição ${posicao}`);
posicao = valores.indexOf(5)
console.log(`O valor 5 está na posição ${posicao} \n`); // -1 significa que o valor não foi encontrado

posicao = valores.indexOf(7)
if (posicao == -1) {
    console.log('O valor não foi encontrado');    
} else {
    console.log(`O valor está na posição ${posicao}` );
}
