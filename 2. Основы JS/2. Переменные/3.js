/*
    Вопрос: 
        Можно ли использовать заглавные буквы для имени birthday? А для 
        age? Или одновременно для обеих переменных?
    Ответ:
        Технически --- можно, код продолжит запускаться.
            Есть соглашение, по которому констнанты, значение которых 
        известно до начала выполнения скрипта, нужно называть именами, 
        состоящими из заглавных букв.
            Применимо ли оно к этому коду?
            1) birthday --- константа, инициализированная литералом, ее значение 
            всегда одно и то же, ее можно смело назвать BIRTHDAY.
            2) age вычисляется при каждом запуске, причем, если функция работает 
            верно, она будет принимать разные значения. Ее имя лучше не трогать.
            Строго говоря, возраст может и поменяться во время исполнения скрипта, 
            хотя это случается очень редко.
*/

const birthday = '18.04.1982';

const age = someCode(birthday);