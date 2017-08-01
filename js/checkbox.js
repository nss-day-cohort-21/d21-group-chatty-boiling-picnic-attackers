var Chatty = (function(obj){

  var theme = document.getElementById("dark-light");
  var fontSize = document.getElementById("font-size");
  var bodyHtml = document.querySelector("body");
  var headerHtml = document.getElementById("header");
  var clearBoardBtnHtml = document.getElementById("clear-board");
  var buttonHtml = document.getElementsByClassName("delete-btn");
  var modalButton = document.getElementById("saveModal");
  var fontColor = document.getElementById("fontChoice");
  var bgColorChoice = document.getElementById("bgColorChoice");

  obj.themeToggle = function (element) {
    console.log('theme checked', element.checked);
    if (element.checked === true){
      bodyHtml.classList.add("dark-theme-custom");
      headerHtml.classList.add("dark-theme-custom");
      clearBoardBtnHtml.classList.add("dark-theme-custom");
    } else {
      bodyHtml.classList.remove("dark-theme-custom");
      headerHtml.classList.remove("dark-theme-custom");
      clearBoardBtnHtml.classList.remove("dark-theme-custom");
    }
  }
  obj.fontToggle = function (element) {
    if(element.checked === true){
      bodyHtml.classList.add("large-text-custom");
    } else {
      bodyHtml.classList.remove("large-text-custom");
    }
  }

  document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.className === "saveModal") {
      console.log("Save button just triggered.");
      headerHtml.style.backgroundColor = bgColorChoice.value;
      headerHtml.style.color = fontColor.value;
      bodyHtml.style.backgroundColor = bgColorChoice.value;
      bodyHtml.style.color = fontColor.value;
      buttonHtml.style.color = fontColor.value;
    }    
  });

  theme.addEventListener('change', function() {
    Chatty.themeToggle(this);
  });
  fontSize.addEventListener('change', function() {
    Chatty.fontToggle(this);
  });
  return obj;
}(Chatty || {}));
