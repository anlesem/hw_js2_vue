
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
          <button class="header__button" id="burger" type="button">
            <svg class="header__icon-redrow" width="32" height="23">
              <use href="#icon__menu" />
            </svg>
          </button>
          <a href="reg.html" class="header__reg">
            <svg class="header__icon-redrow" width="29" height="29">
              <use href="#icon__reg" />
            </svg>
          </a>
          <router-link to="/cart" class="header__cart">
            <svg class="header__icon-redrow" width="32" height="29">
              <use href="#icon__cart" />
            </svg>
          </router-link>
        </div>
        <nav class="header__menu" id="menu">
          <div class="header__menu-wrapper">
            menu
            <img
              id="close"
              class="header__menu-close"
              src="img/header_menu_close.svg"
              alt="Закрыть"
              width="13"
              height="13"
            />
            <ul class="header__menu-list">
              <li>
                <h2 class="header__menu-head">man</h2>
                <ul>
                  <li class="header__menu-item"><a href="#">Accessories</a></li>
                  <li class="header__menu-item"><a href="#">Bags</a></li>
                  <li class="header__menu-item"><a href="#">Denim</a></li>
                  <li class="header__menu-item"><a href="#">T-Shirts</a></li>
                </ul>
              </li>
              <li>
                <h2 class="header__menu-head">woman</h2>
                <ul>
                  <li class="header__menu-item"><a href="#">Accessories</a></li>
                  <li class="header__menu-item">
                    <a href="#">Jackets & Coats</a>
                  </li>
                  <li class="header__menu-item"><a href="#">Polos</a></li>
                  <li class="header__menu-item"><a href="#">T-Shirts</a></li>
                  <li class="header__menu-item"><a href="#">Shirts</a></li>
                </ul>
              </li>
              <li>
                <h2 class="header__menu-head">kids</h2>
                <ul>
                  <li class="header__menu-item"><a href="#">Accessories</a></li>
                  <li class="header__menu-item">
                    <a href="#">Jackets & Coats</a>
                  </li>
                  <li class="header__menu-item"><a href="#">Polos</a></li>
                  <li class="header__menu-item"><a href="#">T-Shirts</a></li>
                  <li class="header__menu-item"><a href="#">Shirts</a></li>
                  <li class="header__menu-item"><a href="#">Bags </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
const API_URL = "/api/v1";

// $store - обращение к модулю store, где
// 	getters – метод Объекта Store для вызова методов из getters
// 	commit – метод Объекта Store для вызова методов из mutations
// 	dispatch – метод Объекта Store для вызова методов из actions
// computed: - Вычисляемые свойства – аналогично data(), но содержит свойства,
// 	вызываемые при изменениях в данных data() или Store (отслеживание)
// query: - вычисляемое свойство, которое перезаписывает данные: get() - получение; set() - запись
export default {
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
