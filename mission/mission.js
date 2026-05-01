let selectElem = document.querySelector("select");
let logo = document.querySelector("#logo");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  if (selectElem.value === "dark") {
    document.body.classList.add("dark");
    logo.src = "images/byui-logo-white.png";
  } else if (selectElem.value === "light") {
    document.body.classList.remove("dark");
    logo.src = "images/byui-logo-blue.webp";
  }
}

changeTheme();

