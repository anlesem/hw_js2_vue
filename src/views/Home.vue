// :key="product.id" - обязательный уникальный ключ при использовании v-for
// v-on:productAction - подписка на Событие в ProductCard.vue methods.onClick(). "onBuy" - обработчик События
// :target="'showcase'" - 
<template>
  <div class="home">
    <product-card
      v-for="product of showcase"
      :key="product.id"
      :data="product"
      :target="'showcase'"
      v-on:productAction="onBuy"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

// computed: - отслеживание изменений в  Store
// 	getters – метод Объекта Store для вызова методов из getters
// 	dispatch – метод Объекта Store для вызова методов из actions
export default {
  components: { ProductCard },
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


<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}
</style>