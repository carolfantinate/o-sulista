const noticias = [
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
    }, {
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
        <img src="${noticia.imagem}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.autor}</p>
    `;

    gridNoticias.appendChild(card);
});