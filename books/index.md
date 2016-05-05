---
layout: default
title:  "My bookshelf"
---

<article class="full-width">
  <h1>My bookshelf</h1>
  <ul class="list-of-books">
    {% for book in site.books %}
    <li>
      <figure>
        <img src="../assets/books/{{ book.img }}" alt="{{ book.title }} - {{ book.author }}">
      </figure>
      <h2>{{ book.title }}</h2>
      <h3>{{ book.author }}</h3>
      <p>{{ book.review }}</p>
    </li>
    {% endfor %}
  </ul>

</article>