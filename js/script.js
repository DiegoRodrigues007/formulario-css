const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("senha");
const btn = document.getElementById("btn");
const textError = document.getElementsByClassName("text-error");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const valorNome = nameInput.value;
  const valorEmail = emailInput.value;
  const valorSenha = passwordInput.value;

  if (valorNome === "") {
    textError[0].innerHTML = "Preencha o campo nome";
  }
  if (valorEmail === "") {
    textError[1].innerHTML = "Preencha o campo email";
  }
  if (valorSenha === "") {
    textError[2].innerHTML = "Preencha o campo senha";
  }
});
