const time = setInterval(() => {
  const timer = document.getElementById("root");
  const now = new Date();
  timer.innerHTML = now.toLocaleTimeString();
}, 1000);

const timer = document.getElementById("root");
timer.style.fontSize = "100px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.height = "100vh";
// create an olympic countdown timer
