---
published: true
layout: post
title: "[Internship] Google Summer of Code 2017 with Discourse"
category: study
author: Jakub Mačina
---
<!--more-->
![Discourse](https://www.discourse.org/images/logo.png "Discourse logo"){:width="250px" .center} 

[Google Summer of Code](https://summerofcode.withgoogle.com/) is a global student program focused on involving and spreading the word about open source software development. I spent great summer full of code with [Discourse](https://www.discourse.org/) community working on features related to advanced search. Discourse is a modern civilized discussion platform which is currently used by more thank 10 000 online communities worldwide (ranging from politics to hobbyist). 

My work is summarized along with the code and weekly reports in the [final report](https://gist.github.com/dmacjam/66211e9149ad72537bc12d0e483ea9e1).

<iframe src="//www.slideshare.net/slideshow/embed_code/key/DAFqh1OaXjl5cu" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/dmacjam/google-summer-of-code-2017-experience-at-discourse" title="Google Summer of Code 2017: Experience at Discourse" target="_blank">Google Summer of Code 2017: Experience at Discourse</a> </strong> from <strong><a href="https://www.slideshare.net/dmacjam" target="_blank">Jakub Macina</a></strong> </div>

## Application

In my master's thesis, I did a research in online communities so I encountered Discourse many times, as it is used by online courses in [Udacity for example](https://www.discourse.org/customers.html). I got engaged in the [Discourse meta community](meta.discourse.org) (which uses Discourse itself) and got interested because of their tech stack and [core team](https://blog.discourse.org/2013/02/the-discourse-team/), so I submitted pull request to add a feature to admin panel.  

I have known Google Summer of Code for last two years, but I didn't tried to apply before. As I was about to finish my master's degree, it was my last opportunity to apply to GSoC. Moreover, it suited perfectly to my master thesis research, so I was determined to continue contributing even more.

This is my submitted [final application proposal](https://gist.github.com/dmacjam/887e50a4d1b349f6b7e44f6302314d62). Writing application proposal was iterative process with a lot of feedback from the Discourse team. I created two prior completely different application proposal drafts  - one proposing [multiple email address support](https://meta.discourse.org/t/additional-email-support/59847) (core team wanted to work on this for security reasons) and [buy/sell "mini ebay" plugin](https://meta.discourse.org/t/buy-sell-category/15655/27) (more UX problem, entirely new area for Discourse).         

In my opinion, _showing previous open source contributions_ and _motivation to learn_ are two most important parts of successful application. Moreover, it's good to read discussions trying to understand issues and feature proposals, don't be afraid to ask and to draft your proposal as early as possible.  

## Summer full of code

Remote work was something I was keen to try, living some kind of nomad lifestyle, and I've read several books and articles about it. One of the most important thing from my experience is to not forget about your health while working from home - I used good ergonomic chair with laptop stand and external mouse and keyboard. Morever, to handle remote work you should be aware of separating work and free time - I set individual room used only for work.  

I got assigned [@Neil](https://twitter.com/neill) as a mentor. He is skilled software engineer and he was able to tackle all of my questions and issues. I used meta discussion forum as a primary communication channel for broader discussion and reporting. For solving issues and brainstorming potential solutions with my mentor Slack was used.    

In summary, I added new filters to search posts which 

- contains all provided tags, 
- have image(s), 
- contain selected filetype(s) and 
- extended number of search results by paging and infinite scrolling. 

These features required analysis and understanding of existing code base, implementation in Ruby on Rails on backend and Ember.js on frontend, writing tests, creation of indices and optimizing queries in PostgreSQL. More technical details are in [final report](https://gist.github.com/dmacjam/66211e9149ad72537bc12d0e483ea9e1).

## Conclusions 

During the summer of code, I improved my testing (TDD) skills, learned how to upgrade a product (with proper support of older versions) and saw the importance of proper database design and code performance in the real world product. Moreover, I found out the value of communication within the team and saw pros and cons of remote work. Thank you Discourse team, Google and whole open source community.
