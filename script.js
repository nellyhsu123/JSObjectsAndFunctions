// Function constructor, very similar to how constructors are made in Java

// normal initialization of an object
/*var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

//Prototype property which is inheritance in javscript
Person.prototype.calculateAge = function () {
		console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');

john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
*/
// console.info(some object)
// will give you methods of and properties (prototype chain)

// Object.create

var personProto = {
	calculateAge: function() {
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
	name: {value: 'Jane'},
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});

/********************************
* Passing functions as arguments
*/

var years = [1990, 1965, 1937, 2005, 1998];

funtion arrayCalc(arr, fn) {
	var arrRes = [];

	for(var i = 0; i < arr.length; ++i) {
		
	}
}


