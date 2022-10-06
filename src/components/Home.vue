<template>
    <section class="first-screen">
        <div class="wrapper">
            <h3>SUMMER 2020</h3>
            <h1>Hello New Season</h1>
            <p>LIMITED TIME OFFER - UP TO 60% OFF & FREE SHIPPING</p>
            <a href="">DISCOVER NOW</a>
        </div>
    </section>

    <section class="best-proposition">
        <div class="best-proposition__wrapper wrapper">
            <div class="best-proposition__container">
                <div class="best-proposition__item">
                    <a class="best-proposition__image" href="">
                        <h3>NEW HORIZONS</h3>
                        <p>SHOP NOW</p>
                    </a>
                </div>
                <div class="best-proposition__item">
                    <a class="best-proposition__image" href="">
                        <h3>SUMMER HATS</h3>
                        <p>SHOP NOW</p>
                    </a>
                </div>
                <div class="best-proposition__special-item">
                    <a class="best-proposition__special-image" href="">
                        <h4>Free delivery for Uomo members</h4>
                        <h3>PROMOTIONS UP TO 10% OFF</h3>
                        <p class="see-more">SEE MORE</p>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="best-selling">
        <div class="best-selling__wrapper wrapper">
            <div class="best-selling__title">
                <h1>BEST SELLING</h1>
                <div class="best-selling__cloth-options">
                    <a v-for="(item, index) in selling_categories" :class="{active: index === active}" @click.prevent="changeCategory(index)" href="#">{{ item }}</a>
                </div>
            </div>
            <div class="best-selling__container">
                <Product v-for="item in products" :image="item.image" :type="item.type" :name="item.name" :cost="item.cost"/>
            </div>
        </div>    
    </section>

    <section class="shop-category">
        <div class="shop-category__wrapper wrapper">
            <div class="shop-category__title">
                <h2>SHOP BY CATEGORY</h2>
            </div>
            <div class="shop-category__container">
                <div v-for="item in category" class="shop-category__item">
                    <a class="shop-category__image" href=""><img :src="item.image" alt=""></a>
                    <h2 class="shop-category__tip">{{item.name}}</h2>
                    <p class="shop-category__products">{{item.count}} Products</p>
                </div>
            </div>
        </div>
    </section>
    <section class="new-collection">
        <div class="new-collection__wrapper wrapper">
            <div class="new-collection__container">
                <h1>NEW SEASON</h1>
                <p>New Collection Release</p>
                <a href="">SHOP NOW</a>
            </div>
        </div>
    </section>

    <section class="latest-prdoucts">
        <div class="latest-prdoucts__wrapper wrapper">
            <div class="latest-prdoucts__title">
                <h1>LATEST PRDOUCTS</h1>
            </div>
            <div class="latest-prdoucts__container">
                <Product image="/img/product.png" type="Jean" name="Cropped Faux Leather Jacket" cost="99"/>
                <Product image="/img/product.png" type="Jean" name="Cropped Faux Leather Jacket" cost="99"/>
                <Product image="/img/product.png" type="Jean" name="Cropped Faux Leather Jacket" cost="99"/>
                <Product image="/img/product.png" type="Jean" name="Cropped Faux Leather Jacket" cost="99"/>
            </div>
        </div>
    </section>

    <section class="latest-news">
        <div class="latest-news__wrapper wrapper">
            <div class="latest-news__title">
                <h1>LATEST NEWS</h1>
            </div>
            <div class="latest-news__container">
                <div v-for="item in news" class="latest-news__item">
                    <a class="latest-news__image" href=""><img :src="item.image" alt="Goood"></a>
                    <div class="latest-news__info">
                        <div class="latest-news__info">
                            <p>{{ item.author }}  {{ item.date }}</p>
                        </div>
                    </div>
                    <div class="latest-news__short">
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Product from './Core/Product.vue';

export default {
    data() {
        return {
            active: 0,
            selling_categories: ['TOPS', 'JEANS', 'BAGS', 'ACCESSORIES'],
            news: [
                {
                    image: '/img/product.png',
                    author: 'BY ADMIN',
                    date: 'APRIL 05, 2020',
                    description: 'Woman with good shoes is never be ugly place!'
                },
                {
                    image: '/img/product.png',
                    author: 'BY ADMIN',
                    date: 'APRIL 05, 2021',
                    description: 'What Freud Can Teach Us About Furniture!!'
                },
                {
                    image: '/img/product.png',
                    author: 'BY ADMIN',
                    date: 'APRIL 05, 2020',
                    description: 'Habitant morbi tristique senectus'
                }
            ],
            products: [
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '99'
                },
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '99'
                },
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '99'
                },
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '99'
                }
            ],
            products_new: [
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '949'
                },
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '969'
                },
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '979'
                },
                {
                    image: '/img/product.png',
                    type: 'Jean',
                    name: 'Cropped Faux Leather Jacket',
                    cost: '989'
                }
            ],
            category: [
                {
                    image: '/img/product.png',
                    name: 'ACCESSORIES',
                    count: '20'
                },
                {
                    image: '/img/product.png',
                    name: 'BAGS',
                    count: '20'
                },
                {
                    image: '/img/product.png',
                    name: 'SHOES',
                    count: '20'
                },
                {
                    image: '/img/product.png',
                    name: 'OUTERWEAR',
                    count: '20'
                },
                {
                    image: '/img/product.png',
                    name: 'TOP',
                    count: '20'
                }
            ],
        }
    },
    components: { Product },
    methods: {
        changeCategory(index) {
            this.active = index;

            this.products = this.products_new;
        }
    },
    created() {
        console.log(this.news)
    },
    mounted() {
    }
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'

.shop-category
    &__wrapper
        flex-direction: column
    &__title
        text-align: center
        margin-top: 100px
    &__container
        display: flex
        justify-content: space-between
        margin-top: 30px 
    &__item img
        width: 230px
    &__tip
        text-align: center
        color: $head
        font-weight: 500
        font-size: 16px
        line-height: 22px
        margin-bottom: 2px
    &__products
        text-align: center
        margin-top: 5px
        color: $second
        font-weight: 400
        font-size: 14px
        line-height: 24px

.new-collection
    margin-top: 72px
    background-image: url("./img/productBack.png")
    &__container
        text-align: center
        padding: 200px 0
        width: 100%
        h1
            font-weight: 700
            font-size: 60px
            line-height: 84px
            color: $text-white
            margin-bottom: 0
        p
            font-weight: 400
            font-size: 16px
            line-height: 21px
            color: $text-white
            margin-bottom: 46px
        a
            width: 210px
            padding: 18px 68px 13px 68px
            background-color: $text-white
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px

.latest-prdoucts
    &__wrapper
        flex-direction: column
    &__title
        margin-top: 92px
        text-align: center
    &__container
        display: flex
        justify-content: space-between
        margin-top: 32px 
    &__image img
        width: 280px
    &__tip
        margin-top: 12px
        margin-bottom: 2px 
        color: $third
        font-weight: 400
        font-size: 14px
        line-height: 24px
    &__name
        margin-top: 0
        margin-bottom: 0 
        font-weight: 400
        font-size: 16px
        line-height: 21px
    &__cost
        margin-top: 6px
        font-weight: 400
        font-size: 16px
        line-height: 21px
        color: $second
    &____cost-title
        display: flex
    &__last-cost
        color: $second
        text-decoration-line: line-through
    &__new-cost
        color: $head

.latest-news
    margin-bottom: 96px
    &__wrapper
        flex-direction: column
    &__title
        margin-top: 52px
        text-align: center
    &__container
        display: flex
        justify-content: space-between
        margin-top: 34px
    &__item img
        width: 390px
        height: 240px
        margin-bottom: 0
    &__info
        margin-top: 5px
        margin-bottom: 4px
        font-weight: 400
        font-size: 14px
        line-height: 24px 
        color: $second
    &__short
        margin-top: 0
        font-weight: 400
        font-size: 18px
        line-height: 24px
        color: $head
    
.best-proposition
    &__wrapper
        flex-direction: column
    &__container
        margin-top: 60px 
        display: flex
        justify-content: space-between
    &__item
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        height: 380px
        width: 380px
        background-image: url("./img/proposition.png")
    &__special-item
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        height: 380px
        width: 380px
        background-color: $third
    &__image
        width: 140px
        color: $head
    &__special-image
        width: 220px
        color: $text-white
    h3
        font-weight: 700
        font-size: 26px
        line-height: 36px
        text-align: center
        margin-bottom: 0
        margin-top: 0
    p
        position: relative
        font-weight: 500
        font-size: 14px
        line-height: 24px
        text-align: center
        margin-top: 3px
        transition-duration: 0.4s
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
                width: 70px
    h4
        font-weight: 500
        font-size: 14px
        line-height: 24px
        text-align: center
        margin-bottom: 8px
    .best-proposition__special-item p.see-more
        position: relative
        font-weight: 500
        font-size: 14px
        line-height: 24px
        text-align: center
        margin-top: 3px
        transition-duration: 0.4s
        &::before
            transition-duration: 0.4s
            width: 0
            content: ''
            bottom: -7px
            position: absolute
            height: 2px
            background-color: $text-white
        &:hover
            &::before
                width: 70px

.first-screen
    height: calc(100vh - 40px)
    min-height: 700px
    width: 100%
    background-image: url("./img/first-screen.png")
    background-size: cover
    margin-top: -70px
    .wrapper
        justify-content: center
        align-items: flex-start
        flex-direction: column
        height: 100%
    h3
        text-align: right
        height: 24px
        width: 150px
        position: relative
        font-weight: 500
        font-size: 14px
        line-height: 24px
        margin-bottom: -10px
        &::before
            width: 50px
            content: ''
            top: 11px
            left: 0
            position: absolute
            height: 2px
            background-color: $head
    h1
        margin-top: 0
        margin-bottom: 0
        font-weight: 800
        font-size: 70px
        line-height: 80px
    p
        font-weight: 400
        font-size: 16px
        line-height: 21px
        margin-bottom: 54px
    a
        background-color: $text-white
        color: $head
        padding: 18px 48px 18px 78px
        font-weight: 500
        font-size: 14px
        line-height: 24px
        position: relative
        transition-duration: 0.4s
        &:hover
            background-color: $head
            color: $text-white
            &::before
                background-color: $text-white
        &:active
            background-color: $second
            color: $text-white
            &::before
                background-color: $text-white
        &::before
            transition-duration: 0.4s
            width: 20px
            content: ''
            top: 28px
            left: 48px
            position: absolute
            height: 2px
            background-color: $head
</style>