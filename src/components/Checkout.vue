<template>
    <section class="checkout">
        <div class="checkout__wrapper wrapper">
            <div class="checkout-conteiner">
                <h1>SHIPPING AND CHECKOUT</h1>
                <ShoppingSteps :active="2"/>

                <form @submit.prevent="actionSubmit">
                    <div class="checkout__container">
                        <div class="checkout__form">
                            <h4>BILLING DETAILS</h4>
                            <div class="checkout__group">
                                <Input v-model="form.name" name="First name" id="name"/>
                                <Input v-model="form.surname" name="Second name" id="surname"/>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="company" placeholder=" ">
                                <label for="company">Company Name (optional)</label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="country" placeholder=" ">
                                <label for="country">Country / Region *</label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="street" placeholder=" ">
                                <label for="street">Street Address *</label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="address" placeholder=" ">
                                <label for="address"></label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="city" placeholder=" ">
                                <label for="city">Town / City *</label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="postcode" placeholder=" ">
                                <label for="postcode">Postcode / ZIP *</label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="province" placeholder=" ">
                                <label for="province">Province *</label>
                            </div>
                            <div class="input">
                                <input type="text" name="" id="phone" placeholder=" ">
                                <label for="phone">Phone *</label>
                            </div>
                            <Checkbox name="CREATE AN ACCOUNT?"/>
                            <Checkbox name="SHIP TO A DIFFERENT ADDRESS"/>
                            <textarea name="order"></textarea>
                        </div>
                        <div class="checkout__info">
                            <div class="checkout__total">
                                <h3>YOUR ORDER</h3>
                                <div class="checkout__columns">
                                    <h4>PRODUCT</h4>
                                    <h4>SUBTOTAL</h4>
                                </div>
                                <div class="checkout__columns">
                                    <div class="checkout__clothes-name">
                                        <h5 v-for="item in items">{{item.name}}</h5>
                                    </div>
                                    <div class="checkout__clothes-cost">
                                        <h5 v-for="item in items" >${{item.cost}}</h5>
                                    </div>
                                </div>
                                <div class="checkout__columns">
                                    <h4>SUBTOTAL</h4>
                                    <h4>$89.90</h4>
                                </div>
                                <div class="checkout__columns">
                                    <h4>SHIPPING</h4>
                                    <h4>Free shipping</h4>
                                </div>
                                <div class="checkout__columns">
                                    <h4>VAT</h4>
                                    <h4>$19</h4>
                                </div>
                                <div class="checkout__columns">
                                    <h4>TOTAL</h4>
                                    <h4>$1319</h4>
                                </div>
                            </div>
                            <div class="checkout__payment">
                                <div class="checkout__payment-options">
                                    <div class="checkout__payment-choice">
                                        <div class="input-radio">
                                            <input type="radio" name="bank">
                                        </div>
                                        <div class="checkout__payment-name">
                                            <h2>Direct bank transfer</h2>
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.Your order will not be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                    <div class="checkout__payment-choice">
                                        <div class="input-radio">
                                            <input type="radio" name="bank">
                                        </div>
                                        <div class="checkout__payment-name">
                                            <h2>Check payments</h2>
                                        </div>
                                    </div>
                                    <div class="checkout__payment-choice">
                                        <div class="input-radio">
                                            <input type="radio" name="bank">
                                        </div>
                                        <div class="checkout__payment-name">
                                            <h2>Cash on delivery</h2>
                                        </div>
                                    </div>
                                    <div class="checkout__payment-choice">
                                        <div class="input-radio">
                                            <input type="radio" name="bank">
                                        </div>
                                        <div class="checkout__payment-name">
                                            <h2>PayPal</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout__privacy-policy">
                                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                </div>
                            </div>
                            <div class="checkout__button">
                                <button class="button" type="submit">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </section>
</template>

<script>
import Checkbox from './Core/Checkbox.vue';
import ShoppingSteps from './ShoppingSteps.vue';
import Input from './Core/Input.vue';

export default {
    components: { Checkbox, ShoppingSteps, Input },
    data() {
        return {
            form: {
                name: {
                    value: '',
                    error: ''
                },
                surname: {
                    value: '',
                    error: ''
                }
            },

        }
    },
    methods: {
        actionSubmit() {
            let self = this

            fetch('/actionSubmit.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.form)
            }).then((response) => response.json()).then((data) => {
                if(data.success) {
                    console.log('Saved')
                }
                else
                {
                    // Errors

                    Object.entries(data.errors).forEach(function(key) {
                        self.form[key[0]].error = key[1]
                    })
                }
            })
        }
    }
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'

.checkout
    margin-bottom: 100px
    &__wrapper
        flex-direction: column
    &__group
        display: flex
        width: 100%
        .input
            &:not(:last-child)
                margin-right: 30px
            width: 100%
    &__info
        display: flex
        flex-direction: column
        width: 380px
    &__container
        display: flex
        flex-direction: row
    &__form
        flex-grow: 1
        margin-right: 40px
    &__total
        padding: 38px 41px 22px
        border: 1px solid $head
        margin-bottom: 20px
    &__columns
        display: flex
        justify-content: space-between
        &:not(:last-child)
            border-bottom: 1px solid $background-footer
    &__clothes-name
        display: flex
        flex-direction: column
    &__clothes-cost
        display: flex
        flex-direction: column
    &__payment
        padding: 38px 41px 22px
        border: 1px solid $background-footer
        margin-bottom: 20px
        color: $head
    &__payment-options
        display: flex
        flex-direction: column
    &__payment-choice
        display: flex
    &__privacy-policy
        font-weight: 400
        font-size: 12px
        line-height: 24px
    &__payment-name
        padding-left: 10px
        margin-top: 0
    &__order
        font-weight: 500
        font-size: 14px
        line-height: 24px
        width: 380px
        padding-top: 21px
        padding-bottom: 15px
        background-color: $head
        text-decoration: none
        border: none
        display: inline-block
        color: $text-white
    h2
        font-weight: 400
        font-size: 16px
        line-height: 21px
    h3
        font-weight: 500
        font-size: 16px
        line-height: 18px
        color: $head
    h4
        font-weight: 500
        font-size: 14px
        line-height: 24px
        color: $head
        margin-bottom: 12px
    h5
        font-weight: 500
        font-size: 14px
        line-height: 24px
        color: $second
        margin-bottom: 16px
        margin-top: 13px
    textarea
        padding: 12px 20px
        width: 100%
        height: 200px
        box-sizing: border-box
        outline: none
        border: 2px solid $background-footer
    .input-radio
        margin-top: 16px
    .input
        &:not(:last-child)
            margin-bottom: 30px
    .shoping-step
        display: flex
        justify-content: space-between
        width: 1200px
        padding-bottom: 10px
        border-bottom: 2px solid $background-footer
        margin-bottom: 50px
    .steps
        width: 420px
    .steps-active
        position: relative
        width: 420px
        &::before
            transition-duration: 0.4s
            width: 100%
            content: ''
            bottom: -12px
            position: absolute
            height: 2px
            background-color: $head
        h3
            color: $head !important
    .step-name
        display: flex
        h3
            margin-bottom: 0
            color: $second
            font-weight: 500
            font-size: 18px
            line-height: 24px
            &:first-child
                margin-right: 12px
    .step-info
        padding-left: 30px
        padding-top: -30px
        span
            margin-top: 0
            color: $second
            font-weight: 400
            font-size: 14px
            line-height: 30px
</style>