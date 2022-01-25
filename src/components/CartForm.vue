<template>
  <form class="cart__form" action="#">
    <h2 class="cart__form-head">shipping adress</h2>
    <div>
      <fieldset>
        <input class="cart__form-input" type="text" placeholder="City" />
        <input class="cart__form-input" type="text" placeholder="State" />
        <input
          class="cart__form-input"
          type="text"
          placeholder="Postcode / Zip"
        />
        <button class="cart__form-button" type="button">get a quote</button>
      </fieldset>
      <fieldset class="cart__total">
        <p class="cart__total-text">
          sub total <span class="cart__total-text-price">$900</span>
        </p>
        <p class="cart__total-grand">
          grand total <span class="cart__total-grand-price">$900</span>
        </p>
        <hr class="cart__total-separate" />
        <button type="submit" class="cart__total-button">
          proceed to checkout
        </button>
      </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartForm",
};
</script>