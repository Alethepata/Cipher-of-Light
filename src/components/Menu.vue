<script>
import { store } from "../data/store";
  export default {
    name: 'Menu',
    data() {
      return {
        store
      }
    },
    computed: {},
    mounted() {},
  methods: {
    getStart() {
      store.start = true;
      }
    }
  }
</script>
<template>
    <div class="container_text">
      <div class="name_game mb-5">
        <h2>Demo</h2>
        <h1>Cipher of Light</h1>
      </div>
      <div class="start">
        <button @click="this.getStart" class="btn btn-outline-light w-100">Gioca</button>
      </div>
    </div>
</template>
<style scoped>
.container_text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1{
  font-size: 50px;
  color: white;
}
</style>