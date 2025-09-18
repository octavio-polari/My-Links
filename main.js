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
