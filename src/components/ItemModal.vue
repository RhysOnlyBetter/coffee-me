<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              {{item.name}} Extras:
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div v-for="option in item.options">
                <button @click="removeOption(option)" :disabled="option.quantity < 1">-</button>
                {{option.name}} ({{option.quantity}} @ ${{option.price.toFixed(2)}})
                <button @click="addOption(option)" :disabled="option.quantity > 9">+</button>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              Price: ${{item.price.toFixed(2)}}
              <button @click="addItem(item)">Add to Cart</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Item from '../model/item.js';
import Opt from '../model/option.js';
export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    this.item = new Item(this.$route.params.item.id, this.$route.params.item.name, this.$route.params.item.price, this.$route.params.item.options);
  },
  methods: {
    addItem: function (item) {
      this.$emit('clicked', item);
      this.$router.go(-1);
    },
    addOption: function (opt) {
      this.item.addOption(opt);
    },
    removeOption: function (opt) {
      this.item.removeOption(opt);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'itemModal.scss';
</style>