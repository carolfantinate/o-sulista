const costumes = [
    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_829495-MLB92982261542_092025-O.webp",
        titulo: "Cultura do Mate",
        descricao: "Embora o chimarrão mude de estilo (mais amargo no RS, mais suave e grosso no PR), o hábito de tomar mate quente diariamente é universal na região."
    },
    {
        imagem: "https://whiteroseforest.org/wp-content/uploads/2023/05/White-Rose-Forest-Shoot-111-low.jpg",
        titulo: "Preservação Dialetal",
        descricao: "Uso do pronome \"tu\" conjugado (ou não) de forma informal e o hábito de falar mais pausadamente do que no Sudeste."
    },
    {
        imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQW-VLzX7Z2ZcbX3uxGeCeBHWB6UudMFDJf1vgG4oC09knZMaLj",
        titulo: "A \"Cultura do Frio\"",
        descricao: "O inverno molda a rotina local. Há o hábito de usar fogão a lenha para aquecer a casa, consumir sopas, quentão e pinhão cozido."
    },
]

const containerCostumes = document.getElementById("containerCostumes")

costumes.forEach((costume, index) => {
    containerCostumes.innerHTML += `
    <article class="card-costume ${index === 1 ? 'card-costume-reverse' : ''}">
        <img src="${costume.imagem}" alt="${costume.titulo}">
        
        <div class="card-content-costume">
            <h3>${costume.titulo}</h3>
            <p>${costume.descricao}</p>
        </div>
    </article>
    `;
});