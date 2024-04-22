var sum = 0;

for (var i = 1; i <= 10; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log("Сума чисел від 1 до 100, які не кратні 3 = " + sum);