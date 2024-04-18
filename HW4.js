function evaluateExpression(expression, description) {
    const result = eval(expression);
    const type = typeof result;
    console.log(`Вираз: ${expression}`);
    console.log(`Результат: ${result}`);
    console.log(`Тип результату: ${type}`);
    console.log(`Коментар: ${description}`);
    console.log('---------------------------');
}

// 'number' + 3 + 3
// Спочатку конкатенація рядка 'number' і числа 3, отримуємо рядок 'number3'.
// Потім до цього рядка знову додаємо число 3, отримуємо рядок 'number33'.
evaluateExpression("'number' + 3 + 3", "Конкатенація рядків 'number' і 3, потім додавання 3");

// null + 3
// Операція додавання до null буде мати результат числа 3.
evaluateExpression("null + 3", "Додавання числа до null");

// 5 && "qwerty"
// Логічне І поверне перший "неправдивий" операнд, або останній операнд, якщо обидва правдиві.
// У цьому випадку, результатом буде рядок "qwerty", оскільки обидва операнди є істинними значеннями.
evaluateExpression("5 && 'qwerty'", "Логічне І, повертає перший 'неправдивий' операнд");

// +'40' + +'2' + 'hillel'
// Перед кожним операндом стоїть унарний оператор +, який перетворює рядки у числа.
// Потім проводиться додавання чисел та конкатенація з рядком "hillel".
evaluateExpression("+'40' + +'2' + 'hillel'", "Перетворення рядків у числа, додавання та конкатенація рядків");

// '10' - 5 === 6
// Рядок '10' перетворюється в число 10, і потім проводиться віднімання 5. Результат 5.
// Порівнюємо результат з числом 6. Результатом буде false.
evaluateExpression("'10' - 5 === 6", "Віднімання та порівняння");

// true + false
// Логічне true перетворюється в число 1, а false в 0. Потім проводиться додавання.
evaluateExpression("true + false", "Конвертація булевих значень у числа та додавання");

// '4px' - 3
// Рядок '4px' не можна перетворити в число, тому отримаємо NaN (Not a Number).
evaluateExpression("'4px' - 3", "Помилка в обчисленні через неможливість конвертації рядка у число");

// '4' - 3
// Рядок '4' перетворюється в число 4, і потім проводиться віднімання 3. Результат 1.
evaluateExpression("'4' - 3", "Віднімання чисел");

// '6' + 3 ** 0
// Спочатку обчислюється 3 в степені 0 (що дорівнює 1), потім проводиться конкатенація з рядком '6'.
evaluateExpression("'6' + 3 ** 0", "Конкатенація рядка та обчислення степенів");

// 12 / '6'
// Рядок '6' перетворюється в число 6, і потім проводиться ділення. Результат 2.
evaluateExpression("12 / '6'", "Ділення чисел");

// '10' + (5 === 6)
// Вираз (5 === 6) повертає false, який перетворюється в рядок "false".
// Потім відбувається конкатенація з рядком '10'.
evaluateExpression("'10' + (5 === 6)", "Конкатенація рядка та результату порівняння");

// null == ''
// Обидва операнди конвертуються у числа, null стає 0, а рядок '' теж стає числом 0. Результат true.
evaluateExpression("null == ''", "Перетворення значень у числа та порівняння");

// 3 ** (9 / 3)
// Спочатку обчислюється вираз у дужках (9 / 3 = 3), потім 3 в степені 3. Результат 27.
evaluateExpression("3 ** (9 / 3)", "Обчислення степенів");

// !!'false' == !!'true'
// Обидва рядки перетворюються в true, оскільки вони не є пустими. Після подвійного заперечення отримаємо true.
// Так як обидва операнди є true, результат буде true.
evaluateExpression("!!'false' == !!'true'", "Перетворення рядків у булеві значення та порівняння");

// 0 || '0' && 1
// Оператор || повертає перший "істинний" операнд. Якщо обидва операнди false, повертається другий.
// Тут 0 - false, '0' - true, тому результатом буде '0'.
evaluateExpression("0 || '0' && 1", "Логічні операції І та АБО");

// (+null == false) < 1
// null перетворюється в 0, а false теж в 0. Тому порівнюється 0 == 0, що є true.
// true конвертується в 1, і потім порівнюється 1 < 1, що є false.
evaluateExpression("(+null == false) < 1", "Порівняння чисел та результату");

// false && true || true
// Спочатку відбувається логічне І (AND). Оскільки перший операнд - false, результатом буде false.
// Потім відбувається логічне АБО (OR) з false та true. Результатом буде true.
evaluateExpression("false && true || true", "Логічні операції І та АБО");

// false && (false || true)
// Спочатку обчислюється вираз у дужках, що дає true.
// Потім відбувається логічне І (AND) false і true, результат - false.
evaluateExpression("false && (false || true)", "Групування логічних операцій");

// (+null == false) < 1 ** 5
// Порівнюється 0 == 0, що є true.
// Потім обчислюється 1 в степені 5, що дає 1.
// Порівнюється true < 1, що є true.
evaluateExpression("(+null == false) < 1 ** 5", "Порівняння чисел та результату степенів");