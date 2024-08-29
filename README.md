# Faraway Test Task

Deployed App: https://faraway-sw.vercel.app/

## Task Description
Используя Star Wars API (https://swapi.dev/) в качестве источника данных, реализовать SPA приложение React и Typescript, состоящее из двух страниц.
На главной странице отобразить список или карточки персонажей, к списку добавить возможность пагинации и поиска с использованием API.
Реализовать страницу с подробной информацией по выбранному персонажу. На эту страницу добавить возможность редактировать и сохранять информацию о персонаже локально, без отправки на сервер.

Плюсы:
- Аккуратная верстка
- Использование UI фреймворка (Material, Ant, Bootstrap и т.п.)
- В качестве дополнительного задания: Тесты

## Implementation Details & Tradeoffs

В качестве основы был взят Next.js 14 App Router с использованием RSC.
Для стилизации был выбран MUI.

Что сделано:

- Главная страница со списком персонажей
- Поиск по персонажам и пагинация
- Страница персонажа и возможность редактировать некоторые поля, которые сохраняются в `LocalStorage`

Что не сделано:

- Тесты. Причина простая: это трудоемкая задача и на нее в данном случае времени не хватило.
Для тестов я бы взял `Cypress` с помощью него можно написать тесты `React` компонентов и `E2E`. Для остального подошел бы `Jest`

Учитывая временные ограничения, заданные мною, и то, что это тестовое задание, а не production grade решение пришлось пойти на некоторые компромиссы:

- Предполагается, что API всегда отдает ответ со статусом 200 или 404. Проработано минимальное кол-во негативных сценариев и в самом простом виде
- Нет состояний загрузки данных. Предполагается, что endpoint отвечает быстро и интернет у клиента также достаточно быстр
- Нет тестов
- Отсутствует конфигурация приложения (env variables). В данном случае туда можно добавить API Base URL, но учитывая, что сервис, работающий с ним только один, и сам путь до API также один, в этом нет необходимости
- Не стал заморачиваться со структурой папок, взял простой вариант с `api`, `components`, `app`
- Все компоненты `MUI` стилизованы через `sx`, т.к. это проще и быстрее, чем выносить `styled` компоненты в отдельные файлы. Учитывая небольшое кол-во элементов на страницах это не должно вызывать проблем
- Валидация формы редактирования персонажа производится браузером и достаточно простая
- Не весь код меня устраивает с точки зрения его "чистоты", но в приоритете работающее решение, а не масштабируемое

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
