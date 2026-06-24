const girias = [
    {
        giria: "Bah!",
        estado: "RS",
        local: "Rio Grande do Sul",
        exemplo: "\"Bah, que lugar bonito!\"",
        explicacao: "Uma das expressões mais conhecidas da região. Pode indicar surpresa, admiração, espanto ou até indignação, dependendo do contexto."
    },
    {
        giria: "Guir/Guria",
        estado: "RS",
        local: "Rio Grande do Sul",
        exemplo: "\"Aquele guri joga muito bem.\"",
        explicacao: "Termos utilizados para se referir a meninos e meninas. São palavras muito presentes no cotidiano dos sulistas."
    },
    {
        giria: "Capaz!",
        estado: "RS",
        local: "Rio Grande do Sul",
        exemplo: "\"Capaz que eu vou perder isso!\"",
        explicacao: "Pode expressar surpresa, discordância ou até mesmo humildade, dependendo da situação em que é utilizada."
    },
    {
        giria: "Tri",
        estado: "RS",
        local: "Rio Grande do Sul",
        exemplo: "\"Esse passeio foi tri legal!\"",
        explicacao: "Utilizada para intensificar algo positivo. Expressões como \"tri legal\" ou \"tri bonito\" significam muito legal ou muito bonito."
    },
]

const containerGirias = document.getElementById("containerGirias")

function renderizarGirias(lista) {

    containerGirias.innerHTML = "";

    lista.forEach(giria => {

        containerGirias.innerHTML += `
            <div class="card-giria">
                <p><strong>${giria.giria}</strong> | </p>
                <p>${giria.local}</p>
                <p class="card-giria-ex">${giria.exemplo}</p>
            </div>

            <p>${giria.explicacao}</p>
        `;

    });

}

renderizarGirias(girias);

const selectEstadoGirias =
    document.getElementById("selectEstadoGirias");

selectEstadoGirias.addEventListener("change", () => {

    const estadoSelecionado =
        selectEstadoGirias.value;

    if (estadoSelecionado === "todos") {

        renderizarGirias(girias);

        return;
    }

    const giriasFiltradas =
        girias.filter(giria =>
            giria.estado === estadoSelecionado
        );

    renderizarGirias(giriasFiltradas);

});