// login.js

document.addEventListener("DOMContentLoaded", () => {
  const entrarButton = document.getElementById("entrar-button");
  const nomeInput = document.getElementById("nome");
  const senhaInput = document.getElementById("senha");

  entrarButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const senha = senhaInput.value.trim();

    if (nome !== "" && senha !== "") {
      window.location.href = "products.html";
    } else {
      window.alert("Nome e senha precisam ser preenchidos");
    }
  });
});
