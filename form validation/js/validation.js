export const validateInput = (input) => {
	const inputType = input.dataset.type;

	if (validators[inputType]) {
		validators[inputType](input);
	}

	if (input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalido");
		input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
	} else {
		input.parentElement.classList.add("input-container--invalido");
		input.parentElement.querySelector(".input-mensagem-erro").innerHTML = showErrorMessage(inputType, input);
	}
};

const typesOfErrors = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const messages = {
	name: {
		valueMissing: "Nome não pode estar em branco.",
	},
	email: {
		valueMissing: "Email não pode estar em branco.",
		typeMismatch: "Por favor, preencha um email válido.",
	},
	password: {
		valueMissing: "Senha não pode estar em branco.",
		patternMismatch: "A senha deve conter de 6 a 12 caracteres e deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.",
	},
	birthDate: {
		valueMissing: "Data de nascimento não pode estar em branco.",
		customError: "Você deve ser maior de 18 anos para se cadastrar.",
	},
	cpf: {
		valueMissing: "CPF não pode estar em branco.",
		customError: "Por favor, preencha um CPF válido.",
	},
	cep: {
		valueMissing: "CEP não pode estar em branco.",
		patternMismatch: "Por favor, preencha um CEP válido.",
		customError: "Não foi possível encontrar o endereço para o CEP informado.",
	},
	address: {
		valueMissing: "Endereço não pode estar em branco.",
	},
	number: {
		valueMissing: "Número não pode estar em branco.",
	},
	city: {
		valueMissing: "Cidade não pode estar em branco.",
	},
	state: {
		valueMissing: "Estado não pode estar em branco.",
	},
};

const showErrorMessage = (type, input) => {
	let message = "";

	typesOfErrors.forEach((error) => {
		if (input.validity[error]) {
			message = messages[type][error];
		}
	});

	return message;
};

const validators = {
	birthDate: (input) => validateBirthDate(input),
	cpf: (input) => validadeCPF(input),
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

const validadeCPF = (input) => {
	const cpf = input.value.replace(/\D/g, "");

	let message = "";

	input.setCustomValidity(message);
};
