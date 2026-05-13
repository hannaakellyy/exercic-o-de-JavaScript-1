function Arrecadação (){
    let calcular = 0
    let bonus = 0
    let pessoa = parseInt (prompt ("quem está doando? digite 1 para doador bronze, digite 2 para doador prata, digite 3 para doador ouro. qualquer outra opção que não seja uma dessas dará como opção inválida"));
    
    switch (pessoa){
    case 1:
    bonus = valor
    break;
    case 2:
        bonus = 10
        break;
        case 3:
        bonus = 20
        break;
        default:
        console.log ("opção inválida");
    
    }   
    
    let valor = prompt ("digite o valor da doação")
    if (valor <= 0){
    console.log ("valor inválido")
    }
    else if (valor > 0) {
    calcular = bonus/100 * valor
    console.log (calcular)
    }
}
Arrecadação ();