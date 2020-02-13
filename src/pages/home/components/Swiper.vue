<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeSwiper",
        props:{
            swiperList:Array
        },
        computed:{
            showSwiper(){
                return this.swiperList.length;
            }
        },
        data(){
            return{
                swiperOption:{
                    pagination:".swiper-pagination",
                    loop:true,
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active{
        background-color :white !important
    }
    .wrapper
        overflow :hidden
        width :100%
        height :0
        padding-bottom :31.35%
        background-color :#ccc

        .swiper-img{
            width 100%
        }
</style>

