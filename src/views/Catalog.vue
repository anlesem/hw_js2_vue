<template>
  <section class="arrivals">
    <div class="container">
      <h1 class="arrivals__head">Catalog</h1>
      <h2 class="arrivals__path">home /<span>Catalog</span></h2>
    </div>
  </section>
  <section class="catalog container">
    <h2 class="visually-hidden">catalog</h2>
    <CatalogFilters />
    <ul class="catalog__product">
      <product-card
        v-for="product of showcase"
        :key="product.id"
        :data="product"
        :target="'showcase'"
        v-on:productAction="onBuy"
      ></product-card>
    </ul>
    <CatalogPagination />
  </section>
  <Feature />
</template>

<script>
import CatalogFilters from "@/components/CatalogFilters.vue";
import ProductCard from "@/components/ProductCard.vue";
import CatalogPagination from "@/components/CatalogPagination.vue";
import Feature from "@/components/Feature.vue";

export default {
  components: { CatalogFilters, ProductCard, CatalogPagination, Feature },
  name: "Catalog",
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