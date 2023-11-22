function buttonAlto() {
    if (!document.querySelector(".portaAlto")) {
      let div = document.querySelector(".footer");
      let anchor = document.createElement("a");
      anchor.className = "portaAlto";
      anchor.href = "#top";
      let square = document.createElement("i");
      square.className = "far fa-caret-square-up";
      anchor.appendChild(square);
      div.appendChild(anchor);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    buttonAlto();
  });

  function buttonCalendar() {
    if (!document.querySelector(".calendario")) {
      let div = document.querySelector(".calendar");
      let button2 = document.createElement("a");
      button2.className = "calendario";
      button2.href = "https://www.calendario-365.it/calendario-2023.html";
      let square = document.createElement("i");
      square.className = "far fa-calendar-alt";
      button2.appendChild(square);
      div.appendChild(button2);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    buttonCalendar();
  });
 

  function buttonSocial() {
    if (!document.querySelector(".sociale")) {
      let div = document.querySelector(".social");
      let button3 = document.createElement("a");
      button3.className = "sociale";
      button3.href = "https://www.instagram.com/epicode.italia/";
      let square = document.createElement("i");
      square.className = "far fa-plus-square";
      button3.appendChild(square);
      div.appendChild(button3);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    buttonSocial();
  });