// Функция проверки на числа
/* const isFiniteOrNull = function (num) {
	if (num !== null && num !== '') {
		if (num.trim() !== '') {
			const _num = num.trim();
			if (isFinite(_num.replace(',', '.').trim())) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
} */

// Улучшенная та же самая функция
// 1. Если написать "num" в условие, то проверяться значение, попадающее в параметр "num" будет, что оно существует (т.е. не null, не undefined и не false)
// 2. "!!" значит двойное обратное преобразование, т.е. если значение есть, то вернётся true, а если нет, то вернётся false
const isFiniteOrNull = function (num) {
	if (num && num.trim() !== '') {
		return !!isFinite(num.trim().replace(',', '.').trim());
	} else {
		return false;
	}
}