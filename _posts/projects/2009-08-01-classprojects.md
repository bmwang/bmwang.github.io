---
layout: post
category: projects
poststyle: class-projects
title: Minor Class Projects
image: class_projects.png
subtitle: Student Projects
subsubtitle: At [UC Berkeley](http://www.berkeley.edu/index.html) (2009-2013)
excerpt: Some minor, but unique projects I worked at school.
---
While I was a student at UC Berkeley, my favorite classes were project-based
Computer Science classes. Many of the projects were open-ended, so I was able
to explore some interesting topics.

My larger projects have their own [project pages](/projects). This is a collection of my 
smaller open-ended projects. (I didn't include projects with specific
specifications, as my projects look like everyone else's in the class.)

# CS184

## Spring 2011 (2nd year)

### Taught by Carlo Sequin. Worked with Andrew Lee and Chris Tandiono.

CS184, Foundations of Computer Science, taught by Carlo Sequin, was my first
introduction to computer graphics. We were required to
build a portfolio showcasing our projects over the semester. You can view
the archived portfolio [here](http://static.brandonwang.net/class/cs184/).

# CS264

## Spring 2011 (2nd year)

### Taught by Ras Bodik. Worked with Kaushik Iyer.

CS264, Programming Languages, taught by Ras Bodik, was my first gradaute-level
class. As an open ended class final project, Kaushik Iyer and I created a 
visual Haskell editor, named HasView.

Our survey of the CS264 class found that advanced programmers generally 
disliked visual languages for the unneeded additional actions required to 
generate any actions - a simple program would take far more work to _piece_ 
together, than to think about.

Our attempt at making Haskell more understandable at a programming perspective 
was to target these advanced programmers, so we decided that we would 
not follow the path and implement many small primitives for the language, 
forcing the repetition of many blocks, like an addition, but to 
allow arbitrary Haskell in a node, and simply provide an interface to 
visually program the flow of information through a Haskell program.

HasView was written entirely in Python, using PyQt for the user interface. 
(I learned PyQt during this project).

HasView operates on nodes with arbitrary Haskell written inside it, and 
specifying the input and output variables. We serialize the logic by 
determining an order of execution within each enclosure. We then resolve the 
variable bindings, assigning names to each intermediate output.

Our class [report](http://s3.brandonwang.net/projects/hasview/HasView.pdf)
and [poster](http://s3.brandonwang.net/projects/hasview/poster.pdf) are 
available, as well as a very hacky 
[GitHub repository](https://github.com/bmwang/hasview).

# CS285

## Fall 2011 (3rd year)

CS285, taught by Carlo Sequin, was a course about solid modeling. This class
emphasized procedural mathematical geometric objects, with the intent of
fabrication.

![Pentafoil Knot](http://s3.brandonwang.net/class/cs285/as1/images/tangle000001.png)

[Pentafoil Knot Report](http://s3.brandonwang.net/class/cs285/as1/index.html)

![Pac-man Ghost](http://s3.brandonwang.net/class/cs285/as6/images/finalbell.jpg)

[Procedural Pac-man Ghost](http://s3.brandonwang.net.s3-us-west-1.amazonaws.com/class/cs285/as6/index.html)

# CS280

## Spring 2012 (3rd year)

### Taught by Jitendra Malik. Worked with Eric Tzeng.

CS280, Computer Vision, was taught bf Jitendra Malik. For our open-ended
final project, Eric Tzeng and I wrote a depth-from-stereo program that took 
raw Lytro camera images and created a (noisy) 3D projection of the captured 
scene.

Our class report is available online.


# CS283

## Spring 2012 (3rd year)

### Taught by James O'Brien. Worked with Grace Lee.

CS283, Advanced Computer Graphics, was taught by James O'Brien.
Grace Lee and I created a FEM cloth simulation. Our 
[class report](http://s3.brandonwang.net.s3-us-west-1.amazonaws.com/class/cs283/hw1/index.html)
is available online.


# CS284

## Fall 2012 (4th year/M.S.)

### Taught by Carlo Sequin.

CS 284, Computer-Aided Geometric Design, was taught by Carlo Sequin. (This
would be Carlo's last class taught before his retirement.)

For my final project, I implemented and compared two smoothing tessellation 
techniques, Curved PN Triangles and Phong Tessellation, implemented as OpenGL
tessellation shaders.

My [class report](http://www.eecs.berkeley.edu/~sequin/CS284/PROJ_12/Brandon/Smooth%20GPU%20Tessellation.pdf) is available online.

