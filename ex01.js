import PromptSync from "prompt-sync";

const prompt = PromptSync()

function calcularPrecoComDesconto(valor, qtd, callback){
    const total = valor*qtd
    callback(total)
}

const valor = Number(prompt("Digite o valor do produto: "))
const quantidade = Number(prompt("Digite quantos produtos foram comprados: "))

const valorFinal = calcularPrecoComDesconto(valor, quantidade, (total)=>{
    let novoValor = total
    if(total > 1000){
        novoValor = total*0.7 //caso o valor seja maior que 1000, 30% de desconto
    } else if (total > 500){
        novoValor = total*0.8 //caso o valor seja maior que 500, 20% de desconto
    }

    console.log(`Valor original: ${total} \nValor do desconto: ${total-novoValor} \nValor após o desconto: ${novoValor}`)
})