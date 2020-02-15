<template>
    <div class="detail">
        <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :categoryList="categoryList"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from "@/pages/detail/component/Banner";
    import DetailHeader from "@/pages/detail/component/Header";
    import DetailList from "@/pages/detail/component/List";
    import axios from 'axios';
    export default {
        name: "Detail",
        components:{
            DetailBanner,
            DetailHeader,
            DetailList,
        },
        data(){
          return{
              bannerImg:"",
              sightName:"",
              gallaryImgs:Array,
              categoryList:Array,
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
                        this.categoryList = data.categoryList;
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
    .content
        height :50rem
</style>