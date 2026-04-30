# Menedżer wydatków

Prosta aplikacja stworzona w React Typescript, która pozwala dodawać, usuwać i przeglądać wydatki.

Projekt powstał jako materiał szkoleniowy. Pokazuje podstawowe mechanizmy React w praktyce.

## Instalacja

Zainstaluj zależności:

`npm install`

i uruchom aplikację:

`npm run dev`

Projekt korzysta z Vite, więc aplikacja powinna uruchomić się bardzo szybko.

## Funkcjonalności

- dodawanie nowych wydatków
- usuwanie wydatków
- podsumowanie (łączna kwota + liczba transakcji)
- zapis danych w localStorage (dane nie znikają po odświeżeniu)
- routing między widokami (lista / statystyki)

## Czego się tutaj nauczysz

- komponenty i ich struktura
- propsy i przepływ danych
- hooki (useState, useEffect, useContext)
- zarządzanie stanem globalnym (Context API)
- obsługa zdarzeń (event handlers)
- routing przy użyciu React Router
- praca z localStorage

## Struktura projektu

```
src/
│
├── components/     # komponenty UI
├── context/        # Context API (globalny stan)
├── pages/          # widoki (np. Home, Expenses, Stats)
├── assets/         # pliki statyczne (obrazy)
└── App.jsx         # główny komponent aplikacji
```

## Wskazówki dla kursantów

- spróbuj zamienić props drilling na Context (tak jak na repo)
- spróbuj dodać edycję wydatków
- dodaj kategorię (np. jedzenie, transport)
- dodaj filtrowanie lub wyszukiwanie
- spróbuj przepisać Context na useReducer

## Przydatne materiały

React – https://react.dev
React Router – https://reactrouter.com
Vite – https://vitejs.dev

## Autor

Projekt przygotowany na potrzeby zajęć z Reacta.