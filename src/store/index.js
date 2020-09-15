import Vue from "vue";
import Vuex from "vuex";
//导入模块
import menu from "./modules/menu"

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        iscollapse:false   //是否折叠，默认不折叠
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        TOGGLE(state){
            state.iscollapse = ! state.iscollapse
        }
    },
    actions: {
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        }
    },
    modules:{
        menu
    },
});

export default store;