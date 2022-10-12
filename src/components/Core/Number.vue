<template>
    <div class="number">
        <a class="minus" @click.prevent="minus" href="#">-</a>
        <input type="number" :min="min" :max="max" v-model="valueChange">
        <a class="plus" @click.prevent="plus" href="#">+</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valueChange: 1
        }
    },
    props: {
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 100
        },
        modelValue: {
            type: Number
        }
    },
    emits: ['update:modelValue'],
    methods: {
        plus() {
            if(this.valueChange < this.max) {
                this.valueChange++
                this.$emit('update:modelValue', this.modelValue + 1)
            }
        },
        minus() {
            if(this.valueChange > this.min) {
                this.valueChange--
                this.$emit('update:modelValue', this.modelValue - 1)
            }
        }
    },
    watch: {
        valueChange(newValue) {
            if(newValue > this.max) {
                this.valueChange = this.max
                this.$emit('update:modelValue', this.max)
            }
            if(newValue < this.min) {
                this.valueChange = this.min
                this.$emit('update:modelValue', this.min)
            }
        }
    },
    created() {
        if(!this.modelValue) {
          this.$emit('update:modelValue', 1)
        }
    }
}
</script>

<style lang="sass">
@import '/src/styles/vars.sass'

.number
    position: relative
    input[type="number"]
        border: 2px solid $background-footer
        text-align: center
        padding: 5px 43px!important
        width: 30px!important
        -moz-appearance: textfield
    .plus
        color: $second
        position: absolute
        right: 21px
        top: 19px
        margin-right: 21px
    .minus
        color: $second
        position: absolute
        left: 21px
        top: 19px
</style>