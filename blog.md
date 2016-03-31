---
title: Blog posts
---

<ul class="no-styling">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_long_string }})
      {{ post.excerpt }} <a href="{{ post.url }}">Read more...</a>
    </li>
  {% endfor %}
</ul>
