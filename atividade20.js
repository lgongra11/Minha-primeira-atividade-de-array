let numeros = [2 , 6 , 19 , 78 , 99 , 405 , 506 , 352];
let pares = 0
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        pares++
    }
}
console.log('O número de pares é: ' + pares)