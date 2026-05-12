let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuBtnClick);

// write a function // 

function handleMenuBtnClick(event) {
// write a function
// grab the nav tag
let nav = document.querySelector("nav");

// toggle .hide class on nav tag
nav.classList.toggle("hide");
// profit 
// toggle animation
menuBtn.classList.toggle("change");
}

