# test
# Первый запуск
## Установка компонентов
1. Устанавливаем [NodeJs](https://nodejs.org/uk/)
2. Запускаем терминал
3. Обновляем пакетный менеджер **NPM** `npm install npm@latest -g`
4. Устанваливаем **Gulp**(*глобально*) `npm install --global gulp-cli`
5. Скачаиваем проект по ссылке

# Работа с проектом
1. Открываем корневую папку проекта в терминале
2. Устанавливаем зависимости командой `npm install` и дожидаемся конца установки. Должна появиться папка: **node_modules**

# Структура каталогов

>### Корневой каталог содержит 3 основные папки
>1. **app** - основная рабочая папка:
>>    1. **css** - содержит скомпилированный и сжатый css-файл и normalize.css
>>    2. **fonts** - содержит файлы шрифтов. 
>>    3. **img** - картинки.
>>    4. **js** - сдесь храниться библиотека JQuery, а также основной скрипт.
>>    5. **plugins** - папка с плагинами. 
>>    6. **sass** - сдесь мы размещаем все файлы стилей. ![!!!](https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519791-101_Warning-20.png) ВАЖНО: Файлы должны иметь раширение `.scss`, все файлы блоков, что будут инклудиться в основной, должны начинаться с подчеркивания, пример: `'_header.scss'`


# Основные команды
## gulp
Следит за файлами в директории `app/sass` и применяет к ним команду `sass`

## gulp sass
Компилирует `.sass`-файлы в `.css` применяет к ним вендорные-префиксы, минифицирует и отправляет в папку `app/css`
