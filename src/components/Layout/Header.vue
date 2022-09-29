<template>
    <header class="soft">
        <div class="wrapper home">
            <div class="links">
                <a href="">Shipping</a><a href="">FAQ</a><a href="">Contact</a><a href="">Track Order</a>
            </div>  
            <div class="text">
                FREE SHIPPING WORLDWIDE
            </div>
            <div class="personalisation">
                <div class="socials">
                    <a class="fa-brands fa-facebook-f" href="https://uk-ua.facebook.com/"></a><a class="fa-brands fa-twitter" href="https://twitter.com/?lang=ru"></a><a class="fa-brands fa-instagram" href="https://www.instagram.com/"></a><a class="fa-brands fa-pinterest" href=""></a>
                </div>
                <div class="switcher">
                    <a href="">English</a><a href="">USD</a>
                </div>
            </div>
        </div>
    </header>

    <header class="main">
        <div class="wrapper home">
            <div class="links">
                <a href="">HOME</a><a href="">SHOP</a><a href="">COLLECTION</a><a href="">JOURNAL</a><a href="">LOOKBOOK</a><a href="">PAGES</a>
            </div>
            <div class="logo">
                <a href=""><img src="/img/icons/logo.svg" alt=""></a>
            </div>
            <div class="icons">
                <a href=""><img src="/img/icons/search.svg" alt=""></a><a href=""><img src="/img/icons/user.svg" alt=""></a><a href=""><img src="/img/icons/heart.svg" alt=""></a><a @click.prevent="$refs.cart.openMenu()" href="#"><img src="/img/icons/shopping-bag.svg" alt=""></a>
            </div>
        </div>
    </header>

    <Cart ref="cart"/>
</template>

<script>
import Cart from './Cart.vue';

export default {
    components: {
        Cart
    }
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'

header
    .wrapper
        justify-content: space-between
        padding: 8px 0
        &.home
            padding: 8px 60px 8px 60px
            margin: 0
            width: calc(100% - 120px)

header.soft
    background-color: $head   
    color: $text-white
    .text
        position: absolute
        left: calc(50% - 107px)
    .links a
        font-weight: 400
        font-size: 13px
        line-height: 24px
        color: $text-white
        margin-right: 15px
    .personalisation
        display: flex
        .socials a
            color: $text-white
            margin-right: 24px
        .switcher a
            position: relative
            color: $text-white
            margin-right: 22px
            &:first-child
                margin-right: 52px
            &::after
                position: absolute
                right: -22px
                top: calc(50%  -  4px)
                content: ''
                width: 12px
                height: 12px
                background-image: url(/img/icons/arrow.svg)

header.main
    color: $head
    margin-top: 30px
    .links a
        position: relative
        color: $head
        font-weight: 500
        font-size: 14px
        line-height: 24px
        margin-right: 15px
        &::before
            transition-duration: 0.4s
            width: 0
            content: ''
            bottom: -7px
            position: absolute
            height: 2px
            background-color: $head
        &:hover
            &::before
                width: 90%
    .logo a
        position: absolute
        left: calc(50% - 54px)
    .icons a
        margin-right: 30px
        &:last-child
            margin: 0
</style>