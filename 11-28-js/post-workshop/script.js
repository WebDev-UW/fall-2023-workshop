let resultText = document.querySelector("#result")

// console.log(resultText)

// console.log(resultText.innerText)

let btnElement = document.querySelector("#submit-button")

// function clickHandler() {
// 	console.log("button clicked!!!")
// 	resultText.innerText = "Clicked!"
// }

// // btnElement.addEventListener("click", clickHandler)

// let clickCount = 0
// btnElement.addEventListener("click", () => {
// 	clickCount = clickCount + 1
// 	resultText.innerText = `Clicked ${clickCount} times`
// })

// btnElement.addEventListener("click", () => {
// 	document.querySelector("#image").src = "https://pngimg.com/d/exclamation_mark_PNG82.png"
// })

// btnElement.addEventListener("click", () => {
// 	resultText.style.fontSize = `${clickCount * 4}px`
// })

let questionInput = document.querySelector("#question-input")

if (localStorage.getItem("questions") == null) {
	localStorage.setItem("questions", "[]")
} else {
	let questions = localStorage.getItem("questions")
	questions = JSON.parse(questions)

	resultText.innerHTML = questions.join("<br>")
}

btnElement.addEventListener("click", () => {
	let questions = localStorage.getItem("questions")
	questions = JSON.parse(questions)
	questions.push(questionInput.value)
	
	localStorage.setItem("questions", JSON.stringify(questions))

	resultText.innerHTML = questions.join("<br>")

	questionInput.value = ""
})

document.querySelector("#clear-button").addEventListener("click", () => {
	localStorage.setItem("questions", "[]")

	resultText.innerText = ""
})