<template>
  <section class="collection container">
    <div class="collection__wrapper">
      <h1 class="collection__head">women collection</h1>
      <h2 class="collection__subhead">moschino cheap and chic</h2>
      <p class="collection__text">
        Compellingly actualize fully researched processes before proactive
        outsourcing. Progressively syndicate collaborative architectures before
        cutting-edge services. Completely visualize parallel core competencies
        rather than exceptional portals.
      </p>
      <p class="collection__price">$561</p>
      <hr class="collection__separate" />
      <ul class="collection__list">
        <li class="collection__item">
          <select name="select1">
            <option value="value1">choose color</option>
            <option value="value2">значение 1</option>
            <option value="value3">значение 2</option>
            <option value="value4">значение 3</option>
          </select>
        </li>
        <li class="collection__item">
          <select name="select2">
            <option value="value1">choose size</option>
            <option value="value2">значение 1</option>
            <option value="value3">значение 2</option>
            <option value="value4">значение 3</option>
          </select>
        </li>
        <li class="collection__item">
          <select name="select3">
            <option value="value1">quantity</option>
            <option value="value2">значение 1</option>
            <option value="value3">значение 2</option>
            <option value="value4">значение 3</option>
          </select>
        </li>
      </ul>
      <div class="collection__button">
        <svg
          class="collection__button-image"
          width="27"
          height="25"
          viewBox="0 0 27 25"
        >
          <use href="#icon__cart" />
        </svg>
        <p class="collection__button-text">Add to Cart</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArrivalsCollection",
};
</script>