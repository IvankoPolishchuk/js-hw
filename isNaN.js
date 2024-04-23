function myIsNaN(value) {
    // Перевіряємо, чи value - це число
    if (typeof value !== 'number') {
      // Якщо не число, виводимо коментар і повертаємо true
      console.log("Значення не є числом");
      return true;
    } else if (value !== value) {
      // Перевіряємо, чи value дорівнює собі + виводимо true + коментар
      console.log("Значення є NaN і не є числом");
      return true;
    } else {
      // Якщо значення є числом, виводимо коментар і повертаємо false
      console.log("Значення є числом");
      return false;
    }
  }
  console.log(myIsNaN(NaN))
