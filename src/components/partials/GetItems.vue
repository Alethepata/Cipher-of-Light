
<script>
  export default {
  name: 'GetItems',
  props: {
    nameObj: String,
    button:Function
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
  <h1>Ho già preso {{nameObj}}</h1>
  <button @click="button" class="btn btn-outline-light">Indietro</button>
</template>


<style>

</style>