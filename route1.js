var Home = {template:"<div>home template content</div>"}

var About = {template:"<div>about template content</div>"}

var routes = {
    '/':Home,
    '/about':About
}

//组件定义
var App = Vue.extend({           
    template:"#app_template"
})

//组件实例化，挂载组件
var app = new App({
    el:"#app",
    components:{
        'home':Home,  //局部组件注册之快捷方式
        'about':About
    }
})
