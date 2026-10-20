async function buscarCep() {
    const campoCep = document.getElementById('cep')
    const resultado = document.getElementById('resultado')

    const cep = campoCep.value.replace(/\D/g, "")

    // Validar CEP com 8 números
    if(campoCep.length !== 8) {
        resultado.innerHTML = '<p class="erro">Digite um CEP válido com 8 números!</p>'
        return
    }

    resultado.innerHTML = 'Consultando CEP...'

    try {
        // Aguardando a resposta da API
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)

        // Aguarda -await a conversão da resposta em JSON
        const endereco = await response.json()

        if(endereco.erro) {
            resultado.innerHTML = '<p class="erro">CEP não encontrado</p>'
            return
        }
        resultado.innerHTML = `
        <h2>Endereço encontrado!</h2>
        <p><strong>CEP:</strong>${endereco.cep}</p>
        <p><strong>Logradouro: </strong>${endereco.logradouro}</p>
        <p><strong>Bairro: </strong>${endereco.bairro}</p>
        <p><strong>Cidade: </strong>${endereco.cidade}</p>
        <p><strong>Estado: </strong>${endereco.uf}</p>
        `

    } catch (error) {
        resultado.innerHTML = '<p class="erro">Erro ao consultar o CEP</p>'
        console.error(error)       
    }
}