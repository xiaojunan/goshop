import { reqGetCode, reqUserLogin, reqUserRegister, reqUserInfo, reqLogout } from "@/api"
import { setToken, getToken, removeToken } from "@/utils/token";
const state = {
    code: "",
    token: getToken(),
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        //本地存储数据清空
        removeToken();
    }
};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        console.log(result)
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        console.log(result)
        //服务器下发token，用户唯一标识符(uuid)
        //将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        console.log(result)
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
        } else {
            // return Promise.reject(new Error('faile'));
        }
    },
    async userLogout({ commit }) {
        //只是向服务器发起一次请求，通知服务器清除token
        let result = await reqLogout();
        //action里面不能操作state，提交mutation修改state
        if (result.code == 200) {
            commit("CLEAR");
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
};
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
