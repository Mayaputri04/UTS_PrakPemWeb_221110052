function showDetail(event, id) {
  event.preventDefault();
  const detailElement = document.getElementById(id);
  if (detailElement) {
    detailElement.classList.toggle("active");
  }
}
