<template>
    <section class="order-received">
        <div class="wrapper">
            <div class="conteiner">
                <h1>SHIPPING AND CHECKOUT</h1>
                <ShoppingSteps :active="3"/>
                <div class="complete">
                    <img src="/img/icons/Yeeeees.svg" alt="">
                    <h1>Your order is completed!</h1>
                    <span>Thank you. Your order has been received.</span>
                </div>
                <div class="order-info">
                    <div class="order-number">
                        <h4>Order Number</h4>
                        <span>13119</span>
                    </div>
                    <div class="date">
                        <h4>Date</h4>
                        <span>27/11/2020</span>
                    </div>
                    <div class="total-info">
                        <h4>Total</h4>
                        <span>$40.10</span>
                    </div>
                    <div class="payment-info">
                        <h4>Payment Method</h4>
                        <span>Direct Bank Transfer</span>
                    </div>
                </div>
                <div class="order-details">
                    <h2>ORDER DETAILS</h2>
                    <div class="colontitle">
                        <h3>PRODUCT</h3>
                        <span>SUBTOTAL</span>
                    </div>
                    <div class="bag">
                        <div class="item">
                            <span>Zessi Dresses x2</span>
                            <span>$32.50</span>
                        </div>
                        <div class="item">
                            <span>Kirby T-Shirt</span>
                            <span>$29.90</span>
                        </div>
                    </div>
                    <div class="subtotal">
                        <h3>SUBTOTAL</h3>
                        <h3>$89.90</h3>
                    </div>
                    <div class="shipping">
                        <h3>SHIPPING</h3>
                        <span>Free shipping</span>
                    </div>
                    <div class="vat">
                        <h3>VAT</h3>
                        <h3>$19</h3>
                    </div>
                    <div class="payment">
                        <h3>PAYMENT METHOD</h3>
                        <h3>Direct bank transfer</h3>
                    </div>
                    <div class="total">
                        <h3>TOTAL</h3>
                        <h3>$1319</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<script>
import ShoppingSteps from './ShoppingSteps.vue'

export default {
    components: {
        ShoppingSteps
    }
}
</script>

<style lang="sass">
@import '/src/styles/vars.sass'

.order-received
    .complete
        margin-bottom: 36px
        img
            display: block
            margin-left: auto
            margin-right: auto
            width: 80px
            margin-bottom: 19px
        h1
            color: $head
            text-align: center
            font-weight: 400
            font-size: 35px
            line-height: 47px
            margin-bottom: 0
        span
            display: block
            margin-left: auto
            margin-right: auto
            color: $second
            font-weight: 400
            font-size: 14px
            line-height: 24px
            text-align: center
            margin-bottom: 0
    .order-info
        padding: 41px 200px 41px 43px
        display: flex
        justify-content: space-between
        border: 1px dashed $head
        margin-bottom: 36px
        h4
            color: $second
            font-weight: 500
            font-size: 14px
            line-height: 24px
            margin-bottom: 4px
        span
            color: $head
            font-weight: 500
            font-size: 16px
            line-height: 22px
    .order-details
        padding: 38px 41px
        border: 1px solid $head
        margin-bottom: 100px
        h2
            color: $head
            font-weight: 500
            font-size: 16px
            line-height: 22px
        h3
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
    .colontitle
        display: flex
        justify-content: space-between
        margin-bottom: 13px
        margin-top: 33px 
        border-bottom: 1px solid $background-footer
        h3
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
    .bag
        border-bottom: 1px solid $background-footer
        h3
            color: $head
            font-weight: 500
            font-size: 14px
            line-height: 24px
    .item
        display: flex
        justify-content: space-between
        margin-bottom: 13px
        margin-top: 13px 
        span
            color: $second
            font-weight: 500
            font-size: 14px
            line-height: 24px
    .subtotal
        display: flex
        justify-content: space-between
        margin-bottom: 13px
        border-bottom: 1px solid $background-footer
    .shipping
        display: flex
        justify-content: space-between
        margin-bottom: 13px
        border-bottom: 1px solid $background-footer
        h3
            margin-top: 0 
        span
            color: $head
            font-weight: 400
            font-size: 14px
            line-height: 24px
            margin-bottom: 0 
    .vat
        display: flex
        justify-content: space-between
        border-bottom: 1px solid $background-footer
        h3
            margin-top: 0 
    .payment
        display: flex
        justify-content: space-between
        border-bottom: 1px solid $background-footer
        h3
            margin-top: 13
    .total
        display: flex
        justify-content: space-between
        h3
            margin-bottom: 0 
</style>