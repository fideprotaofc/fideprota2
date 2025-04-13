fetch("filmes.json")
  .then(response => response.json())
  .then(filmes => {
    const container = document.getElementById("filmes-container");

    filmes.forEach(filme => {
      const card = document.createElement("div");
      card.className = "filme";
      card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h3>${filme.titulo}</h3>
        <p>${filme.descricao}</p>
        <a href="${filme.link}" target="_blank">Assistir</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Erro ao carregar filmes:", error));
