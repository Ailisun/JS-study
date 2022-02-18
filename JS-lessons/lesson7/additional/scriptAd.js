// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// function Users (id, name,username, email, address, phone, website,company){
//     this.id = id;
//     this.name = name;
//     this.username =username;
//     this.email = email;
//     this.address = address;
//     this.phone = phone;
//     this.website = website;
//     this.company = company
// }
// class Address {
//     street;
//     suite;
//     city;
//     geo;
//
//     constructor(street, suite, city, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.geo  = geo;
//     }
// }
// class Company {
//     name;
//     catchPhrase;
//     bs;
//
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
// class Geo {
//     lat;
//     lng;
//
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// let user = new Users(908, 'olha', 'laza', '13pr@gmso', new Address('Lviv', '144', 'Stryiska', new Geo('938','o376')),'08934t2', 'okten', new Company('namecompany', 'phrase phrase','Що таке bs?')  )
// console.log(user)

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// творити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// //     -назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru

// function TegsCreator (title, action, addons){
//     this.titleofTag = title;
//     this.action = action;
//     this.addons = addons;
//
// }
// class AddonsofTegs {
//     value1;
//     value2;
//
//     constructor(value1, value2) {
//         this.value1 = value1;
//         this.value2 = value2;
//     }
// }
// let teg1 = new TegsCreator ('<a>', 'предназначен для создания ссылок', new AddonsofTegs('Для создания ссылки необходимо сообщить браузеру, что является ссылкой','В качестве значения атрибута href используется адрес документа, на который происходит переход'))
// console.log(teg1)

// function UserCard (number) {
//     this.number = number;
//     let transactionLimit = 100;
//     let historyLog = []
//     let key = number;
//
//     function balance(money) {
//         let balance = 100
//
//         let balanceOperations = {
//             getbalance: function () {
//                 balance = 100;
//                 function currentBalance() {
//                     return balance
//                 }
//                 return currentBalance
//             }
//
//             putMoney: function () {
//                 balance = balance + money
//                 historyLog.push(`You got: ` + money + new Date().getDate())
//                 return balance
//             },
//             takeMoney: function () {
//                 if (money > balance) {
//                     historyLog.push(`Not enough money ` + new Date().getDate())
//                     return 0
//                 }
//                 else if (money > transactionLimit) {
//                     historyLog.push (`You have limit:` + transactionLimit)
//                     return 0
//                 }
//                 else {
//                     balance = balance - money
//                     return balance
//                 }
//             }
//         }
//             return balanceOperations
//         }
//
//
//         function setTransactionLimit ()
// }

