'use strict';

// * === Стиль кода === * \\

// ? [1] блок объявления переменных:
const button = document.querySelector('#btn')

const a = 1
const b = 'second'

let count = 0
let array = []

let g, h, j

// ? [2] блок описания функций
function foo() {
	const c = 'c'
}

function boo() {
	const d = 'd'
}

// ? [3] блок функционала
button.addEventListener('click', function () {
	console.log('clicked');
})

g = 500;

if (a === 1) console.log(a)

foo()
boo()

// ? [4] мусорный блок (технический блок)
console.log(b)
console.log(array)

alert(count)