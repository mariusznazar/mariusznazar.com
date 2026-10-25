---
locale: pl
key: product-foundation
title: "Czego nie da się wyczytać z kodu i jak to zapisać?"
description: "Pięć elementów fundamentu produktu, który leży obok kodu i zapisuje to, czego z kodu nie da się wyczytać, na przykładzie gry Loop, razem z kosztem takiej pracy z agentami AI."
summary: "Praca z agentami AI zostawia po sobie stos specyfikacji i opisów zadań, do których nikt nie wraca. Próbuję czegoś innego: fundamentu z pięciu elementów, który leży obok kodu i zapisuje to, czego z kodu nie wyczytasz - decyzje z powodami, reguły, mapę części, słownik i fakty o świecie wokół produktu. Pokazuję, co robi każdy z nich i ile to dziś kosztuje."
topic: Praca z AI
order: 6
---

## Wiedza, która ląduje w archiwum

W pracy z agentami AI powstaje cała masa dokumentów: kierunek, wizja, opisy projektów, milestone'ów i zadań, specyfikacje. Po zakończeniu zadania większość z nich trafia do archiwum, na wypadek gdyby kiedyś trzeba było do nich wrócić. Decyzje też bywają zapisane, ale zwykle w wersji hasłowej - co wybraliśmy, bez tego, dlaczego i co odpadło.

Tyle że do archiwum mało kto wraca. Alfredo Perez przez dziewięć miesięcy pisał osobną specyfikację do każdej zmiany i uzbierał ich 238. Nie otworzył ponownie ani jednej, a agent też ich nie czytał, bo nie dało się ustalić, która jest aktualna. Perez ujął to tak: „a spec that nothing reads isn't documentation, it's exhaust”. Naprawił to czternastoma specyfikacjami, po jednej na każdą funkcję produktu, które poprawia razem z kodem. Tak samo działa OpenSpec: specyfikacja opisuje, jak system działa dziś.

Ja próbuję podobnej rzeczy, tylko po swojemu i w innej formie. Buduję fundament, który ma być czymś w rodzaju odlewu aplikacji z drugiej strony: opisuje decyzje, reguły i części produktu tak, żeby po roku pracy cała ta wiedza była nadal przy produkcie. Założenie jest takie, że wystarczy dobrze określić, co chcemy zrobić, i zapisać decyzje i wymagania, a agenci na tej podstawie sami napiszą kod - dobrej jakości i przetestowany z każdej strony.

## Pięć elementów

Fundament to pięć plików, które leżą w repozytorium produktu obok kodu i zmieniają się razem z nim. Wypróbowuję go na grze Loop, którą buduję od zera od początku października - to gra w przeglądarce, w której nie steruje się postaciami, tylko pisze im programy, a one same próbują przetrwać na mapach. Gra ma fundament od pierwszego zadania i dziś są w nim 72 decyzje, 50 reguł i 30 faktów. Pod opisem każdego elementu jest jeden wpis z tego fundamentu, w takiej postaci, w jakiej leży w pliku.

**Decyzje.** Dziennik decyzji zbiera wybory, których trzymamy się w dalszej pracy: co wybraliśmy, dlaczego i jakie opcje odpadły, przy każdej z powodem. Trafia tu też to, po co jest produkt i czego świadomie nie robi. Każdy wpis zaczyna się od jednego do trzech krótkich zdań, które mówią, jak ma być - tak konkretnie, żeby dało się sprawdzić, czy kod się ich trzyma. Pod nimi jest opis, jak to sprawdzić: odesłanie do reguły z testem albo przykład zmiany, która decyzji się trzyma, i takiej, która ją łamie. Na tych przykładach agent ocenia kod.

<details>
<summary>Wpis z fundamentu gry: decyzja D-50</summary>

```markdown
### D-50 — Whose is the chest?

The chest belongs to a team. Each character belongs to exactly one team, and a character has no
chest of its own.

- **Scope:** simulation, browser-view
- **Based on:** none
- **Relations:** none
- **Verification:** invariants: character-team. For the chest, an agent compares a change with the
  decision:
  - complies: a lone character shown with the chest of its one-member team
  - violates: a character with a personal chest beside the team's; a character outside every team
- **Origin:** koncepcja_projektowa.md in the vault (Notes/Projects/(P) Loop), D37 and §4 "Kierunek: przedmioty krążą między mapami" · the full approved entry: definicja_mvp_loop2.md in the vault (Notes/Projects/(P) Loop), § Projected foundation changes, "Whose is the chest?"

*Rationale:* a team of one behaves exactly as a lone character with a chest of its own; the shared
chest is the one mechanism of cooperation — one character brings stone out of one map, another
takes it to the next.
*Rejected:* the player's chest — assigning a character to a team would change nothing; the
character's chest — no cooperation at all; a character outside a team with a personal chest — a
second kind of chest and an exception everywhere it is read.
```

</details>

**Reguły (niezmienniki).** Reguła to zdanie o produkcie, które ma być zawsze prawdziwe. Przy każdej jest zapisane, jak ją sprawdzić: testem, jeśli da się go łatwo napisać, a jeśli nie - przeglądem każdej zmiany przez innego agenta niż ten, który ją zrobił. To, czy reguła jest spełniona, pokazuje uruchomiony test, a nie status wpisany ręcznie. Reguła wskazuje też decyzję, z której wynika, i fakty, od których zależy.

<details>
<summary>Wpis z fundamentu gry: reguła map-run-repeatability</summary>

```markdown
## map-run-repeatability

Two simulations of one program from one starting game state with one seed give the same map run,
game minute by game minute, when they receive the same real-time inputs.

- **Method:** test
- **Rests on:** none
- **Derives from:** D-22
- **Part:** every
- **Violated:** no
```

</details>

**Mapa części.** Mapa dzieli produkt na części. Przy każdej jest jedno zdanie o tym, za co odpowiada, lista jej plików i to, z których innych części może korzystać. Część, która przyjmuje coś spoza produktu - dane z sieci, klucze, pliki od użytkownika - ma to zaznaczone, a zmiana w tych plikach dostaje przegląd nastawiony na złośliwe dane. Mapa mówi, jak ma być, a nie tylko jak jest, bo z kodu da się odczytać, która część korzysta z której, ale nie to, czy jej wolno.

<details>
<summary>Wpis z fundamentu gry: część account-server</summary>

```markdown
## account-server

The part is the account and save server: it serves the built game and handles the HTTP requests sent to it.

- **Files:** src/server/**
  tests/http.test.mjs
  tests/startup.test.mjs
  tests/invariants/test_account_server_express_http.py
  tests/invariants/test_loop2_api_error_route.py
  tests/invariants/test_loop2_one_serving_process.py
  tests/invariants/test_account_server_occupied_address.py
  tests/invariants/test_account_server_default_address.py
- **Depends on:** browser-view · simulation · build-tools
- **Trust boundary:** src/server/**
```

</details>

**Słownik.** Słownik zbiera słowa, które w produkcie znaczą co innego, niż przyjąłby ktoś znający branżę. Oprócz definicji każde hasło ma pole „Not” ze znaczeniami, z którymi łatwo je pomylić. Kto zmienia definicję, sprawdza w tej samej zmianie wszystkie teksty, w których to słowo pada, i poprawia te, w których zmienił się sens.

<details>
<summary>Wpis z fundamentu gry: hasło deployment</summary>

```markdown
## deployment

A deployment is the act of building one commit of a game on its server and starting it there as the
game's running instance.

- **Not:** the game and its server installed and running on a host — "instance"
```

</details>

**Fakty o środowisku.** Fakt to prawda o świecie wokół produktu: o platformie, licencjach, zachowaniu narzędzi. Każdy fakt ma źródło - dosłowny cytat i datę, kiedy go przeczytano - a pamięć modelu źródłem nie jest. Fakt nie mówi nic o samym produkcie, bo wtedy byłby regułą.

<details>
<summary>Wpis z fundamentu gry: fakt node-listen-port-zero</summary>

```markdown
## node-listen-port-zero

A Node.js `net` server told to listen on port 0 gets from the operating system an arbitrary unused port.

- **Source:** https://nodejs.org/download/release/v24.17.0/docs/api/net.html § Class: net.Server, server.listen([port[, host[, backlog]]][, callback]) — "If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port after the 'listening' event has been emitted."; read 2026-10-23
```

</details>

## Dlaczego akurat pięć

Każdy z pięciu elementów odpowiada na inne pytanie i żaden nie zastąpi pozostałych:
- decyzje - dlaczego jest tak, a nie inaczej, i co odrzuciliśmy po drodze. Nigdzie indziej tego nie zapisuję
- reguły - co w produkcie ma być zawsze prawdą. Każdą da się sprawdzić, najczęściej testem, więc agent od razu wie, że coś zepsuł
- słownik - co znaczą słowa, których używamy. Bez niego to samo słowo znaczy co innego w opisie projektu, a co innego w kodzie, i agent nie ma jak tego zauważyć
- mapa części - z jakich kawałków składa się produkt i który może korzystać z którego. Z samego kodu widać tylko, jak jest, a nie jak powinno być
- fakty - co jest prawdą o świecie wokół produktu, na przykład jak działa narzędzie, którego produkt używa. Bez nich test może przechodzić, a i tak opierać się na czymś, czego nikt nie sprawdził

Lista jest zamknięta. Pomysłów na kolejne rodzaje wpisów nie brakuje - w researchu, od którego zaczynałem, znalazłem ich co najmniej dziewięć. Nowy pomysł może więc wejść tylko do jednego z tych pięciu elementów i tylko wtedy, gdy coś go pilnuje bez mojej pamięci, na przykład test albo sprawdzenie, które zatrzymuje zmianę. Zasada „każdy zapis gry podaje swoją wersję” weszłaby jako reguła razem z testem, a nie jako osobny dokument.

Powód jest prosty: obszerna dokumentacja, której nikt nie pilnuje, z czasem przestaje być prawdziwa, a dalej wygląda na wiarygodną. W raporcie po katastrofie samolotu Nimrod nazwano to „paper safety” - bezpieczeństwem na papierze. Agent bez trudu napisze dokument długi, spójny i nieprawdziwy.

Z tego samego powodu kilka rzeczy nie ma w fundamencie osobnego miejsca. Testy są sposobem sprawdzania reguł. Odpowiedź na „dlaczego” mieści się w decyzji. To, czego produkt świadomie nie robi, też jest decyzją. Założeń nie zapisuję osobno, bo wszystko, czego nie chce się sprawdzać, dałoby się nazwać założeniem.

## Ile to kosztuje

Przez „zadanie” rozumiem jeden przebieg od opisu zmiany do pull requesta, który przeglądam i scalam. Po drodze jedni agenci piszą kod, testy i wpisy fundamentu, a inni je przeglądają. Trzy ostatnie zadania na grze wyglądały tak (czas to praca agentów, bez czekania na mnie):

| Zadanie | Jak szło | Czas | Tokeny |
|---|---|---|---|
| testy bez stałego portu | jeden autor | 44 min | 46 mln |
| siedziba i drużyna | jeden autor | 51 min | 62 mln |
| ognisko i jedzenie | specyfikacja, plan, 14 kawałków | 3 h 50 min | 224 mln |

Małą zmianę robi jeden agent, bez planu, i to widać w kosztach. Duża zmiana dalej zajmuje agentom prawie cztery godziny. W każdym z trzech przebiegów 96–98% tokenów to ten sam kontekst wczytywany od nowa: każdy agent przy każdym kroku czyta zadanie, plan i fundament. Cały mój sposób pracy nad produktem udało mi się już trochę odchudzić, ale nadal jest za ciężki.

## Na koniec

To dopiero początek i jestem przekonany, że da się ten koszt obniżyć, zachowując to, co fundament daje.

Jeśli chcesz spróbować, zacznij od jednego elementu - decyzji. Przy następnym wyborze, który zrobisz razem z agentem, zapisz obok samego wyboru, dlaczego go zrobiłeś i jakie opcje odpadły, i trzymaj ten zapis w repozytorium obok kodu.
