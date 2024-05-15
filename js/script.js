// fungsi navbar
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100 || window.pageYOffset === 0) {
    nav.classList.add('navbar-scroll');
  } else {
    nav.classList.remove('navbar-scroll');
  }
});

//fungsi darkmode
let navbar = document.querySelector(".navbar"),
          card = document.querySelectorAll(".card"),
          buttons = document.querySelectorAll("button.btn.btn-warning"),
          darkmode = document.getElementById("darkmode");
    
      const changeDarkmode = () => {
        const isChecked = darkmode.checked;
        if (isChecked) {
          document.body.classList.add("darkmode");
          navbar.classList.add("darkmode");
        } else {
          document.body.classList.remove("darkmode");
          navbar.classList.remove("darkmode");
        }
    
        card.forEach((item) => {
          isChecked ? item.classList.add("darkmode") : item.classList.remove("darkmode");
        });
    
        buttons.forEach((item) => {
          isChecked ? item.classList.add("darkmode") : item.classList.remove("darkmode");
        });
      };
    
      darkmode.addEventListener("change", changeDarkmode);







