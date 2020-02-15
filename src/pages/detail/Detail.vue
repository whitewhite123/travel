<template>
    <div class="detail">
        <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    </div>
</template>

<script>
    import DetailBanner from "@/pages/detail/component/Banner";
    import axios from 'axios';
    export default {
        name: "Detail",
        components:{
            DetailBanner,
        },
        data(){
          return{
              bannerImg:"",
              sightName:"",
              gallaryImgs:Array,
          }
        },
        methods:{
            getDetailInfo(){
                axios.get("/api/detail.json").then((result) => {
                    result = result.data;
                    console.log(result);
                    if(result.ret && result.data){
                        let data = result.data;
                        this.bannerImg = data.bannerImg;
                        this.sightName = data.sightName;
                        this.gallaryImgs = data.gallaryImgs;
                    }
                })
            }
        },
        mounted(){
            this.getDetailInfo();
        }
    }
</script>

<style  lang="stylus" scoped>

</style>