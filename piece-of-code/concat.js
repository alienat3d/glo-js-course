'use strict';

// * === Конкатенация === * \\

// ? Для примера использования псевдо-массива функций «arguments»
// ? Примечание: arguments является псевдо-массивом, но не массивом. Это псевдо-массив, в котором есть пронумерованные индексы и свойство length. Однако он не обладает всеми методами массивов.

function myConcat(separator) {
  var result = "";
  var i;

  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// возвращает "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// возвращает "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// возвращает "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");