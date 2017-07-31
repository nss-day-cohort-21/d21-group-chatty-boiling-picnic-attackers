var theme = document.getElementById("dark-light");
var fontSize = document.getElementById("font-size");
var bodyHtml = document.querySelector("body");

function themeToggle(element) {
  console.log('theme checked', element.checked);
  if (element.checked === true){
    bodyHtml.classList.add("dark-theme-custom");
  } else {
    bodyHtml.classList.remove("dark-theme-custom");
  }
}

function fontToggle(element) {
  if(element.checked === true){
    bodyHtml.classList.add("large-text-custom");
  } else {
    bodyHtml.classList.remove("large-text-custom");
  }
}