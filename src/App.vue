
// router-view - место отрисовки страницы по принципу перерисовки (псевдопереход). 
// 	Всё остальное отображается везде.
// router-link - задание путей к файлам перерисовки, обозначенных в router/index.js 
// 	(для перезагрузки надо a href) to="/" - корневой путь
<template>
  <div>
    <header class="header">
      <div class="container">
        <div>
          <router-link to="/">
            <img
              class="header__logo"
              src="img/header_logo.png"
              alt="Логотип"
              width="44"
              height="38"
            />
          </router-link>
          <div class="header__icon-find">
            <svg width="27" height="28">
              <use href="#icon__loupe" />
            </svg>
            <input type="text" v-model="query" />
          </div>
        </div>
        <div>
          <button class="header__button" type="button" v-on:click="menuVisible">
            <svg class="header__icon-redrow" width="32" height="23">
              <use href="#icon__menu" />
            </svg>
          </button>
          <router-link to="/reg" class="header__reg">
            <svg class="header__icon-redrow" width="29" height="29">
              <use href="#icon__reg" />
            </svg>
          </router-link>
          <router-link to="/cart" class="header__cart">
            <svg class="header__icon-redrow" width="32" height="29">
              <use href="#icon__cart" />
            </svg>
          </router-link>
        </div>
        <MenuNav v-if="isMenuVisible" />
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import MenuNav from "@/components/MenuNav.vue";

// $store - обращение к модулю store, где
// 	getters – метод Объекта Store для вызова методов из getters
// 	commit – метод Объекта Store для вызова методов из mutations
// 	dispatch – метод Объекта Store для вызова методов из actions
// computed: - Вычисляемые свойства – аналогично data(), но содержит свойства,
// 	вызываемые при изменениях в данных data() или Store (отслеживание)
// query: - вычисляемое свойство, которое перезаписывает данные: get() - получение; set() - запись
export default {
  components: {
    MenuNav,
  },
  data() {
    return { isMenuVisible: false };
  },
  methods: {
    menuVisible() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
  computed: {
    query: {
      get() {
        return this.$store.getters.setQuery;
      },

      set(value) {
        this.$store.commit("setQuery", value);
      },
    },
  },
  mounted() {
    this.$store.dispatch("loadShowcase");
    this.$store.dispatch("loadCart");
  },
};
</script>

<style src="@/assets/scss/style.scss" lang="scss"></style>
