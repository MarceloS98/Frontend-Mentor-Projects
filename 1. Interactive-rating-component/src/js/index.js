const submit = document.querySelector("#submit-btn");
const buttons = document.querySelectorAll("input[type='button']");
const thankYouState = document.getElementById("thank-you-state");
let value = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    value = button.value;
    return value;
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedRate = document.getElementById("selected-rate");
  selectedRate.innerText = `You selected ${value} out of 5`;
  thankYouState.classList.toggle("hidden");
});
