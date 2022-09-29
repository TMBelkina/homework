let firstName = prompt('Введите Вашу фамилию')

let lastName = prompt('Введите Ваше имя')

let middleName = prompt('Введите Ваше отчество')

let age = prompt('Ваш возраст, укажите в цифрах')

let sex = confirm('Ваш пол - мужской?')


sex ? sex = 'Мужской' : sex = 'Женский';

pension = age < 55 ? pension = 'Нет' : pension = 'Да'

let answers = alert('ФИО: ' + firstName + lastName + middleName + "\r\n" +
    'Ваш возраст в годах: ' + age + "\r\n" +
    'Ваш возраст в днях: ' + (age * 365) + "\r\n" +
    'Через 5 лет вам будет: ' + (age++ + 5) + "\r\n" +
    'Ваш пол: ' + sex + "\r\n" +
    'Вы на пенсии: ' + pension
)