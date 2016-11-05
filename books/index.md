---
layout: default
title:  "My bookshelf"
---

<article class="post post--full-width">
  <h1>My bookshelf</h1>
  <ul class="book-list">
    {% for book in site.books %}
    <li class="book-list__item">
      <figure class="book-list__item-figure">
        <img src="../assets/books/{{ book.img }}" alt="{{ book.title }} - {{ book.author }}">
      </figure>
      <p class="book-list__item-title">{{ book.title }}</p>
      <p class="book-list__item-author">{{ book.author }}</p>
      <p class="book-list__item-summary">{{ book.review }}</p>
    </li>
    {% endfor %}
  </ul>

</article>
