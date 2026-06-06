async function carregarCotacoes() {
    try {
        const resposta = await fetch(
            "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL"
        );

        const dados = await resposta.json();

        document.getElementById("dolar").innerHTML = `
            <span class="moeda">$</span>
            <p class="subtitulo-card">Dólar</p>
            <p class="cotacao-valor">R$ ${Number(dados.USDBRL.bid).toFixed(2)}</p>
        `

        document.getElementById("euro").innerHTML = `
            <span class="moeda">€</span>
            <p class="subtitulo-card">Euro</p>
            <p class="cotacao-valor">R$ ${Number(dados.EURBRL.bid).toFixed(2)}</p>
        `

        document.getElementById("libra").innerHTML = `
            <span class="moeda">£</span>
            <p class="subtitulo-card">Libra Esterlina</p>
            <p class="cotacao-valor">R$ ${Number(dados.GBPBRL.bid).toFixed(2)}</p>
        `

    } catch (error) {
        console.error("Erro ao carregar cotações:", error);
    }
}

carregarCotacoes();