---
layout: post
category: projects
title: Super Icosahedron
image: super_icosahedron.png
subtitle: WebGL Hackathon Game with
  [Michelle Bu](http://michellebu.com/)
excerpt: A WebGL game with some pretty effects. Created in 24 hours, because
  Michelle and I were bored.
---

<iframe src="http://brandonwang.net:9005"
  frameborder="0">
</iframe>

<!-- <iframe class="video"
  src="https://www.youtube.com/embed/uKJpNebpm2Q?autoplay=1&loop=1&playlist=uKJpNebpm2Q"
  frameborder="0"
  allowfullscreen></iframe> -->

[Live Demo](http://brandonwang.net:9005/) (Sorry, there's no mute button.)

[Recorded gameplay](https://www.youtube.com/watch?v=uKJpNebpm2Q)

Michelle and I rode a bus from Berkeley to Stanford to participate in the Big
Hack, a 24 hour hackathon. We didn't have an idea for a project when we got 
arrived. we ended up making a WebGL muliplayer game where you avoid pillars 
that rise depending on the beat of the song playing.

The collision detection isn't so great, but it works most of the time. 
Sometimes.

We used Three.js, Node.js, and a little jQuery to get this up and running.
These frameworks are familiar to us, so we got finished early and worked
on adding fun additions for most of the hackathon.

I ended up adding a bunch of screen-space shaders/filters, including a 
quickly hacked together 
[god ray](http://en.wikipedia.org/wiki/Crepuscular_rays)
shader.
