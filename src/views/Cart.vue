// v-on:productAction - подписка на Событие в ProductCard.vue methods.onClick(). "onDelete" - обработчик События
<template>
  <section class="cart">
    <div class="container">
      <h1 class="cart__head">shopping cart</h1>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="visually-hidden">subcart</h2>
      <div class="cart__wrapper">
        <div>
          <ul>
            <product-card
              v-for="product of cart"
              :key="product.id"
              :data="product"
              :target="'cart'"
              v-on:productAction="onDelete"
            ></product-card>
          </ul>
          <div class="cart__list-operation">
            <button class="cart__list-button" v-on:click="reset">
              Clear shopping cart
            </button>
            <router-link to="/catalog" class="cart__list-button"
              >Continue shopping</router-link
            >
          </div>
        </div>
        <cart-form :data="totalPrice"></cart-form>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import CartForm from "@/components/CartForm.vue";
import Catalog from "@/views/Catalog.vue";

// computed: - отслеживание изменений в  Store
// 	getters – метод Объекта Store для вызова методов из getters
// 	dispatch – метод Объекта Store для вызова методов из actions
export default {
  components: { ProductCard, CartForm, Catalog },
  name: "Cart",
  computed: {
    // Функция преобразования отображения без обращения к Данным порождающим двойственность (Сервер / Клиент)
    cart() {
      // Функция группировки одинаковых товаров с вычислением их количества
      // cur.count - добавление счётчика товара
      // same - временный элемент, как показатель существования элемента > отменяет добавление
      //		элемента в аккумулятор и увеличивает счётчик товара
      const view = this.$store.getters.getCart.reduce((acc, cur) => {
        cur.count = 1;
        const same = acc.find((element) => element.id === cur.id);
        if (same) {
          same.count += 1;
        } else acc.push(cur);
        return acc;
      }, []);
      // Функция сортировки отображения товаров по id, чтобы они "не скакали" при удалении
      view.sort((prev, next) => prev.id - next.id);
      return view;
    },
    // Функция вычисления итоговой стоимости
    totalPrice() {
      return this.$store.getters.getCart.reduce(
        (acc, cur) => (acc = acc + cur.price),
        0
      );
    },
  },
  methods: {
    onDelete(product) {
      this.$store.dispatch("removeFromCart", product);
    },
    reset() {
      this.$store.getters.getCart.forEach((element) => {
        this.onDelete(element);
      });
    },
  },
};
</script>

