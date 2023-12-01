//System.out.println();
console.log("printed value")

// Variables
let x = 5
console.log(x * 2)
x = "text" // now its a string
console.log(x)
console.log(x.toUpperCase()) // string methods

// other ways to define a string - template literals
let number = 42
let concatenated = "This is a string with a number (" + number + ") inside of it!"
console.log(concatenated)
let templateLiteral = `This is a much easier way to put the number ${number} in a string!`
console.log(templateLiteral)

let y = true // boolean
console.log(y)
console.log(!y)

// Arrays
let z = [1,2,3,4,5]
console.log(z[0])

z.push(6)

console.log(z)

z.pop()

console.log(z)


// Iterating
for (let element in z) {
	console.log(element * 2)
}

// Array methods

let joined = z.join("-")
console.log(joined)

let mapped = z.map((element) => element * 2)
console.log(mapped)

let filtered = z.filter((element) => element % 2 == 0)
console.log(filtered)

// Objects
// javascript objects follow the JSON format
let object = {
	key: "value"
}

console.log(object.key)
console.log(object["key"])

object.newKey = 3

console.log(object.newKey)

console.log(Object.keys(object))

for (let key in Object.keys(object)) {
	console.log(key)
	console.log(object[key])
}

let child1 = {
    name: "Jack",
    age: 18,
}

let child2 = {
    name: "Bob",
    age: 16,
}

let child3 = {
    name: "Jill",
    age: 33,
}

let parent = {
    name: "Joe",
	children: [child1, child2]
}

console.log(parent.children[2].name)

let youngestChild = null
for (const currentChild in parent.children) {
	if (youngestChild == null || currentChild.age < youngestChild.age) {
		youngestChild = currentChild
	}
}

parent.favoriteChild = youngestChild

console.log(parent)

console.log(parent.favoriteChild)

// Functions

function doSomething(num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log(doSomething(3, 5))

const anonymousFunction = function(num1, num2) {
	let difference = num1 - num2
    return difference
}

console.log(anonymousFunction(6, 2))

let arrowFunction = (num1, num2) => {
    let power = num1 ** num2
    return power
}

console.log(arrowFunction(2, 4))