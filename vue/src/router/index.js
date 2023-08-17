import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes';
// import { from } from 'core-js/core/array';
import store from '@/store';
Vue.use(VueRouter);


let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
let router = new VueRouter({
    routes, scrollBehavior(to, from, savedPosition) {
        return { y: 100 };
    }
})
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next();
                } catch (error) {
                    await store.dispatch('userLogout')
                    next('/login');
                }
            }
        }
    } else {
        next();
    }
    next();
})
export default router;
