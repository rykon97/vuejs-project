<template>
    <div class="shoping-step">
        <div v-for="(step, index) in steps" class="steps" :class="[index <= (active - 1) ? 'active' : '']">
            <div class="step-name">
                <h3>0{{ index + 1 }}</h3>
                <h3>{{ step.title }}</h3>
            </div>
            <div class="step-info">
                <span>{{ step.info }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            steps: [
                {
                    title: 'SHOPPING BAG',
                    info: 'Manage Your Items List'
                },
                {
                    title: 'SHOPPING BAG',
                    info: 'Checkout Your Items List'
                },
                {
                    title: 'CONFIRMATION',
                    info: 'Review And Submit Your Order'
                }
            ]
        }
    }
}
</script>

<style lang="sass">
@import '/src/styles/vars.sass'

.shoping-step
    display: flex
    justify-content: space-between
    width: 1200px
    padding-bottom: 10px 
    border-bottom: 2px solid $background-footer
    margin-bottom: 50px
.steps
    width: 420px
.steps
    &.active
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
        margin-top: 0px 
        color: $second
        font-weight: 400
        font-size: 14px
        line-height: 30px
</style>