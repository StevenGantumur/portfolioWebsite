---
title: "LeaguesAhead"
slug: "leagues-ahead"
description: "End-to-end League of Legends data pipeline that pulls ranked match and timeline data from the Riot API and asks whether a solo-queue game is already decided by minute 15."
stack: ["Python", "PostgreSQL", "FastAPI", "LightGBM", "pandas", "Next.js", "TypeScript"]
github: "https://github.com/StevenGantumur/LeagueTracker"
demo: ""
videoUrl: ""
heroImage: "/leagues-ahead.png"
order: 2
---

## The Story

I love video games. It is a bad habit of mine to play a lot, but I thought that it would be nice to use that hobby and turn it into my own project. Now, I don't know much about machine learning, but I got a Claude subscription. So I went to work. I searched up ways I can utilize a machine learning model to help leverage an idea that revolves around league. It hit me when I looked at a popular website to see a history of players matches. They have an AI that is in beta that tells you what you can do better by tracking your stats in game. I told myself I can do this. Here we are.

## What It Does

So it grabs my ranked games from Riot's API, dumps them into a Postgres database, and then a FastAPI backend hands that data over to a Next.js frontend. The important part is the timeline data. Riot gives you a snapshot of every player every single minute of the game, which ends up being around 340 rows per game. That is where basically all of the useful stuff lives, because it tells you what the game looked like while it was still being played instead of just how it ended.

Then there is the analysis sitting on top of that. One part of the API takes early game stats and ranks them by how well they split wins from losses. The annoying thing is you can't just compare a gold number to a CS number, since 750 gold and 14 CS are not the same size at all. So I used a stat called Cohen's d, which basically squishes everything onto the same scale so you can actually line them up next to each other. Another endpoint asks the simpler version of the question: if you are ahead at 15 minutes, how often do you actually end up winning? And then there is a LightGBM model in a notebook that tries to guess who wins using only the first 15 minutes of the game.

The coolest thing I found over 192 games is that your whole team being ahead in gold at 15 minutes matters way more than you personally being ahead. Like twice as much. When my team was up at 15, I won 73.6% of the time. When I won my own lane, it was only 63%. So carrying does not matter as much as I wanted it to, which honestly kind of hurt.

## What I Like About It

The thing I am most proud of is something I did not put on this page. My model came out to 64% accuracy and I really wanted to slap that number on here. But I only tested it on 39 games, and when you actually do the math on that, the real number could be anywhere from a coin flip to genuinely good. My data also covers thirteen different patches, so if I shuffle it randomly the model ends up learning from newer games to predict older ones, which is basically cheating. So until I test it the right way, that 64% does not mean anything and I am not going to pretend it does. I even made the API send back an error range with every stat so the frontend can show how unsure it is instead of faking confidence.

The bugs taught me the most though. My favorite one: Riot sends a snapshot every 60 seconds, plus one extra one at the exact moment the game ends. I was rounding my timestamps down to the nearest minute, so for a game ending at 32:33 both the 32:00 snapshot and the 32:33 snapshot turned into "minute 32", and my database quietly threw the second one in the trash. The only clue was that my longest games had one less row than they should have. That looks like a simple off by one until you actually go hunting for where the row went.

## Tech Decisions

Instead of rounding the timestamps when I save them, I save the exact millisecond and let Postgres figure out the minute for me. Rounding when you write means that information is gone forever. Doing it when you read means I still get easy minute by minute queries and I get to keep that last snapshot. I wrote a test for it so I can't accidentally break it again later.

I had to block remakes in three different places. A remake is when someone leaves early and the game basically gets cancelled, and in the data it looks like a loss where every single player went 0/0/0. That drags down all of my loss averages and stuffs my match list with games nobody actually played. So I skip them while collecting, filter them out in the API, and I also had to write a migration to delete the ones already sitting in my database from before I knew this was a problem.

Rate limiting was the one I got most wrong at first. When Riot told me to slow down, my code treated it like any other error and just moved on to the next game, so I was silently losing data without knowing it. Now it reads how long Riot wants me to wait, sleeps, and retries that same game. There was an even sneakier bug hiding under that one too. My skip line was jumping over the sleep between requests, so right after getting told to slow down my code would immediately fire off another request with zero delay, which is the exact worst moment to do that.

## What's Next

First thing is testing the model properly so I can finally put a real number on this page. After that I want to build a chat feature where I can just ask questions about my own games in normal English and it pulls the answer straight from my database.

The bigger goal is making this into something other people can actually use. Right now it only tracks my account, and my Riot key expires every 24 hours so I have to run the whole thing by hand. For anyone to search their own name and have this actually be online, I need a production key from Riot. That is the thing standing in the way right now.
