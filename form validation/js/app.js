import { validateInput } from "./validation.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
	input.addEventListener("blur", (event) => {
		validateInput(event.target);
	});
});
