<template>
  <div class="card">
    <img :src="`./assets/img/${data.img}`" />
    <h3>{{ data.title }}</h3>
    <strong>{{ data.price }}$</strong>
    <button v-on:click="onClick" v-if="target == 'showcase'">Купить</button>
    <button v-on:click="onClick" v-if="target == 'cart'">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["data", "target"],
  methods: {
    onClick() {
      // Создание События компонента с названием "productAction" и параметром this.data
      this.$emit("productAction", this.data);
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 30%;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
}
</style>