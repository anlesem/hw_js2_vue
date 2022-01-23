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

export default {
  components: { ProductCard },
  name: "Home",
  props: ["showcase", "cart"],
  methods: {
    onBuy(product) {
      // Создание События компонента с названием "productAdd" и параметром product
      this.$emit("productAdd", product);
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