--

# Критерии приема

- Создан репозиторий `goit-react-hw-06-phonebook`

- При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу
  проекта на `GitHub Pages` или `Netlify`<br>
- В Redux-состоянии хранится минимально необходимый набор данных<br>
- При запуске кода задания, в консоли нету ошибок и предупреждений<br>
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей<br>
- Для компонентов описаны `propTypes`, и где необходимо, `defaultProps`<br>

## Телефонная книга

Выполни рефакторинг кода приложения «Телефонная книга» добавив управление
состоянием при помощи библиотеки [Redux](https://redux.js.org/)<br>

Пусть Redux-состояние выглядит следующим образом.<br>

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

## Шаг 1

### Используй только возможности библиотеки Redux (без redux-toolkit).<br>

- Создай хранилище и добавь инструменты разработчика <br>
- Создай действия (actions) сохранения и удаления контакта, а также обновления
  фильтра.<br>
- Вынеси типы действий в отдельный файл констант.<br>
- Создай редюсеры контактов и фильтра. <br>
- Свяжи React-компоненты с Redux-логикой при помощи бибилиотеки
  [react-redux](https://react-redux.js.org/)<br>

## Шаг 2

Выполни рефакторинг кода и сократи Redux-бойлерплейт используя библиотеку
[Redux Tookit](https://redux-toolkit.js.org/). Используй функции
`configureStore()`, `createAction()` и `createReducer()`.

## Быстрый старт

```bash
npx create-react-app .имя папки проекта
```

Для того чтобы создать приложение в текущей папке, вместо имени проекта ставится
точка. Например npx `create-react-app .`. Это можно использовать когда был
склонирован репозиторий и в его локальной версии инициализируется приложение.

### Установить в проект следующие пакеты.

```bash
npm install --save-dev prettier eslint
```

Инициализация `lint-staged` и `husky`.

Пользователям MacOS и Linux систем необходимо выполнить в терминале следующую
команду. Она установит и настроит `husky` и `lint-staged` в зависимости от
инструментов качества кода из зависимостей проекта в `package.json`.

```bash
npx mrm lint-staged
```

Пользователям Windows необходимо выполнить следующую команду. Она делает тоже
самое.

```bash
npx mrm@2 lint-staged
```

```bash
npm install --save prop-types
```

добавить в корень проекта `.huskyrc`

```bash
{
    "hooks":{
      "pre-commit": "lint-staget"
    }
}
```

добавить в корень проекта `.lintstagedrc`

```bash
"lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,scss,css,md}": "prettier --write"
  }
```

В файле `package.json` добавить

```bash
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
```

заменив `имя_пользователя` и `имя_репозитория` на свои.

```bash
npm run build
```

```bash
npm install gh-pages --save-dev
```

добавить два пакета в `package.json`

```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

```bash
npm install modern-normalize
```

добавить файл `.prettierrc.json`

```bash
{
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "arrowParens": "avoid",
    "proseWrap": "always"
}
```

#### дополнительные пакеты

[axios](https://www.npmjs.com/package/axios)<br>
[react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)<br>
[react-toastify](https://www.npmjs.com/package/react-toastify)<br>
[react-scroll](https://www.npmjs.com/package/react-scroll)<br>
[react-icons](https://react-icons.github.io/react-icons)<br>
[prop-types](https://www.npmjs.com/package/prop-types)<br>
[gh-pages](https://www.npmjs.com/package/gh-pages)<br>
[modern-normalize](https://github.com/sindresorhus/modern-normalize)<br>
[node-sass](https://www.npmjs.com/package/node-sass)<br>
[shortid](https://www.npmjs.com/package/shortid)<br>
[classnames](https://www.npmjs.com/package/classnames)<br>

---
