---
layout: post
title:  "Ecstatic for static"
date:   2016-07-30 00:00:00 +0000
nav-class: blog
categories: cms jekyll
keywords: "Jekyll, static"
description: Porting a site from ExpressionEngine to Jekyll.
image:
imagecaption:

excerpt: I've taken the time to move this site from an old ExpressionEngine (ee) CMS install to Jekyll, my favourite static site generator. The challenge was to see if I could replicate my previous CMS site with Jekyll without too much fudging. It turns out that it's possible.

---

## Checklist

Here's a checklist of stuff I wanted to keep from my CMS:

* All original markup
* Nice permalinks
* Custom metadata for SEO reasons, if that's still a thing
* Selected projects and my latest tweet on the home page

## Jekyll Collections

The key to doing this was using Jekyll [Collections] to handle the custom content. Here's the content of my portfolio carousel in the [YAML] of my Collection project document:

```
projectimages:
- image-file: myfile.jpg
  image-alt: My alt tag
- image-file: anotherpicture.jpg
  image-alt: Another alt attribute
```

And here's the markup with Liquid tags, in my [layout template].

```
<ul class="bxslider">
{% raw %}{% for projectimage in page.projectimages %}
<li><img src="/images/projects/{{ projectimage.image-file }}" alt="{{ projectimage.image-alt }}"></li>
{% endfor %}{% endraw %}
</ul>
```

To compare, here's my old ExpressionEngine tags, handled through the Pixel & Tonic [Matrix] plugin.

```
<ul class="bxslider">
{cmf_project_images}
<li><img src="{cf_project_image}" alt="{cf_project_imagealt}"/></li>
{/cmf_project_images}
</ul>
```

It's a trivial example (and who loves carousels in 2016?), but shows that Jekyll can replace CMS custom fields, right out the box.

For my homepage tweet, I used [Jason Mayes' Javascript only Twitter fetcher](http://www.jasonmayes.com/projects/twitterApi/).

## Hosting with Netlify

I put my finished source files on [GitHub], and set up [Glynn] to FTP the build to my old host. The next morning though, I woke up to the news that [Netlify] are offering free web hosting—with SSH!—on their free [Netlify Pages plan]. This directly competes with [GitHub Pages].

So, in just a few clicks my site was running on Netify, via GitHub. I'll do anything for a green padlock, and I got one for free.

I think Netlify are doing a wonderful thing for the web community by removing the barrier to a safe, open and secure web, available for all.

[YAML]: http://yaml.org/ "YAML.org"
[GitHub]: https://github.com/regmtait/regmtait.co.uk "regmtait.co.uk source on GitHub"
[GitHub Pages]: https://pages.github.com/ "GitHub Pages"
[Collections]: https://jekyllrb.com/docs/collections/ "Jekyll Collections documentation"
[layout template]: https://github.com/regmtait/regmtait.co.uk/blob/master/_layouts/project.html "Projects layout template"
[Matrix]: https://docs.pixelandtonic.com/matrix/templating/field.html "Matrix ExpressionEngine plugin from Pixel & Tonic"
[Glynn]: https://github.com/dmathieu/glynn "Glynn, a Jekyll FTP ruby gem from Damien Mathieu"
[Netlify]: https://www.netlify.com/blog/2016/07/28/netlify-plans-and-pricing "Premium hosting from Netlify"
[Netlify Pages plan]: https://www.netlify.com/blog/2016/07/28/netlify-plans-and-pricing "Netlify plans and pricing"
