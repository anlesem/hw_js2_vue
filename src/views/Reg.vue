<template>
  <section class="registration">
    <div class="container">
      <h1 class="registration__head">registration</h1>
    </div>
  </section>
  <RegForm />
</template>

<script>
import RegForm from "@/components/RegForm.vue";

export default {
  components: { RegForm },
  name: "Reg",
};
</script>