---
title: 'Test 1 blog'
date: '2022-10-09'
author: 'Charlie Willingale'
routeImageUrl: '/images/sampleImg.jpg'
routeImageAlt: 'site logo'
routeCarousel: [{source: '/images/sampleImg.jpg', alt: 'Sample Image'},{source: '/images/siteLogo.png', alt: 'Sample Image'}]
routeSampleText: 'Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.'
routeDistance: '1000'
routeElevation: '4000'
routeDifficulty: '3'
category: 'ride'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js let's you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
