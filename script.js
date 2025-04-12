// Data de início do relacionamento (ano, mês - 1, dia)
const dataInicio = new Date(2023, 0, 1); // Exemplo: 1º de janeiro de 2023

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const segundos = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30);

  document.getElementById('contador').innerText =
    `${meses} meses, ${dias % 30} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos`;

  // Aumenta o tamanho da flor com base nos dias
  const escala = 1 + dias * 0.01;
  document.getElementById('flor').style.transform = `scale(${escala})`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
