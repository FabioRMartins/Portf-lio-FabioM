document.querySelector(".button_header").addEventListener("click", ()=> document.querySelector(".menu_header").classList.toggle("active"));

document.querySelectorAll(".copy_link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy_link_input");
    const copyButton = copyLinkParent.querySelector(".copy_link_button");
    const text = inputField.value;
  
    inputField.addEventListener("focus", () => inputField.select());
  
    copyButton.addEventListener("click", () => {
      inputField.select();
      navigator.clipboard.writeText(text);
  
      inputField.value = "Copied!";
      setTimeout(() => (inputField.value = text), 800);
    });
  });

// Path: JS/script.js

const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0]; 
icons = document.querySelectorAll(".wrapper i");

var isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
  var scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  icons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  icons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    var firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth ;
    setTimeout(() => showHideIcons(), 60);
  });
});


var dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


// Path: JS/script.js
function goToProject0() {
  window.location = "https://aplicativo-de-receitas-eosin.vercel.app/";
}

function goToProject1() {
  window.location = "https://trivia-game-xi-neon.vercel.app/";
}

function goToProject2() {
  window.location = "https://aplicativo-de-receitas.netlify.app/profile";
}

function goToProject3() {
  window.location = "https://aplicativo-de-receitas.netlify.app/profile";
}
