
const tirinhas = [
    {
        titulo: "Tirinha 1",
        autor: "Autor 1",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        titulo: "Tirinha 2",
        autor: "Autor 2",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        titulo: "Tirinha 3",
        autor: "Autor 3",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        titulo: "Tirinha 4",
        autor: "Autor 4",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        titulo: "Tirinha 5",
        autor: "Autor 5",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    }
];

const carousel = document.getElementById("carousel")

let current = 0

function criarCard(tirinha, classe) {
    const card = document.createElement("div")

    card.className = `card ${classe}`

    card.innerHTML = `
                <img src="${tirinha.imagem}" alt="${tirinha.titulo}">

                <div class="info">
                    <h3>${tirinha.titulo}</h3>
                    <p>${tirinha.autor}</p>
                </div>
            `;

    return card;
}

function renderizar() {

    const esquerda =
        tirinhas[
        (current - 1 + tirinhas.length) %
        tirinhas.length
        ];

    const centro =
        tirinhas[current];

    const direita =
        tirinhas[
        (current + 1) %
        tirinhas.length
        ];

    const cards = carousel.querySelectorAll(".card");

    // Primeira renderização
    if (cards.length === 0) {

        carousel.appendChild(
            criarCard(esquerda, "left")
        );

        carousel.appendChild(
            criarCard(centro, "center")
        );

        carousel.appendChild(
            criarCard(direita, "right")
        );

        return;
    }

    // Atualiza apenas o conteúdo
    atualizarCard(cards[0], esquerda);
    atualizarCard(cards[1], centro);
    atualizarCard(cards[2], direita);
}

function atualizarCard(card, tirinha) {

    card.querySelector("img").src =
        tirinha.imagem;

    card.querySelector("img").alt =
        tirinha.titulo;

    card.querySelector("h3").textContent =
        tirinha.titulo;

    card.querySelector("p").textContent =
        tirinha.autor;
}

document
    .getElementById("next")
    .addEventListener("click", () => {

        const cards =
            carousel.querySelectorAll(".card");

        cards[0].className =
            "card right";

        cards[1].className =
            "card left";

        cards[2].className =
            "card center";

        setTimeout(() => {

            current =
                (current + 1) %
                tirinhas.length;

            renderizar();

            cards[0].className =
                "card left";

            cards[1].className =
                "card center";

            cards[2].className =
                "card right";

        }, 450);

    });


document
    .getElementById("prev")
    .addEventListener("click", () => {

        const cards =
            carousel.querySelectorAll(".card");

        cards[0].className =
            "card center";

        cards[1].className =
            "card right";

        cards[2].className =
            "card left";

        setTimeout(() => {

            current =
                (current - 1 + tirinhas.length) %
                tirinhas.length;

            renderizar();

            cards[0].className =
                "card left";

            cards[1].className =
                "card center";

            cards[2].className =
                "card right";

        }, 450);

    });

renderizar()