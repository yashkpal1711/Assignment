const headerButtons = document.querySelectorAll(".header-button");
const overlay = document.querySelector(".overlay");

headerButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    overlay.style.display = "block";
  });

  button.addEventListener("mouseout", () => {
    overlay.style.display = "none";
  });
});

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const image = document.getElementById("image");
const radioButton = document.querySelectorAll("input[type=radio]");

radioButton.forEach(function (radioButtonaq) {
  radioButtonaq.addEventListener("change", function () {
    if (this.checked) {
      image.src = this.value;
    }
  });
});
