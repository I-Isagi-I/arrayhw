let userArray = [];

while (true) {
  let command = prompt("Введите команду (add, del, stop):");
  
  if (command === "stop") {
    console.log("Программа остановлена.");
    console.log("Итоговый массив: ", userArray);
    break;
  }
  
  let [cmd, value] = command.split(", ");

  if (cmd === "add") {
    userArray.push(value);
    console.log(`${value} добавлен(а) в массив.`);
  } else if (cmd === "del") {
    let index = userArray.indexOf(value);
    if (index !== -1) {
      userArray.splice(index, 1);
      console.log(`${value} удален(а) из массива.`);
    } else {
      console.log(`${value} не найден(а) в массиве.`);
    }
  } else {
    console.log("Неизвестная команда.");
  }
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let evenNumbers = [];
let oddNumbers = [];

array.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
});

console.log("Чётные числа: ", evenNumbers);
console.log("Нечётные числа: ", oddNumbers);