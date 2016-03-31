---
title: Blog posts
---

The post I have written sorted by date (last post first).

![Mountains of Gran Canaria](/images/mountains.jpg)

<ul class="no-styling">
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_long_string }})</h3>
      <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ post.url }}">Read more...</a></p>
    </li>
  {% endfor %}
</ul>
