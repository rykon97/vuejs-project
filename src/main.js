import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './main.sass'
import App from './App.vue'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Checkout from './components/Checkout.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/checkout', component: Checkout },
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
app.mount('#app');