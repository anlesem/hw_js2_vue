<template>
  <section>
    <div class="container">
      <h2 class="visually-hidden">subregistration</h2>
      <div class="registration__wrapper">
        <form action="#">
          <fieldset class="registration__form-field registration__form-up">
            <legend>Your Name</legend>
            <input
              class="registration__form-input"
              type="text"
              placeholder="First Name"
            />
            <input
              class="registration__form-input"
              type="text"
              placeholder="Last Name"
            />
          </fieldset>
          <input
            type="radio"
            name="sex"
            class="registration__form-radio"
            id="sex__male"
          />
          <label class="registration__form-label" for="sex__male">Male</label>
          <input
            type="radio"
            name="sex"
            class="registration__form-radio"
            id="sex__female"
          />
          <label class="registration__form-label" for="sex__female"
            >Female</label
          >
          <fieldset class="registration__form-field registration__form-down">
            <legend>Login details</legend>
            <input
              class="registration__form-input"
              type="email"
              placeholder="Email"
            />
            <input
              class="registration__form-input"
              type="password"
              placeholder="Password"
            />
            <p class="registration__form-text">
              Please use 8 or more characters, with at least 1 number and a
              mixture of uppercase and lowercase letters
            </p>
          </fieldset>
          <button type="submit" class="registration__form-button">
            join now &nbsp; →
          </button>
        </form>
        <div class="registration__loyalty">
          <h2 class="loyalty__head">loyalty has its perks</h2>
          <p class="loyalty__text">
            Get in on the loyalty program where you can earn points and unlock
            serious perks. Starting with these as soon as you join:
          </p>
          <ul>
            <li class="loyalty__list">15% off welcome offer</li>
            <li class="loyalty__list">
              Free shipping, returns and exchanges on all orders
            </li>
            <li class="loyalty__list">$10 off a purchase on your birthday</li>
            <li class="loyalty__list">Early access to products</li>
            <li class="loyalty__list">Exclusive offers & rewards</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegForm",
};
</script>