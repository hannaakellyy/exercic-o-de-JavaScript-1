let numero = [5, 7, 8, 9, 11, 10, 20, 30, 80, 70];
let somar = 0
for (let i = 0; i < numero.length; i++){
    if (numero[i]%2 === 0){
       somar = somar + 1 
    }
}
console.log (somar);