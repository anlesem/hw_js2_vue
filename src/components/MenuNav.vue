<template>
  <nav class="header__menu">
    <div class="header__menu-wrapper">
      menu
      <img
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
</template>

<script>
export default {
  name: "MenuNav",
};
</script>