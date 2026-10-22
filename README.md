# Click App

> **Una pantalla. Un número. Un dit amb una missió.**
>
> Clica. Suma. Canvia de color. Torna a clicar.

Un clicker minimalista fet per una sola cosa: **clicar sense haver de pensar en res més**. Sense botigues, sense millores, sense tutorials eterns. Només tu i el comptador.

## Què hi trobaràs?

- **Cada clic suma `+1`.** Això és tot. Aquesta és la màgia.
- **Arc de Sant Martí:** el fons va canviant de color a mesura que acumules clics.
- **La puntuació es desa automàticament** al navegador, encara que tanquis la pàgina.
- **Preparat per a mòbil i PC**, amb controls tàctils i ratolí.
- **Instal·lable com una PWA**: es pot afegir a la pantalla d'inici com si fos una aplicació.
- **Sense comptes ni servidors:** la puntuació es queda al teu dispositiu.

## 🚀 Publicar-ho amb GitHub Pages

No cal compilar res ni instal·lar dependències.

1. Descomprimeix aquest ZIP.
2. Crea un repositori a GitHub.
3. Puja **tots els fitxers i carpetes** d'aquest projecte a l'arrel del repositori. `index.html` ha de quedar directament a l'arrel.
4. Obre **Settings → Pages**.
5. A *Build and deployment*, selecciona **Deploy from a branch**.
6. Tria la branca `main` i la carpeta `/(root)`, i desa els canvis.
7. Quan GitHub Pages hagi publicat el lloc, obre l'URL que t'indiqui.

## Instal·lar-ho al mòbil Android

1. Obre l'URL publicada amb Chrome.
2. Prem el menú `⋮`.
3. Selecciona **Instal·la l'aplicació** o **Afegeix a la pantalla d'inici** (el text pot variar segons el dispositiu).
4. Ja ho tens. Ara pots clicar amb estil.

## Funció secreta

Hi ha una manera de reiniciar la puntuació: mantén premuda la cantonada superior esquerra de la pantalla durant **5 segons**. El comptador tornarà a zero.

*No és un sistema de seguretat. És només un petit secret per si els clics se't descontrolen.*

## Fitxers del projecte

- `index.html` — estructura de la pàgina.
- `style.css` — estil i aparença.
- `app.js` — comptador, colors i desament local.
- `manifest.webmanifest` — informació perquè es pugui instal·lar com a PWA.
- `service-worker.js` — suport per carregar recursos de la PWA.
- `icons/` — icones de l'aplicació.

## Privacitat

No cal crear cap compte. La puntuació es desa amb l'emmagatzematge local del navegador (`localStorage`), així que **no se sincronitza automàticament entre dispositius ni navegadors**. Si esborres les dades del lloc, pots perdre la puntuació desada.

## La filosofia del projecte

Un joc no necessita vint menús, tres monedes i un arbre d'habilitats per ser divertit.

De vegades només necessites un botó enorme i una quantitat de clics cada vegada més absurda.

**Objectiu final:** no n'hi ha.

**Puntuació màxima:** mentre el navegador pugui representar-la.

**Motiu per continuar clicant:** perquè sí.

---

<sub>Fet amb HTML, CSS, JavaScript i una quantitat poc raonable de clics. 🌈</sub>
