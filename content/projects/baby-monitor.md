---
title: "Baby Monitor"
slug: "baby-monitor"
description: "Real-time baby monitor that uses webcam motion detection and OpenCV classifiers to alert when a baby crosses calibrated danger zones."
stack: ["Java", "OpenCV", "Swing"]
github: "https://github.com/StevenGantumur/babyMonitor"
demo: ""
videoUrl: ""
heroImage: ""
order: 2
---

## The Story

I built the baby monitor because my sister is now a mother with my brother-in-law, and I had the bright idea to create one since I saw that nanny cams are very limited as to how much a person can monitor a room when a baby roams.

## What It Does

This project is a Baby Monitor that has two modes, a Crib Monitor and a Room Monitor. Both feature motion detection, with the Room Monitor adding its own customizable danger zone setup. For example, let's start with the Crib Monitor, which is a bird's-eye view facing down toward the crib. To calibrate, you press all four corners on the screen and a zone is created. Anytime motion is detected near the edges of that zone, it alerts the app that the baby is moving toward a dangerous area. Similarly, with the Room Monitor there is a calibration phase, but you can add multiple danger zones in any polygonal shape — and instead of edge-based alerts, motion anywhere inside a zone triggers it (since the zones themselves are the danger areas, like stairwells or fireplaces). On top of that, the Crib Monitor adds face detection layered over motion tracking for more context on whether the baby is awake or just stirring. The stack for this project includes Java, OpenCV, and Swing UI. My goal was to create an easy, simple monitor for both the crib and room so that parents only need to actively watch when it actually matters.

## What I Like About It

The reason I like this project is because it applies to my personal life and was sparked by my love for my niece.

I also like that I learned a lot about OpenCV and how I can utilize the Mat library.

## Tech Decisions

For the language I went with Java instead of the more obvious Python pick, even though pretty much every OpenCV tutorial out there is in Python. The main reason is that I'm more comfortable with strict OOP and wanted to keep the learning focused on the computer vision side, not on getting tripped up by Python's looser typing. OpenCV has a solid Java binding through the OpenPnP package, so I wasn't really giving up much.

For detecting faces and bodies I stuck with OpenCV's built-in Haar cascade classifiers instead of pulling in a modern deep learning model like YOLO or MediaPipe. Haar cascades are old, like 2001-era, but they're CPU-friendly, ship inside OpenCV, and don't require downloading model weights or wiring up another framework. They're the default in basically every OpenCV intro tutorial, which is exactly where I was when I started this.

The actual danger detection ended up being a bit of a design pivot. The first instinct for "is the baby in the danger zone?" is to detect a body, take its centroid, and check if that point is inside the polygon. I ended up doing the opposite — masking the motion-difference image to the polygon and counting how many pixels of motion happened inside it. Two reasons. First, Haar cascades are trained on standing adults, so they straight-up miss crawling babies a lot of the time, which means a body-centroid check would have a ton of false negatives. Second, in safety code I'd rather over-alert than under-alert. A cat walking through the danger zone is a sigh-and-dismiss; the crawling baby that the detector missed is the whole reason this app exists, failing silently.

## What's Next

First on the list is debouncing the alert log so it only fires on real state changes instead of spamming once per frame during sustained danger. After that, I want to wire body detection back into the Room Monitor as a secondary severity signal — motion alone becomes "watching," but motion plus a confirmed body inside the zone becomes a louder alert. That tiered approach should cut the noise without sacrificing the high-recall safety net.

Bigger picture, the roadmap I'm chasing is emotion detection from facial expressions and audio, mobile integration, and multi-camera support so a parent can watch a crib and a playroom from the same dashboard. The actual endgame is putting it in front of my sister and brother-in-law and iterating on what they actually need, instead of what I think they need.
