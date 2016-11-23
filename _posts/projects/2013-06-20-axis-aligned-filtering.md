---
layout: post
category: projects
title: Axis-Aligned Filtering
image: axis_aligned_filtering.png
subtitle: SIGGRAPH 2013, SIGGRAPH Asia 2012 Paper, M.S. Thesis
excerpt: "My research at Berkeley. Presented at SIGGRAPH 2013, SIGGRAPH Asia 2012, and in my M.S. Thesis. We reduced noise in noisy ray-traced global illumination, in real-time. With [Soham Mehta](http://www.eecs.berkeley.edu/~sohamum/),
  [Ravi Ramamoorthi](http://www.cs.berkeley.edu/~ravir/), 
  and [Fredo Durand](http://people.csail.mit.edu/fredo/)


I worked on everything."

---

<video autoplay loop controls>
  <source src="http://graphics.berkeley.edu/papers/Udaymehta-IPB-2013-07/video.mp4" type="video/ogg">
</video>

In the second half of my time as a UC Berkeley student, I co-authored two 
papers in ACM. We created a fast image-space filter to reduce noise from
ray traced diffuse interreflection (causes color bleeding) and soft shadows.

In ray tracing, a rendering technique to produce an image of a 3d scene, 
you can control the sample rate, or, how many times to estimate the value of
the color of a pixel.

Certain effects require many samples to give an accurate pixel color. If these
effects weren't given enough samples, the result would be a noisy image. Each
sample costs about the same as other samples, so the render times of a
ray traced image grows roughly linearly with the number of samples you use.

In my last two years at Berkeley, I, along with Soham Mehta, Ravi Ramamoorthi,
and Fredo Durand explored soft shadows and diffuse interreflection, two of
the effects that typically require many samples.

We created filter that applies on a noisy rendered image (with some additional
knowledge collected during rendering) to reduce the noise of these effects.
This filter essentially shares samples between pixels when it is appropriate
to do so (i.e. in regions that have very soft shadows).

The filter we created is based on the physics of the frequency and distribution
of light. This means that our filter converges to the correct result, rather
than being a heuristic that does not match reality. We also tell you the
regions that require more samples, so you can sample those regions more.

I give a more in-depth look at the filter itself in my 
[Master's Thesis](http://www.eecs.berkeley.edu/Pubs/TechRpts/2013/EECS-2013-118.html).

The derivation of the technique for soft shadows and diffuse interreflection
can be found in our 
[SIGGRAPH Asia 2012](http://graphics.berkeley.edu/papers/UdayMehta-AAF-2012-12/index.html)
paper, and
[SIGGRAPH 2013](http://graphics.berkeley.edu/papers/Udaymehta-IPB-2013-07/index.html)
paper, respectively.
