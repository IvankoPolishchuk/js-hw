
// введення значення кількості років
const yearInput = prompt("Введіть кількість років:");

// Перевірка, чи користувач взагалі щось ввів
if (yearInput !== null) {
    // Перевірка, чи введене значення є числом та більше або рівне нулю
    if (!isNaN(yearInput)) {
        const year = parseInt(yearInput);

        if (year >= 0) {
            // Визначення останньої цифри
            const lastDigit = year % 10;
            const lastTwoDigits = year % 100;

            // Вибір правильного слова
            let output;
            if ((lastTwoDigits >= 11 && lastTwoDigits <= 14) || (lastDigit === 0) || (lastDigit >= 5 && lastDigit <= 9)) {
                output = year + " років";
            } else if (lastDigit === 1) {
                output = year + " рік";
            } else {
                output = year + " роки";
            }

            alert(output);
            // вивід помилок у разі некоректного вводу
        } else {
            alert("Введене значення має бути додатнім");
        }
    } else {
        alert("Введене значення має бути числом");
    }
} else {
    alert("Будь ласка введіть значення");
}