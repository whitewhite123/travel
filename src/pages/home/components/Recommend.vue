<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
        data(){
            return{
                recommendList:[
                    {
                        id:"001",
                        imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/c4d16438-1809-4ee3-8195-4fbe9ce0118a.jpg_r_480x320x90_f19dc468.jpg",
                        title:"深圳-迪拜 6天跟团游",
                        desc:"玩转迪拜海陆空！6天不购物！游艇出海+沙漠冲沙+登高塔或金相框+全程国际五"
                    },
                    {
                        id:"002",
                        imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/c4d16438-1809-4ee3-8195-4fbe9ce0118a.jpg_r_480x320x90_f19dc468.jpg",
                        title:"深圳-迪拜 6天跟团游",
                        desc:"玩转迪拜海陆空！6天不购物！游艇出海+沙漠冲沙+登高塔或金相框+全程国际五"
                    },
                    {
                        id:"003",
                        imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/c4d16438-1809-4ee3-8195-4fbe9ce0118a.jpg_r_480x320x90_f19dc468.jpg",
                        title:"深圳-迪拜 6天跟团游",
                        desc:"玩转迪拜海陆空！6天不购物！游艇出海+沙漠冲沙+登高塔或金相框+全程国际五"
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .title
        line-height :.8rem
        background-color #eee
        text-align :.2rem
        margin-top :.2rem
    .item
        display :flex
        height :1.9rem
        overflow :hidden
        /*background-color :red*/
        .item-img
            width :1.7rem
            height :1.7rem
            padding :.1rem
        .item-info
            flex :1
            padding :.1rem
            min-width :0
            .item-title
                line-height :.54rem
                font-size :.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                color :#ccc
                ellipsis()
            .item-button
                line-height :.44rem
                background-color :#ff9300
                padding:0 .16rem
                border-radius :.06rem
                color :#fff
                margin-top :.2rem

</style>