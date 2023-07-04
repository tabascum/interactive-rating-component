const button = document.querySelector("#button");
const submitScreen = document.querySelector("#submit-card");
const thankCard = document.querySelector("#thank-card");

const rate = document.querySelectorAll(".rounded");
const score = document.querySelector("#selected-score");

rate.forEach((item) => {
  item.addEventListener("click", () => {
    item.setAttribute("class", "active");
    score.innerText = item.innerText;
    console.log(item.innerText);
  });
});

button.addEventListener("click", () => {
  console.log("Clicked");
  submitScreen.style.display = "none";
  thankCard.style.display = "flex";
});
