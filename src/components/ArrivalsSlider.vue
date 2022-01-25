<template>
  <section class="slider">
    <h2 class="visually-hidden">Slider</h2>
    <input
      name="slide"
      id="slide-0"
      type="radio"
      class="slider__input"
      checked=""
    />
    <input name="slide" id="slide-1" type="radio" class="slider__input" />
    <input name="slide" id="slide-2" type="radio" class="slider__input" />
    <ul>
      <li class="slider__element-0">
        <img
          src="img/slider_photo_01.png"
          alt="Товар 1"
          width="321"
          height="724"
        />
      </li>
      <li class="slider__element-1">
        <img
          src="img/slider_photo_02.png"
          alt="Товар 2"
          width="346"
          height="701"
        />
      </li>
      <li class="slider__element-2">
        <img
          src="img/slider_photo_03.png"
          alt="Товар 3"
          width="346"
          height="701"
        />
      </li>
    </ul>
    <div class="slider__arrow-prev">
      <label class="slider__element-0" for="slide-0">
        <svg width="13" height="23">
          <use href="#slider__left" />
        </svg>
      </label>
      <label class="slider__element-1" for="slide-1">
        <svg width="13" height="23">
          <use href="#slider__left" />
        </svg>
      </label>
      <label class="slider__element-2" for="slide-2">
        <svg width="13" height="23">
          <use href="#slider__left" />
        </svg>
      </label>
    </div>
    <div class="slider__arrow-next">
      <label class="slider__element-0" for="slide-0">
        <svg width="13" height="23">
          <use href="#slider__right" />
        </svg>
      </label>
      <label class="slider__element-1" for="slide-1">
        <svg width="13" height="23">
          <use href="#slider__right" />
        </svg>
      </label>
      <label class="slider__element-2" for="slide-2">
        <svg width="13" height="23">
          <use href="#slider__right" />
        </svg>
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArrivalsSlider",
};
</script>