<template>
    <div class="best-selling__item">
        <router-link to="/product">
            <div class="best-selling__image">
                <img :src="image" alt="Lol">
                <div class="best-selling__cart">
                    <span>ADD TO CART</span><span>QUICK VIEW</span>
                </div>
                <a class="best-selling__like" href="">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_203_6138)">
                        <path d="M14.7145 2.64641C12.9744 0.906754 10.1436 0.906754 8.40393 2.64641L7.99986 3.05024L7.59603 2.64641C5.85637 0.906518 3.02531 0.906518 1.28565 2.64641C-0.418689 4.35075 -0.429756 7.0523 1.25998 8.93065C2.80114 10.6432 7.34643 14.3432 7.53928 14.4998C7.6702 14.6062 7.82773 14.658 7.98432 14.658C7.9895 14.658 7.99468 14.658 7.99963 14.6578C8.16163 14.6653 8.32481 14.6097 8.45997 14.4998C8.65282 14.3432 13.1986 10.6432 14.7402 8.93042C16.4297 7.0523 16.4186 4.35075 14.7145 2.64641ZM13.69 7.98547C12.4884 9.32036 9.18546 12.0735 7.99963 13.0504C6.8138 12.0737 3.51155 9.32083 2.31018 7.98571C1.13142 6.67555 1.12035 4.80968 2.28452 3.64551C2.87908 3.05119 3.6599 2.75379 4.44072 2.75379C5.22154 2.75379 6.00236 3.05095 6.59693 3.64551L7.48512 4.53371C7.59085 4.63944 7.72413 4.70254 7.86399 4.72468C8.09099 4.77342 8.33729 4.71008 8.51389 4.53394L9.40256 3.64551C10.5919 2.45662 12.5266 2.45686 13.7152 3.64551C14.8794 4.80968 14.8683 6.67555 13.69 7.98547Z" fill="currentcolor"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_203_6138">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
                <div v-if="new" class="best-selling__new">
                    <samp>NEW</samp>
                </div>
                <div v-if="sale" class="best-selling__discont">
                    <samp>-67%</samp>
                </div>
            </div>
        </router-link>
        <h3 class="best-selling__tip">{{ type }}</h3>
        <h2 class="best-selling__name">{{ name }}</h2>
        <p class="best-selling__cost">${{ cost }}</p>
    </div>
</template>

<script>
export default {
    props: ['new', 'image', 'sale', 'type', 'name', 'cost']
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'
    
.best-selling
    &__wrapper
        flex-direction: column
    &__title
        text-align: center
    &__cloth-options a    
        margin-right: 40px 
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
        &:hover
            color: $head
            .best-selling__cloth-options a.active
                color: $second
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
        &:last-child
            margin: 0
    &__container
        display: flex
        justify-content: space-between
        margin-top: 50px 
    &__item
        width: 280px
    &__image
        width: 280px
        height: 340px
        position: relative
        overflow: hidden
        &:hover .best-selling__cart
            bottom: 0
        img
            height: 340px
            width: 280px
    &__tip
        color: $third
        font-weight: 400
        font-size: 14px
        line-height: 24px
        margin-bottom: 2px 
    &__name
        margin-top: 0
        margin-bottom: 0 
        font-weight: 400
        font-size: 16px
        line-height: 18px
    &__cost
        margin-top: 8px
        color: $second
    &__cart
        padding: 16px 0
        background-color: $head
        color: $text-white
        display: flex
        justify-content: space-around
        position: absolute
        width: 100%
        bottom: -50.4px
        left: 0
        transition-duration: 0.4s
    &__like
        position: absolute
        color: $head
        background-color: $text-white
        top: 20px
        right: 20px
        border-radius: 20px
        padding: 13px 12px 11px 12px
        &:active
            background-color: $red
        &:hover
            color: $red
            &:active
                color: $text-white
    &__new
        font-weight: 400
        font-size: 14px
        line-height: 24px
        position: absolute
        color: $head
        background-color: $text-white
        top: 20px
        left: 0
        width: 55px
        height: 30px
        padding-top: 5px 
        text-align: center
    &__discont
        font-weight: 400
        font-size: 14px
        line-height: 24px
        position: absolute
        color: $text-white
        background-color: $red
        top: 20px
        left: 0
        width: 55px
        height: 30px
        padding-top: 5px 
        text-align: center
</style>