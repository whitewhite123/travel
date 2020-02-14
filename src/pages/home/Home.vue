<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-incons :iconsList="iconsList"></home-incons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from "./components/Header"
    import HomeSwiper from "./components/Swiper"
    import HomeIncons from "./components/Incons"
    import HomeRecommend from "./components/Recommend"
    import HomeWeekend from "./components/Weekend"
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIncons,
            HomeRecommend,
            HomeWeekend
        },
        mounted(){
            console.log("mounted")
            this.lastCity = this.city;
            this.getHomeInfo();
        },
        activated(){
            console.log("activated")
             if(this.lastCity !== this.city){
                 this.lastCity = this.city;
                 this.getHomeInfo();
             }
        },
        data(){
          return{
              swiperList:[],
              iconsList:[],
              recommendList:[],
              weekendList:[]

          }
        },
        computed:{
           ...mapState(['city'])
        },
        methods:{
            getHomeInfo(){
                axios.get("/api/index.json?city="+ this.city).then((result) => {
                    result = result.data;
                    if(result.ret && result.data){
                        let data = result.data;
                        console.log(data);
                        this.swiperList = data.swiperList;
                        this.iconsList = data.iconList;
                        this.recommendList = data.recommendList;
                        this.weekendList = data.weekendList;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>