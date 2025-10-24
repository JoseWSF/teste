// form-validation.js — verificação de consistência dos dados do cadastro

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede envio até validar

    const nome = form.querySelector("#nome");
    const email = form.querySelector("#email");
    const cpf = form.querySelector("#cpf");

    let valido = true;

    if (nome.value.trim().length < 3) {
      alert("⚠️ O nome deve ter pelo menos 3 caracteres.");
      valido = false;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("⚠️ Digite um e-mail válido.");
      valido = false;
    }

    if (cpf.value.length < 14) {
      alert("⚠️ Digite um CPF completo.");
      valido = false;
    }

    if (valido) {
      alert("✅ Cadastro enviado com sucesso! (simulação)");
      form.reset();
    }
  });
});
