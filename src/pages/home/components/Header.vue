<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe6db;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe6e1;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe610;</span>
            </div>
        </router-link>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HomeHeader",
        computed:{
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        display flex
        height :$headerHeight
        line-height .86rem
        color:#ffffff
        background-color :$bgColor
        .header-left
            width :.64rem
            float: left
            .back-icon
                font-size :.4rem
                text-align center
        .header-input
            flex :1
            background-color #ffffff
            padding-left :.2rem
            border-radius :.1rem
            height :.64rem
            line-height :.64rem
            margin-top :.12rem
            margin-left :.2rem
            color :#ccc
        .header-right
            color:white
            padding :0 .1rem
            min-width 1.04rem
            text-align :center
            float: right
            .arrow-icon
                margin-left :-.04rem
                font-size :.24rem
</style>