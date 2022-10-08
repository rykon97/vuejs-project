<template>
    <section class="product">
        <div class="wrapper">
            <div class="info">
                <div class="preview">
                    <div class="images">
                        <div class="list">
                            <a v-for="(item, index) in images" :class="{active: index === activeImages}" @click.prevent="changeImages(index)" href=""><img :src="item" alt=""></a>
                        </div>
                        <img class="main-image" :src="images[activeImages]" alt="">
                    </div>
                    <div class="main-info">
                        <div class="breadcrumbs">
                            <div class="links">
                                <a href="">HOME</a>/<a href="">THE SHOP</a>
                            </div>
                            <div class="buttons">
                                <a href="">PREV</a><a href="">NEXT</a>
                            </div>
                        </div>
                        <div class="about">
                            <h1 class="name">Lightweight Puffer Jacket With a Hood</h1>
                            <h2 class="cost">$249</h2>
                            <p>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
                        </div>
                        <div class="size">
                            <div class="size-wish">
                                <h3>SIZES</h3>
                                <a v-for="(item, index) in sizes" :class="{active: index === activeSize}" @click.prevent="changeSize(index)" href="#">{{item}}</a>
                            </div>
                             <a class="guide" href="">SIZE GUIDE</a>
                        </div>
                        <div class="color">
                            <h3>COLOR</h3>
                            <input class="black" type="radio" name="color"><input class="white" type="radio" name="color"><input class="red" type="radio" name="color">
                        </div>
                        <div class="add-to-cart">
                            <div class="number"><a class="minus" href="#">-</a><input type="number" min="1" value="1"><a class="plus" href="#">+</a></div>
                            <a class="button" href="">ADD TO CART</a>
                         </div>
                        <div class="wish">
                            <a class="like" href="">ADD TO WISHLIST</a><a class="share" href="">SHARE</a>
                        </div>
                        <div class="kay-words">
                        </div>
                    </div>
                </div>
                <div class="description">
                    <div class="description-title">
                        <a v-for="(item, index) in titles" :class="{active: index === activeTitle}" @click.prevent="changeTitle(index)" href="">{{item}}</a>
                    </div>
                    <div class="discription">
                        <div v-if="titles[0] === titles[activeTitle]">
                            <div class="main-description">
                                <h1>Sed do eiusmod tempor incididunt ut labore</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            <div class="soft-description">
                                <div class="why-choose">
                                    <h1>Why choose product?</h1>
                                    <ul type="disc">
                                        <li>Creat by cotton fibric with soft and smooth</li>
                                        <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                        <li>Downloadable/Digital Products, Virtual Products</li>
                                    </ul>
                                </div>
                                <div class="number-lis">
                                    <h1>Sample Number List</h1>
                                    <ol type="1">
                                        <li>Create Store-specific attrittbutes on the fly</li>
                                        <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                        <li>Downloadable/Digital Products, Virtual Products</li>
                                    </ol>
                                </div>
                            </div>
                            <div class="lining">
                                <h1>Lining</h1>
                                <p>100% Polyester, Main: 100% Polyester.</p>
                            </div>
                        </div>
                        <div v-if="titles[1] === titles[activeTitle]">
                            frgggr
                        </div>
                        <div v-if="titles[2] === titles[activeTitle]">
                            grggrgrgrg
                        </div>
                    </div>
                </div>
                <div class="related-products">
                    <h1>RELATED PRODUCTS</h1>
                    <div class="products-container">
                        <Product v-for="item in products" :image="item.image" :type="item.type" :name="item.name" :cost="item.cost"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Product from './Product.vue';

export default {
    data() {
        return {
            activeSize: 0,
            activeImages: 0,
            activeTitle: 0,
            sizes: [
                "XS", "S", "M", "L", "XL"
            ],
            images: [
                "/img/main-image.png", "/img/second-image.png", "/img/main-image.png", "/img/main-image.png"
            ],
            titles: [
                "DESCRIPTION","ADDITIONAL INFORMATION","REVIEWS (3)"
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
        }
    },
    methods: {
        changeImages(active) {
            this.activeImages = active; 
        },
        changeSize(active) {
            this.activeSize = active; 
        },
        changeTitle(active) {
            this.activeTitle = active;
        },
        mainImage() {
            
        }
    },
    components: { Product },
}
</script>

<style lang="sass">
@import '/src/styles/vars.sass'

.product
    .info
        padding-top: 55px
    .preview
        display: flex
        justify-content: space-between
        margin-bottom: 100px
    .images
        position: relative
        display: flex
        justify-content: space-between
        margin-right: 50px
    .main-image
        width: 550px
        height: 490px
    .soft-image
        width: 90px
        &:not(:last-child)
            margin-bottom: 8px
    .list
        display: flex
        flex-direction: column
        padding-right: 8px
        img
            width: 90px
            height: 90px
        a   
            width: 90px
            height: 90px     
            &:not(:last-child)
                margin-bottom: 8px 
            &.active
                border: 2px solid $third
    .main-info
        width: 500px
    .breadcrumbs
        width: 500px
        display: flex
        justify-content: space-between 
    .links a
        color: $head
        font-weight: 500
        font-size: 14px
        line-height: 24px   
    .buttons
        padding-right: 15px 
        a
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
            &:first-child
                margin-right: 29px
    .about p
        color: $head
        font-weight: 400
        font-size: 14px
        line-height: 24px
    .name
        color: $head
        font-weight: 400
        font-size: 26px
        line-height: 35px
    .cost
        color: $head
        font-weight: 500
        font-size: 22px
        line-height: 30px
    .size
        display: flex
        justify-content: space-between 
        align-items: center
    .guide
        color: $head
        font-weight: 500
        font-size: 13px
        line-height: 24px
        position: relative
        &:hover
            &::before
                width: 90%
        &::before
            transition-duration: 0.4s
            content: ''
            bottom: -7px
            position: absolute
            width: 0
            height: 2px
            background-color: $head
    .color
        display: flex
        margin-bottom: 30px 
        h3
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
            margin-right: 39px
    .size-wish
        display: flex
        align-items: center
        justify-content: space-between 
        h3
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
            margin-right: 50px 
        a
            color: $head
            padding: 6px 13px 6px 13px
            font-weight: 400
            font-size: 13px
            line-height: 17px
            align-items: center
            text-align: center
            border: 1px solid $background-footer
            transition-duration: 0.4s
            &:not(:last-child)
                margin-right: 8px
            &.active
                color: $head
                border-width: 1px
                border-color: $head
    .wish 
        margin-top: 30px 
        a
            margin-top: 30px 
            color: $head
            font-weight: 500
            font-size: 13px
            line-height: 24px
            position: relative
            &:first-child
                margin-right: 33px
            &:hover
                &::before
                    width: 90%
            &::before
                transition-duration: 0.4s
                content: ''
                bottom: -7px
                position: absolute
                width: 0
                height: 2px
                background-color: $head
    .add-to-cart
        display: inline-flex
        input
            padding: 5px 16px 
            width: 60px
            height: 45px
            margin-right: 20px 
    .description
        margin-bottom: 100px
        width: 930px
        padding-left: 155px 
    .description-title
        display: flex
        justify-content: center
        a
            margin-right: 40px
            font-weight: 500
            font-size: 16px
            line-height: 22px
            color: $second
            position: relative
            transition-duration: 0.4s
            &.active
                color: $head
                &::before 
                    transition-duration: 0.4s
                    content: ''
                    bottom: -7px
                    position: absolute
                    width: 90%
                    height: 2px
                    background-color: $head
            &::before
                transition-duration: 0.4s
                content: ''
                bottom: -7px
                position: absolute
                width: 0
                height: 2px
                background-color: $head
            &:active
                color: $head
                &::before 
                    transition-duration: 0.4s
                    content: ''
                    bottom: -7px
                    position: absolute
                    width: 90%
                    height: 2px
                    background-color: $head
    .main-description
        padding-top: 55px 
        color: $head
        h1
            font-weight: 500
            font-size: 16px
            line-height: 22px
        p
            font-weight: 400
            font-size: 14px
            line-height: 24px
    .soft-description
        margin-top: 40px 
        display: flex
        justify-content: space-between 
        h1
            font-weight: 500
            font-size: 16px
            line-height: 22px
        ul
            margin-left: -20px 
            margin-top: 3px 
            font-weight: 400
            font-size: 14px
            line-height: 24px
        ol
            margin-left: -20px 
            margin-top: 3px 
            font-weight: 400
            font-size: 14px
            line-height: 24px  
    .lining
        margin-top: 40px    
        h1
            font-weight: 500
            font-size: 16px
            line-height: 22px
        p
            font-weight: 400
            font-size: 14px
            line-height: 24px
    .discription-container
        display: none
        &.active
            display: block

.related-products
    padding-bottom: 100px
    h1
        margin-bottom: 34px
        font-weight: 400
        font-size: 16px
        line-height: 21px
        &::before
            transition-duration: 0.4s
            content: ''
            bottom: -7px
            position: absolute
            width: 0
            height: 2px
            background-color: $head
        &:last-child
            margin: 0
    .products-container
        display: flex
        justify-content: space-between
</style>