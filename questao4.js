let data = [
    {us: "sp", faturamento: 67836.43},
    {us: "rj", faturamento: 36678.66},
    {us: "mg", faturamento: 29229.88},
    {us: "es", faturamento: 27165.48},
    {us: "outros", faturamento: 19849.53}
]
let x = 0

function totalFaturamento(){
    for(let i = 0; i < data.length; i++){
        x += data[i].faturamento
    }
    return x
}

function percentualParticipacao(){
    for(let i = 0; i < data.length; i++){
        data[i].porcentagem = (data[i].faturamento / x) * 100 
        console.log(`${data[i].us} - ${data[i].porcentagem.toFixed(2)} %`)
    }
}
totalFaturamento()
percentualParticipacao()






   
    
    
    




