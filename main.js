//getting a value from the user
const prompt = require('prompt-sync')()

console.log('Welcome to the quiz phase!')

// Tracking the number of correct answers and displaying to the user.

let correctAnswers = 0
const totalQuestions = 10

// 1st question
const question1 = prompt('What is the brain of the computer? ')
const correctAnswer1 = 'CPU'

if (question1.toUpperCase() === correctAnswer1) {
	console.log('you got it correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

// 2nd question
const question2 = prompt('What was the first language written? ')

const correctAnswer2 = 'Python'

if (question2 === correctAnswer2) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

// 3rd question
const question3 = prompt('Who invented space X? ')

const correctAnswer3 = 'Elon_Musk'

if (question3 === correctAnswer3) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//4th question
const question4 = prompt('Who founded altschool africa? ')

const correctAnswer4 = 'Adewale'

if (question4 === correctAnswer4) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//5th question
const question5 = prompt('How many years makes up a decade? ')

const correctAnswer5 = '10 Years'

if (question5 === correctAnswer5) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//6th question
const question6 = prompt('Who co-founded altschool africa? ')

const correctAnswer6 = 'Sultan'

if (question6 === correctAnswer6) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//7th question
const question7 = prompt(
	'Who wrote the book, "Simplified JavaScript for VIPs"? '
)

const correctAnswer7 = 'Ebenezer Don'

if (question7 === correctAnswer7) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//8th question
const question8 = prompt('Who founded NewDev.io? ')

const correctAnswer8 = 'Ebenezer Don'

if (question8 === correctAnswer8) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//9th question
const question9 = prompt('Who wrote the book "Atomic Habit"? ')

const correctAnswer9 = 'Brain Tracy'

if (question9 === correctAnswer9) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

//10th question
const question10 = prompt('Which language is used for Machine Learning? ')

const correctAnswer10 = 'Python'

if (question10 === correctAnswer10) {
	console.log('correct!')
	correctAnswers++
} else {
	console.log('incorrect')
}

// Awarding the users based on the percentage of questions answered.
const percent = Math.round(Math.random(correctAnswers / totalQuestions) * 100)

console.log("You've got", correctAnswers, 'questions Correct!')

console.log("You've Scored", percent.toString() + '%')
