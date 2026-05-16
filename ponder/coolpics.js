let menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  document.querySelector("nav").classList.toggle("hide");
}


let images = document.querySelectorAll(".coolpic img");

images.forEach(function(image) {

  image.addEventListener("click", function() {

    let viewer = document.createElement("dialog");

    viewer.innerHTML = `
      <button class="close-viewer">X</button>
      <img src="images/norris-full.jpg" alt="${image.alt}">
    `;

    document.body.appendChild(viewer);

    viewer.showModal();

    viewer.addEventListener("click", function(event) {

      if (
        event.target.classList.contains("close-viewer") ||
        event.target === viewer
      ) {
        viewer.close();
        viewer.remove();
      }

    });

  });

});


document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    let viewer = document.querySelector("dialog");

    if (viewer) {
      viewer.close();
      viewer.remove();
    }

  }

});