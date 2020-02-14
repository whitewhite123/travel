<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from "@/pages/city/components/Header";
    import CitySearch from "@/pages/city/components/Search";
    import CityList from "@/pages/city/components/List";
    import CityAlphabet from "@/pages/city/components/Alphabet";
    import axios from 'axios'


    export default {
        name: "City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        mounted(){
            this.getCityInfo();
        },
        data(){
          return{
              hotCities:[],
              cities:{},
              letter:"",
              lastCity:"",
          }
        },
        methods:{
            getCityInfo(){
                axios.get("/api/city.json").then((result) => {
                    result = result.data;
                    console.log(result);
                    if(result.ret && result.data){
                        let data = result.data;
                        this.hotCities = data.hotCities;
                        this.cities = data.cities;
                    }
                })
            },
            handleLetterChange(letter){
                // console.log(letter);
                this.letter = letter;
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>