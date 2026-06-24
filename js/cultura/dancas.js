const dancas = [
    {
        video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qqrKpRFnvLE?si=Tpxyz827n_5BEFN1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        titulo: "Chula",
        local: "Rio Grande do Sul",
        descricao: "A Chula é uma dança tradicional gaúcha executada principalmente por homens. Marcada por movimentos ágeis e desafios de habilidade, é uma das manifestações folclóricas mais conhecidas do estado.",
    },
    {
        video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uEcVSXPfgtU?si=ogHRevJoA8z0roxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        titulo: "Pézinho",
        local: "Rio Grande do Sul",
        descricao: "O Pezinho é uma das danças folclóricas mais populares do Rio Grande do Sul. Dançada em pares, simboliza a alegria e a integração presentes nas festas tradicionais gaúchas.",
    },
    {
        video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I8D0HONp5eM?si=IqCrlkNcWJpHlwJd\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        titulo: "Vaneira",
        local: "Rio Grande do Sul",
        descricao: "A vaneira é uma dança de salão muito popular na Região Sul. Dançada em pares, possui ritmo animado e origem influenciada por diferentes tradições culturais trazidas pelos imigrantes europeus. É presença marcante em bailes e festas.",
    },
    {
        video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/i8NT_Dl8ajI?si=eM0alzkPGPGdoWug\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        titulo: "Pau de Fitas",
        local: "Santa Catarina",
        descricao: "O Pau de Fitas é uma dança folclórica tradicional executada ao redor de um mastro decorado com fitas coloridas. Durante a apresentação, os dançarinos entrelaçam e desenlaçam as fitas em movimentos sincronizados, simbolizando união, cooperação e celebração.",
    },
]

const dancasContainer = document.getElementById("dancasContainer")

dancas.forEach((danca, index) => {
    dancasContainer.innerHTML += `
        <div class="card-danca ${index % 2 !== 0 ? 'card-danca-reverse' : ''}">
            ${danca.video}

            <div class="card-danca-info">
                <h2>${danca.titulo}</h2>
                <h3>${danca.local}</h3>
                <p>${danca.descricao}</p>
            </div>    
        </div>
    `;
});