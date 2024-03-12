const diceElement = document.querySelector(".dice");
const rollButton = document.querySelector(".dice--roll");
const resetButton = document.querySelector(".reset--btn");

rollButton.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;
});
resetButton.addEventListener("click", function () {
  diceElement.classList.add("hidden");
});
