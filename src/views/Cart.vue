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
            <button class="cart__list-button" type="reset">
              Clear shopping cart
            </button>
            <router-link to="/catalog" class="cart__list-button"
              >Continue shopping</router-link
            >
          </div>
        </div>
        <CartForm />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import CartForm from "../components/CartForm.vue";
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
      const view = this.$store.getters.getCart.reduce((acc, entry) => {
        entry.count = 1;
        const id = entry.id;
        const same = acc.find((element) => element.id === id);

        if (same !== undefined) {
          same.count += 1;
        } else acc.push(entry);

        return acc;
      }, []);
      console.log(view);
      return view;
    },
  },
  methods: {
    onDelete(product) {
      this.$store.dispatch("removeFromCart", product);
    },
  },
};

// console.log(this.$store.getters.getCart);
// const mergedArray = Array.from(
//   this.$store.getters.getCart
//     .reduce(
//       (entryMap, e) =>
//         entryMap.set(e.id, { ...(entryMap.get(e.id) || {}), ...e }),
//       new Map()
//     )
//     .values()
// );
// console.log(mergedArray);
</script>

