function hamburgerMenu() {
    let x = document.getElementById("hamburgerLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  function resizeMenu() {
    let width = window.innerWidth;
    if (width < 1200) {
      let x = document.getElementById("hamburgerLinks");
      x.style.display = "none";
    }
  }
  
  window.onresize = resizeMenu;