function obterEmojiClima(codigo) {
    if (codigo === 0) return "☀️";

    if ([1, 2, 3].includes(codigo)) return "⛅";

    if ([45, 48].includes(codigo)) return "🌫️";

    if ([51, 53, 55, 56, 57].includes(codigo)) return "🌦️";

    if ([61, 63, 65, 66, 67].includes(codigo)) return "🌧️";

    if ([71, 73, 75, 77].includes(codigo)) return "❄️";

    if ([80, 81, 82].includes(codigo)) return "🌦️";

    if ([95, 96, 99].includes(codigo)) return "⛈️";

    return "🌤️";
}

async function carregarClima(estado, cidade, latitude, longitude, elementoId) {
    try {
        const resposta = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America/Sao_Paulo`
        );

        const dados = await resposta.json();

        const emojiAtual = obterEmojiClima(dados.current.weather_code);

        const diasSemana = [
            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "Sáb"
        ];

        let previsaoHTML = "";

        for (let i = 1; i <= 3; i++) {
            const data = new Date(dados.daily.time[i]);
            const diaSemana = diasSemana[data.getDay()];
            const emojiDia = obterEmojiClima(dados.daily.weather_code[i]);

            previsaoHTML += `
                <div class="dia-previsao">
                    <span class="dia-semana">${diaSemana}</span>
                    <span class="emoji-seguinte">${emojiDia}</span>
                    <span>↑ ${dados.daily.temperature_2m_max[i]}°</span>
                    <span>↓ ${dados.daily.temperature_2m_min[i]}°</span>
                </div>
            `;
        }

        document.getElementById(elementoId).innerHTML = `
            <span class="emoji-clima">${emojiAtual}</span>

            <p class="estado">${estado}</p>
            <h4>${cidade}</h4>

            <p class="temperatura-atual">
                ${emojiAtual} ${dados.current.temperature_2m}°
            </p>

            <div class="info-adicional-clima">
                <p>↑ ${dados.daily.temperature_2m_max[0]}°C</p>
                <p>↓ ${dados.daily.temperature_2m_min[0]}°C</p>
                <p>💧 ${dados.current.relative_humidity_2m}%</p>
                <p>💨 ${dados.current.wind_speed_10m} km/h</p>
            </div>

            <div class="previsao-3-dias">
                ${previsaoHTML}
            </div>
        `;
    } catch (error) {
        console.error(error);
    }
}

carregarClima("Paraná", "Curitiba", -25.43, -49.27, "clima-curitiba");
carregarClima("Santa Catarina", "Florianópolis", -27.59, -48.55, "clima-floripa");
carregarClima("Rio Grande do Sul", "Porto Alegre", -30.03, -51.23, "clima-porto-alegre");