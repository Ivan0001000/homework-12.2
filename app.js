let container = document.getElementById("button-container");

container.addEventListener("click", function (event) {
  if ((event.target.tagName = "BUTTON")) {
    alert(`Clicked on the: ${event.target.innerText}`);
  }
});
