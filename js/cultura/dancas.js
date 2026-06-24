
const dancas = [
    {
        video: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVNZ7sA0mScsZGbossEbz6lzvw6Ema4j5KyG1FQEssb7BmVAvF",
        titulo: "Chula",
        local: "Rio Grande do Sul",
        descricao: "A Chula é uma dança tradicional gaúcha executada principalmente por homens. Marcada por movimentos ágeis e desafios de habilidade, é uma das manifestações folclóricas mais conhecidas do estado.",
    },
    {
        video: "https://i.pinimg.com/736x/1a/99/f8/1a99f8d5b0fc525259adbe514e60b00e.jpg",
        titulo: "Pézinho",
        local: "Rio Grande do Sul",
        descricao: "O Pezinho é uma das danças folclóricas mais populares do Rio Grande do Sul. Dançada em pares, simboliza a alegria e a integração presentes nas festas tradicionais gaúchas.",
    },
    {
        video: "https://mega.ibxk.com.br/2022/08/19/19133545167187.jpg?ims=1232x490",
        titulo: "Vaneira",
        local: "Rio Grande do Sul",
        descricao: "A vaneira é uma dança de salão muito popular na Região Sul. Dançada em pares, possui ritmo animado e origem influenciada por diferentes tradições culturais trazidas pelos imigrantes europeus. É presença marcante em bailes e festas.",
    },
    {
        video: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPmM3WMxjwZI5drj50ld_xWOyx7NHy18ME3hX69X7wih9MWqPZ",
        titulo: "Pau de Fitas",
        local: "Santa Catarina",
        descricao: "O Pau de Fitas é uma dança folclórica tradicional executada ao redor de um mastro decorado com fitas coloridas. Durante a apresentação, os dançarinos entrelaçam e desenlaçam as fitas em movimentos sincronizados, simbolizando união, cooperação e celebração.",
    },
]

const dancasContainer = document.getElementById("dancasContainer")

dancas.forEach((danca, index) => {
    dancasContainer.innerHTML += `
        <div class="card-danca ${index % 2 !== 0 ? 'card-danca-reverse' : ''}">
            <video src="${danca.video}" ${danca.titulo}></video>

            <div class="card-danca-info">
                <h2>${danca.titulo}</h2>
                <h3>${danca.local}</h3>
                <p>${danca.descricao}</p>
            </div>    
        </div>
    `;
});