<template>
    <div class="input">
        <input type="text" :class="{error: modelValue.error !== ''}" v-model="modelValue.value" :id="id" placeholder=" ">
        <label :for="id">{{name}}</label>
        <span v-if="modelValue.error">{{ modelValue.error }}</span>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        modelValue: Object,
        error: String,
        id: String
    },
    emits: ['update:modelValue'],
    mounted() {
        console.log(this.modelValue.error)
    }
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button
    -webkit-appearance: none

.input
    position: relative
    input
        padding: 12px 20px
        width: 100%
        box-sizing: border-box
        outline: none
        border: 2px solid $background-footer
        transition-duration: 0.4s
        &.error
            border-color: red
        &:focus, &:not(:placeholder-shown)
            border-color: $head
            ~ label
                color: $head
                top: -8px
                left: 19px
                padding: 0 4px
    label
        transition-duration: 0.4s
        background-color: $text-white
        color: $second
        position: absolute
        left: 22px
        top: 14px
        font-size: 14px

</style>