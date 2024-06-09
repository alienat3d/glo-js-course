'use strict';

const longDateBlock = document.getElementById('long-date');
const shortDateBlock = document.getElementById('short-date');

const dayNamesArray = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const monthNamesArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const wordHoursArray = ['час', 'часа', 'часов'];
const wordMinutesArray = ['минута', 'минуты', 'минут'];
const wordSecondsArray = ['секунда', 'секунды', 'секунд'];

const getTimerWords = (value, words) => {
	value = Math.abs(value) % 100;
	const lastNum = value % 10;
	switch (true) {
		case lastNum > 1 && lastNum < 5:
			return words[1];
		case lastNum === 1:
			return words[0];
		default:
			return words[2];
	}
}

const tickingClockNDate = () => {
	const date = new Date();
	const dayNum = date.getDay();
	const dateNum = date.getDate();
	let monthNum = date.getMonth();
	const yearNum = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const fDateNum = dateNum < 10 ? '0' + dateNum : dateNum;
	const fHours = hours < 10 ? '0' + hours : hours;
	const fMinutes = minutes < 10 ? '0' + minutes : minutes;
	const fSeconds = seconds < 10 ? '0' + seconds : seconds;

	let currentDayName = '';
	let currentMonthName = '';
	let wordHours = '';
	let wordMinutes = '';
	let wordSeconds = '';

	currentDayName = dayNamesArray.find(function (item, idx) {
		return idx === dayNum;
	})
	currentMonthName = monthNamesArray.find(function (item, idx) {
		return idx === monthNum;
	})

	const fMonth = ++monthNum < 10 ? '0' + monthNum : monthNum;

	wordHours = getTimerWords(hours, wordHoursArray);
	wordMinutes = getTimerWords(minutes, wordMinutesArray);
	wordSeconds = getTimerWords(seconds, wordSecondsArray);

	longDateBlock.innerHTML = 'Сегодня ' + currentDayName + ', ' + dateNum + ' ' + currentMonthName + ' ' + yearNum + ' года, ' + hours + ' ' + wordHours + ' ' + minutes + ' ' + wordMinutes + ' ' + seconds + ' ' + wordSeconds;

	shortDateBlock.textContent = fHours + ':' + fMinutes + ':' + fSeconds + ' / ' + fDateNum + '.' + fMonth + '.' + yearNum;
}

tickingClockNDate();

setInterval(tickingClockNDate, 200);