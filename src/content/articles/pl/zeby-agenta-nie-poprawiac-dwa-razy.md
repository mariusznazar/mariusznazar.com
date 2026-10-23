---
locale: pl
key: agent-review
title: "Żeby agenta nie poprawiać dwa razy"
description: "Jak przegląd na koniec każdej sesji i codzienny przegląd wszystkich rozmów z agentami wyłapują powtarzalne detale pracy z AI — i co z nich trafia do instrukcji, a co nie."
summary: "Agent nie wyciąga wniosków z wczorajszej rozmowy, więc robią to za niego dwa przeglądy: jeden na koniec każdej sesji, drugi codziennie, nad wszystkimi sesjami z poprzedniego dnia. Po kilku miesiącach przestałem myśleć o tym, jak zmienić jego zachowanie."
topic: Praca z AI
order: 4
---

## Detale, które wracają

Pracując z agentami AI, co chwilę trafiam na drobiazgi. Agent drugi raz robi coś, co już raz poprawiałem. Instrukcja, którą mu kiedyś napisałem, po cichu przestaje mówić prawdę. Część takich rzeczy po prostu się powtarza, inne mogą narobić problemów dopiero za jakiś czas.

Dbam więc o to, żeby te detale były wyłapywane i zapisywane w miejscach, które do tego służą: w regułach, w instrukcjach dla agentów i w skillach, czyli zapisanych instrukcjach do konkretnych zadań, po które agent sięga, kiedy ich potrzebuje.

Robię to na dwa sposoby. Pierwszy to przegląd na koniec każdej sesji z agentem. Drugi to codzienny przegląd wszystkich sesji z poprzedniego dnia, analizowanych pod różnymi kątami.

## Na koniec sesji

Zanim zamknę sesję z agentem, proszę go, żeby przejrzał całą rozmowę: czy padło w niej coś, co warto zapisać albo zmienić w regułach, instrukcjach czy skillach. Agent przygotowuje listę propozycji, a każdą z nich ocenia jeszcze drugi, świeży agent. Często liczy przy tym, ile razy dana rzecz zdarzyła się już w poprzednich sesjach. Dopiero wtedy dostaję listę i przy każdej pozycji decyduję: zapisujemy, poprawiamy albo odpuszczamy.

Przykład. W rozmowie, w której agent zadawał mi pytania, odpowiadałem coraz krócej. Agent uznał, że jestem zmęczony, i zaproponował przerwę. Odpisałem mu: „Robią się krótsze, bo niewiele więcej mam do powiedzenia w temacie albo nie wiem, co odpowiedzieć, a nie będę się kolejny raz tłumaczył, że się nie znam i dlaczego”. Na koniec sesji do instrukcji trafiło jedno zdanie: zmęczenie rozpoznaje się po tym, co rozmówca mówi, a nie po długości jego odpowiedzi.

Inny przykład. Miałem do przerobienia duży zbiór zasad projektu, około 370 wpisów. Praca dzieliła się na dwie części: najpierw ja decydowałem, co zostaje, co wylatuje i jak ma brzmieć, a potem te decyzje trzeba było wprowadzić do plików. Agent zaproponował, że zrobi całość sam, w tej samej rozmowie, skoro i tak każdą decyzję zatwierdzam ja. Nie zgodziłem się. Decyzje zatwierdzam, ale nie widzę każdej linii, którą agent potem zmienia w plikach. Wolę, żeby zmiany wprowadzał osobny agent, a sprawdzał je kolejny, który widzi je pierwszy raz. To drugie spojrzenie jest dla mnie najcenniejsze. Do instrukcji trafiła zasada: decyzje zapadają w rozmowie ze mną, a ich wprowadzenie robi świeży agent i sprawdza drugi świeży agent.

Nie każda obserwacja kończy się zapisem. Przy planowaniu tygodnia agent zapytał, czy pomijanie pierwszego etapu przeglądu to mój stały sposób pracy, bo jeśli tak, zrobiłby ten etap opcjonalnym. Recenzent policzył, że w trzech z czterech ostatnich przeglądów etap był pominięty albo ucięty. Odpowiedziałem, że ucinam go często, ale chcę go mieć. Etap został, jak był.

## Codzienny przegląd sesji

Nie każda sesja kończy się przeglądem, a niektóre rzeczy widać dopiero z dystansu. Dlatego co noc, bez mojego udziału, uruchamia się analiza wszystkich rozmów z agentami z poprzedniego dnia. Patrzy na nie z kilku stron: czy instrukcje, z których agenci korzystają, dalej mówią prawdę; czy ta sama rzecz nie jest zapisana w dwóch miejscach, które zaczynają sobie przeczyć; czy w rozmowie padła lekcja, której nikt nie zapisał; czy zapis leży tam, gdzie agent go znajdzie.

Nocą nic się nie zmienia. Znalezione sprawy trafiają tylko do zeszytu, czyli pliku ze sprawami do przejrzenia. W ciągu dnia przechodzę je po kolei, zaczynając od najważniejszej, i przy każdej decyduję: robimy, nie do końca (z uwagą, co poprawić) albo odrzucamy. Od połowy lipca do początku października takich spraw było 421.

Przykład. Na pytanie agenta o jedno zadanie odpowiedziałem: „tak, osobna gałąź i zawsze to powinna być osobna gałąź”. Agent uznał to za stałą zasadę i bez pokazania mi czegokolwiek wpisał ją do wspólnych instrukcji dla moich agentów. Podmieniona reguła przetrwała około 10 godzin, a w tym czasie dwie inne sesje założyły gałęzie, których nie chciałem. Wyszło to przypadkiem. Do instrukcji trafiło, że zgodą na zmianę instrukcji jest „tak” na konkretną, pokazaną propozycję, a nie odpowiedź na inne pytanie.

Inny przykład. Gdy agent jeszcze pisał odpowiedź, a ja już pisałem poprawkę, moja wiadomość docierała do niego dopiero po skończeniu. Odnosił ją wtedy do nowej wersji, a nie do tej, którą miałem przed oczami. Tu zwykła reguła by nie pomogła, bo agent nie widzi, kiedy wiadomość została wysłana. Zamiast reguły powstał więc automatyczny znacznik, który mówi agentowi, że wiadomość przyszła w trakcie jego odpowiedzi.

I trzeci. Wyszukiwanie zwróciło „zero na 35 plikach” i na tej liczbie zdążyła już stanąć odpowiedź agenta. Zero było błędem narzędzia, które źle odczytywało polskie znaki. Do instrukcji trafiło zdanie: „wynik zbyt regularny jest podejrzeniem wobec przyrządu, nie wnioskiem o świecie”. Zero na wszystkim, wszystko po równo, dokładnie 100%: najpierw sprawdzam narzędzie.

## Co nie trafia do zapisu

Z 421 spraw odrzuciłem 43. Odrzucenie nie znaczy, że sprawa była błaha.

Przykład. Przed nieodwracalnym odrzuceniem zmian w notatkach na telefonie agent dał mi bezpiecznik: „spodziewaj się 9 plików”. Telefon pokazał setki. Liczba plików nic nie mówiła o ryzyku, a prawdziwego warunku, czyli tego, czy notatki na telefonie zgadzają się z kopią na serwerze, agent nie sprawdził. Notatki cofnęły się w czasie, a synchronizacja rozniosła to na komputer: 488 plików. Przegląd zaproponował regułę, że bezpiecznik ma sprawdzać warunek, od którego zależy szkoda, a nie coś, co tylko idzie z nim w parze. Odrzuciłem ją. Ta sytuacja się nie powtórzy, bo narzędzia, przez które to poszło, już nie używam. W ogólnej postaci reguła jest truizmem i nie wiadomo, w którym momencie agent miałby ją sobie przypomnieć. Tam, gdzie nieodwracalne operacje wracają regularnie, i tak działa mocniejszy mechanizm: najpierw próba na sucho, potem moja akceptacja, dopiero potem wykonanie. Jeśli błąd wróci w innym przebraniu, będą dwa przypadki i będzie z czego zbudować regułę.

Nie każde odstępstwo od zasady jest też powodem, żeby ją zmieniać. Kiedy przegląd chciał dopisać wyjątek do zasady tylko dlatego, że raz świadomie od niej odstąpiłem, odpowiedziałem: „reguły powinny opisywać to, co się powtarza i jest ważne; to, że czasem zrobimy odstępstwo od reguły, nie jest automatycznie przyczynkiem do tego, żeby robić z tego wyjątek do reguły i zapisywać — co innego, jeśli coś takiego by się powtarzało”.

## Na koniec

Wyłapywanie takich detali było jedną z pierwszych rzeczy, które ustawiłem, zaczynając pracę z agentami, więc nie mam porównania „przed i po”. Widzę za to, co dzieje się z czasem. Po pewnym okresie takiego usprawniania po prostu używam narzędzi, a one działają tak, jak tego oczekuję. Nie muszę agenta specjalnie poprawiać ani z nim dyskutować. Przestaję myśleć o tym, jak zmienić jego zachowanie, bo odpowiada temu, czego potrzebuję przy danym zadaniu.

Jeśli pracujesz z agentami, na koniec każdej sesji sprawdź, czy nie było w niej czegoś, co warto zapisać albo zmienić w regułach, instrukcjach czy skillach. Do tego regularnie przeglądaj sesje i to, co agenci robią samodzielnie, żeby cały system z czasem się usprawniał. Najlepiej działa to tam, gdzie agent dostaje precyzyjne instrukcje, poprawiane krok po kroku pod bardzo konkretny rezultat.
