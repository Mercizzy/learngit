import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})*/

const First = {template: '<p>first内容</p>'}
const Second = {template: '<p>Second内容</p>'}
const Home = {template: '<p>Home内容</p>'}
const Son = {
	
		template: `
		<div>
			<h2>组件</h2>
			<router-view></router-view>
		</div>
		`
}
const firstFirst = {template: '<p>firstFirst内容{{$route.params.id}}</p>'}
const firstSecond = {template: '<p>firstSecond内容</p>'}
const router = new Router({
	mode: 'history',
	base: '__dirname',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/first',
			component: Son,
			children: [
				{
					path: '/',
					name: 'Home-First',
					component: First
				},
				{
					path: 'first',
					name: 'Home-First-first',
					component: firstFirst
				},
				{
					path: 'second',
					name: 'Home-First-second',
					component: firstSecond
				},

			]
		},
		{
			path: '/second',
			name: 'Home-Second',
			component: Second
		}
	]
})

new Vue({
	el: '#app',
	router,
	template: `
		<div>
			<h1>导航</h1>
			<p>{{$route.name}}</p>
			<ol>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/first">/first</router-link></li>
				<ol>
					<li><router-link :to="{name:'Home-First-first',params:{id:123}}">/first</router-link></li>
					<li><router-link to="/first/second">/second</router-link></li>
				</ol>
				<li><router-link to="/second">/second</router-link></li>
			</ol>
			<router-view></router-view>
		</div>
	`
})