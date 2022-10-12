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
                            <div v-for="(item, index) in colors" :class="{active: index === activeColor}" @click.prevent="chengeColor(index)">
                                <div class="radio">
                                    <a :class="item" href=""></a>
                                </div>
                            </div>
                        </div>
                        <div class="add-to-cart">
                            <Number :max="100" :min="1"></Number>
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
                        <div v-if="switchDescription(0)">
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
                        <div v-if="switchDescription(1)">
                            <div class="info-conteiner">
                                <div class="titles">
                                    <h1>
                                        Weight
                                        <span>1.25 kg</span>
                                    </h1>
                                    <h1>
                                        Dimensions
                                        <span>90 x 60 x 90 cm</span>
                                    </h1>
                                    <h1>
                                        Size
                                        <span>XS, S, M, L, XL</span>
                                    </h1>
                                    <h1>
                                        Color
                                        <span>Black, Orange, White</span>
                                    </h1>
                                    <h1>
                                        Storage
                                        <span>Relaxed fit shirt-style dress with a rugged</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div v-if="switchDescription(2)">
                            <h1 class="reviewsTitle">Reviews</h1>
                            <div v-for="item in reviews" class="review">
                                <div class="reviewsInfo">
                                    <img :src="item.image" alt="">
                                    <h3>{{item.name}}</h3>
                                    <h4>{{item.data}}</h4>
                                    <span>{{item.info}}</span>
                                    <div class="reviewRating">
                                        <a href=""></a><a href=""></a><a href=""></a><a href=""></a><a href=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="yourReviews">
                                <h1>Be the first to review “Message Cotton T-Shirt”</h1>
                                <span>Your email address will not be published. Required fields are marked *</span>
                                    <textarea name="review" placeholder="Your Review"></textarea>
                                    <div class="rewiewsInput">
                                        <div class="input">
                                        <input type="text" name="" id="name" placeholder=" ">
                                        <label for="name">Name *</label>
                                    </div>
                                    <div class="input">
                                        <input type="text" name="" id="email" placeholder=" ">
                                        <label for="email">Email *</label>
                                    </div>
                                </div>
                                <div class="checkbox">
                                    <Checkbox name="Save my name, email, and website in this browser for the next time I comment."/>
                                </div>
                                <div class="button">SUBMIT</div>
                            </div>
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
import Number from './Number.vue';
import Checkbox from './Checkbox.vue';

export default {
    data() {
        return {
            activeSize: 0,
            activeImages: 0,
            activeTitle: 0,
            activeColor: 0,
            reviews: [
                {
                    image: "./img/avatar.png",
                    name: "Janice Miller", 
                    data: "April 06, 2020", 
                    info: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…"
                },
                {
                    image: "./img/avatar.png",
                    name: "Benjam Porter", 
                    data: "April 06, 2020", 
                    info: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…"
                },
                {
                    image: "./img/avatar.png",
                    name: "Janice Bucher", 
                    data: "April 06, 2020", 
                    info: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…"
                },
            ],
            colors: [
                "black", "red", "grey"
            ],
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
        chengeColor(active) {
            this.activeColor === active;
        },
        switchDescription(index) {
            return this.activeTitle === index;
        },
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
    components: { Product, Number , Checkbox},
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
    .info-conteiner
        display: flex
        margin-top: 55px
    .titles
        display: flex
        flex-direction: column
        h1
            color: $head
            font-weight: 500
            font-size: 16px
            line-height: 22px
            width: 406px
            position: relative
            span
                right: 0
                position: absolute
                color: $head
                font-weight: 400
                font-size: 14px
                line-height: 24px
    .discription-container
        display: none
        &.active
            display: block
    .reviewsTitle
        margin-top: 55px 
        color: $head
        font-weight: 500
        font-size: 18px
        line-height: 24px
    .review
        display: flex
        position: relative
        padding-left: 90px
        padding-top: 30px
        padding-bottom: 23px 
        border-bottom: 1px solid $background-footer
        img
            position: absolute
            left: 0
            top: 30px
        h3
            margin-top: 0
            margin-bottom: 0
            color: $head
            font-weight: 400
            font-size: 14px
            line-height: 24px
        h4
            margin-top: 0
            color: $second
            font-weight: 400
            font-size: 14px
            line-height: 24px
        span
            color: $second
            font-weight: 400
            font-size: 14px
            line-height: 24px
        .reviewRating
            position: absolute
            top: 30px
            right: 0
    .yourReviews
        display: flex
        flex-direction: column
        h1
            color: $head
            font-weight: 500
            font-size: 18px
            line-height: 24px
        span
            color: $head
            font-weight: 400
            font-size: 14px
            line-height: 24px
    .textArea textarea
        padding: 12px 20px
        padding: 12px 20px
        width: 100%
        height: 200px
        box-sizing: border-box
        outline: none
        border: 2px solid $background-footer
        &::placeholder
            left: 25px
            top: 25px
    .rewiewsInput .input
        margin-top: 30px
    .checkbox
        color: $second
        margin-left: -14px
        margin-top: 15px
        font-weight: 400
        font-size: 14px
        line-height: 24px
    .button
        width: 200px !important

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