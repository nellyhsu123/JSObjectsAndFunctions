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


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];

	for(var i = 0; i < arr.length; ++i) {
		arrRes.push(fn(arr[i]));	
	}

	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if(el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		 return -1;
	}

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(rates);
*/

/***************************
* Functions returning functions


function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + 'can you please explain what UX design is?');
		} 
	} else if (job === 'teacher') {
			return function(name) {
				console.log('What subject do you teach, ' + name + '?');
			}
		} else {
			return function(name) {
				console.log('Hello ' + name + ', what do you do?');
			}
		}
	}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

interviewQuestion('teacher')('Mark');
*/

/************************
 * Lecture: IIFE
 create a new scope to safely put variable in
 

 function game() {
 	var score = Math.random() * 10;
 	console.log(score >= 5);
 }

 game();

(function () {
	var score = Math.random() * 10;
 	console.log(score >= 5);
 })();

(function (goodLuck) {
	var score = Math.random() * 10;
 	console.log(score >= 5 - goodLuck);
 })(5);
*/

/*****************
 *Closures
 

function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementGermany(1994);
retirementIceland(1994);
retirementUS(1990);

//retirement(66)(1990);

function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + 'can you please explain what UX design is?');
		}	 
		else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

interviewQuestion('teacher')('John');
*/

/************************
 * Bind, call and apply
 

 var john = {
 	name: 'John',
  age: 26,
 	job: 'teacher',
 	presentation: function(style, timeOfDay) {
 		if (style === 'formal') {
 			console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
 		} else if (style === 'friendly') {
 			console.log('Hey! What\'s up? I\'m '+ this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
 		}
 	}
 }

 var emily = {
 	name: 'Emily',
 	age: 35,
 	job: 'designer'
 };

 john.presentation('formal', 'morning');

//call method allows us to set the "this" in the first argument
 john.presentation.call(emily, 'friendly', 'afternoon');
// apply uses array as an argument
//john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind returns a copy of the function
// presets arguments
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];

	for(var i = 0; i < arr.length; ++i) {
		arrRes.push(fn(arr[i]));	
	}

	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

*/

/**********************
 *Coding Challenge 7 part 1
 

(function() {
	var Question = function(question, answers, cAnswer) {
	this.question = question;
	this.answers = answers;
	this.cAnswer = cAnswer;
	}

	Question.prototype.display = function() {
		console.log(this.question);
		for(var i = 0; i < this.answers.length; ++i) {
			console.log(this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans) {
		if(ans === this.cAnswer) {
			console.log('Correct answer!');
		} else {
			console.log('Wrong answer :(');
		}
	}

	var q1 = new Question('Who were the 2017 NBA Champs?', ['GSW', 'CLE', 'BOS'], 0);
	var q2 = new Question('Who won the superbowl in 1995?', ['DAL', 'SF', 'NE'], 1);

	var questions = [q1, q2];

	var questionSelector = Math.floor(Math.random() * questions.length);

	questions[questionSelector].display();

	var answer = parseInt(prompt('Please select the correct answer.'));

	questions[questionSelector].checkAnswer(answer);
})();
*/

/**********************
 *Coding Challenge 7 part 2
 */

(function() {
	var Question = function(question, answers, cAnswer) {
	this.question = question;
	this.answers = answers;
	this.cAnswer = cAnswer;
	}

	Question.prototype.display = function() {
		console.log(this.question);
		for(var i = 0; i < this.answers.length; ++i) {
			console.log(this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans) {
		if(ans === this.cAnswer) {
			console.log('Correct answer!');
		} else {
			console.log('Wrong answer :(');
		}
	}

	var q1 = new Question('Who were the 2017 NBA Champs?', ['GSW', 'CLE', 'BOS'], 0);
	var q2 = new Question('Who won the superbowl in 1995?', ['DAL', 'SF', 'NE'], 1);

	var questions = [q1, q2];

	function nextQuestion() {
	
		var questionSelector = Math.floor(Math.random() * questions.length);

		questions[questionSelector].display();

		var answer = prompt('Please select the correct answer.');

		if(answer !== 'exit') {
			questions[questionSelector].checkAnswer(parseInt(answer));
			nextQuestion();
		}
		
	}

	nextQuestion();
	
})();




