---
locale: en
key: product-foundation
title: "What the code doesn't tell you, and how to write it down"
description: "Five elements of a product foundation that sits next to the code and records what can't be read from it, using the game Loop as the example, together with the cost of working this way with AI agents."
summary: "Working with AI agents leaves behind a pile of specs and task descriptions that nobody goes back to. I'm trying something different: a foundation of five elements that sits next to the code and records what you can't read from the code: decisions with their reasons, rules, a part map, a glossary and facts about the world around the product. I show what each of them does and what it costs today."
topic: Working with AI
order: 6
---

## Knowledge that ends up in the archive

Working with AI agents produces a whole lot of documents: direction, vision, descriptions of projects, milestones and tasks, specs. Once a task is done, most of them go to the archive, in case anyone ever needs to come back to them. Decisions sometimes get written down too, but usually as keywords: what we chose, without why and without what was dropped.

The thing is, hardly anyone goes back to the archive. Over nine months Alfredo Perez wrote a separate spec for every change and collected 238 of them. He didn't reopen a single one, and the agent didn't read them either, because there was no way to tell which one was current. Perez put it like this: "a spec that nothing reads isn't documentation, it's exhaust". He fixed it with fourteen specs, one for each capability of the product, which he keeps up to date together with the code. OpenSpec works the same way: the spec describes how the system works today.

I'm trying something similar, just in my own way and in a different form. I'm building a foundation meant to be a kind of cast of the application taken from the other side: it describes the product's decisions, rules and parts so that after a year of work all that knowledge is still with the product. The assumption is that it's enough to define well what we want to build and write down the decisions and requirements, and the agents will write the code from that by themselves, good quality and tested from every side.

## Five elements

The foundation is five files that sit in the product's repository next to the code and change together with it. I'm trying it out on Loop, a game I've been building from scratch since the beginning of October. It's a browser game in which you don't control the characters; you write programs for them, and they try to survive on the maps by themselves. The game has had a foundation since its first task, and today it holds 72 decisions, 50 rules and 30 facts. Under the description of each element there is one entry from that foundation, exactly as it is in the file.

**Decisions.** The decision log collects the choices we stick to in later work: what we chose, why, and which options were dropped, each with its reason. It also holds what the product is for and what it deliberately doesn't do. Every entry opens with one to three short sentences that say how things are to be, concrete enough to check whether the code keeps to them. Below them is a description of how to check it: a pointer to a rule with a test, or an example of a change that keeps to the decision and one that breaks it. The agent judges the code against these examples.

<details>
<summary>Entry from the game's foundation: decision D-50</summary>

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

**Rules (invariants).** A rule is a sentence about the product that must always be true. Each one says how to check it: with a test, if one is easy to write, and if not, with a review of every change by an agent other than the one who made it. Whether a rule holds is shown by a test run, not by a status typed in by hand. A rule also points to the decision it follows from and the facts it depends on.

<details>
<summary>Entry from the game's foundation: rule map-run-repeatability</summary>

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

**Part map.** The map divides the product into parts. Each part has one sentence about what it's responsible for, a list of its files and which other parts it may use. A part that takes in something from outside the product (data from the network, keys, files from the user) has that marked, and a change to those files gets a review aimed at malicious data. The map says how things should be, not just how they are, because the code shows which part uses which, but not whether it's allowed to.

<details>
<summary>Entry from the game's foundation: part account-server</summary>

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

**Glossary.** The glossary collects words that mean something different in the product from what someone who knows the field would assume. Besides the definition, each entry has a "Not" field with the meanings it's easy to confuse it with. Whoever changes a definition checks, in the same change, every text where the word appears and fixes those whose meaning has shifted.

<details>
<summary>Entry from the game's foundation: glossary term deployment</summary>

```markdown
## deployment

A deployment is the act of building one commit of a game on its server and starting it there as the
game's running instance.

- **Not:** the game and its server installed and running on a host — "instance"
```

</details>

**Environment facts.** A fact is a truth about the world around the product: about the platform, licenses, how tools behave. Every fact has a source, a verbatim quote and the date it was read, and a model's memory isn't a source. A fact says nothing about the product itself, because then it would be a rule.

<details>
<summary>Entry from the game's foundation: fact node-listen-port-zero</summary>

```markdown
## node-listen-port-zero

A Node.js `net` server told to listen on port 0 gets from the operating system an arbitrary unused port.

- **Source:** https://nodejs.org/download/release/v24.17.0/docs/api/net.html § Class: net.Server, server.listen([port[, host[, backlog]]][, callback]) — "If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port after the 'listening' event has been emitted."; read 2026-10-23
```

</details>

## Why exactly five

Each of the five elements answers a different question, and none of them can replace the others:
- decisions: why things are this way and not another, and what we rejected along the way. I don't write this down anywhere else
- rules: what must always be true in the product. Each one can be checked, most often with a test, so the agent knows right away that it broke something
- glossary: what the words we use mean. Without it the same word means one thing in the project description and another in the code, and the agent has no way to notice
- part map: what pieces the product is made of and which may use which. The code alone shows only how things are, not how they should be
- facts: what's true about the world around the product, for example how a tool the product uses behaves. Without them a test can pass and still rest on something nobody checked

The list is closed. There's no shortage of ideas for more kinds of entries: in the research I started from, I found at least nine. So a new idea can only go into one of these five elements, and only when something keeps it in check without relying on my memory, for example a test or a check that stops a change. A rule like "every game save states its version" would go in as a rule together with its test, not as a separate document.

The reason is simple: extensive documentation that nobody looks after stops being true over time but still looks trustworthy. The report after the Nimrod aircraft crash called this "paper safety". An agent will easily write a document that is long, consistent and untrue.

For the same reason, a few things have no separate place in the foundation. Tests are the way rules get checked. The answer to "why" fits in a decision. What the product deliberately doesn't do is a decision too. I don't write assumptions down separately, because anything you don't feel like checking could be called an assumption.

## What it costs

By "task" I mean one run from the description of a change to the pull request that I review and merge. Along the way some agents write the code, the tests and the foundation entries, and others review them. The last three tasks on the game looked like this (time is the agents' working time, not counting waiting for me):

| Task | How it went | Time | Tokens |
|---|---|---|---|
| tests without a fixed port | one author | 44 min | 46M |
| headquarters and team | one author | 51 min | 62M |
| campfire and food | spec, plan, 14 slices | 3 h 50 min | 224M |

A small change is done by one agent, without a plan, and it shows in the cost. A large change still takes the agents almost four hours. In each of the three runs, 96–98% of the tokens are the same context read in again: every agent reads the task, the plan and the foundation at every step. I've already managed to slim down my whole way of working on a product a bit, but it's still too heavy.

## In the end

This is only the beginning, and I'm convinced the cost can be brought down while keeping what the foundation gives.

If you want to try it, start with one element: decisions. The next time you make a choice together with an agent, write down next to the choice itself why you made it and which options were dropped, and keep that record in the repository next to the code.
