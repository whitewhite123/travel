import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import state from "@/store/state";
Vue.use(Vuex);


var store = new Vuex.Store({
    state,
    mutations,
});

export default store
