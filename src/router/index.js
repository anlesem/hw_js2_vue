import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart
	},

	// Ленивая загрузка (при переходе на страницу)
	// {
	// 	path: '/cart',
	// 	name: 'Cart',
	// 	component: function () {
	// 		return import('../views/Cart.vue')
	// 	}
	// }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
