const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

console.log(countries); // [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland' ]
console.log(countries.length); // 5
console.log(countries[0]); // Finland

// Adding an element to the end of the array
countries.push("Estonia");

// Adding an element to the beginning of the array
countries.unshift("Russia");

// Removing the last element of the array
countries.pop();

// Removing the first element of the array
countries.shift();

// Removing the element at index 2
countries.splice(2, 1);
