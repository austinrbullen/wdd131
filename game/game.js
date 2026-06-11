
// get the img DOM elements

const dieImages = document.querySelectorAll("#gameboard img")
// when button is pressed
// then change die images to gif animation 

document.getElementById("rollButton").addEventListener("click", (event) => {


    dieImages.forEach((image) => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    })

    // at some point please stop scrolling
    // time delay
    // set wait 2 seconds then do this code 

    setTimeout(() => {
        // set all die images to a random number
        dieImages.forEach((image) => {
        if(isDieUnlocked(image)) {
            image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        })
    }, 500);

})

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);
}
