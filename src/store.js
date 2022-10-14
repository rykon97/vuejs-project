import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state() {
        return {
            cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        }
    },
    mutations: {
        addItem(state, item) {
            state.cart.push(item)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        deleteItem(state, index) {
            state.cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    actions: {
        addItem({ commit }, item) {
            return new Promise((resolve) => {
                commit('addItem', item)

                resolve(item)
            })
        },
        deleteItem({ commit }, index) {
            return new Promise((resolve) => {
                commit('deleteItem', index)

                resolve(index)
            })
        }
    }
})