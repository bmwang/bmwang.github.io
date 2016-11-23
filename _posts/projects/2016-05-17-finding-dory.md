---
layout: post
category: projects
title: Finding Dory
image: findingdory.png
imagecaption: "&copy; 2016 Disney/Pixar"
subtitle: Pixar Feature with 
  [The Finding Dory Crew](http://www.imdb.com/title/tt2277860/fullcredits)
excerpt: "A forgetful fish's journey to discover her family.


I worked on shading."
---
<iframe class="video"
  src="https://www.youtube.com/embed/3JNLwlcPBPI?autoplay=1&loop=1&playlist=3JNLwlcPBPI"
  frameborder="0"
  allowfullscreen></iframe>

On Finding Dory, we decided to start with a completely new raytracing rendering
architecture. None of our older authoring software worked, so we had to
develop both renderer-facing building blocks and artist-facing tools to
properly use them.

I created optimized shaders for things as complex as vector spaces
transformations, and as simple as texture reading.

We adopted [Katana](https://www.thefoundry.co.uk/products/katana/) as our 
shading tool, having previously been our lighting and renderer management tool.
I worked on artist-facing workflows in Katana, including a custom
shading-directed nodegraph that was subsequently used by others at the studio
for quick prototyping of node-based workflows.

I allowed for cross-departmental sharing of data to allow modelers to bind
shaders to geometry, allowing for an overall production win in time spent
binding shaders.

I created a GLSL implementation of our in-house BSDF, including appoximating
Beckmann specular roughness through filtering IBL maps.
