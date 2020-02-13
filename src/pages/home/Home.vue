<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-incons></home-incons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from "./components/Header"
    import HomeSwiper from "./components/Swiper"
    import HomeIncons from "./components/Incons"
    import HomeRecommend from "./components/Recommend"
    import HomeWeekend from "./components/Weekend"
    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIncons,
            HomeRecommend,
            HomeWeekend
        },
    }
</script>

<style scoped>

</style>