// retireve the form from the DOM, print out the result
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");

console.log(form);

// if the user selects 'One Campus'
// but doesn't select ANY campuses
// Display message "select one campus"

// Helper function
function getCheckedCampuses(campuses) {
    return Array.from(campuses)
                .filter(campus => campus.checked)
                .map(campus => campus.value);
}

function isDateValid() {
    const date = document.getElementById("availableDate").value;
    const todaysDate = new Date();

    return new Date(date) > todaysDate;
}

// notes box
function updateNotesField() {
    if (travelRange.value === "many") {
        notesContainer.hidden = false;
    }
    else {
        notesContainer.hidden = true;
    }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(form.firstName.value);

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const availableDate = form.availableDate.value;
    const type = form.travelRange.value;

    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    const selectedCampuses = getCheckedCampuses(campuses);

    console.log(campuses);

    if (
        numberOfCampuses === "one" &&
        selectedCampuses.length == 0
    ) {
        document.getElementById("output").textContent =
            "Please select one campus";
        return;
    }

    // two campuses
    if (
        numberOfCampuses === "many" &&
        selectedCampuses.length < 2
    ) {
        document.getElementById("output").textContent =
            "Please select at least two campuses";
        return;
    }

    // notes part
    if (
        numberOfCampuses === "many" &&
        notes.value === ""
    ) {
        document.getElementById("output").textContent =
            "Please enter travel notes";
        return;
    }

    // future date validation
    // AI was used here to help me with the !isDateValid I couldn't figure out that part by myself
    if (!isDateValid()) {
        document.getElementById("output").textContent =
            "Please choose a future date.";
        return;
    }

    const output = document.getElementById("output");

    output.innerHTML = `
    <h2>Preference Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Availability: ${availableDate}</p>
    <p>Campuses: ${selectedCampuses.join(", ")}</p>
    <p>Preference Level: ${type}</p>
    <p>Travel Notes: ${notes.value}</p>
    `;

    form.reset();
    updateNotesField();
});