---
locale: en
key: agent-review
title: "Correct the agent once, not twice"
description: "How a review at the end of every session and a daily review of all agent conversations catch the recurring details of working with AI — and what gets written into the instructions and what doesn't."
summary: "An agent doesn't learn from yesterday's conversation, so two reviews do it instead: one at the end of every session, the other daily, across all of the previous day's sessions. After a few months I stopped thinking about how to change its behavior."
topic: Working with AI
order: 4
---

## Details that keep coming back

When I work with AI agents, I keep running into small things. The agent does something I've already corrected once. An instruction I wrote for it a while ago quietly stops being true. Some of these things simply repeat, others can cause trouble only later on.

So I make sure these details get caught and written down in places meant for them: in rules, in instructions for agents, and in skills, that is, saved instructions for specific tasks that the agent reaches for when it needs them.

I do it in two ways. The first is a review at the end of every session with an agent. The second is a daily review of all the previous day's sessions, looked at from several angles.

## At the end of a session

Before I close a session with an agent, I ask it to go through the whole conversation: did anything come up that's worth writing down or changing in the rules, instructions or skills? The agent prepares a list of proposals, and a second, fresh agent assesses each one. It often counts how many times the same thing has already happened in earlier sessions. Only then do I get the list, and for each item I decide: we write it down, we rework it, or we let it go.

An example. In a conversation where the agent was asking me questions, my answers kept getting shorter. The agent decided I was tired and suggested a break. I wrote back: "They're getting shorter because I don't have much more to say on the subject or I don't know what to answer, and I'm not going to explain one more time that I don't know this and why." At the end of the session, one sentence went into the instructions: you recognize tiredness by what the other person says, not by the length of their answers.

Another example. I had a large set of project rules to rework, around 370 entries. The work fell into two parts: first I decided what stays, what goes and how it should read, and then those decisions had to be applied to the files. The agent offered to do it all itself, in the same conversation, since I approve every decision anyway. I said no. I approve the decisions, but I don't see every line the agent then changes in the files. I'd rather have a separate agent make the changes and another one, seeing them for the first time, check them. That second look is what I value most. A rule went into the instructions: decisions are made in conversation with me, and applying them is done by a fresh agent and checked by another fresh agent.

Not every observation ends up written down. While planning the week, the agent asked whether skipping the first stage of the review was my standing way of working, because if so, it would make that stage optional. The reviewer counted that in three of the last four reviews the stage had been skipped or cut short. I answered that I often cut it short, but I want to keep it. The stage stayed as it was.

## The daily review of sessions

Not every session ends with a review, and some things only show from a distance. That's why every night, without me, an analysis runs over all of the previous day's conversations with agents. It looks at them from several sides: do the instructions the agents use still tell the truth; is the same thing written in two places that are starting to contradict each other; did a lesson come up in a conversation that nobody wrote down; is the note stored where the agent will find it.

Nothing changes overnight. The issues it finds only go into a logbook, a file of issues to review. During the day I go through them one by one, starting with the most important, and for each I decide: we do it, not quite (with a note on what to fix), or we reject it. From mid-July to early October there were 421 such issues.

An example. When an agent asked me about one task, I answered: "yes, a separate branch, and it should always be a separate branch." The agent took that as a standing rule and, without showing me anything, wrote it into the shared instructions for my agents. The swapped rule lasted about 10 hours, and in that time two other sessions created branches I didn't want. I found out by accident. What went into the instructions: consent to change the instructions is a "yes" to a specific proposal that was shown, not an answer to some other question.

Another example. When the agent was still writing its answer and I was already typing a correction, my message only reached it after it had finished. It then applied my message to the new version, not to the one I'd had in front of me. A regular rule wouldn't help here, because the agent can't see when a message was sent. So instead of a rule, there's now an automatic marker that tells the agent the message arrived while it was still answering.

And a third one. A search returned "zero across 35 files", and the agent had already built an answer on that number. The zero was a bug in the tool, which misread Polish characters. One sentence went into the instructions: "a result that's too regular is a suspicion about the instrument, not a conclusion about the world." Zero everywhere, everything equal, exactly 100%: I check the tool first.

## What doesn't get written down

Out of 421 issues I rejected 43. Rejecting an issue doesn't mean it was trivial.

An example. Before irreversibly discarding changes to my notes on my phone, the agent gave me a safety check: "expect 9 files." The phone showed hundreds. The number of files said nothing about the risk, and the agent never checked the real condition, which was whether the notes on the phone matched the copy on the server. The notes went back in time, and syncing spread that to my computer: 488 files. The review proposed a rule that a safety check should test the condition the damage depends on, not something that merely goes along with it. I rejected it. That situation won't happen again, because I no longer use the tool that caused it. In its general form the rule is a truism, and it's unclear at what moment the agent would be expected to remember it. Where irreversible operations come up regularly, a stronger mechanism is already in place anyway: first a dry run, then my approval, and only then the real thing. If the mistake comes back in a different disguise, there will be two cases and something to build a rule from.

Nor is every departure from a rule a reason to change it. When the review wanted to add an exception to a rule just because I'd once deliberately departed from it, I answered: "rules should describe what repeats and matters; the fact that we sometimes depart from a rule isn't automatically a reason to turn it into an exception to the rule and write it down — it's different if something like that kept repeating."

## In the end

Catching details like these was one of the first things I set up when I started working with agents, so I don't have a before-and-after comparison. What I do see is what happens over time. After a while of this kind of improving, I simply use the tools and they work the way I expect. I don't have to correct the agent much or argue with it. I stop thinking about how to change its behavior, because it fits what I need for the task at hand.

If you work with agents, at the end of every session check whether there was anything worth writing down or changing in the rules, instructions or skills. On top of that, regularly review the sessions and what agents do on their own, so that the whole system keeps improving over time. It works best where an agent gets precise instructions, refined step by step toward a very specific result.
