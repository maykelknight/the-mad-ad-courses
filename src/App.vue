<template>
  <div id="app">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default {
  name: 'app',
  components: {
      Banner,
    Navbar
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/vendors/bootstrap.css';
  @import 'assets/styles/main.scss';
</style>
