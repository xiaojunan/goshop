node_midules文件夹：项目依赖文件夹
public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹静态资源webpack打包的时候，会原封不动打包到dist文件夹中

src（程序员源代码）
     assets文件夹：一般存放一些静态资源（一般放置多个组件公用的静态资源），需要注意，放置在assets文件夹里面的静态资源webpack打包的时候,webpack会把静态资源当做一个模块打包js文件里面
    components文件夹：一般放置的是非路由组件（全局组件）

    app.vue唯一的根组件，vue当中的组件（.vue）
    main.js:程序入口文件，也是整个程序当中最先执行的文件
babel.config.js:配置文件（babel相关）
package,json文件：认为项目的‘身份证’，记录项目叫什么、项目当中有哪些依赖、项目怎么运行。
package-lock,json :缓存性文件
components文件夹:经常放置的非路由组件（共用全局）
     {
    pages|views 文件夹：经常放置路由组件 
    非路由组件一般放在components文件夹中
     }
    {
        路由组件一般需要放在router文件夹中进行注册（使用的即为组件的名字），
        非路由组件在使用的时候，一般都是以标签的形式使用
    } 
    注册完路由，不管路由路由组件、还是非路由组件-一般放置components文件夹中
 $route:一般获取路由信息【路径、query、params等等】
 $router:一般进行编程式导航进行路由跳转【push|replace】
 6、显示和隐藏组件
 使用v-if|v-show    meta:{show:true}
 7、路由传参、参数写法
 params参数：属于路径当中的一种，需要注意，在配置路由的时候，需要占位符
 query参数：不属于路径当中的一部分，类似于ajax中的queryString /home？K=v$kv=,不需要占位