// Injetando regra global no <head>
const style = document.createElement("style");
style.textContent = `
  * {
    -webkit-tap-highlight-color: transparent !important;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus,
  a:focus,
  a:active {
    outline: 2px solid #ff0000 !important; /* cor que você quer */
    outline-offset: 2px;
  }
`;
document.head.appendChild(style);
