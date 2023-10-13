const pinkButton = document.getElementById('pinkButton');
const body = document.getElementById('body-container');

// Function to toggle the pink-background class
function togglePinkBackground() {
    body.classList.toggle('pink-background');
}

// Event listeners
pinkButton.addEventListener('mouseenter', togglePinkBackground);
pinkButton.addEventListener('mouseleave', togglePinkBackground);

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
