---
title: "Cart Corral Tracker"
slug: "cart-corral-tracker"
description: "Full-stack app to predict cart corral fill levels at Woodman's, with an ML pipeline and optimization layer for cart retrieval routing."
stack: ["JavaScript", "Node", "Python", "LightGBM", "PostgreSQL"]
github: "https://github.com/StevenGantumur/Woodmans-Tracker"
demo: ""
videoUrl: ""
heroImage: ""
order: 1
---

## The Story

So, for my second ever job (my first being Chick-fil-A), I worked as a cart worker at Woodman's, a grocery company based in the midwest. Now originally, the job was only to make myself a bit of cash to pay for my fun, but in the end I saw it as an opportunity. Throughout my work experience, I often saw my coworkers and myself being subject to the elements and fatigue since it required so much physical work. It even forced my coworker/mentor to stop working due to the weight loss affecting his journey with cancer. Years after working there and becoming a SWE, I figured that this is one of the first problems I wanted to tackle to bring experience.

## What It Does

To briefly overview, my goal is to have the system autonomously detect when carts are in the corral and give a precise amount for each location that is easily identifiable in a web based application. With the numbers and locations of each cart, I used Google's OR-Tools to figure out the shortest route a worker should take to grab them all, which is basically a Traveling Salesman Problem with cart corrals instead of cities as the problem. On top of that, I trained a LightGBM model on snapshot history so it can predict what cart counts will look like at any hour on any day of the week, which is useful for staffing decisions or just knowing when the next rush is coming (Especially since worker efficiency is important). The whole thing is glued together with a React frontend, a Node/Express backend, Python on the ML and optimizer side, and Postgres holding all the historical snapshot data.

## What I Like About It

I love that I put myself out there even though I am a larper (live action role player). I didn't know anything going into this, but it really helped being able to try and learn hands on towards such an interesting and impressive project.

The other thing I like is that the whole pipeline actually works across three languages. When I first started actually programming at a hackathon, I had the most trouble being able to connect different types of languages together. For this project, React was on the frontend, Express on the backend, and Python doing the mat heavy stuff, with Node piping JSON into Python through stdin and getting the answer back through stdout.

The fact that this whole thing is rooted in a real job I worked makes it feel like it could actually matter to someone, instead of being yet another todo app. The next thing is to pitch this to the Woodmans execs!

## Tech Decisions

For the ML I picked (or rather Claude chose) LightGBM because the dataset is small, like 7 features and not a huge amount of rows, so a neural network would've been way too much and too hard for me. Gradient boosted trees are kind of the default for tabular regression anyway, they're fast, and you can get reasonable results without spending a week on tuning.

I split the optimizer into its own module instead of bundling it with the ML because they're solving fundamentally different problems. The ML predicts a number (how many carts will be there). The optimizer solves a route (what order should you grab them in). Different math, different libraries, no good reason to couple them.

For the database I went with Postgres over Firebase and Mongo. At first, I had absolutely zero clue why Postgres was the shot that Claude wanted to go for over more popular databases like Mongo and Firebase, but it makes sense now. The data is naturally time series and relational, like corral snapshots over time, aggregations like "average count by hour by corral," and that's one SQL query in Postgres versus a small nightmare in a NoSQL store.

## What's Next

Holy, I got to finish making it look good, and making sure that the LightGBM model is actually utilizing the data it retrieves and gives back true results. The goal is to do those, and then run simulations in order to simulate a working system, and to cultivate a quantitative result. IN THE END, I want to be able to propose this idea to Woodmans executives and use my story in order to make it work!
