<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-incons></home-incons>
    </div>
</template>

<script>
    import HomeHeader from "./components/Header"
    import HomeSwiper from "./components/Swiper"
    import HomeIncons from "./components/Incons"

    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIncons,
        },
    }
</script>

<style scoped>

</style>