<template>
  <ul class="catalog__pagination">
    <li class="catalog__pagination-item">
      <a href="#">
        <svg width="8" height="14" viewBox="0 0 8 14">
          <use href="#icon__left" />
        </svg>
      </a>
    </li>
    <li class="catalog__pagination-item"><a href="#">1</a></li>
    <li class="catalog__pagination-item"><a href="#">2</a></li>
    <li class="catalog__pagination-item"><a href="#">3</a></li>
    <li class="catalog__pagination-item"><a href="#">4</a></li>
    <li class="catalog__pagination-item"><a href="#">5</a></li>
    <li class="catalog__pagination-item"><a href="#">6</a></li>
    <li class="catalog__pagination-item"><a href="#">7</a></li>
    <li class="catalog__pagination-item"><a href="#">8</a></li>
    <li class="catalog__pagination-item"><a href="#">9</a></li>
    <li class="catalog__pagination-item"><a href="#">10</a></li>
    <li class="catalog__pagination-item"><a href="#">11</a></li>
    <li class="catalog__pagination-item"><a href="#">12</a></li>
    <li class="catalog__pagination-item"><a href="#">...</a></li>
    <li class="catalog__pagination-item"><a href="#">20</a></li>
    <li class="catalog__pagination-item">
      <a href="#">
        <svg width="8" height="14" viewBox="0 0 8 14">
          <use href="#icon__right" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CatalogPagination",
};
</script>