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

document.getElementById("img-not-principal").src =
    noticiaPrincipal.imagemPrincipal;

document.getElementById("titulo-principal").textContent =
    noticiaPrincipal.titulo;

document.getElementById("subtitulo-principal").textContent =
    noticiaPrincipal.subtitulo;

document.getElementById("descricao-principal").textContent =
    noticiaPrincipal.descricao;

function acessarMateria() {
    window.location.href = "materia.html?id=1"
}