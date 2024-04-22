function pow(x, y) {
    let result = 1;
    // Перевіряємо, чи y додатнє, від'ємне чи нуль
    if (y > 0) {
        // Випадок, коли y додатнє
        for (let i = 0; i < y; i++) {
            result *= x;
        }
    } else if (y < 0) {
        // Випадок, коли y від'ємне
        for (let i = 0; i > y; i--) {
            result /= x;
        }
    }
    // Значення залишається 1, якщо y === 0
    return result;
}

// вивід результату:
const x = 2;
const y = -2;
const result = pow(x, y);
console.log(`${x} в ступені ${y} = ${result}`);