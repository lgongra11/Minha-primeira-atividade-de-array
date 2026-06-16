let nota = [6,8,7,3,8.5,4]
let acima = 0
for (i = 0; i < nota.length; i++){
    if (nota[i] >= 7){
        acima = acima + 1
    }
}
console.log("Quantidade de notas boas: "+acima)