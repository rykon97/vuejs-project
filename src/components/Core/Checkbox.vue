<template>
    <label class="checkbox">
        {{ name }}
        <input type="checkbox">
        <span class="checkmark"></span>
    </label> 
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="sass">
@import './src/styles/vars.sass'

.checkbox 
    display: block
    position: relative
    padding-left: 29px
    margin-bottom: 20px
    font-weight: 500
    font-size: 14px
    line-height: 16px
    cursor: pointer
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    &:last-of-type
        margin-bottom: 30px
    .checkmark 
        position: absolute
        top: 0
        left: 0
        height: 15px
        width: 15px
        background-color: $text-white
        border: 2px solid $background-footer 
        &::after 
            content: ""
            position: absolute
            display: none
            width: 100%
            height: 100%
            border: 2px solid $text-white
            box-sizing: border-box
    input 
        position: absolute
        opacity: 0
        cursor: pointer
        height: 0
        width: 0
        &:checked
            ~ .checkmark 
                background-color: $head
                border-color: $head
                &::after 
                    display: block
        &:hover input ~ .checkmark 
            background-color: #ccc
</style>