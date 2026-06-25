const params =
    new URLSearchParams(window.location.search);

const idArtigo =
    Number(params.get("id"));

const artigo =
    artigos.find(
        item => item.id === idArtigo
    );

if (!artigo) {

    document.querySelector("main").innerHTML =
        "<h1>Artigo não encontrado.</h1>";

} else {

    document.getElementById("titulo")
        .textContent = artigo.titulo;

    document.getElementById("descricaoArtigo")
        .textContent = artigo.descricao;

    document
        .querySelector("#sec-introducao blockquote")
        .textContent = artigo.citacaoIntroducao;

    const conteudo =
        document.getElementById("conteudoArtigo");

    artigo.conteudo.forEach(bloco => {

        if (bloco.tipo === "paragrafo") {

            const p =
                document.createElement("p");

            p.textContent =
                bloco.texto;

            conteudo.appendChild(p);

        }

        if (bloco.tipo === "citacao") {

            const quote =
                document.createElement("blockquote");

            quote.textContent =
                bloco.texto;

            conteudo.appendChild(quote);

        }
    });
}

const containerArtigos =
    document.getElementById("containerArtigos");

const artigosRelacionados = artigos
    .filter(item => item.id !== idArtigo)
    .slice(0, 4);

artigosRelacionados.forEach(item => {

    containerArtigos.innerHTML += `
        <article class="card-artigo-relacionado">

            <h2>${item.titulo}</h2>

            <p>${item.descricao}</p>

            <a href="artigo.html?id=${item.id}">
                Ler Mais
            </a>

        </article>
    `;
});