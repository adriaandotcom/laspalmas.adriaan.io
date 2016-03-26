---
title: Who is visiting
---

Because Las Palmas is quite popular there are some people visiting. That is great of course, but for you it can be handy to see when you want to be there.

<ul class="visitors"></ul>

<p class="visitors-last-updated"></p>

![Sunset that did not happen](/images/no-sunset.jpg)

<script type="text/javascript">
  function formatDate(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
  }

  var request = new XMLHttpRequest();

  request.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/ambccq4fdl3tmh24sjmm3jos7k@group.calendar.google.com/events?key=AIzaSyBopySRup3TQ-A7gAQCidyXJnUWP_peQiE', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);

      var sorted = data.items.sort(function(key1, key2) {
        var start1 = key1.start.date || key1.start.dateTime;
        var start2 = key2.start.date || key2.start.dateTime;
        if (start1 < start2) return -1;
        if (start1 > start2) return 1;
        return 0;
      });

      Array.prototype.forEach.call(sorted, function(el, i) {
        var item = document.createElement('li');
        var start = el.start.date || el.start.dateTime;
        var end = el.end.date || el.end.dateTime;
        item.textContent = el.summary +
          ' <em>(' + formatDate(new Date(start)) + ' - ' + formatDate(new Date(end)) + ')</em>';
        document.querySelector('ul.visitors').appendChild(item);
      });

      document.querySelector('.visitors-last-updated').textContent = 'This is automatically pulled out of my calendar and I last changed it on ' + formatDate(new Date(data.updated)) + '.';
    } else {
      // We reached our target server, but it returned an error
      document.querySelector('.visitors-last-updated').textContent = 'Something did go wrong, ask Adriaan for his schedule or try again.';
    }
  };

  request.send();
</script>
