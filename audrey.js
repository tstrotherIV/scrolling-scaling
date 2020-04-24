const audrey = document.getElementById("audrey");

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", () => {
  /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
  // let y = window.scrollY;
  document.getElementById("audrey").style.width = window.scrollY + "px";
  document.getElementById("audrey").style.height = window.scrollY + "px";

  // if (
  //   window.scrollY < 500
  // document.body.scrollTop > 500 ||
  // document.documentElement.scrollTop > 500
  // ) {
  //   document.getElementById("audrey").style.width = "50px";
  //   document.getElementById("audrey").style.height = "50px";
  // } else {
  //   document.getElementById("audrey").style.width = "100%";
  //   document.getElementById("audrey").style.height = "100%";
  // }
  /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
  */
});
