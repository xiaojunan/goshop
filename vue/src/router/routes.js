import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search';
import Detail from '@/pages/Detail'
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from '@/pages/PaySuccess'
import Center from "@/pages/Center"
export default [
    {
        path: "/center",
        component: Center,
        meta: { show: true }
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: '/pay',
        component: Pay,

        // 将query参数映射成props传递给路由组件
        props: route => ({ orderId: route.query.orderId }),

        /* 只能从交易界面, 才能跳转到支付界面 */
        beforeEnter(to, from, next) {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/",
        redirect: "/home"
    },
    {
        name: "home",
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },

    },

]