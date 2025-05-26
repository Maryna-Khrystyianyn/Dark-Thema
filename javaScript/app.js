const buttons = document.querySelectorAll(".modern-button");
buttons.forEach((bnt) => {
  bnt.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("activ");
    });
    bnt.classList.add("activ");
  });
});

const cards = document.querySelectorAll(".card");
VanillaTilt.init(cards, {
  max: 20,  
  glare: true,  
  'max-glare': 0.5,
  speed: 1000,
  scale:1.03,
});

