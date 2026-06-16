let numeros = [4 , 78 , 56, 198 , 309 , 243]
let maior = numeros[0]
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log('O maior número é o ' + maior)
