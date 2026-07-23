# UN · Basisachse · Pipeline 3 & Pipeline 6 · Eigenständige NC-Engine

UN ist die Basisachse des NC-Systems.  
Dieses Repository enthält eigene Dateien, eigene Achsen und eigene Pipelines.

──────────────────────────────────────────────
## 🔹 UN-Achsen

- alpha – Eingang
- beta – Gegenachse
- gamma – Differenz
- unity – Summenachse
- stabil – Stabilisationsachse (UN_ANCHER)

──────────────────────────────────────────────
## 🔹 Pipelines

### Pipeline 3 – UN → MVMR
UN erzeugt:
- vector
- matrix
- route

### Pipeline 6 – UN → WHIRL
UN erzeugt:
- whirl-index

### Matrix – UN → OCTA
UN erzeugt:
- octa-field

──────────────────────────────────────────────
## 🔹 Dateien

- UN.core.js – Hauptengine
- UN.anker.js – Stabilisationsachse
- UN.pipeline3.js – Verbindung zu MVMR
- UN.pipeline6.js – Verbindung zu WHIRL
- UN.result.json – Ergebnis-Pool
- index.html – Geometrie + Berechnung
- id.html – ID-Stempel
