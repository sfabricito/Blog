const btn = document.querySelector('.btn-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

function changeColor(){
    console.log('hello')
    document.body.classList.toggle('dark-theme');
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
}

btn.addEventListener('click', changeColor);
