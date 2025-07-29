const idBotaoGerarConselho = document.getElementById('id-botao')
const idNumeroDoConselho = document.getElementById('id-numero-conselho')
const idTextoDoConselho = document.getElementById('id-conselho')

idBotaoGerarConselho.addEventListener('click', gerarConselho)

async function gerarConselho() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const conselho = await fetch(url)
        const dados =  await conselho.json()
        idNumeroDoConselho.innerText = `ADVICE #${dados.slip.id}`
        idTextoDoConselho.innerText = dados.slip.advice
    } catch (err) {
        console.log(err)
    }
}

gerarConselho()