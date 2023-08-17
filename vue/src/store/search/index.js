import { reqGetSearchInfo } from "@/api";
//state:在仓库存储数据的地方
const state = {
    searchlist: {}
};
//mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchlist) {
        state.searchlist = searchlist
    }
};
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async getSearchList({ commit }, params) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    },

};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {
    goodsList(state) {
        return state.searchlist.goodsList || [];
    },
    trademarkList(state) {
        return state.searchlist.trademarkList || [];
    },
    attrsList(state) {
        return state.searchlist.attrsList || [];
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}