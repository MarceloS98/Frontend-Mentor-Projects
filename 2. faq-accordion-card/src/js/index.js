// Agarrar todos los divs preguntas
const faqs = document.querySelectorAll("#questions .question-container");

// Mostrar respuesta
const showAnswer = (question) => {
  const info = question.children[0];
  const arrows = question.children[1];

  // La pregunta tiene que cambiar de peso
  info.children[0].classList.toggle("font-bold");
  // La respuesta tiene que mostrarse / ocultarse
  info.children[1].classList.toggle("hidden");
  // La flecha tiene que cambiar
  arrows.children[0].classList.toggle("hidden");
  arrows.children[1].classList.toggle("hidden");
};

// Agregar el evento a todos los divs de preguntas
faqs.forEach((question) => {
  question.addEventListener("click", () => {
    showAnswer(question);
  });
});
