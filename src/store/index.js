import { createStore } from 'vuex'

const API_URL = '/api/v1';

export default createStore({
	// Хранилище с данными
	state: {
		showcase: [],
		cart: [],
		// строка для поиска товаров
		queryString: ''
	},

	// Методы для доступа к state для чтение данных
	// Возвращает дубликат данных, как защита от потери исходных данных
	getters: {
		// Поиск товаров
		getProducts: (state) => state.showcase.filter((item) => new RegExp(state.queryString, 'ig').test(item.title)),
		// Дубликат данных корзины
		getCart: (state) => [...state.cart],
		// доступ к строке для поиска товаров
		getQuery: (state) => state.queryString
	},

	// Методы для доступа к state для изменение данных (обычно называют setters)
	mutations: {
		setShowcase: (state, products) => state.showcase = products,
		setCart: (state, products) => state.cart = products,
		addToCart: (state, product) => state.cart.push(product),
		setQuery: (state, query) => state.queryString = query,
		removeFromCart: (state, product) => {
			const index = state.cart.findIndex((item) => item.id == product.id)
			state.cart.splice(index, 1)
		}
	},

	// Асинхронные методы. 
	// commit – метод Объекта Store для вызова методов из mutations
	actions: {
		loadShowcase({ commit }) {
			return fetch(`${API_URL}/catalog`)
				.then((req) => req.json())
				.then((data) => {
					commit('setShowcase', data)
				})
		},
		loadCart({ commit }) {
			return fetch(`${API_URL}/cart`)
				.then((req) => req.json())
				.then((data) => {
					commit('setCart', data)
				})
		},
		addToCart({ commit }, product) {
			return fetch(`${API_URL}/cart`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(product)
			})
				.then(() => {
					commit('addToCart', product)
				})
		},

		removeFromCart({ commit }, product) {
			return fetch(`${API_URL}/cart`, {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(product)
			})
				.then(() => {
					commit('removeFromCart', product)
				})
		}
	}
})
