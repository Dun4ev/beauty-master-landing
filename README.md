# Landing page

Статическая мини-страница мастера для ссылки в Instagram bio.

## Как открыть локально

Откройте файл:

```text
landing/index.html
```

## Что менять

Все основные данные находятся в:

```text
landing/config.js
```

Там можно поменять:

- имя мастера;
- город и район;
- ссылку на Telegram-бота;
- ссылки Viber, WhatsApp, Instagram;
- адрес и Google Maps;
- встроенную карту Google Maps;
- услуги и цены;
- главное фото.
- demo-видео и скриншоты сценария записи.
- подпись автора и примечание про пример дизайна.

Для карты используются две ссылки:

- `mapsUrl` — открывает Google Maps по клику;
- `mapEmbedUrl` — показывает карту прямо на странице.

## Demo-видео и скриншоты

Положите файлы в:

```text
landing/assets/
```

Например:

```text
landing/assets/demo.mp4
landing/assets/date.png
landing/assets/time.png
landing/assets/admin.png
```

Затем пропишите их в `landing/config.js`:

```js
demoVideo: "./assets/demo.mp4",
demoPoster: "./assets/demo-poster.jpg",
demoSteps: [
  { title: "Choose a date", text: "...", image: "./assets/date.png" },
  { title: "Pick a time", text: "...", image: "./assets/time.png" },
  { title: "Admin gets booking", text: "...", image: "./assets/admin.png" },
],
```

## Подпись автора

В `landing/config.js` можно поменять:

```js
footerNote: "This page is an example design included with the booking bot...",
creatorName: "Created by Alex",
creatorUrl: "https://t.me/your_username",
```

## Как разместить

Самые простые варианты:

- GitHub Pages;
- Netlify;
- Vercel;
- любой обычный статический хостинг.

Бот и страница могут жить отдельно. Кнопка `Book online` ведёт пользователя в Telegram-бота.

## SEO и индексация

В странице уже есть базовая SEO-разметка:

- title и description;
- Open Graph для красивого превью в соцсетях;
- JSON-LD `BeautySalon` для поисковых систем;
- `robots.txt`;
- `sitemap.xml`.

Перед публикацией замените `https://YOUR_DOMAIN/` в файлах:

```text
landing/index.html
landing/robots.txt
landing/sitemap.xml
```

на реальный адрес страницы. Например:

```text
https://yourname.github.io/beauty-master-landing/
```

После публикации добавьте сайт в Google Search Console:

```text
https://search.google.com/search-console
```

И отправьте sitemap:

```text
https://yourname.github.io/beauty-master-landing/sitemap.xml
```

Индексация не мгновенная. Для тестового демо это не обязательно, но для реального мастера и локального поиска в Novi Sad это полезно.

## Метрика посещений

Для MVP лучше выбрать один простой вариант:

- Google Analytics 4 — бесплатно, мощно, но интерфейс сложнее;
- Plausible — простой и аккуратный, обычно платный;
- Umami — можно поставить самостоятельно;
- Cloudflare Web Analytics — простой вариант, если домен подключён через Cloudflare.

Метрика подключается отдельным script-тегом в `landing/index.html`. Не добавляйте сразу несколько систем аналитики, иначе страница станет тяжелее, а данные будут дублироваться.
