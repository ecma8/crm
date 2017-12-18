import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const  state={
    count:10,
    isLoading:false
};
const mutations={
    add(state){
        state.count++
    },
    del(state){
        state.count--
    },
    show(state){
        state.isLoading=true;
    },
    hide(state){
        state.isLoading=false;
    }
};
const actions={
    add:({commit})=>{
        commit('add')
    },
    del:({commit})=>{
        commit('del')
    },
    show:({commit})=>{
        commit('show')
    }
    ,
    hide({commit}){
        commit('hide')
    }
};
const getters={
    count(state){
        return state.count;
    },
    isLoading(state){
        return state.isLoading;
    }

};
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


