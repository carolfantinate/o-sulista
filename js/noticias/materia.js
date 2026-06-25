const parametros = new URLSearchParams(window.location.search);

const idMateria = Number(parametros.get("id"));

const materia = materias.find(item => item.id === idMateria);

if (!materia) {

    document.querySelector("main").innerHTML =
        "<h1>Matéria não encontrada.</h1>";

} else {

    document.getElementById("titulo").textContent =
        materia.titulo;

    document.getElementById("subtitulo").textContent =
        materia.subtitulo;

    document.getElementById("descricaoMateria").textContent =
        materia.descricao;

    document.getElementById("localMateria").textContent =
        materia.local;

    document.getElementById("imgPrincipal").src =
        materia.imagemPrincipal;

    document.getElementById("p1").textContent =
        materia.paragrafo1;

    document.getElementById("citacao").textContent =
        materia.citacao;

    document.getElementById("p2").textContent =
        materia.paragrafo2;

    document.getElementById("intertitulo").textContent =
        materia.intertitulo;

    document.getElementById("p3").textContent =
        materia.paragrafo3;

    document.getElementById("imgSecundaria").src =
        materia.imagemSecundaria;

    document.getElementById("miniTitulo").textContent =
        materia.miniTitulo;

    document.getElementById("mini-p").textContent =
        materia.miniTexto;

    document.getElementById("p4").textContent =
        materia.paragrafo4;
}

const containerNoticias =
    document.getElementById("containerNoticias");

materias
    .filter(item => item.id !== idMateria)
    .slice(0, 3)
    .forEach(item => {

        containerNoticias.innerHTML += `
            <a
                href="materia.html?id=${item.id}"
                class="card-leia-tambem"
            >
                <img
                    src="${item.imagemPrincipal}"
                    alt="${item.titulo}"
                    class="img-leia-mais"
                >

                <p class="titulo-not-leia-mais">${item.titulo}</p>
                <p class="autor-not-leia-mais">${item.subtitulo}</p>
            </a>
        `;
    });