import Vue from 'vue'
import App from './App.vue'
import Route from 'vue-router'
import C from './components/C'
import D from './components/D'
import HelloWorld from "./components/HelloWorld";
import CC from "./components/CC";
import CC2 from "./components/CC2";
import Vuex from 'vuex'

Vue.use(Route)
Vue.use(Vuex)

Vue.config.productionTip = false


const  modelA = {
  namespaced: true,
  state: {
    data: "this is data"
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    setData({commit}, data) {
      commit('SET_DATA', data)
    }
  }
}

const modelB = {
  namespaced: true,
  state: {
    data: "this is data b"
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    setData({commit}, data) {
      commit('SET_DATA', data)
    }
  }
}

const  store = new Vuex.Store({
  modules:{
    a: modelA,
    b: modelB,
  }
})

const  routes = [
  {
    path: '/c',
    component: C,
    redirect:'/c/cc',
    children: [
      {
        path: '/c/cc',
        component: CC,
      },
      {
        path: '/c/:id',
        component: CC2,
      }
    ]
  },
  {path: '/d', component: D },
  {path: '/hello-world', component: HelloWorld }
]
const router = new Route({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
