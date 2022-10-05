// Conditionals

const age = 18;

// if else statement
if (age >= 18) {
	console.log("You are an adult");
} else {
	console.log("You are not an adult");
}

// switch statement
switch (age) {
	case 18:
		console.log("You are 18");
		break;
	default:
		console.log("You are not 18");
}

// ternary operator
age >= 18 ? console.log("You are an adult") : console.log("You are not an adult");
