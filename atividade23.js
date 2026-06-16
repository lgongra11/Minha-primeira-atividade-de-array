let nota = [7,6,0,9,8]
for (i = 0; i < nota.length; i++){
    if (nota[i] < 6){
        console.log("Existe nota abaixo da média")
    }else if (nota[i] > 6 && i == nota.length){
        console.log("Todas as notas estão boas")
    }
}