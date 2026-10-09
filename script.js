// ===== Уровень A — Условные операторы =====

// Задание 27. Проверка положительного числа
console.log("--- Задание 27 ---");
{
  function checkNumber(number) {
    if (number > 0) {
      return "Число положительное";
    } else if (number < 0) {
      return "Число отрицательное";
    } else {
      return "Ноль";
    }
  }
  let number = -8;
  console.log(number + ": " + checkNumber(number)); // Число отрицательное
  console.log(0 + ": " + checkNumber(0));           // Ноль
  console.log(15 + ": " + checkNumber(15));         // Число положительное
}

// Задание 28. Проверка делимости на 3 и 5
console.log("--- Задание 28 ---");
{
  function divisible(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "Делится";
    } else {
      return "Не делится";
    }
  }
  let number = 30;
  console.log(number + ": " + divisible(number)); // Делится
  console.log(9 + ": " + divisible(9));           // Не делится
  console.log(10 + ": " + divisible(10));         // Не делится
  console.log(45 + ": " + divisible(45));         // Делится
}

// Задание 29. Определение времени суток
console.log("--- Задание 29 ---");
{
  function timeOfDay(hour) {
    if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
      return "Ошибка: час должен быть от 0 до 23";
    } else if (hour >= 6 && hour <= 11) {
      return "Утро";
    } else if (hour >= 12 && hour <= 17) {
      return "День";
    } else if (hour >= 18 && hour <= 21) {
      return "Вечер";
    } else {
      return "Ночь"; // 22–23 и 0–5
    }
  }
  let hour = 14;
  console.log(hour + ":00 -> " + timeOfDay(hour)); // День
  [3, 8, 19, 23, 25, -1].forEach(function (h) {
    console.log(h + ":00 -> " + timeOfDay(h));
  });
}

// Задание 30. Проверка результатов экзамена
console.log("--- Задание 30 ---");
{
  function exam(math, programming) {
    if (math >= 50 && programming >= 50) {
      return "Экзамены сданы";
    } else {
      return "Необходимо пересдать";
    }
  }
  let math = 75;
  let programming = 48;
  console.log(math + " и " + programming + ": " + exam(math, programming)); // Необходимо пересдать
  console.log("80 и 90: " + exam(80, 90));                                   // Экзамены сданы
}

// Задание 31. Определение високосного года
console.log("--- Задание 31 ---");
{
  function isLeap(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
  let year = 2028;
  console.log(year + (isLeap(year) ? " — високосный год" : " — не високосный год")); // високосный
  [1900, 2000, 2023, 2024].forEach(function (y) {
    console.log(y + (isLeap(y) ? " — високосный год" : " — не високосный год"));
  });
}

// ===== Уровень B — Циклы, строки и массивы =====

// Задание 32. Сумма нечётных чисел от 1 до 50
console.log("--- Задание 32 ---");
{
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log("Сумма нечётных чисел от 1 до 50: " + sum); // 625
}

// Задание 33. Подсчёт цифр числа
console.log("--- Задание 33 ---");
{
  let number = 45678;
  console.log("Количество цифр в " + number + ": " + String(number).length); // 5
}

// Задание 34. Переворот строки
console.log("--- Задание 34 ---");
{
  let word = "JavaScript";
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  console.log(word + " -> " + reversed); // tpircSavaJ
}

// Задание 35. Количество положительных чисел
console.log("--- Задание 35 ---");
{
  let numbers = [-5, 10, 0, 23, -8, 15, -2];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  console.log("Положительных чисел: " + count); // 3
}

// Задание 36. Удаление повторяющихся элементов
console.log("--- Задание 36 ---");
{
  let numbers = [2, 3, 2, 5, 3, 7, 5, 9];
  let unique = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }
  }
  console.log("Без повторов: " + unique.join(", ")); // 2, 3, 5, 7, 9
}

// ===== Уровень C — Функции =====

// Задание 37. Конвертер температуры
console.log("--- Задание 37 ---");
{
  function convertTemperature(celsius) {
    return celsius * 1.8 + 32;
  }
  [0, 20, 100].forEach(function (c) {
    console.log(c + "°C = " + convertTemperature(c) + "°F"); // 32, 68, 212
  });
}

// Задание 38. Проверка простого числа
console.log("--- Задание 38 ---");
{
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  [7, 12, 17, 21].forEach(function (n) {
    console.log(n + ": " + isPrime(n)); // true, false, true, false
  });
}

// Задание 39. Подсчёт гласных букв
console.log("--- Задание 39 ---");
{
  function countVowels(text) {
    let vowels = "aeiou";
    let lower = text.toLowerCase();
    let count = 0;
    for (let i = 0; i < lower.length; i++) {
      if (vowels.includes(lower[i])) {
        count++;
      }
    }
    return count;
  }
  console.log('"education": ' + countVowels("education")); // 5
  console.log('"Programming": ' + countVowels("Programming")); // 3
}

// Задание 40. Расчёт стоимости доставки
console.log("--- Задание 40 ---");
{
  function calculateDelivery(amount) {
    if (amount < 5000) {
      return 1500;
    } else if (amount < 15000) {
      return 800;
    } else {
      return 0; // бесплатно
    }
  }
  [3000, 10000, 20000].forEach(function (amount) {
    let delivery = calculateDelivery(amount);
    let total = amount + delivery;
    console.log("Заказ: " + amount + " ₸, доставка: " + (delivery === 0 ? "Бесплатно" : delivery + " ₸") + ", итого: " + total + " ₸");
  });
  // 3000 -> 1500 (итого 4500); 10000 -> 800 (10800); 20000 -> бесплатно (20000)
}

// ===== Уровень D — Реальные мини-проекты =====

// Задание 41. Электронный журнал колледжа
console.log("--- Задание 41 ---");
{
  let students = [
    {name: "Алия", score: 95},
    {name: "Арман", score: 67},
    {name: "Данияр", score: 82},
    {name: "Мадина", score: 45}
  ];

  console.log("Все студенты:");
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ": " + students[i].score);
  }

  console.log("Сдали (50 и выше):");
  let failed = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 50) {
      console.log(students[i].name + " (" + students[i].score + ")");
    } else {
      failed++;
    }
  }

  let best = students[0];
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > best.score) {
      best = students[i];
    }
    total += students[i].score;
  }
  console.log("Наивысший балл: " + best.name + " (" + best.score + ")");    // Алия (95)
  console.log("Средний балл группы: " + total / students.length);          // 72.25
  console.log("Не сдали экзамен: " + failed);                              // 1
}

// Задание 42. Система бронирования мест
console.log("--- Задание 42 ---");
{
  let seats = [false, true, false, false, true];
  let selectedSeat = 3;

  if (!Number.isInteger(selectedSeat) || selectedSeat < 1 || selectedSeat > seats.length) {
    console.log("Ошибка: неверный номер места");
  } else if (seats[selectedSeat - 1]) {
    console.log("Место " + selectedSeat + " уже занято");
  } else {
    seats[selectedSeat - 1] = true;
    console.log("Место " + selectedSeat + " успешно забронировано");
  }

  console.log("Обновлённый список мест:");
  for (let i = 0; i < seats.length; i++) {
    console.log("Место " + (i + 1) + ": " + (seats[i] ? "занято" : "свободно"));
  }
}

// Задание 43. Учёт товаров на складе
console.log("--- Задание 43 ---");
{
  let products = [
    {name: "Ноутбук", quantity: 5},
    {name: "Мышь", quantity: 15},
    {name: "Клавиатура", quantity: 3},
    {name: "Монитор", quantity: 8}
  ];

  console.log("Список товаров:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + ": " + products[i].quantity + " шт.");
  }

  console.log("Товары, которых меньше 5:");
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity < 5) {
      console.log(products[i].name + " (" + products[i].quantity + ")"); // Клавиатура (3)
    }
  }

  let totalQty = 0;
  let maxProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    totalQty += products[i].quantity;
    if (products[i].quantity > maxProduct.quantity) {
      maxProduct = products[i];
    }
  }
  console.log("Всего единиц товаров: " + totalQty);                                   // 31
  console.log("Больше всего: " + maxProduct.name + " (" + maxProduct.quantity + ")"); // Мышь (15)

  products.push({name: "Принтер", quantity: 4});
  console.log("Добавлен новый товар. Теперь товаров: " + products.length);            // 5
}

// Задание 44. Учёт расходов
console.log("--- Задание 44 ---");
{
  let expenses = [2500, 1800, 4200, 1500, 3100, 2600, 5000];
  let total = 0;
  let max = expenses[0];
  let min = expenses[0];
  let daysOver = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
    if (expenses[i] > max) max = expenses[i];
    if (expenses[i] < min) min = expenses[i];
    if (expenses[i] > 3000) daysOver++;
  }
  console.log("Общая сумма: " + total + " ₸");                                  // 20700
  console.log("Максимальный расход: " + max + " ₸");                            // 5000
  console.log("Минимальный расход: " + min + " ₸");                             // 1500
  console.log("Средний расход в день: " + (total / expenses.length).toFixed(2) + " ₸"); // 2957.14
  console.log("Дней с расходами свыше 3000 ₸: " + daysOver);                    // 3
}

// Задание 45. Система регистрации участников
console.log("--- Задание 45 ---");
{
  let participants = [
    {name: "Али", age: 17, registered: true},
    {name: "Аружан", age: 16, registered: false},
    {name: "Руслан", age: 19, registered: true}
  ];
  let admitted = 0;
  console.log("Допущенные участники:");
  for (let i = 0; i < participants.length; i++) {
    let p = participants[i];
    if (p.registered && p.age >= 16 && p.age <= 25) {
      console.log(p.name);
      admitted++;
    }
  }
  console.log("Всего допущено: " + admitted); // 2 (Али, Руслан)
}