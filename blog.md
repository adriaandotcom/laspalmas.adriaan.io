---
title: Blog posts
---

<ul class="no-styling">
  {% for post in site.posts %}
    <li>
      <p><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_long_string }})<br>
      {{ post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ post.url }}">Read more...</a></p>
    </li>
  {% endfor %}
</ul>
