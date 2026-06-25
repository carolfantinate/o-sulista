const noticias = [
    {
        id: 2,
        titulo: "Prefeitura barra arranha-céu em área turística de Balneário Camboriú",
        autor: "João Silva",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        id: 2,
        titulo: "Brasil vence campeonato internacional",
        autor: "Maria Souza",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        id: 2,
        titulo: "Descoberta científica surpreende pesquisadores",
        autor: "Pedro Santos",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    }, 
    {
        titulo: "Nova tecnologia promete revolucionar a IA",
        autor: "João Silva",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        titulo: "Brasil vence campeonato internacional",
        autor: "Maria Souza",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    },
    {
        titulo: "Descoberta científica surpreende pesquisadores",
        autor: "Pedro Santos",
        imagem: "https://www.cma.com.br/wp-content/uploads/2023/01/placeholder-87-1.png"
    }
];

const gridNoticias = document.getElementById("grid-noticias");

noticias.forEach(noticia => {
    const card = document.createElement("article");
    card.classList.add("card-noticia");

    card.innerHTML = `
    <a href="materia.html?id=${noticia.id}">
        <img src="${noticia.imagem}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.autor}</p>
        </a>
    `;

    gridNoticias.appendChild(card);
});

function acessarMateria() {
    window.location.href = "materia.html?id=1"
}