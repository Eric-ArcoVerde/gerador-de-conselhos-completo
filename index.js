document.getElementById('id-botao').addEventListener('click', () => { passarDados() })

async function gerarConselho() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const conselho = await fetch(url)
        return await conselho.json()
    } catch (err) {
        console.log(err)
    }
}

async function pegarIdDoConselho() {
    try {
        const conselhoCompleto = await gerarConselho()
        const idConselho = conselhoCompleto.slip.id
        console.log(idConselho)
        return idConselho
    } catch (err) {
        console.log(err)
    }
}

async function pegarTextoDoConselho() {
    try {
        const conselhoCompleto = await gerarConselho()
        const textoConselho = conselhoCompleto.slip.advice
        console.log(textoConselho)
        return textoConselho
    } catch (err) {
        console.log(err)
    }
}

async function passarDados() {   
    pegarIdDoConselho()
    .then(pegarTextoDoConselho())
    .then((id, texto) => {
        document.getElementById('id-numero-conselho').innerText = `ADVICE #${id}`
        document.getElementById('id-conselho').innerText = texto
    })
}

passarDados()