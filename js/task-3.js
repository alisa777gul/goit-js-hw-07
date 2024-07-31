const inputField = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputField.addEventListener("input", (event) => {
    const final = event.target.value.trim();
    if (final === "" || final === " ") {
    outputText.textContent = "Anonymous";
    }
    else {
        outputText.textContent = final;
    }
});
