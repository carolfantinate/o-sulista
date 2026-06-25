//---------------DICAS---------------

const dicas = [
    {
        titulo: "🌤️ Verifique a previsão do tempo",
        descricao: "O clima na Região Sul pode variar bastante ao longo do ano. Consulte a previsão antes de viajar para escolher roupas e acessórios adequados."
    },
    {
        titulo: "🎒 Prepare sua bagagem com antecedência",
        descricao: "Leve itens essenciais para o seu roteiro, como documentos, carregadores, medicamentos e roupas apropriadas para as atividades planejadas."
    },
    {
        titulo: "📍 Pesquise os principais pontos turísticos",
        descricao: "Conhecer as atrações e horários de funcionamento ajuda a aproveitar melhor o tempo e evitar imprevistos."
    },
    {
        titulo: "🚗 Planeje seus deslocamentos",
        descricao: "Verifique as opções de transporte disponíveis e organize seus trajetos com antecedência para tornar a viagem mais prática."
    },
    {
        titulo: "📸 Respeite e preserve os locais visitados",
        descricao: "Ajude a conservar o patrimônio cultural e natural da região, descartando resíduos corretamente e respeitando as normas de cada local."
    }
];

const containerDicas = document.getElementById("dicasContainer");

dicas.forEach(dica => {
    containerDicas.innerHTML += `
                <div class="card-dica">
                    <h3>${dica.titulo}</h3>
                    <p>${dica.descricao}</p>
                </div>
            `;
});


//-----------------destino------------------
const destinos = [
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiX1STrCXc1sTuDt6aamlA9WnWVuM-2AnzrKePOOLunAm1JHaEF-aFd8&s=10",
        titulo: "Jardim Botânico de Curitiba",
        subtitulo: "Paraná",
        descricao: "Um dos principais cartões-postais de Curitiba, famoso por sua estufa inspirada em construções europeias e seus belos jardins.",
        local: "https://maps.app.goo.gl/1hhMiszna5BHzxUr8"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXF_mrfdPg_Yv_trirEVxZNQGSlwe_f4Jh2t4cWKjyPoXkaYDa72bUGfs&s=10",
        titulo: "Cataratas do Iguaçu",
        subtitulo: "Paraná",
        descricao: "Uma das maiores maravilhas naturais do mundo, com centenas de quedas d’água impressionantes.",
        local: "https://maps.app.goo.gl/5LcYpb8vNuMk2cKc6"
    },
    {
        imagem: "https://guiaviajarmelhor.com.br/wp-content/uploads/2021/07/praia-do-rosa-sc-3.jpg",
        titulo: "Praia do Rosa",
        subtitulo: "Santa Catarina",
        descricao: "Destino famoso por suas paisagens paradisíacas, águas cristalinas e contato direto com a natureza.",
        local: "https://maps.app.goo.gl/ATHxhFxqacT5fvSC8"
    },
    {
        imagem: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/36/d9/bc.jpg",
        titulo: "Beto Carrero World",
        subtitulo: "Santa Catarina",
        descricao: "O maior parque temático da América Latina, oferecendo atrações, espetáculos e diversão para todas as idades.",
        local: "https://maps.app.goo.gl/67oBpuTtvHokp6m5A"
    },
    {
        imagem: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/featured_images/imagem_destaque_2694.jpeg",
        titulo: "Balneário Camboriú",
        subtitulo: "Santa Catarina",
        descricao: "Conhecida por suas praias, vida noturna e atrações modernas, é um dos destinos turísticos mais visitados do Sul.",
        local: "https://maps.app.goo.gl/zNYMMLNwSUHNcj5D7"
    },
    {
        imagem: "https://caminhagente.com.br/wp-content/uploads/2025/06/gramado-1.jpeg",
        titulo: "Gramado",
        subtitulo: "Rio Grande do Sul",
        descricao: "Cidade encantadora da Serra Gaúcha, famosa por sua arquitetura, gastronomia e eventos que atraem turistas o ano inteiro.",
        local: "https://maps.app.goo.gl/8T9EVW31AWFJWT3N6"
    }
];

const containerDestinos = document.getElementById("cards-destinos");

containerDestinos.innerHTML = destinos.map(destino => `
        <article class="flip-card">
            <div class="flip-card-inner">

                <div class="card-front">
                    <img src="${destino.imagem}" alt="${destino.titulo}">
                    
                    <div class="card-content">
                        <h3>${destino.titulo}</h3>
                        <span>${destino.subtitulo}</span>
                    </div>
                </div>

                <div class="card-back">
                    <p><strong>${destino.titulo}</strong></p>
                    <p>${destino.descricao}</p>
                    <a href="${destino.local}" target="_blank">
                        <i class="fa-solid fa-location-dot"></i>
                        Localização
                    </a>
                </div>

            </div>
        </article>
`   ).join("");

//--------------------pacotes----------------

const pacotes = [
    {
        imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDJ7v49OB76l6dU_T-eBB5GffUs-4c6aE4EPlp77F75etui4QB",
        titulo: "Passagens Aéreas",
        subtitulo: "Compare voos e encontre promoções.",
        dicas: [
            "Compre com antecedência para encontrar melhores preços.",
            "Compare valores em diferentes plataformas.",
            "Considere datas flexíveis para economizar."
        ],
        links: [
            {
                nome: "Decolar",
                url: "https://www.decolar.com"
            },
            {
                nome: "Skyscanner",
                url: "https://www.skyscanner.com.br"
            },
            {
                nome: "Google Flights",
                url: "https://www.google.com/travel/flights"
            }
        ]
    },
    {
        imagem: "https://issoenoticia.com.br/wp-content/uploads/2026/01/Sem-titulo-188.jpg",
        titulo: "Hospedagem",
        subtitulo: "Pesquise hotéis, pousadas e acomodações.",
        dicas: [
            "Leia avaliações de hóspedes.",
            "Verifique a localização antes de reservar.",
            "Compare serviços inclusos no valor da diária."
        ],
        links: [
            {
                nome:"Booking",
                url: "https://www.booking.com/index.pt-br.html"
            },
            {
                nome: "Airbnb",
                url: "https://www.airbnb.com.br/"
            },
            {
                nome: "Trivago",
                url: "https://www.trivago.com.br/"
            }
        ]
    },
    {
        imagem: "https://clickpetroleoegas.com.br/wp-content/uploads/2025/07/cidade-florianopolis-ilha-da-magia-santa-catarina-qualidade-de-vida.jpg",
        titulo: "Pacotes de Viagem",
        subtitulo: "Descubra ofertas que incluem transporte e hospedagem.",
        dicas: [
            "Confira o que está incluso no pacote.",
            "Compare diferentes opções antes de contratar.",
            "Verifique políticas de cancelamento e alteração."
        ],
        links: [
            {
                nome:"CVC",
                url: "https://www.cvc.com.br/"
            },
            {
                nome: "Decolar",
                url: "https://www.decolar.com/"
            },
            {
                nome: "Viajanet",
                url: "https://www.viajanet.com.br/"
            }
        ]
    }
]

const containerPacotes = document.getElementById("pacotesContainer");

containerPacotes.innerHTML = pacotes.map(pacote => `
    <article class="flip-card-pac">
        <div class="flip-card-inner-pac">

            <div class="card-front-pac">
                <img src="${pacote.imagem}" alt="${pacote.titulo}">
                
                <div class="card-content-pac">
                    <h3>${pacote.titulo}</h3>
                    <span>${pacote.subtitulo}</span>
                </div>
            </div>

            <div class="card-back-pac">
                
                <h3>Dicas</h3>
                <ul>
                    ${pacote.dicas.map(dica => `<li>${dica}</li>`)
                    .join("")}
                </ul>

                <div class="divider"></div>

                <h3>
                    <i class="fa-solid fa-link"></i>
                    Links Úteis
                </h3>
                <ul>
                    ${pacote.links.map(link => `
                        <li>
                            <a href="${link.url}" target="_blank">
                                ${link.nome}
                            </a>
                        </li>
                    `).join("")}
                </ul>

            </div>

        </div>
    </article>
`).join("");

console.log(pacote);