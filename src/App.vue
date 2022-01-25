
// router-view - место отрисовки страницы по принципу перерисовки (псевдопереход). Всё остальное отображается везде.
// 	:showcase="showcase" и :cart="cart" - :target= из Home.vue и Cart.vue
// router-link - задание путей к файлам перерисовки, обозначенных в router/index.js (для перезагрузки надо a href) 
// 	to="/" - корневой путь
// v-on:productAdd - подписка на Событие в Home.vue methods.onBuy(product). "addToCart" - обработчик События
// v-on:productDelete - подписка на Событие в Cart.vue methods.onDelete(product). "removeFromCart" - обработчик События
<template>
  <div>
    <header>
      <h2>Vue Shop</h2>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/cart">Корзина</router-link>
      </nav>
    </header>
    <router-view
      :showcase="showcase"
      :cart="cart"
      v-on:productAdd="addToCart"
      v-on:productDelete="removeFromCart"
    />
  </div>
</template>

<script>
const API_URL = "/api/v1";

export default {
  data() {
    return {
      showcase: [],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      fetch(`${API_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then(() => {
        this.cart.push(product);
      });
    },

    removeFromCart(product) {
      fetch(`${API_URL}/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then(() => {
        const index = this.cart.findIndex((item) => item.id == product.id);
        this.cart.splice(index, 1);
      });
    },
  },
  mounted() {
    fetch(`${API_URL}/catalog`)
      .then((req) => req.json())
      .then((data) => {
        this.showcase = data;
      });

    fetch(`${API_URL}/cart`)
      .then((req) => req.json())
      .then((data) => {
        this.cart = data;
      });
  },
};
</script>

<style src="@/assets/scss/style.scss" lang="scss"></style>
