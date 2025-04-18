document.addEventListener('DOMContentLoaded', () => {
  const containerProdutos = document.getElementById('produtos');
  const containerCategorias = document.getElementById('categorias');
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const categorias = JSON.parse(localStorage.getItem('categorias')) || [];

  if (!containerProdutos || !containerCategorias) return;

  // Exibindo categorias
  containerCategorias.innerHTML = categorias.map(categoria => `
    <div class="categoria">
      <h3>${categoria.nome}</h3>
      <p>${categoria.descricao}</p>
    </div>
  `).join('');

  // Exibindo produtos
  containerProdutos.innerHTML = produtos.map(prod => `
    <div class="produto">
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p>${prod.descricao}</p>
      <a href="https://wa.me/5538998848759?text=Quero comprar: ${encodeURIComponent(prod.nome)}" target="_blank">Comprar</a>
    </div>
  `).join('');
});
