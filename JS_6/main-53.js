// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);
// Добавьте в конец массива двух пользователей:

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  if (users.length === 0) return 0;
  let totalAge = 0;
  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age;
  }
  return totalAge / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = (users) => {
  const admins = [];
  users.forEach((users) => {
    if (users.isAdmin === true) {
      admins.push(users);
    }
  });
  return admins;
};

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  if (n == undefined) {
    return arr[0];
  }
  return newArr;
}

console.log(first([1, 3, 7, 99, 123]));
