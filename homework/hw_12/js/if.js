let firstName = prompt('Введите Вашу фамилию')

let lastName = prompt('Введите Ваше имя')

let middleName = prompt('Введите Ваше отчество')

let age = prompt('Ваш возраст, укажите в цифрах')

let sex = confirm('Ваш пол - мужской?')

if (sex) {
    sex = 'мужской'
} else {
    sex = 'женский'
}

if (age < 57) {
    pension = 'нет'
} else {
    pension = 'да'
}

let answers = alert('ФИО: ' + firstName + lastName + middleName + "\r\n" +
    'Ваш возраст в годах: ' + age + "\r\n" +
    'Ваш возраст в днях: ' + (age * 365) + "\r\n" +
    'Через 5 лет вам будет: ' + (age++ + 5) + "\r\n" +
    'Ваш пол: ' + sex + "\r\n" +
    'Вы на пенсии: ' + pension
)