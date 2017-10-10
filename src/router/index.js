import Vue from 'vue'
import Router from 'vue-router'
import ItemsList from '@/components/ItemsList'
import ItemModal from '@/components/ItemModal'
import CartView from '@/components/CartView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/items',
      name: 'Items-List',
      component: ItemsList,
      children: [
      	{path: ':id', component: ItemModal, name: 'itemModal'}
      ]
    },
    {
      path: '/cart',
      name: 'Cart-View',
      component: CartView,
    },
    { path: '*', redirect: '/items' }
  ]
})
