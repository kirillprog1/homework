// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(num1, num2, num3) {
  return (price = num1 * (1 - num2 / 100) * (1 + num3));
}

console.log(calculateFinalPrice(100, 10, 0.2));
// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(user, password) {
  if (user === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess("admin", "123456"));
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(time) {
  if (time >= 0 && time <= 5) {
    return "Ночь";
  } else if (time >= 6 && time <= 11) {
    return "Утро";
  } else if (time >= 12 && time <= 17) {
    return "День";
  } else if (time >= 18 && time <= 23) {
    return "Вечер";
  } else {
    return "Некорректное время";
  }
}

console.log(getTimeOfDay(27));
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(1, 1));
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
