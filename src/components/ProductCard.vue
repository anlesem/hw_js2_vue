<template>
  <!-- ------------------------ Общая обёртка, чтобы работал "onClick" ------------------------ -->
  <div>
    <!-- --------------------------- Для каталога --------------------------- -->
    <li class="product__items" v-if="target == 'showcase'">
      <div>
        <img
          :src="`./img/${data.img}`"
          alt="Фотография товара"
          width="360"
          height="420"
        />
        <div class="product__items-overlaeyer" v-on:click="onClick">
          <div class="product__items-button">
            <img
              src="img/header_cart.svg"
              alt="Добавить в корзину"
              width="26"
              height="24"
            />
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
      <div class="product__info">
        <h3 class="product__info-head">{{ data.title }}</h3>
        <p class="product__info-text">
          Known for her sculptural takes on traditional tailoring, Australian
          arbiter of cool Kym Ellery teams up with Moda Operandi.
        </p>
        <p class="product__info-price">${{ data.price }}</p>
      </div>
    </li>
    <!-- --------------------------- Для корзины --------------------------- -->
    <li class="cart__item" v-if="target == 'cart'">
      <img
        :src="`./img/${data.img}`"
        alt="изображение товара"
        width="262"
        height="306"
      />
      <div class="cart__item-manage">
        <img
          class="cart__item-delete"
          src="img/cart_delete.svg"
          alt="удалить товар"
          width="18"
          height="18"
          v-on:click="onClick"
        />
        <h2 class="cart__item-head">{{ data.title }}</h2>
        <p class="cart__item-text">
          Price: <span class="cart__item-price">${{ data.price }}</span>
        </p>
        <p class="cart__item-text">Color: Red</p>
        <p class="cart__item-text">Size: Xl</p>
        <p class="cart__item-text">
          Quantity: <input class="cart__item-input" type="number" />
        </p>
      </div>
    </li>
    <!-- <button v-on:click="onClick" v-if="target == 'showcase'">Купить</button>
    <button v-on:click="onClick" v-if="target == 'cart'">Удалить</button> -->
  </div>
</template>

<script>
export default {
  name: "card",
  // Значения активируются в компоненте, котором используются (Home и Cart) в <product-card>
  props: ["data", "target"],
  methods: {
    onClick() {
      this.$emit("productAction", this.data);
    },
  },
};
</script>

