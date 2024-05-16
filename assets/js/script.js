document.addEventListener("DOMContentLoaded", function () {
  let testimoniItems = document.querySelectorAll(".testimoni-item");
  let currentIndex = 0;

  function showTestimoni(index) {
    testimoniItems.forEach((item) => {
      item.style.display = "none";
    });
    testimoniItems[index].style.display = "block";
  }

  function nextTestimoni() {
    currentIndex = (currentIndex + 1) % testimoniItems.length;
    showTestimoni(currentIndex);
  }

  showTestimoni(currentIndex);
  setInterval(nextTestimoni, 8000);
});
