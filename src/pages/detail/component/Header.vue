<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back-icon">&#xe6db;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe6db;</div>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "DetailHeader",
        data(){
            return{
                showAbs:true,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop;
                if (top > 60){
                    let opacity = top / 140;
                    opacity = opacity > 1? 1:opacity;
                    this.opacityStyle = {opacity};
                    this.showAbs = false;
                } else {
                    this.showAbs = true;
                }
            }

        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        unmounted(){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header-abs
        position :absolute
        left :.2rem
        top :.2rem
        width :.8rem
        height :.8rem
        line-height :.8rem
        border-radius :.4rem
        background-color :rgba(0,0,0,.8)
        text-align :center
        .header-abs-back-icon
            color :#ffffff
            font-size :.5rem
    .header-fixed
        z-index :2
        position: fixed
        left :0
        top  :0
        right :0
        height :$headerHeight
        line-height :.86rem
        text-align :center
        color :#ffffff
        background-color : $bgColor
        font-size :.32rem
        .header-fixed-back
            position :absolute
            top :0
            left :0
            width :.64rem
            text-align :center
            font-size :.4rem
            color :#ffffff

</style>