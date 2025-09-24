// main.js
const style = document.createElement("style");
style.textContent = `
  a, a:focus, a:active {
    outline: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }
  li {
    outline: 1px solid #423F32; /* mantém o seu outline customizado */
    outline-offset: 2px;
  }
`;
document.head.appendChild(style);

const GOOGLE_APS_SCRIPTS_URL = "https://script.google.com/macros/s/AKfycbxEUZf0gxI_EWH5gPN09OKFXyP8dkMOUMAgYtkAyelt6w2UCBm7_b0RzWZhkbYsC0SINA/exec";

function registrarEvento(tipo) {
  const payload = {
    tipo,
    dataHora: new Date().toLocaleDateString(),
    idioma: navigator.language || "Unknown",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: navigator.userAgent
  };

  fetch(GOOGLE_APS_SCRIPTS_URL, {
    method: "POST",
    mode: "no-cors",
    // headers: {
    //   "Content-Type": "application/json"
    // },
    body: JSON.stringify(payload)
  });
}

document.addEventListener("DOMContentLoaded", () => {
  registrarEvento("VISITAÇÃO");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    const tipo = link.dataset.tipo || "OUTRO";
    registrarEvento(tipo);
  });
});