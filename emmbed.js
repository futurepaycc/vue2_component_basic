/*定义组件*/
var App = Vue.extend({
    template: '<div>父组件内容:)<hello></hello></div>',
    components: {
        'hello': {
            template: '<div>我是hello组件，我的消息=={{msg}}</div>',
            data: function () {
                return {
                    msg: '独立文件会不会好点?'
                }
            }
        }
    }
})
/*挂载组件*/
new App({
    el: '#app'
})