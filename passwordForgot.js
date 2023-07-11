// passwordForgot.js

document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-button");

  resetButton.addEventListener("click", () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (email === "") {
      alert("O e-mail precisa ser preenchido.");
    } else {
      alert("O link de definição foi enviado para o endereço informado.");
      window.location.href = "login.html";
    }
  });
});
``
