/**
 * 简单咱由方式，只有页面为index.html
 * 下面才成立
 * window.location.path == '/'
 */

const NotFound = { template: '<p>默认404组件页面</p>' }
const Home = { template: '#home_tpl' }
const About = { template: '#about_tpl' }

const routes = {
    '/': Home,
    '#/home':Home,
    '#/about': About
}

app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.hash || '/'
})