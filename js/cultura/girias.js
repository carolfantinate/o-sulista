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
    {
        giria: "Istepô",
        estado: "SC",
        local: "Santa Catarina",
        exemplo: "\"Aquele istepô bateu o carro na garagem\"",
        explicacao: "Istepô: Pessoa tonta, que só faz bobagem ou que atrapalha"
    },
    {
        giria: "Dazumbanho",
        estado: "SC",
        local: "Santa Catarina",
        exemplo: "\"O guri jogou muita bola ontem e no treino de hoje dazumbanho também.\"",
        explicacao: "Dazumbanho: Significa que alguém mandou muito bem, deu um show ou fez algo excelente"
    },
    {
        giria: "Mandrião",
        estado: "SC",
        local: "Santa Catarina",
        exemplo: "\"Aquele piá acordou meio mandrião hoje.\"",
        explicacao: "Mandrião: Alguém preguiçoso, que não quer fazer nada"
    },
    {
        giria: "Seganza",
        estado: "SC",
        local: "Santa Catarina",
        exemplo: "\"Não seja um seganza para se arrumar, a sua irmã já está pronta.\"",
        explicacao: "Seganza: Pessoa devagar, lenta ou que demora para reagir"
    },
    {
        giria: "Mata-bicho",
        estado: "PR",
        local: "Paraná",
        exemplo: "\"Já tomei meu mata-bicho hoje.\"",
        explicacao: "Uma das expressões mais conhecidas, simbolizando um lanche rápido ou o café da manhã."
    },
    {
        giria: "Piá / Guria",
        estado: "PR",
        local: "Paraná",
        exemplo: "\"O piá foi ali matar o bicho.\"",
        explicacao: "Termos utilizados para se referir a menino e menina. É o equivalente ao \"guri\" do Rio Grande do Sul, mas \"piá\" (de origem indígena) é a marca registrada do Paraná."
    },
    {
        giria: "Ficar de revesgueio",
        estado: "PR",
        local: "Paraná",
        exemplo: "\"O piá ficou me olhando de revesgueio no ônibus\"",
        explicacao: "Olhar de lado, de soslaio, ou algo que ficou meio torto"
    },
    {
        giria: "Gasosa",
        estado: "PR",
        local: "Paraná",
        exemplo: "\"O piá já tomou toda a gasosa do almoço\"",
        explicacao: "Utilizada para dizer refrigerante. Geralmente associado às marcas locais antigas (como a Cini)."
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