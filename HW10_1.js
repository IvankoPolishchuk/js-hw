// Регулярний вираз для пошуку рядків, які мають принаймні 6 символів і не містять літеру "А" (велику або маленьку)
var regex = /^(?!.*[Aa]).{6,}$/;

// Приклади рядків для тестування
var strings = [
    "Dddddpple",       // підходить (не містить 'А' і має принаймні 6 символів)
    "BananA",      // знайдено і маленьку 'a' і велику 'A'
    "Orange",      // знайдено маленьку 'a'
    "Strawberry",  // знайдено маленьку 'a'
    "Pineapple",   // знайдено маленьку 'a'
    "Watermelon",  // знайдено маленьку 'a'
    "Mango",       // знайдено маленьку 'a'
    "Grapes",      // знайдено маленьку 'a'
    "Kiwi",        // не підходить
    "Peach",        // знайдено маленьку 'a'
    "Peddddddch"  //підходить (не містить 'А' і має принаймні 6 символів)
];

// Перевіряємо кожен рядок на відповідність регулярному виразу
strings.forEach(function(str) {
    if (regex.test(str)) {
        console.log("Рядок:", str, "- підходить (не містить 'А' і має принаймні 6 символів)");
    } else {
        if (str.includes('a') && str.includes('A')) {
            console.log("Рядок:", str, "- знайдено і маленьку 'a' і велику 'A'");
        } else if (str.includes('a')) {
            console.log("Рядок:", str, "- знайдено маленьку 'a'");
        } else if (str.includes('A')) {
            console.log("Рядок:", str, "- знайдено велику 'A'");
        } else {
            console.log("Рядок:", str, "- не підходить по кількості символів");
        }
    }
});