<template>
  <div class="cart-view">
    <h2> Cart </h2>
      <div v-for="item in cart.items"> 
        <strong>{{item.name}}</strong> <button @click="deleteItem(item)">Delete</button>
        <small v-for="option in item.options" v-if="option.quantity > 0">
          <br>+ {{option.name}} (${{option.price.toFixed(2)}})
        </small>
      </div>
      <div class="spacer"></div>
    <div>
      Total Price: ${{cart.price.toFixed(2)}} 
    </div>
    <router-link tag="button" to="/items" v-on:click.native="emitCart">Add More Items</router-link>
    <button @click="checkOut()">Complete Order</button>
  </div>
</template>

<script>
var content = require('../api/content.js');
import { EventBus } from '../model/event-bus.js';
import Cart from '../model/cart.js';

export default {
  name: 'cart-view',
  created () {
  },
  mounted() {
    EventBus.$on('load-cart', cart => {
      this.cart = cart;
    });
  },
  methods: {
    emitCart: function(){
      EventBus.$emit('update-cart', this.cart);
    },
    deleteItem: function(item){
      this.cart.deleteItem(item);
    },
    checkOut: function(){
      content.sendOrder(this.cart);
    },
  },
  data () {
    return {
      cart: {},
    }
  }
}
</script>

