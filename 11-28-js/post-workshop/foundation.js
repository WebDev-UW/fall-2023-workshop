// console.log("hello world")

// let x = 12
// let str = "Hi"
// let bool = true

// x = x * 2
// console.log(x)

// console.log(str.toUpperCase())

// let str2 = 'the number is ' + x + '!'
// console.log(str2)

// let template = `the number is ${x}!`
// console.log(template)

// console.log(bool)
// console.log(!bool)

// let list = [1, 2, 3, 4, 5]
// console.log(list[2])

// for (let listItem of list) {
// 	console.log(listItem)
// }

// console.log(list)
// let listMapped = list.map((item) => {
// 	item *= 2
// 	return item
// })
// console.log(listMapped)

// let filtered = list.filter((item) => {
// 	return item % 2 == 0
// })
// console.log(filtered)

// let s = list.join("-")
// console.log(s)

// list.push(10)
// console.log(list)
// list.pop()
// console.log(list)

// let object = {
// 	key: "value",
// 	age: 2
// }

// console.log(object)

// console.log(object.age)
// console.log(object["age"])

// object.newKey = "new value"

// console.log(object)

// for (let key of Object.keys(object)) {
// 	console.log(key)
// 	console.log(object[key])
// // }

// let child1 = {
// 	name: "jack",
// 	age: 18
// }

// let child2 = {
// 	name: "Bob",
// 	age: 16
// }

// let child3 = {
// 	name: "Jill",
// 	age: 33
// }

// let parent = {
// 	name: "Joe",
// 	children: [child1, child2, child3]
// }

// // console.log(parent)

// // console.log(parent.children[2])

// let youngestChild = null
// for (let currentChild of parent.children) {
// 	if (youngestChild == null || currentChild.age < youngestChild.age) {
// 		youngestChild = currentChild
// 	}
// }

// parent.favoriteChild = youngestChild

// console.log(parent)

function doSomething(num1, num2) {
	let sum = num1 + num2
	return sum
}

console.log(doSomething(2, 4))

let anonymousFunction = function(num1, num2) {
	let difference = num1 - num2
	return difference
}

console.log(anonymousFunction(6, 2))

let arrowFunction = (num1, num2) => num1 ** num2

console.log(arrowFunction(2, 4))