<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<script>
    export default {
        name: "HomeIncons",
        data(){
            return{
                iconList:[
                    {
                        id:"001",
                        imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店优惠，打五折",
                    },
                    {
                        id:"002",
                        imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
                        desc:"机票",
                    },
                    {
                        id:"003",
                        imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
                        desc:"火车票",
                    },
                    {
                        id:"004",
                        imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
                        desc:"度假",
                    },
                    {
                        id:"005",
                        imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店",
                    },
                    {
                        id:"006",
                        imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
                        desc:"机票",
                    },
                    {
                        id:"007",
                        imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
                        desc:"火车票",
                    },
                    {
                        id:"008",
                        imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
                        desc:"度假",
                    },
                    {
                        id:"009",
                        imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
                        desc:"景点门票",
                    },

                ]
            }
        },
        computed:{
            pages (){
                const pages = [];
                this.iconList.forEach((item,index) => {
                    const page = Math.floor(index/8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    @import "~@/assets/styles/mixins.styl"
    .icons >>> .swiper-container
        height :0
        padding-bottom :50%
        /*background-color :green*/
    .icon
        position :relative
        float :left
        height :0
        width :25%
        padding-bottom 25%
        /*background-color :red*/
        .icon-img
            position :absolute
            /*background-color :blue*/
            top :0
            left :0
            right :0
            bottom :.44rem
            box-sizing :border-box
            padding :.1rem
            .icon-img-content
                display :block
                margin :0 auto
                height :100%
        .icon-desc
            position :absolute
            left :0
            right :0
            bottom :0
            height :.44rem
            line-height :.44rem
            color :$darkTextColor
            text-align :center
            overflow :hidden
            white-space :nowrap
            ellipsis()
</style>