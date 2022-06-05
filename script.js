function myFunc() {
    document.getElementById("dropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('button.link')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction(x) {
    // var x = document.getElementById("myTopnav");
    // if (x.className === "header rc") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "header rc";
    // }
    x.classList.toggle("responsive");
  }

  function bar(x) {
    x.classList.toggle("change");
  }























// // When the user clicks on the button, scroll to the top of the document
// function topFn() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }