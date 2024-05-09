function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        const companyCopy = { ...company }; // Копіюємо об'єкт, щоб не змінювати оригінал
        delete companyCopy.clients; // Видаляємо клієнтів
        delete companyCopy.partners; // Видаляємо партнерів
        return companyCopy;
    }

    if (company.clients) {
        for (let i = 0; i < company.clients.length; i++) {
            const foundSubCompany = findValueByKey(companyName, company.clients[i]);
            if (foundSubCompany) {
                return foundSubCompany;
            }
        }
    }

    // Тут додали перевірку, чи поточна компанія має партнерів, і якщо так, перевіряємо, чи один з них має потрібну назву
    if (company.partners) {
        for (let i = 0; i < company.partners.length; i++) {
            if (company.partners[i].name === companyName) {
                const partnerCopy = { ...company.partners[i] }; // Копіюємо знайдену компанію, щоб не змінювати оригінал
                delete partnerCopy.clients; // Видаляємо клієнтів
                delete partnerCopy.partners; // Видаляємо партнерів
                return partnerCopy;
            }
        }
    }

    return null; // Повертаємо null, якщо не знайдено відповідної компанії
}

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

const companyName = 'Вевлика Компанія';
const subCompanyInfo = findValueByKey(companyName, company);
if (subCompanyInfo) {
    console.log(subCompanyInfo);
} else {
    console.log(`Компанію з назвою "${companyName}" не знайдено.`);
}