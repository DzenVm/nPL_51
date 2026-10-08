# Gra logiczna: połącz trasę

Polskojęzyczna gra przeglądarkowa z trzema autorskimi poziomami. Obracaj kafelki, aby poprowadzić światło od wejścia do wyjścia. Postęp zapisuje się lokalnie w przeglądarce.

## Uruchomienie

```bash
npm ci
npm run dev
```

Otwórz `http://localhost:3000`. Do gry nie są potrzebne konto, baza danych ani klucze API.

## Wdrożenie

Projekt używa Next.js App Router. Vercel powinien wykryć framework automatycznie; `vercel.json` ustawia go jawnie. Po połączeniu repozytorium ustaw katalog główny projektu na katalog tego repozytorium i przypisz domenę `terqovunax.quest`.

Grafiki w `public/images` zostały wygenerowane specjalnie do tej strony.
