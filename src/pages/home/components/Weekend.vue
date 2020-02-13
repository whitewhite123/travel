<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>

                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "HomeWeekend",
        data(){
            return{
                recommendList:[
                    {
                        id:"001",
                        imgUrl:"//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg",
                        title:"川山群岛旅游度假区",
                        desc:"气候温和，四季如春，是理想度假旅游圣地"
                    },
                    {
                        id:"002",
                        imgUrl:"//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg",
                        title:"川山群岛旅游度假区",
                        desc:"气候温和，四季如春，是理想度假旅游圣地"
                    },
                    {
                        id:"003",
                        imgUrl:"//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg",
                        title:"川山群岛旅游度假区",
                        desc:"气候温和，四季如春，是理想度假旅游圣地"
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
    .item-img-wrapper
        height :0
        overflow :hidden
        padding-bottom :33.9%
        .item-img
            width :100%
    .item-info
        padding :.1rem
        .item-title
            line-height :.54rem
            font-size :.32rem
            ellipsis()
        .item-desc
            line-height :.4rem
            color :#ccc
            ellipsis()

</style>