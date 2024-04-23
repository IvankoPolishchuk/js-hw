function pad(str, char, count, addToStart) {
    // Перевірка типів аргументів
    if (typeof str !== 'string') {
      console.log('Перший аргумент має бути рядком.');
      return; // Повертаємо, якщо перший аргумент не є рядком
    }
  
    if (typeof char !== 'string') {
      console.log('Другий аргумент має бути рядком.');
      return; // Повертаємо, якщо другий аргумент не є рядком
    }
  
    if (typeof count !== 'number' || count < 0 || !Number.isInteger(count)) {
      console.log('Третій аргумент має бути додатнім цілим числом.');
      return; // Повертаємо, якщо третій аргумент не є невід'ємним цілим числом
    }
  
    if (typeof addToStart !== 'boolean') {
      console.log('Четвертий аргумент має бути булевим значенням.');
      return; // Повертаємо, якщо четвертий аргумент не є булевим значенням
    }
  
    const currentLength = str.length;
    const difference = count - currentLength;
  
    // Перевірка, чи потрібно додавати символи
    if (difference <= 0) {
      console.log('Нічого додавати');
      console.log(str); // Виводимо вхідний рядок, якщо не потрібно додавати символи
      return;
    }
  
    const padding = char.repeat(difference);
  
    // Додавання падінгу відповідно до параметра addToStart
    if (addToStart) {
      console.log(padding + str); // Виводимо результат з падінгом до початку рядка
    } else {
      console.log(str + padding); // Виводимо результат з падінгом до кінця рядка
    }
  }
  
  // Приклади використання:
  pad('xxx', '+', 5, true); // "++xxx"
  pad('xxx', '+', 5, false); // "xxx++"
  pad('xxx', '+', 3, true); // "нічого додавати, поверне початковий рядок"
  pad(123, '+', 5, true); // Перший аргумент має бути рядком.
  pad('xxx', 123, 5, true); // Другий аргумент має бути рядком.
  pad('xxx', '+', -5, true); // Третій аргумент має бути додатнім цілим числом.
  pad('xxx', '+', 5, 123); // Четвертий аргумент має бути булевим значенням.
