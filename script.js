// Data de início do relacionamento
const startDate = new Date("2024-10-26");
const today = new Date();

// Calcular os dias passados
const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

// Seleciona o elemento da rosa
const rosa = document.getElementById('rosa');

// Animação do crescimento da rosa com base nos dias passados
const growth = 50 + (daysPassed * 2);  // A rosa cresce 2px por dia

rosa.style.width = `${growth}px`;
rosa.style.height = `${growth}px`;
rosa.style.animation = `rosaCrescer ${daysPassed}s ease-in-out`;
