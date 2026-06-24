const tradicoes = [
    {
        imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVNZ7sA0mScsZGbossEbz6lzvw6Ema4j5KyG1FQEssb7BmVAvF",
        titulo: "Festas Típicas",
        descricao: "As festas típicas da Região Sul celebram as tradições herdadas que contribuíram para a formação cultural da região. Eventos como a Oktoberfest reúnem música, dança, gastronomia e costumes que mantêm viva a identidade cultural local.",
        link: "#sec-festas"
    },
    {
        imagem: "https://i.pinimg.com/736x/1a/99/f8/1a99f8d5b0fc525259adbe514e60b00e.jpg",
        titulo: "Danças Típicas",
        descricao: "As danças tradicionais preservam costumes e histórias transmitidos entre gerações, sendo presença marcante em festivais e celebrações culturais.",
        link: "#sec-dancas"
    },
    {
        imagem: "https://mega.ibxk.com.br/2022/08/19/19133545167187.jpg?ims=1232x490",
        titulo: "Gírias e Expressões",
        descricao: "Palavras como \"bah\", \"guri\", \"guria\" e \"tri\" fazem parte do cotidiano sulista e refletem a identidade e a forma de comunicação da região.",
        link: "#"
    },
    {
        imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPmM3WMxjwZI5drj50ld_xWOyx7NHy18ME3hX69X7wih9MWqPZ",
        titulo: "Costumes Regionais",
        descricao: "O chimarrão, a hospitalidade e a valorização das tradições familiares são alguns dos costumes que ajudam a manter viva a cultura do Sul do Brasil.",
        link: "#"
    },
]

const tradicoesContainer = document.getElementById("tradicoesContainer")

tradicoes.forEach((tradicao, index) => {
    tradicoesContainer.innerHTML += `
        <div class="card-tradicao ${index % 2 !== 0 ? 'card-tradicao-reverse' : ''}">
            <img src="${tradicao.imagem}" alt="${tradicao.titulo}">

            <div class="card-tradicao-info">
                <h2>${tradicao.titulo}</h2>    
                <p>${tradicao.descricao}</p>
                <a href="${tradicao.link}">Saber mais</a>
            </div>    
        </div>
    `;
});