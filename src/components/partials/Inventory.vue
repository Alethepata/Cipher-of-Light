<script>
  export default {
  name: 'Inventory',
  props: {
    screwdriverFunction: Function,
    letterFunction: Function,
    itemOne: String,
    itemTwo: String,
    inventaryOne: Boolean,
    inventaryTwo: Boolean,
    screwdriverClicked: Boolean,
    letterClicked: Boolean,
  },
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
  <div class="inventory" @click="screwdriverFunction">
    <p v-if="this.inventaryOne" id="screwdriver">{{itemOne}}</p>
    <p v-if="this.screwdriverClicked" class="clicked">{{itemOne}}</p>
  </div>
  <div class="inventory" @click="this.letterFunction">
    <p v-if="this.inventaryTwo" id="screwdriver">{{itemTwo}}</p>
    <p v-if="this.letterClicked" class="clicked">{{itemTwo}}</p>
  </div>
  <div class="inventory"></div>
</template>


<style>

</style>