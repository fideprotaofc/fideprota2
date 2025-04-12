const startDate = new Date("2024-10-26");
const today = new Date();
const rose = document.getElementById("rose");

const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
const size = 50 + days * 2;

rose.style.width = `${size}px`;
rose.style.height = `${size}px`;
