document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('produtos');
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  if (!container) return;

  container.innerHTML = produtos.map(prod => \`
    <div class="produto">
      <img src="\${prod.imagem}" alt="\${prod.nome}">
      <h3>\${prod.nome}</h3>
      <p>\${prod.descricao}</p>
      <a href="https://wa.me/5538998848759?text=Quero comprar: \${encodeURIComponent(prod.nome)}" target="_blank">Comprar</a>
    </div>
  \`).join('');
});
