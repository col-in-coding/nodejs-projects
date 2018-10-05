var square = x => x * x;
console.log(square(9));

var user = {
	name: 'Colin',
	sayHi: () => {
		console.log(arguments); // not work as expected
		console.log(`Hi, I'm ${this.name}`); // undefined, no 'this' binding
	},
	sayHiAlt() {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	}
};


user.sayHiAlt(1, 2, 3);