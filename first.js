/*定义消息总线 */
var eventHub = new Vue() //这个开销如何？对比用event库呢?

/*定义组件*/
var App = Vue.extend({
    created:function(){
      eventHub.$on('click_hello',function(){
          console.log('你点击了hello')
      })  
    },
    template: '#app_template',
})

var Hello = Vue.component('hello', {
    template: '#hello_template',
    data: function () { //传统写法，尽量使用es5
        return {
            msg: 'hello'
        }
    },
    methods: {
        click: function () {
            console.log(this.msg)
            eventHub.$emit('click_hello')
        }
    }
})
/*挂载组件*/
var app = new App({
    el: '#app'
})