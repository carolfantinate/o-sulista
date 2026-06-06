const locaisTuristicos = [
    {
        nome: "Balneário Camboriú",
        cidade: "Balneário Camboriú",
        estado: "Santa Catarina",
        imagem: "https://www.civitatis.com/blog/wp-content/uploads/2024/12/capa-scaled.jpg"
    },
    {
        nome: "Beto Carrero World",
        cidade: "Penha",
        estado: "Santa Catarina",
        imagem: "https://omnibees.com/wp-content/uploads/2025/04/beto-carrero-world-parque.jpg"
    },
    {
        nome: "Gramado",
        cidade: "Gramado",
        estado: "Rio Grande do Sul",
        imagem: "https://blog.vitaboulevard.com.br/wp-content/uploads/2022/11/gramado-rs.jpg"
    },
    {
        nome: "Ilha do Mel",
        cidade: "Paranaguá",
        estado: "Paraná",
        imagem: "https://viagemeturismo.abril.com.br/wp-content/uploads/2024/10/ilha-do-mel-parana.jpg?crop=1&resize=1212,909"
    },
    {
        nome: "Cataratas do Iguaçu",
        cidade: "Foz do Iguaçu",
        estado: "Paraná",
        imagem: "https://s3.static.brasilescola.uol.com.br/be/2022/10/cataratas-iguacu.jpg"
    },
];

const track = document.getElementById("carousel-track");

locaisTuristicos.forEach(local => {

    const card = document.createElement("div");
    card.classList.add("card-turistico");

    card.innerHTML = `
        <img src="${local.imagem}" alt="${local.nome}">

        <div class="card-info">
            <h3>${local.nome}</h3>
            <p>${local.cidade}, ${local.estado}</p>
        </div>
    `;

    track.appendChild(card);

});

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

let posicao = 0;

btnNext.addEventListener("click", () => {

    const larguraCard = 280;

    posicao += larguraCard;

    const limite =
        track.scrollWidth -
        document.querySelector(".carousel-view").clientWidth;

    if(posicao > limite){
        posicao = limite;
    }

    track.style.transform =
        `translateX(-${posicao}px)`;

});

btnPrev.addEventListener("click", () => {

    const larguraCard = 280;

    posicao -= larguraCard;

    if(posicao < 0){
        posicao = 0;
    }

    track.style.transform =
        `translateX(-${posicao}px)`;

});