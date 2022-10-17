export const validateInput = (input) => {
	const inputType = input.dataset.type;

	if (validators[inputType]) {
		validators[inputType](input);
	}
};

const validators = {
	birthDate: (input) => validateBirthDate(input),
};

const validateBirthDate = (input) => {
	let message = "";

	const date = new Date(input.value);
	const actualDate = new Date();
	const over18 = new Date(actualDate.getFullYear() - 18, actualDate.getMonth(), actualDate.getDate());

	if (date > over18) {
		message = "Você precisa ter mais de 18 anos para se cadastrar";
	}

	input.setCustomValidity(message);
};
