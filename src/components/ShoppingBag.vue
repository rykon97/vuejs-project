<template>
    <section class="main-cart">
        <div class="wrapper">
            <div class="container">
                <h1>CART</h1>
                <ShoppingSteps :active="1"/>
                <div class="shoping-conteiner">
                    <div class="shoping-bag">
                        <div v-if="cart.length !== 0" class="bag-info">
                            <span>PRODUCT</span>
                            <span>PRICE</span>
                            <span>QUANTITY</span>
                            <span>SUBTOTAL</span>
                        </div>
                        <div v-for="(item, index) in cart" class="item">
                            <a href=""><img :src="item.image" alt=""></a>
                            <h3>{{item.name}}</h3>
                            <h4>${{item.cost}}</h4>
                            <Number v-model="item.count"/>
                            <h5>${{item.cost*item.count}}</h5>
                            <a @click.prevent="DeleteItem(index)" class="close" href="#"></a>
                        </div>
                       <div v-if="cart.length === 0">none</div>

                        <div class="button-case">
                            <div class="coupon-apply">
                                <div class="input">
                                    <input type="text" name="" id="coupon" placeholder="Coupon Code">
                                    <a href="">APPLY COUPON</a>
                                </div>
                            </div>
                            <div class="updata-card">
                                <a href="#" @click.prevent="AddItem" class="button">UPDATE CART</a>
                            </div>
                        </div>
                    </div>
                    <div class="shoping-total">
                        <div class="shoping-info">
                            <h1>CART TOTALS</h1>
                            <div class="subtotal">
                                <h3>SUBTOTAL</h3>
                                <span>$1300</span>
                            </div>
                            <div class="shipping">
                                <h3>SHIPPING</h3>
                                <div class="shipping-options">
                                    <label class="checkbox">
                                        Free shipping
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox">
                                        Flat rate: $49
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox">
                                        Local pickup: $8
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="address-change">
                                        <span>Shipping to AL.</span>
                                        <a href="">CHANGE ADDRESS</a>
                                    </div>
                                </div>
                            </div>
                            <div class="vat">
                                <h3>VAT</h3>
                                <span>$19</span>
                            </div>
                            <div class="total">
                                <h3>TOTAL</h3>
                                <span>$1319</span>
                            </div>
                        </div>
                        <div class="checkout">
                            <router-link class="button" to="/checkout">PROCEED TO CHECKOUT</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ShoppingSteps from './ShoppingSteps.vue'
import Number from './Core/Number.vue'
import {mapState} from "vuex";

export default {
  data(){
    return {

      // cart: [
      //   {
      //     image: "/img/bag.png", name: "Zessi Dresses", cost: "99"
      //   },
      //   {
      //     image: "/img/bag.png", name: "Zessi Dresses", cost: "99"
      //   },
      //   {
      //     image: "/img/bag.png", name: "Zessi Dresses", cost: "99"
      //   },
      //   {
      //     image: "/img/bag.png", name: "Zessi Dresses", cost: "99"
      //   }
      // ]
    }
  },
  methods:{
    DeleteItem(index) {
      this.$store.dispatch('deleteItem', index)
    },
    AddItem() {
      this.$store.dispatch('addItem', {
        image: "/img/bag.png", name: "Zessi Dresses", cost: "99"
      })
    }
  },
  computed: {
    ...mapState(['cart'])
  },
  components: { ShoppingSteps, Number },
  created() {

  }
}
</script>

<style lang="sass">
@import '/src/styles/vars.sass'

.main-cart
    .container
        margin-top: 100px
        margin-bottom: 100px
        h1
            color: $head
            font-weight: 700
            font-size: 35px
            line-height: 49px
            margin-bottom: 50px
    .shoping-conteiner
        margin-top: 50px
        display: flex
    .shoping-bag
        margin-right: 60px
        flex-grow: 1
    .bag-info
        display: flex
        justify-content: space-between
        border-bottom: 1px solid $background-footer
        padding-bottom: 9px
        span
            font-weight: 500
            font-size: 14px
            line-height: 24px
            &:first-child
                padding-right: 250px
            &:last-child
                margin-right: 50px
    .item
        position: relative
        padding: 30px 0
        border-bottom: 1px solid $background-footer
        display: flex
        align-items: center
        h3
            margin-left: 30px
            margin-right: 140px
            color: $head
            font-weight: 400
            font-size: 16px
            line-height: 21px
        h4
            color: $second
            font-weight: 400
            font-size: 16px
            line-height: 21px
            margin-right: 50px
        h5
            margin-left: 35px
            color: $head
            font-weight: 500
            font-size: 16px
            line-height: 22px
        input
            padding: 5px 16px
            width: 60px
            height: 45px
            margin-right: 20px
    .close
        margin-left: 50px
    .button-case
        margin-top: 32px
        display: flex
        justify-content: space-between
    .updata-card .button
        color: $head
        width: 200px
        background-color: $background-footer
        &:hover
            color: $text-white
            background-color: $third
    .coupon-apply
        width: 300px
        position: relative
        input
            height: 60px
        a
            position: absolute
            right: 19px
            top: 20px
            color: $head
            &:hover
                color: $third
        label
            color: $head
            left: 170px
            top: 23px
            font-size: 14px
    .shoping-info
        display: flex
        flex-direction: column
        width: 320px
        height: 380px
        padding: 38px 41px
        border: 1px solid $head
        margin-bottom: 20px
        h1
            color: $head
            margin-top: 0
            margin-bottom: 0
            font-weight: 500
            font-size: 16px
            line-height: 22px
    .subtotal
        margin-top: 33px
        display: flex
        border-bottom: 1px solid $background-footer
        h3
            margin-top: 0
            color: $head
            width: 300px
            font-weight: 500
            font-size: 14px
            line-height: 24px
        span
            margin-right: 100px
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
    .shipping
        margin-top: 15px
        display: flex
        border-bottom: 1px solid $background-footer
        margin-bottom: 23px
        h3
            margin-top: 0
            color: $head
            width: 300px
            font-weight: 500
            font-size: 14px
            line-height: 24px
    .checkbox
        margin-bottom: 14px
        &:not(:first-child)
            margin-top: 20px
    .address-change
        margin-top: 0
        margin-bottom: 23px
        span
            color: $head
            font-weight: 400
            font-size: 14px
            line-height: 24px
        a
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
            position: relative
            transition-duration: 0.4s
            &::before
                transition-duration: 0.4s
                width: 0
                content: ''
                left: -93px
                bottom: -7px
                position: absolute
                height: 2px
                background-color: $head
            &:hover
                &::before
                    width: 110px
    .vat
        display: flex
        border-bottom: 1px solid $background-footer
        margin-bottom: 14px
        h3
            margin-top: 0
            color: $head
            width: 185px
            font-weight: 500
            font-size: 14px
            line-height: 24px
        span
            text-align: left
            color: $head
            font-weight: 400
            font-size: 14px
            line-height: 24px
    .total
        display: flex
        h3
            margin-top: 0
            color: $head
            width: 185px
            font-weight: 500
            font-size: 14px
            line-height: 24px
        span
            text-align: left
            color: $head
            font-weight: 400
            font-size: 14px
            line-height: 24px
    .checkout a
        width: 404px
</style>