// Break is a keyword that can be used to exit a loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === 5) {
		console.log("Found 5 in the array and break the loop!");
		break;
	}
	console.log(`${numbers[i]} is not 5`);
}
