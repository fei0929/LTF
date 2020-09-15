// 获取菜单列表！
import { menuList } from "@/request/menu"
export default {
    namespaced:true,
    state: {
        menulist:[]  // 菜单列表
    },
    getters: {
        menulist: state => state.menulist
    },
    mutations: {
        SET_LIST(state,data){
            state.menulist = data;
        }
    },
    actions: {
        // 请求菜单列表的数据！
        async get_menu_list({commit}){
            let res = await menuList();  
            commit('SET_LIST',res)
        }
    }
};