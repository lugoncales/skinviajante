function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        // Constrói o HTML para cada item do resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
        `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}