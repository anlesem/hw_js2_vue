<template>
  <section class="arrivals">
    <div class="container">
      <h1 class="arrivals__head">new arrivals</h1>
      <h2 class="arrivals__path">home / men / <span>new arrivals</span></h2>
    </div>
  </section>
  <ArrivalsSlider />
  <ArrivalsCollection />
  <section class="product container arrivals__margin">
    <h2 class="visually-hidden">product</h2>
    <ul class="product__wrapper">
      <product-card
        v-for="product of showcase"
        :key="product.id"
        :data="product"
        :target="'showcase'"
        v-on:productAction="onBuy"
      ></product-card>
    </ul>
  </section>
</template>

<script>
import ArrivalsSlider from "@/components/ArrivalsSlider.vue";
import ArrivalsCollection from "@/components/ArrivalsCollection.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ArrivalsSlider, ArrivalsCollection, ProductCard },
  name: "Arrivals",
  computed: {
    showcase() {
      let string = "sh";
      return this.$store.getters.getProducts.filter((item) =>
        new RegExp(string, "ig").test(item.title)
      );
    },
  },
  methods: {
    onBuy(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>