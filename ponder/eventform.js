const form = document.querySelector("#eventForm");
const ticketType = document.querySelector("#ticketType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const codeInput = document.querySelector("#codeInput");
const output = document.querySelector("#output");

function isDateValid() {
    const date = document.querySelector("#eventDate").value;
    const todaysDate = new Date();

    return new Date(date) > todaysDate;
}

function updateCodeField() {
    if (ticketType.value === "student") {
        codeContainer.hidden = false;
        codeLabel.textContent = "Student I#";
        codeInput.required = true;
        codeInput.placeholder = "123456789";
    }
    else if (ticketType.value === "guest") {
        codeContainer.hidden = false;
        codeLabel.textContent = "Access Code";
        codeInput.required = true;
        codeInput.placeholder = "EVENT131";
    }
    else {
        codeContainer.hidden = true;
        codeInput.required = false;
        codeInput.value = "";
    }
}

ticketType.addEventListener("change", updateCodeField);
updateCodeField();

form.addEventListener("submit", event => {
    event.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const eventDate = form.eventDate.value;
    const type = form.ticketType.value;
    const code = codeInput.value;

    if (!isDateValid()) {
        output.innerHTML = `<p class="error">Please choose a future date.</p>`;
        return;
    }

    if (type === "student" && !/^\d{9}$/.test(code)) {
        output.innerHTML = `<p class="error">Please enter a 9 digit Student I#.</p>`;
        return;
    }

    if (type === "guest" && code !== "EVENT131") {
        output.innerHTML = `<p class="error">Please enter the correct access code.</p>`;
        return;
    }

    output.innerHTML = `
        <div class="success">
            <h2>Ticket Submitted</h2>
            <p>${firstName} ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Date: ${eventDate}</p>
            <p>Type: ${type}</p>
            <p>Your event ticket has been reserved.</p>
        </div>
    `;

    form.reset();
    updateCodeField();
});