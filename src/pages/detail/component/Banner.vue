<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="this.bannerImg"/>
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe60f;</span>39</div>
            </div>
        </div>
        <common-gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>

</template>

<script>
    import CommonGallary from "@/common/gallary/Gallary";
    export default {
        name: "DetailBanner",
        data(){
            return{
                showGallary:false
            }
        },
        props:{
            bannerImg:String,
            sightName:String,
            gallaryImgs:Array
        },
        components:{
            CommonGallary
        },
        methods:{
            handleBannerClick(){
                this.showGallary = true;
            },
            handleGallaryClose(){
                this.showGallary = false;
            }
        }
    }
</script>

<style  lang="stylus" scoped>
    .banner
        overflow :hidden
        height :0
        padding-bottom :55%
        position :relative
        .banner-img
            width :100%
        .banner-info
            color :#ffffff
            display :flex
            position: absolute;
            left :0
            right :0
            bottom :0
            line-height :.6rem
            background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex :1;
                font-size :.32rem
                padding :0 .2rem
            .banner-number
                padding :0 .4rem
                height :.4rem
                line-height :.4rem
                margin-top :.14rem
                border-radius :.2rem
                font-size :.24rem
                background-color :rgba(0,0,0,0.8)
                .banner-icon
                    font-size:.24rem


</style>