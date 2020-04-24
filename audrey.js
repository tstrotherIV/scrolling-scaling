const audrey = document.getElementById("audrey");

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", () => {
  document.getElementById("audrey").style.width = window.scrollY + "px";
  document.getElementById("audrey").style.height = window.scrollY + "px";
});
