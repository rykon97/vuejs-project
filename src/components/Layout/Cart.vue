<template>
    <section @click="closeOverlay" class="cart__overlay hidden">
        <div class="cart">
            <div class="cart__heading">
                SHOPPING BAG ( 1 ) <a @click.prevent="closeMenu" class="close" href="#"></a>
            </div>
            <div class="cart__wrapper">
                <div class="cart__bag">
                    <div v-for="item in cart" class="cart__item">
                        <a class="cart__image" href=""><img :src="item.image" alt=""></a>
                        <div class="cart__info">
                            <h1>{{item.name}}</h1>
                            <h3>Color:  {{item.color}}</h3>
                            <h3>Size: {{item.size}}</h3>
                            <div class="selector">
                                <Number :min="1" :max="100"></Number> <span>{{item.cost}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart__actions">
                    <div class="cart__subtotal">
                        <span>SUBTOTAL:</span>
                        <span>$176.00</span>
                    </div>
                    <div class="cart__buttons">
                        <a class="cart__view-cart" href="">VIEW CART</a>
                        <router-link to="/shoping_bag" class="cart__checkout">CHECKOUT</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import {mapState} from "vuex";
import Number from "../Core/Number.vue";

export default {
    data() {
        return {
            // cart: [
            //     {
            //         name: "Cableknit Shawl", color: "Yellow", size: "L", cost: "99", image: "./img/bag.png"
            //     },
            //     {
            //         name: "Cableknit Shawl", color: "Yellow", size: "L", cost: "99", image: "./img/bag.png"
            //     },
            //     {
            //         name: "Cableknit Shawl", color: "Yellow", size: "L", cost: "99", image: "./img/bag.png"
            //     },
            // ]
        }
    },
    components: {
        Number
    },
    methods: {
        openMenu() {
            document.body.style.position = 'fixed';
            document.querySelector('.cart__overlay').classList.remove('hidden');
        },
        closeMenu() {
            document.body.style.position = 'static';
            document.querySelector('.cart__overlay').classList.add('hidden');
        },
        closeOverlay(e) {
            if(e.target.classList.contains('cart__overlay')) {
                document.body.style.position = 'static';
                document.querySelector('.cart__overlay').classList.add('hidden');
            }
        }
    },
    computed: {
        ...mapState(['cart'])
    },
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'

.cart
    height: 100vh
    width: 420px
    background-color: $text-white
    margin-left: calc(100vw - 420px)
    display: flex
    flex-direction: column
    transition-duration: 0.5s
    overflow-y: auto
    &__wrapper
        padding: 0 40px
        display: flex
        flex-direction: column
        flex-grow: 1
    &__actions
        padding-bottom: 40px
    &__bag
        flex-grow: 1
        padding: 30px 0
    &__heading
        background-color: $background-primary
        display: flex
        align-items: center
        justify-content: space-between
        padding: 33px 40px 27px
    &__subtotal
        display: flex
        padding-top: 16px
        justify-content: space-between
        border-top: 1px solid $background-footer
    &__overlay
        position: fixed
        z-index: 100
        top: 0
        left: 0
        height: 100vh
        width: 100vw
        background-color: rgba(34, 34, 34, 0.4)
        transition-duration: 0.5s
        opacity: 1
        visibility: visible
        &.hidden
            opacity: 0
            visibility: hidden
            .cart
                margin-left: 100vw
    &__buttons
        display: flex
        flex-direction: column
        align-items: center
    &__view-cart
        height: 60px
        width: 340px
        font-weight: 500
        font-size: 14px
        line-height: 24px
        color: $head
        display: flex
        text-align: center
        justify-content: center
        align-items: center
        background-color: $background-footer
        margin-bottom: 20px
        margin-top: 20px
        border: none
        transition-duration: 0.4s
        &:hover
            cursor: pointer
            background-color: rgba($third, 0.2)
    &__checkout
        height: 60px
        width: 340px
        font-weight: 500
        font-size: 14px
        line-height: 24px
        color: $text-white
        display: flex
        text-align: center
        justify-content: center
        align-items: center
        background-color: $head
        border: none
        transition-duration: 0.4s
        &:hover
            cursor: pointer
            background-color: $third
    &__image
        background-image: url("./img/bag.png")
        width: 100px
        height: 100px
        margin-right: 20px
    .selector input
        margin-right: 100px
    &__item
        display: flex
        padding-top: 20px
        &:not(:first-child)
            border-top: 1px solid $background-footer
        &:not(:last-child)
            margin-bottom: 20px
        h1
            margin-top: 0
            font-weight: 400
            font-size: 16px
            line-height: 18px
            color: $head
        h3
            margin-top: 0
            margin-bottom: 0
            font-weight: 400
            font-size: 14px
            line-height: 24px
            color: $second
        span
            font-weight: 400
            font-size: 18px
            line-height: 21px
            color: $head
</style>