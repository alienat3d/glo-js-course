// * Этот файл является точкой входа, который будет принимать все модули и запускать их

// В виде строки принимает путь к модулю
/* const burger = require('./modules/burger');
const slider = require('./modules/slider');
const libSlider = require('./modules/libSlider'); */

// Т.к. мы экспортируем модули новым синтаксисом "export default",
// то в точке доступа мы должны импортировать модули.
import burger from './modules/burger';
import slider from './modules/slider';
import libSlider from './modules/libSlider';

burger();
slider();
libSlider();
