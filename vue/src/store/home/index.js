import { reqgetCategoryList, reqGetBannerList, reqFloorList } from "@/api";

//state:在仓库存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
//mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // async可以变成状态
    async categoryList({ commit }) {
        console.log('categoryList');
        const result = await reqgetCategoryList();
        console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        // console.log(result);
        if (result.code == 200) {
            commit("BANNERLIST", result.data)
        }
    },
    async getFloorList({ commit }) {
        // console.log('getFloorList');
        let result = await reqFloorList();
        console.log(result);
        if (result.code == 200) {
            commit("FLOORLIST", result.data)
        }
    }

};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {};


export default {

    state,
    mutations,
    actions,
    getters
}