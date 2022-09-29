
<template>
    <footer class="footer">
        <div class="footer__wrapper wrapper">
            <div class="footer__get-email">
                <h1 class="footer__discount">GET 10% OFF</h1>
                <p class="footer__discount-info">Be the first to get the latest news about trends, promotions, and much more!</p>
                <div class="footer__email-address">
                    <div class="input">
                        <input type="text" name="" id="email" placeholder="Your email address">
                    </div>
                    <button class="footer__join">JOIN</button>
                </div>
            </div>
            <div class="footer__info">
                <div class="footer__contact-info">
                    <div class="footer__logo">
                        <a href=""><img src="/img/icons/logo_white.svg" alt=""></a>
                    </div>
                    <div class="footer__address">
                        <a href="">1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</a>
                    </div>
                    <div class="footer__email">
                        <a href="">sale@uomo.com</a>
                    </div>
                    <div class="footer__number">
                        <a href="">+1 246-345-0695</a>
                    </div>
                    <div class="footer__socials">
                        <a class="fa-brands fa-facebook-f" href="https://uk-ua.facebook.com/"></a><a class="fa-brands fa-twitter" href="https://twitter.com/?lang=ru"></a><a class="fa-brands fa-instagram" href="https://www.instagram.com/"></a><a class="fa-brands fa-pinterest" href=""></a>
                    </div>
                </div>
                <div class="footer__company">
                    <h3>COMPANY</h3>
                    <div class="footer__about-us">
                        <a href="">About Us</a>
                    </div>
                    <div class="footer__careers">
                        <a href="">Careers</a>
                    </div>
                    <div class="footer__blog">
                        <a href="">Affiliates</a>
                    </div>
                    <div class="footer__blog">
                        <a href="">Blog</a>
                    </div>
                    <div class="footer__contact-us">
                        <a href="">Contact Us</a>
                    </div>
                </div>
                <div class="footer__shop">
                    <h3>SHOP</h3>
                    <div class="footer__new-arrivals">
                        <a href="">New Arrivals</a>
                    </div>
                    <div class="footer__accessories">
                        <a href="">Accessories</a>
                    </div>
                    <div class="footer__men">
                        <a href="">Men</a>
                    </div>
                    <div class="footer__women">
                        <a href="">Women</a>
                    </div>
                    <div class="footer__shop-all">
                        <a href="">Shop All</a>
                    </div>
                </div>
                <div class="footer__help">
                    <h3>HELP</h3>
                    <div class="footer_customer-service">
                        <a href="">Customer Service</a>
                    </div>
                    <div class="footer__my-account">
                        <a href="">My Account</a>
                    </div>
                    <div class="footer__find-a-store">
                        <a href="">Find a Store</a>
                    </div>
                    <div class="footer__legal-and-privacy">
                        <a href="">Legal & Privacy</a>
                    </div>
                    <div class="footer__contact">
                        <a href="">Contact</a>
                    </div>
                    <div class="footer__gift-car">
                        <a href="">Gift Card</a>
                    </div>
                </div>
                <div class="footer__opening-time">
                    <h3>OPENING TIME</h3>
                    <div class="footer__day">
                        <h5>Mon – Fri: 8AM – 9PM</h5>
                    </div>
                    <div class="footer__day">
                        <h5>Sat: 9 AM – 8 PM</h5>
                    </div>
                    <div class="footer_day">
                        <h5>Sun: Closed</h5>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer class="softfooter">
        <div class="softfooter__wrapper wrapper">
            <div class="softfooter__data">
                ©2020 Uomo
            </div>
            <div class="softfooter__switcher">
                <a href="">English</a><a href="">USD</a>
            </div>
        </div>
    </footer>
</template>

<style lang="sass">
@import './src/styles/vars.sass'
    
.footer
    padding-top: 93px
    background-color: $head
    color: $text-white
    padding-bottom: 88px
    input
        background-color: #353535
        color: $text-white
        border-color: #353535!important
    &__wrapper
        flex-direction: column
    &__discount
        margin-top: 0
    &__get-email
        display: flex
        flex-direction: column
        text-align: center
        .input
            margin-top: 24px 
            width: 550px
    &__join
        margin-top: 24px 
        margin-left: 20px
        width: 150px
        height: 48px
        font-weight: 500
        font-size: 14px
        line-height: 24px
        color: $text-white
        text-align: center
        text-decoration: none
        display: inline-block
        border: none
        background-color: #5C5C5C
    &__email-address
        justify-content: center
        display: flex
    &__socials a
        margin-top: 40px
        color: $text-white
        &:not(:last-child)
            margin-right: 36px 
            color: $text-white
    &__logo
        margin-top: 90px
    &__info
        display: flex
        justify-content: space-between
    &__contact-info
        font-weight: 400
        font-size: 14px
        line-height: 24px
    &__address
        margin-top: 25px
        color: $background-footer
    &__email
        margin-top: 25px
        color: $background-footer
    &__number
        margin-top: 25px
        color: $background-footer
    &__company
        margin-top: 60px
        font-weight: 400
        font-size: 14px
        line-height: 40px
    &__shop
        margin-top: 60px
        font-weight: 400
        font-size: 14px
        line-height: 40px
    &__help
        margin-top: 60px
        font-weight: 400
        font-size: 14px
        line-height: 40px
    &__opening-time
        margin-top: 60px
        font-weight: 400
        font-size: 14px
        line-height: 40px
    a
        color: $background-footer

.softfooter
    background-color: $head
    border-top: 1px solid transparentize($text-white, 0.9)
    height: 88px
    display: flex
    align-items: center
    &__wrapper
        justify-content: space-between
    &__data
        font-weight: 400
        font-size: 14px
        line-height: 24px
        color: $background-footer
    &__switcher a
        position: relative
        color: $text-white
        margin-right: 22px
        &:first-child
            margin-right: 27px
        &::after
            position: absolute
            right: -22px
            top: calc(50%  -  4px)
            content: ''
            width: 12px
            height: 12px
            background-image: url(./img/icons/arrow.svg)
</style>