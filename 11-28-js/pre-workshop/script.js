// Query Selector by Id
let resultElement = document.querySelector("#result")

// Log element in console
console.log(resultElement)

// InnerHTML & Explanation
console.log(resultElement.innerHTML)

// Setting innerHTML
resultElement.innerHTML = "New Value"


// COMMENT OUT ABOVE CODE NOW

// Selecting Button
const btnElement = document.querySelector("#submit-button")


// Events are 'emitted' when HTML elements are interacted with
// Click when element is clicked, mouseover, mousein, mouseout, change

// Pass as normal function
function clickHandler() {
	console.log("button clicked")
	resultElement.innerHTML = "New Value"
}

btnElement.addEventListener("click", clickHandler)

// Pass as Anonymous Function
let clickCount = 0
btnElement.addEventListener("click", () => {
	clickCount++
	resultElement.innerHTML = `clicked ${clickCount} times`
})

// Changing attributes
btnElement.addEventListener("click", () => {
	document.querySelector("#image").src = "https://m.media-amazon.com/images/I/71zWQ4j3sRL._AC_UF894,1000_QL80_.jpg"
})

// Changing style
btnElement.addEventListener("click", () => {
	resultElement.style.fontSize = `${clickCount * 4}px`
})

// COMMENT OUT ABOVE

const inputElement = document.querySelector("#question-input")

btnElement.addEventListener("click", () => {
	resultElement.innerHTML = inputElement.value
})

// LocalStorage
// demo localstorage in console - show the localstorage object, show setItem, show object with new propery, show what happens when we log a nonexistent item
// show JSON, show stringified JSON in console, say that JSON.stringify() and JSON.parse() are inverses

if (localStorage.getItem("questions") == null) {
	localStorage.setItem("questions", JSON.stringify([]))
} else {
	let questions = JSON.parse(localStorage.getItem("questions"))
	resultElement.innerHTML = questions.join("<br>")
}

btnElement.addEventListener("click", () => {
	let questions = JSON.parse(localStorage.getItem("questions"))
	questions.push(inputElement.value)

	localStorage.setItem("questions", JSON.stringify(questions))

	resultElement.innerHTML = questions.join("<br>")

	inputElement.value = ""
})

// Clear button - add clear button (#clear-button) after Submit

const clearBtn = document.querySelector("#clear-button")
clearBtn.addEventListener("click", () => {
	localStorage.setItem("questions", JSON.stringify([]))
	resultElement.innerHTML = ""
})