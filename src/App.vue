<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Home from './components/Home.vue';
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
import Checkout from './components/Checkout.vue';
import OrderReceived from './components/OrderReceived.vue';

export default {
  components: {
    Home,
    Header,
    Footer,
    Checkout,
    OrderReceived
  },
  created() {

  }
}
</script>