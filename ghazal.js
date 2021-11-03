const cardContent = [
  {
    name: "Mountain",
    place: "Arizona",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla est, pulvinar at porttitor vitae, faucibus nec arcu. Morbi sit amet sagittis leo. Cras luctus purus sed pulvinar dapibus. Duis consectetur tortor et felis egestas dapibus. Duis porttitor ac lectus iaculis laoreet. In ultricies velit a metus interdum laoreet. Praesent sit amet neque ante. Proin condimentum fringilla urna vitae aliquet.",
  },
  {
    name: "Forest",
    place: "Brazil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla est, pulvinar at porttitor vitae, faucibus nec arcu. Morbi sit amet sagittis leo. Cras luctus purus sed pulvinar dapibus. Duis consectetur tortor et felis egestas dapibus. Duis porttitor ac lectus iaculis laoreet. In ultricies velit a metus interdum laoreet. Praesent sit amet neque ante. Proin condimentum fringilla urna vitae aliquet.",
  },
  {
    name: "Desert",
    place: "Sahara",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla est, pulvinar at porttitor vitae, faucibus nec arcu. Morbi sit amet sagittis leo. Cras luctus purus sed pulvinar dapibus. Duis consectetur tortor et felis egestas dapibus. Duis porttitor ac lectus iaculis laoreet. In ultricies velit a metus interdum laoreet. Praesent sit amet neque ante. Proin condimentum fringilla urna vitae aliquet.",
  },
];

const closeCardModal = () => {
  document.getElementById("card-modal-wrapper").style.display = "none";
};

const openCardModal = () => {
  const cardsBtn = document.getElementsByClassName("card-btn");
  for (let i = 0; i < cardsBtn.length; i++) {
    cardsBtn[i].addEventListener("click", () => {
      document.getElementById("card-modal-wrapper").style.display = "flex";
      for (let j = 0; j < cardContent.length; i++) {
        if (i === j) {
          document.getElementById(
            "card-content"
          ).innerHTML = `<h2>${cardContent[j].name}</h2><p>${cardContent[j].place}</p><p>${cardContent[j].text}</p>`;
        }
      }
    });
  }
};
window.addEventListener("load", openCardModal);

const closeLightbox = () => {
  document.getElementById("lightbox-wrapper").style.display = "none";
};

const openLightbox = () => {
  const pictures = document.getElementsByClassName("picture");
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click", () => {
      document.getElementById("lightbox-wrapper").style.display = "flex";
    });
  }
};
