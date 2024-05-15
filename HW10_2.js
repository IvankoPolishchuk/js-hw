var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять по домену
    },
    {
        userName: "Oksana",
        lastName: "Ivanova",
        email: "oksana@gmail.com"
    },
    {
        userName: "Vasyl",
        lastName: "Petrenko",
        email: "vasyl@yahoo.com"
    },
    {
        userName: "Olga",
        lastName: "Kovalenko",
        email: "olga.kovalenko@gmail.com"
    },
    {
        userName: "Petro",
        lastName: "Sidorov",
        email: "petro.sidorov@yahoo.com"
    },
    {
        userName: "Anna",
        lastName: "Pavlova",
        email: "anna@yahoo.com"
    },
    {
        userName: "Ivan",
        lastName: "Melnik",
        email: "ivan.melnik@ukr.net"// Нам такі не підходять по домену
    },
    {
        userName: "Maria",
        lastName: "Sydorova",
        email: "maria.,sydorova@yahoo.com"// Нам такі не підходять по валідації моделі імейлу
    }
];

// Регулярний вираз для валідації імейлу
var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;

// Масиви для зберігання довірених і недовірених імейлів
var trustedEmails = [];
var untrustedEmails = [];

// Перевірка кожного імейлу
arr.forEach(function(obj) {
    if (emailRegex.test(obj.email)) {
        trustedEmails.push(obj.email);
    } else {
        untrustedEmails.push(obj.email);
    }
});

console.log("Довірені адреси електронної пошти:", trustedEmails);
console.log("Недовірені адреси електронної пошти:", untrustedEmails);