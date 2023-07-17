import {
	getData
} from "./http.js"
import {
	createBlock
} from "./ui.js"

let boxes = document.querySelectorAll('.box1')
let mainCont = document.querySelector('.container')

let youngers = []
let olders = []
let others = []

getData("/todos")
	.then(data => {
		for (let item of data) {
			let y = item.userId

			if (y < 5) {
				youngers.push(item)
			} else if (y < 7) {
				olders.push(item)
			} else {
				others.push(item)
			}
		}

		createBlock(youngers, mainCont, "FOR TODAY - 5")
		createBlock(olders, mainCont, "TOMORROW - 3")
		createBlock(others, mainCont, "LATER - 10")
	})