<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-incons></home-incons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
    import HomeHeader from "./components/Header"
    import HomeSwiper from "./components/Swiper"
    import HomeIncons from "./components/Incons"
    import HomeRecommend from "./components/Recommend"

    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIncons,
            HomeRecommend
        },
    }
</script>

<style scoped>

</style>