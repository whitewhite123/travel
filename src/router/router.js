import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home";
import City from "@/pages/city/City";
import Detail from "@/pages/detail/Detail";
Vue.use(Router);


const routes = [
    {
        path:"/",
        name:'Home',
        component:Home,
    },
    {
        path: "/city",
        name:"City",
        component: City
    },
    {
        path:"/detail/:id",
        name:"Detail",
        component:Detail
    }
];
const router = new Router({
    routes,
    //切换路由，不改变页面的滚动
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

export default router