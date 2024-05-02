var repairServices = {
    "Заміна матриці": "600 грн",
    "Відновлення підсвітки": "400 грн",
    "Ремонт блока живлення": "350 грн",
    
    // Метод для обчислення загальної вартості послуг
    price: function() {
      var totalPrice = 0;
      for (var service in this) {
        if (typeof this[service] === 'string') {
          var price = parseInt(this[service]);
          if (!isNaN(price)) { // перевірка що вартість це число
            totalPrice += price;
          } else {
            console.log("Помилка: некоректне значення вартості для " + service);
          }
        }
      }
      return totalPrice;
    },
    
    // Метод для знаходження мінімальної вартості послуг
    minPrice: function() {
      var minPrice = Infinity;
      for (var service in this) {
        if (typeof this[service] === 'string') {
          var price = parseInt(this[service]);
          if (!isNaN(price) && price < minPrice) {
            minPrice = price;
          }
        }
      }
      return minPrice;
    },
    
    // Метод для знаходження максимальної вартості послуг
    maxPrice: function() {
      var maxPrice = -Infinity;
      for (var service in this) {
        if (typeof this[service] === 'string') {
          var price = parseInt(this[service]);
          if (!isNaN(price) && price > maxPrice) {
            maxPrice = price;
          }
        }
      }
      return maxPrice;
    }
  };
  
  // Додання нової послуги та її вартості
  repairServices['Втішити клієнта'] = "8000 грн";
  repairServices['Діагностика'] = "по домовленості"; // Вартість=string
  
  // Виведення результатів
  console.log("Загальна вартість послуг: " + repairServices.price() + " грн");
  console.log("Мінімальна вартість послуг: " + repairServices.minPrice() + " грн");
  console.log("Максимальна вартість послуг: " + repairServices.maxPrice() + " грн");