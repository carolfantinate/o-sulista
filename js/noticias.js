const gridNoticias = document.getElementById("grid-noticias");

const noticiaPrincipal = materias[0];

materias
    .filter(materia => materia.id !== noticiaPrincipal.id)
    .forEach(materia => {

        const card = document.createElement("article");

        card.classList.add("card-noticia");

        card.innerHTML = `
            <a href="materia.html?id=${materia.id}">
                <img src="${materia.imagemPrincipal}" alt="${materia.titulo}">
                <h3>${materia.titulo}</h3>
                <p>${materia.subtitulo}</p>
            </a>
        `;

        gridNoticias.appendChild(card);
    });

document.getElementById("img-not-principal").src = noticiaPrincipal.imagemPrincipal;

document.getElementById("titulo-principal").textContent = noticiaPrincipal.titulo;

document.getElementById("subtitulo-principal").textContent = noticiaPrincipal.subtitulo;

document.getElementById("desc-principal").textContent = noticiaPrincipal.descricao;

function acessarMateria() {
    window.location.href = "materia.html?id=1"
}

//---------artigos----------
const grupoColunas =
    document.getElementById("grupo-colunas");

if (grupoColunas) {

    artigos.slice(0, 2).forEach(artigo => {

        grupoColunas.innerHTML += `

            <article class="card-coluna-sulista">

                <h3>
                    ${artigo.titulo}
                </h3>

                <p>
                    ${artigo.descricao}
                </p>

                <a
                    href="artigo.html?id=${artigo.id}"
                    class="card-coluna-sulista-btn">

                    Ler Mais
                </a>

            </article>
        `;
    });
}