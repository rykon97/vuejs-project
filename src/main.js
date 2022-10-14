import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Store from './store'
import './style.css'
import './main.sass'
import App from './App.vue'
import Home from './components/Home.vue'
import ProductMain from './components/Core/ProductMain.vue'
import Checkout from './components/Checkout.vue'
import OrderReceived from './components/OrderReceived.vue'
import ShoppingBag from "./components/ShoppingBag.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/product_main', component: ProductMain },
  { path: '/checkout', component: Checkout },
  { path: '/order_received', component: OrderReceived },
  { path: '/shopping_bag', component: ShoppingBag },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// Make sure to _use_ the router instance to make the
// whole app router-aware.


const app = createApp(App);
app.use(router)
app.use(Store)
app.mount('#app');