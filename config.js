let ancienTheme
ancienTheme = localStorage.getItem("theme");
function theme(ancienTheme){
    let nouveauTheme;
    if (ancienTheme = 'light') {
        nouveauTheme = 'dark';
    } else if (ancienTheme = 'dark') {
      nouveauTheme = 'light';
    }
    return nouveauTheme;  }
let nvoTheme = theme(ancienTheme);
localStorage.setItem("theme", nvoTheme);
document.querySelector("html").setAttribute("data-theme", nvoTheme);