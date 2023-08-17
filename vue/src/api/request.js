//对于axios进行封装
import axios from "axios";
import nProgress from "nprogress";
import store from "@/store";
//start:进度条的开始  done:进度条的结束
import "nprogress/nprogress.css"
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,
});
//请求拦截器
requests.interceptors.request.use((config) => {
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    if (store.state.detail.uuid_token) {
        //请求头添加一个字段(userTempId):和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    // console.log(store.state.user.token)
    if (store.state.user.token) {

        config.headers.token = store.state.user.token
    }
    // console.log(store)
    nProgress.start();
    return config
})
//响应拦截器
requests.interceptors.response.use(
    (res) => {
        //进度条结束
        nProgress.done();
        //相应成功做的事情
        return res.data;
    },
    (err) => {
        alert("服务器响应数据失败");
    }
);
//最终需要对外暴露（不对外暴露外面模块没办法使用）
//这里的代码是暴露一个axios实例
export default requests;