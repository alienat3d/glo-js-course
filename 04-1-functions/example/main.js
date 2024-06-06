'use strict';
/* const CURRENTYEAR = 2024;

function getAge(YOB = 0) { 
	return CURRENTYEAR - YOB;
};

function getYOB(age = 0) {
	return CURRENTYEAR - age;
}


console.log(getAge(1987));
console.log(getYOB(30));

document.write(`Возраст пользователя: ${getAge(1987)}`);
document.write(`Год рождения пользователя: ${getYOB(30)}`); */

// ====================================== \\
// * Напишем простенький функционал корзины товаров с расчётом общей стоимости товаров * \\

const makeBold = function (text) {
	return `<strong>${text}</strong>`;
}

const printProduct = function(productName, count, price) {
	const totalPrice = count * price;
	
	document.write(`Наименование товара: ${makeBold(productName)}, количество: ${makeBold(count)}, цена одного товара: ${makeBold(price)} ₽, общая стоимость: ${makeBold(totalPrice)} ₽`);

	return totalPrice;
}

let total = 0;
total = total + printProduct('Яблоко', 1, 123);
total = total + printProduct('Молоко', 4, 92);
total = total + printProduct('Картофель', 2.5, 39);

console.log(`Общая стоимость продуктовой корзины: ${Math.round(total)}`);