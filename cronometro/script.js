let contador = 0;
let enMarcha = null;

const tiempo = document.getElementById("tiempo");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reiniciar = document.getElementById("reiniciar");

function actualizar() {
  contador++;
  let hora = Math.floor(contador / 3600);
  let minuto = Math.floor((contador % 3600) / 60);
  let segundo = contador % 60;

  tiempo.textContent =
    `${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`;
}

function empezar() {
  if (enMarcha) return;
  enMarcha = setInterval(actualizar, 1000);
}

function detener() {
  clearInterval(enMarcha);
  enMarcha = null;
}

function resetear() {
  detener();
  contador = 0;
  tiempo.textContent = "00:00:00";
}

iniciar.addEventListener("click", empezar);
pausar.addEventListener("click", detener);
reiniciar.addEventListener("click", resetear);
