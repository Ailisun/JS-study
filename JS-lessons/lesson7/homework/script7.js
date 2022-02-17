// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name, surname, email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//  let usersArr = [
//      new User (4, 'katya', 'Ivanova', ' kof@gmail.com','0986534793'),
//      new User (6, 'vasya', 'Soloviov', ' ss@gmail.com','0986475793'),
//      new User (2, 'sanya', 'shipit', ' ssh@gmail.com','09456653493'),
//      new User (8, 'annia', 'Listova', ' al@gmail.com','0676534793'),
//      new User (22, 'alena', 'mayor', ' aam@gmail.com','09974t8234'),
//      new User (7, 'nastia', 'kolos', ' kolos@gmail.com','0766534793'),
//      new User (9, 'yevgen', 'grebchyk', ' ygreb@gmail.com','066694793'),
//      new User (1, 'toma', 'tomchenko', ' tocha@gmail.com','0676034793'),
//      new User (3, 'anton', 'antonenko', ' aa@gmail.com','0996568793'),
//      new User (10, 'andrii', 'petrik', ' ap@gmail.com','0676534793')
//  ]
// console.log(usersArr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//  let userFilter = usersArr.filter((value) => {
//     if (value.id % 2 === 0) {
//         return value
//     }
// })
// console.log(userFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userGrow = usersArr.sort ((prev, next) =>{
//     return  prev.id - next.id
// })
// console.log(userGrow)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// function Client (id,name, surname, email,phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }

// створити пустий масив, наповнити його 10 об'єктами Client
//  let clientsArr = [
//      new Client (4, 'katya', 'Ivanova', ' kof@gmail.com','0986534793', ['Chalk','Compass', 'Dailydiary']),
//      new Client (6, 'vasya', 'Soloviov', ' ss@gmail.com','0986475793', ['Diary','Glue']),
//      new Client (2, 'sanya', 'shipit', ' ssh@gmail.com','09456653493', ['Pen','Pencil', 'Pencil']),
//      new Client (8, 'annia', 'Listova', ' al@gmail.com','0676534793', ['Core']),
//      new Client (22, 'alena', 'mayor', ' aam@gmail.com','09974t8234', ['Alidad']),
//      new Client (7, 'nastia', 'kolos', ' kolos@gmail.com','0766534793', ['Crayon','Notebook', 'Dailydiary']),
//      new Client (9, 'yevgen', 'grebchyk', ' ygreb@gmail.com','066694793', ['PeperClip','Compass', 'PencilBox']),
//      new Client (1, 'toma', 'tomchenko', ' tocha@gmail.com','0676034793', ['PencilBox','Notebook', 'Pen']),
//      new Client (3, 'anton', 'antonenko', ' aa@gmail.com','0996568793', ['Stapler','Pen', ]),
//      new Client (10, 'andrii', 'petrik', ' ap@gmail.com','0676534793', ['Pen','Compass'])
//  ]
// console.log(clientsArr)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let quanityOrders = clientsArr.sort ((prev, next) => {
//     return prev.order.length - next.order.length
// })
// console.log(quanityOrders)