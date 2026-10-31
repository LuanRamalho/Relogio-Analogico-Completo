const clock = document.querySelector(".clock");

// Cria os traços dos minutos/segundos
for (let i = 0; i < 60; i++) {
  const mark = document.createElement("span");
  mark.className = i % 5 === 0 ? "mark major" : "mark";
  mark.style.setProperty("--angle", i * 6 + "deg");
  clock.appendChild(mark);
}

// Cria os números das horas (1 a 12)
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.className = "number";
  number.style.setProperty("--angle", i * 30 + "deg");
  
  const span = document.createElement("span");
  span.textContent = i;
  number.appendChild(span);
  
  clock.appendChild(number);
}

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateClock() {
  const now = new Date();
  const s = now.getSeconds() + now.getMilliseconds() / 1000;
  const m = now.getMinutes() + s / 60;
  const h = (now.getHours() % 12) + m / 60;

  hour.style.transform = `rotate(${h * 30}deg)`;
  minute.style.transform = `rotate(${m * 6}deg)`;
  second.style.transform = `rotate(${s * 6}deg)`;
}

updateClock();
setInterval(updateClock, 50);