<template>
  <div class="catalog__filters">
    <div class="catalog__all">
      <div class="catalog__all-wrap">
        <div class="catalog__all-wrap-head">
          <p class="catalog__all-text">filter</p>
          <svg
            class="catalog__all-icon"
            width="15"
            height="10"
            viewBox="0 0 15 10"
          >
            <use href="#icon__filter" />
          </svg>
        </div>
        <div class="catalog__all-wrap-list">
          <input
            class="catalog__all-input"
            type="radio"
            name="filters"
            id="category"
            checked
          />
          <label class="catalog__all-label" for="category">category</label>
          <ul class="catalog__all-list">
            <li>Accessories</li>
            <li>Bags</li>
            <li>Denim</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets & Coats</li>
            <li>Polos</li>
            <li>Shirts</li>
            <li>Shoes</li>
            <li>Sweaters & Knits</li>
            <li>T-Shirts</li>
            <li>Tanks</li>
          </ul>
          <input
            class="catalog__all-input"
            type="radio"
            name="filters"
            id="brand"
          />
          <label class="catalog__all-label" for="brand">brand</label>
          <ul class="catalog__all-list">
            <li>Accessories</li>
            <li>Bags</li>
            <li>Denim</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets & Coats</li>
            <li>Polos</li>
            <li>Shirts</li>
            <li>Shoes</li>
            <li>Sweaters & Knits</li>
            <li>T-Shirts</li>
            <li>Tanks</li>
          </ul>
          <input
            class="catalog__all-input"
            type="radio"
            name="filters"
            id="designer"
          />
          <label class="catalog__all-label" for="designer">designer</label>
          <ul class="catalog__all-list">
            <li>Accessories</li>
            <li>Bags</li>
            <li>Denim</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets & Coats</li>
            <li>Polos</li>
            <li>Shirts</li>
            <li>Shoes</li>
            <li>Sweaters & Knits</li>
            <li>T-Shirts</li>
            <li>Tanks</li>
          </ul>
        </div>
      </div>
    </div>
    <ul>
      <li class="catalog__item">
        trending now
        <ul class="catalog__item-check-list">
          <li><input type="checkbox" />XS</li>
          <li><input type="checkbox" />S</li>
          <li><input type="checkbox" />M</li>
          <li><input type="checkbox" />L</li>
        </ul>
      </li>
      <li class="catalog__item">
        size
        <ul class="catalog__item-check-list">
          <li><input type="checkbox" />XS</li>
          <li><input type="checkbox" />S</li>
          <li><input type="checkbox" />M</li>
          <li><input type="checkbox" />L</li>
        </ul>
      </li>
      <li class="catalog__item">
        price
        <ul class="catalog__item-check-list">
          <li><input type="checkbox" />XS</li>
          <li><input type="checkbox" />S</li>
          <li><input type="checkbox" />M</li>
          <li><input type="checkbox" />L</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CatalogFilters",
};
</script>