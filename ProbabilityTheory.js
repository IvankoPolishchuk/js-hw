function checkProbabilityTheory(count, min, max) {
    // Генеруємо вхідні дані для виведення
    const inputInfo = `Вхідні дані: Кількість чисел: ${count}, Діапазон значень: ${min}-${max}`;
    console.log(inputInfo); // Виводимо вхідні дані

    let evenCount = 0;
    let oddCount = 0;

    // Генеруємо випадкові числа та рахуємо кількість парних та непарних
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (randomNumber % 2 === 0) {
            evenCount++; // Збільшуємо лічильник парних чисел
        } else {
            oddCount++; // Збільшуємо лічильник непарних чисел
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    // Виводимо результати
    console.log("Результати:");
    console.log("Кількість згенерованих чисел:", totalNumbers);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "%", oddPercentage.toFixed(2) + "%");
}

// Виклик функції
checkProbabilityTheory(1000, 100, 1000);