function arePasswordMathc() {
    const password = document.querySelector("#password").value;
    const passwordConfirm = document.querySelector("#confirm-password").value;
    return password === passwordConfirm;
}

function showNotMatchError() {
    const passwordDiv = document.querySelector("#password-div");
    const message = document.createElement("p");
    const passwordInputs = document.querySelectorAll("[type=password]");
    for (let passwordInput of passwordInputs) {
        passwordInput.style.border = "1px solid red";
    }
    message.textContent = "*password does not match";
    message.id = "error-message";
    message.style.color = "red";
    message.style.margin = "0";
    message.style.fontSize = "12px";
    message.style.fontWeight = "bold";
    passwordDiv.appendChild(message);
}

function removeMessage() {
    const child = document.querySelector("#error-message");
    if (child) {
        child.remove();
    }
}

const form = document.querySelector("form");

form.addEventListener("submit", (Event) => {
    if (!arePasswordMathc()) {
        removeMessage();
        showNotMatchError();
        Event.preventDefault();
    } else {
        removeMessage();
        const passwordInputs = document.querySelectorAll("[type=password]");
        for (let passwordInput of passwordInputs) {
            passwordInput.style.border = "1px solid green";
        }
    }
})