const festas = [
    {
        imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSX_TwD9vRGy073F9GJswzSZe3CbFS2Tv2h1e5sjZCV-U9stDmn",
        titulo: "🍺 Oktoberfest",
        subtitulo: "Blumenau — Santa Catarina (SC)",
        pergunta: "🍺 O que é a Oktoberfest?",
        descricao: "A Oktoberfest é a maior festa de tradição alemã das Américas. Realizada anualmente em Blumenau, celebra a cultura germânica por meio de música, danças folclóricas, gastronomia típica e desfiles temáticos."
    },
    {
        imagem: "https://www.flipar.com.br/wp-content/uploads/2024/01/Festa-da-Uva-e1705498775667.png",
        titulo: "🍇 Festa da Uva",
        subtitulo: "Caxias do Sul, (RS)",
        pergunta: "🍇 O que é a Festa da Uva?",
        descricao: "Celebrada em Caxias do Sul, a Festa da Uva homenageia a herança italiana e a importância da vitivinicultura para a região. O evento reúne apresentações culturais, gastronomia e exposições."
    },
    {
        imagem: "https://f.i.uol.com.br/fotografia/2015/07/26/534223-970x600-1.jpeg",
        titulo: "🎭 Festival de Dança de Joinville",
        subtitulo: "Joinville — Santa Catarina (SC)",
        pergunta: "🎭 O que é o Festival de Dança de Joinville?",
        descricao: "Reconhecido internacionalmente, o Festival de Dança de Joinville reúne artistas de diferentes estilos e promove a valorização da dança como expressão artística e cultural."
    },
    {
        imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF10mrjlorK0aXw4IzOeSfTY7NsUEuw_D03GghUqRzo1pT3syi",
        titulo: "🐎 Semana Farroupilha",
        subtitulo: "Rio Grande do Sul (RS)",
        pergunta: "🐎 O que é a Semana Farroupilha?",
        descricao: "A Semana Farroupilha celebra a cultura gaúcha por meio de tradições, música, culinária típica e atividades que resgatam a história do Rio Grande do Sul."
    },
    {
        imagem: "https://www.tupi.fm/wp-content/uploads/2025/01/Natal-Luz-de-Gramado-1024x540.jpg",
        titulo: "🎄 Natal Luz",
        subtitulo: "Gramado — Rio Grande do Sul (RS)",
        pergunta: "🎄O que é o Natal Luz?",
        descricao: "Realizado em Gramado, o Natal Luz transforma a cidade com espetáculos, apresentações artísticas e decorações temáticas que encantam visitantes de todas as idades."
    }
]

const containerFestas = document.getElementById("containerFestas")

festas.forEach(festa => {
    containerFestas.innerHTML += `
        <article class="flip-card-festa">
            <div class="flip-card-inner-festa">

                <div class="card-front-festa">
                    <img src="${festa.imagem}" alt="${festa.titulo}">
                    
                    <div class="card-content-festa">
                        <h3>${festa.titulo}</h3>
                        <span>${festa.subtitulo}</span>
                    </div>
                </div>

                <div class="card-back-festa">
                    <h3>${festa.pergunta}</h3>
                    <br>
                    <p>${festa.descricao}</p>
                </div>

            </div>
        </article>
    `
});