const paneles = document.querySelectorAll(".panel");

paneles.forEach((panel) => {
  panel.addEventListener("click", () => {
    removerClaseActiva();
    panel.classList.add("active");
  });
});

const removerClaseActiva = () => {
  paneles.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// const removeActiveClasses = () => {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// };
