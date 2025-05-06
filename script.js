document.addEventListener("DOMContentLoaded", function () {
  const textContact = document.querySelector(".text_contact");
  const formContact = document.querySelector(".form_contact");
  const btnContact = document.querySelector(".btn_contact button");
  const btnForm = document.querySelector(".btn_form button");

  // Troca de exibição com animação CSS
  const show = (elementToShow, elementToHide) => {
    elementToHide.classList.remove("fade-in");
    elementToHide.classList.add("fade-out");

    setTimeout(() => {
      elementToHide.classList.add("hidden");
      elementToHide.classList.remove("fade-out");

      elementToShow.classList.remove("hidden");
      elementToShow.classList.add("fade-in");
    }, 500);
  };

  // Exibe formulário
  btnContact.addEventListener("click", () => {
    show(formContact, textContact);
  });

  // Envia para o WhatsApp e volta para o texto
  btnForm.addEventListener("click", () => {
    const name = document.querySelector('input[name="name"]').value.trim();
    const age = document.querySelector('input[name="age"]').value.trim();
    const proposito = document.querySelector('textarea[name="proposito"]').value.trim();

    if (!name || !age || !proposito) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const message = `Olá Luana, meu nome é ${name}, tenho ${age} anos e meu propósito com a consultoria é: ${proposito}`;
    const whatsappNumber = "5519997960605"; // seu número
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    show(textContact, formContact); // Volta pro texto
  });
});
