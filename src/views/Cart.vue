// v-on:productAction - подписка на Событие в ProductCard.vue methods.onClick(). "onDelete" - обработчик События
<template>
  <div class="home">
    <product-card
      v-for="product of cart"
      :key="product.id"
      :data="product"
      :target="'cart'"
      v-on:productAction="onDelete"
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
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    onDelete(product) {
      this.$store.dispatch("removeFromCart", product);
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