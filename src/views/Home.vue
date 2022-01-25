// :key="product.id" - обязательный уникальный ключ при использовании v-for
// v-on:productAction - подписка на Событие в ProductCard.vue methods.onClick(). "onBuy" - обработчик События
// :target="'showcase'" - 
<template>
  <HomeBrand />
  <HomeOffers />
  <section class="product container">
    <h2 class="product__head">Featured Items</h2>
    <p class="product__subhead">
      Shop for items based on what we featured in this week
    </p>
    <ul class="product__wrapper">
      <product-card
        v-for="product of showcase"
        :key="product.id"
        :data="product"
        :target="'showcase'"
        v-on:productAction="onBuy"
      ></product-card>
    </ul>
    <router-link to="/catalog" class="product__button"
      >Browse All Product</router-link
    >
  </section>
  <Feature />
</template>

<script>
import HomeBrand from "@/components/HomeBrand.vue";
import HomeOffers from "@/components/HomeOffers.vue";
import ProductCard from "@/components/ProductCard.vue";
import Feature from "@/components/Feature.vue";
import Catalog from "@/views/Catalog.vue";

// computed: - отслеживание изменений в  Store
// 	getters – метод Объекта Store для вызова методов из getters
// 	dispatch – метод Объекта Store для вызова методов из actions
export default {
  components: { HomeBrand, HomeOffers, ProductCard, Feature, Catalog },
  name: "Home",
  computed: {
    showcase() {
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    onBuy(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>
