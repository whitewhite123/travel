<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或者拼音">
        </div>

        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="(item) of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

</template>

<script>
    import BScroll from "better-scroll"
    import {mapMutations} from 'vuex'
    export default {
        name: "CitySearch",
        props:{
            cities:Object
        },
        data(){
            return{
                keyword:"",
                list:[]
            }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list = [];
                    return
                }
                this.timer = setTimeout(() => {
                    const result = [];
                    for(let i in this.cities){
                       this.cities[i].forEach((value) => {
                           if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                               result.push(value)
                           }
                       })
                    }
                    this.list = result;
                },100)
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.search);
        },
        computed:{
            hasNoData(){
                return !this.list.length;
            }
        },
        methods:{
            ...mapMutations(['changeCity']),
            handleCityClick(city){
                this.changeCity(city);
                // this.$store.commit("changeCity",city);
                this.$router.push("/");
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .search
        height :.72rem
        background-color :$bgColor
        padding:0 .1rem
        .search-input
            width :100%
            height :.62rem
            line-height :.62rem
            text-align :center
            border-radius :.06rem
            color :#666
            padding :0 .1rem
            box-sizing :border-box
    .search-content
        z-index :1
        position :absolute
        overflow :hidden
        top:1.58rem
        left :0
        right :0
        bottom :0
        background-color :#ccc
        .search-item
            line-height :.62rem
            padding-left :.2rem
            background-color :#ffffff
            color :#666


</style>