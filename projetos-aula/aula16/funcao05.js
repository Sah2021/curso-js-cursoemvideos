// Recursividade

function fatorial (n){
    if ( n == 1 ) {
        return 1
    } else {
        return n * fatorial( n - 1 )
    }

}
console.log(fatorial(5)); // resultado 120

/*
5f = 5 x 4 x 3 x 2 x 1
5f = 5 x 4f
nf = n x (n-1)f
1f = 1 // fatorial de 1 é 1

*/