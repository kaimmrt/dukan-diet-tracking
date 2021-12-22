<template>
  <div class="app">
    <Header />
    <Form msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Form from "../views/Form.vue";

export default {
  name: "App",
  components: {
    Form,
    Header,
  },
};
</script>

<style>
.app {
  padding: 50px;
}
</style>
