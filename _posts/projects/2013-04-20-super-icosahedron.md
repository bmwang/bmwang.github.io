---
layout: post
category: projects
title: Super Icosahodron
image: super_icosahedron.png
subtitle: 24-hour Hackathon WebGL Game
subsubtitle: Stanford/UC Berkeley Big Hack 2013 with Michelle Bu
---
Michelle and I rode a bus from Berkeley to Stanford to participate in the Big
Hack, a 24 hour hackathon. We didn't have an idea when we got there, and we
ended up making a WebGL muliplayer game where you avoid pillars that rise
depending on the beat of the song playing.

The game is extremely buggy (but what do you expect from a 24-hour conversion
of caffeine into code?), but it works! The collision detection isn't so great,
but it works most of the time. Sometimes.

We used Three.js, Node.js, and a little jQuery to get this up and running.
These frameworks are familiar to us, so we got finished early and worked
on adding fun additions for most of the hackathon.

I ended up adding a bunch of screen-space shaders/filters, including a 
quickly hacked together 
[god ray](http://en.wikipedia.org/wiki/Crepuscular_rays)
shader
