// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// for (const simpson of simpsons) {
//     let arr2 = document.createElement('div')
//     arr2.classList.add('member')
//     document.body.appendChild(arr2)
// }
// - взяти попередній масив з сімпсонами.
// Для кожної властивості елементу створити окремий блок, та помістити його у div.member

// перший варіант//
// for (const simpson of simpsons) {
//     let arr2 = document.createElement('div')
//     arr2.classList.add('member')
// let {name, surname, age, info, photo} = simpson
//     let nameDiv = document.createElement('div')
//     nameDiv.innerHTML = name
//     arr2.appendChild(nameDiv)
//     let surnameDiv = document.createElement('div')
//     surnameDiv.innerHTML = surname
//     let ageDiv = document.createElement('div')
//     ageDiv.innerHTML = age
//     arr2.appendChild(ageDiv)
//     let infoDiv = document.createElement('div')
//     infoDiv.innerHTML = info
//     arr2.appendChild(infoDiv)
//     let photoDiv = document.createElement('img')
//     photoDiv.src = photo
//     arr2.appendChild(photoDiv)
//
//     document.body.appendChild(arr2)
// }

//спроба його якось деструктуризувати//
//     for (const simpson of simpsons) {
//         let arr2 = document.createElement('div')
//         arr2.classList.add('member')
//         let {name, surname, age, info, photo} = simpson
//
//         duplicated(name, arr2)
//         duplicated(age, arr2)
//         duplicated(surname, arr2)
//         duplicated(info, arr2)
//         let photoDiv = document.createElement('img')
//         photoDiv.src = photo
//         arr2.appendChild(photoDiv)
//
//         document.body.appendChild(arr2)
//
// }
// function duplicated (content, mainBlock) {
//             let elementDiv = document.createElement('div')
//             elementDiv.innerHTML = content
//             mainBlock.appendChild(elementDiv)
// }

// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
for (const course of coursesArray) {
    let coursesArray2 = document.createElement('div')
    coursesArray2.style.width = '800px'

    let title = document.createElement('h2')
    title.style.border = '2px solid green'
    title.innerHTML = course.title

    let time = document.createElement('div')
    time.style.display = 'flex'
    time.style.border = '2px solid green'

    let month = document.createElement('div')
    month.innerHTML = course.monthDuration
    month.style.width = '200px'
    month.style.marginLeft = '30px'

    let hours = document.createElement('div')
    hours.innerHTML = course.hourDuration
    time.append(month, hours)

    let lessons = document.createElement('ul')

    for (const item of course.modules) {
        let item2 = document.createElement('li');
        // console.log(item2)
        item2.appendChild(document.createTextNode(item));
        lessons.appendChild(item2)
    }
    let wrap = document.createElement('div')
    wrap.appendChild(lessons)
    wrap.style.border = '2px solid green'

    coursesArray2.appendChild(title)
    coursesArray2.appendChild(time)
    coursesArray2.appendChild(wrap)
    document.body.appendChild(coursesArray2)

}