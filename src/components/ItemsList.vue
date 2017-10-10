<template>
  <div class="items-list">
    <h2>Menu</h2>
    <div class="container">
      <div class="col-xs-6 col-md-4 col-lg-3" v-for="menuItem in menuItems"> 
          <router-link :to="{name: 'itemModal', params: {id: menuItem.id, item: menuItem}}" v-on:click.native="showModal = true">
          <img class="menu-image" v-bind:src="menuItem.image"><br>
          {{menuItem.name}} - ${{menuItem.price.toFixed(2)}}</router-link>
      </div>
    </div>
    <router-view v-if="showModal" v-on:clicked="addItem"></router-view>
    <div class="spacer"></div>
    <div>
      <router-link tag="button" to="/cart" v-on:click.native="emitCart">Go to Cart ({{cart.items.length}})</router-link>
    </div>
  </div>
</template>

<script>
var content = require('../api/content.js');
import Item from '../model/item.js';
import Cart from '../model/cart.js';
import { EventBus } from '../model/event-bus.js';

export default {
  name: 'items-list',
  created () {
    this.getMenu();
  },
  data () {
    return {
      msg: 'Coffee Me!',
      menuItems: [],
      cart: new Cart(),
      showModal: false,
    }
  },
  mounted() {
    EventBus.$on('update-cart', cart => {
      this.cart = cart;
    });
  },
  methods: {
    getMenu: function () {
      content.getItems().then((data) => {
        this.$set(this, 'menuItems', JSON.parse(data))
      })
    },
    addItem: function(item){
      this.showModal = false;
      this.cart.addItem(item);
    },
    emitCart: function(){
      EventBus.$emit('load-cart', this.cart);
    }
  }
}
</script>

