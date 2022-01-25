<template>
  <section class="offers container">
    <h2 class="visually-hidden">Offers</h2>
    <ul class="offers__list">
      <li class="offers__item offers__item-woman">
        <router-link to="/arrivals">
          <h3 class="offers__head">30% off</h3>
          <p class="offers__text">for women</p>
        </router-link>
      </li>
      <li class="offers__item offers__item-man">
        <router-link to="/arrivals">
          <h3 class="offers__head">hot deal</h3>
          <p class="offers__text">for men</p>
        </router-link>
      </li>
      <li class="offers__item offers__item-kids">
        <router-link to="/arrivals">
          <h3 class="offers__head">new arrivals</h3>
          <p class="offers__text">for kids</p>
        </router-link>
      </li>
    </ul>
    <router-link to="/arrivals" class="offers__item offers__item-accesories">
      <h3 class="offers__head">luxirous & trendy</h3>
      <p class="offers__text">accesories</p>
    </router-link>
  </section>
</template>

<script>
import Arrivals from "@/views/Arrivals.vue";

export default {
  components: { Arrivals },
  name: "HomeOffers",
};
</script>