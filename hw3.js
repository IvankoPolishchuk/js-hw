const users = {
    "id": "0013",
    "name": "Alice 13",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 13",
        "Hiking 13"
    ]
}
//показує цілий об'єкт
console.log(users);

// Виводимо останнє хобі
console.log(users.hobbies[1]);

// Виводимо адресу в форматованому вигляді
console.log(`Address: ${users.address.city}, ${users.address.street}`);