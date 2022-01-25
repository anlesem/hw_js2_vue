import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'

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
	{
		path: '/reg',
		name: 'Reg',
		component: function () {
			return import('@/views/Reg.vue')
		}
	},
	{
		path: '/arrivals',
		name: 'Arrivals',
		component: function () {
			return import('@/views/Arrivals.vue')
		}
	},
	{
		path: '/catalog',
		name: 'Catalog',
		component: function () {
			return import('@/views/Catalog.vue')
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
