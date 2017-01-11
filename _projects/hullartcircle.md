---
layout: project
title: Hull Art Circle
permalink: projects/hullartcircle/
nav-class: projects
date: 2016-02-16 00:00:00 +0000
categories: featured website
description: Reg Tait is a freelance web designer in Hull with 10 years of experience with a marketing agency in East Yorkshire.
meta-title: Web design for Hull2017 for Hull Art Circle
keywords: freelance web designer, web developer, illustrator, marketing agency, Hull
excerpt: Tiny, responsive website for long-running art group in Hull

client: The Hull Art Circle
coverimage: hull-art-circle-web-design.jpg
website: www.hullartcircle.co.uk
project-url: https://www.hullartcircle.co.uk

tasks:
- Design
- Development
- Photography direction

projectimages:
- image-file: hull-art-circle-web-design.jpg
  image-alt: Super-fast responsive web design in Hull
- image-file: hull-art-circle-responsive-website.jpg
  image-alt: Hull Art Circle website on an iPad
- image-file: hac-static-responsive-mobile.jpg
  image-alt: Web design optimised for handheld devices for Hull Art Circle

---

I've been doing some large scale contract work recently, so it was a pleasure to take time out and build a small website for [Hull Art Circle], which I'm proud to be a member of.

The goal was to provide quick and simple overview of the club, with clear instructions for prospective members to get in touch. Secondary to that, there's a list of exhibitions and a programme that shows everything’s up to date.

The photography was done by [Trish Boulton from Facet Photography]. She did a wonderful job of capturing the bright airy studio during the monthly life drawing session, taking advantage of the natural daylight.

## Tech notes

The site is build statically with [Jekyll]. Like others static site generators, Jekyll has many features associated with CMSs (layout templates, lists of entries, conditionals…) but without the database, tedious editors, and long-winded set up. It’s a refreshing approach that allow to focus on the design and content, and to turn this around quickly.

The output is also [pretty speedy]. I challenged myself to optimise for super-fast performance. This involved rendering the compressed styles on the page, using the new [srcset] attribute for image sets, and loading a single font file. You can see the results on Google PageSpeed Insights. Could be even better though.

The whole website weights in at 995 KB. So it will fit on a floppy disk, with plenty of room to spare.

[Trish Boulton from Facet Photography]: http://www.facetphotography.co.uk/
[Jekyll]:https://jekyllrb.com/
[Hull Art Circle]: http://hullartcircle.co.uk
[Hammer]: http://hammerformac.com/
[pretty speedy]: https://developers.google.com/speed/pagespeed/insights/?url=hullartcircle.co.uk
[srcset]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Example_3_Using_the_srcset_attribute