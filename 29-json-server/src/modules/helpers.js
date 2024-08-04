export const debounce = (func, delay = 700) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		
		timer = setTimeout(() => { func.apply(this, args) }, delay);
	}
}