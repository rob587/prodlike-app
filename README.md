Esercizio — App Catalogo Prodotti
Crea un'app con 3 tab e navigazione verso una schermata di dettaglio.
Struttura:
app/
\_layout.tsx
dettaglio.tsx ← schermata dettaglio (fuori dalle tabs)
(tabs)/
\_layout.tsx
index.tsx ← tab Prodotti
preferiti.tsx ← tab Preferiti
profilo.tsx ← tab Profilo

Tab Prodotti (index.tsx)

Mostra una lista di almeno 5 prodotti con FlatList
Ogni prodotto ha nome, prezzo e categoria
Ogni prodotto è cliccabile — porta alla schermata dettaglio passando nome, prezzo e categoria

Schermata Dettaglio (dettaglio.tsx)

Mostra nome, prezzo e categoria del prodotto selezionato
Ha un bottone "Torna indietro" che usa router.back()
Niente tab bar visibile

Tab Preferiti (preferiti.tsx)

Per ora mostra solo una schermata con scritto "Nessun preferito ancora"

Tab Profilo (profilo.tsx)

Mostra una card con nome, ruolo e una email fittizia — ricicla il biglietto da visita dell'esercizio 1

Icone tab bar:

Prodotti → 🛍️
Preferiti → ⭐
Profilo → 👤
