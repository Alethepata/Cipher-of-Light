<script>
  export default {
  name: 'PopUp',
  props: {
    textOne: String,  
    textTwo: String,
    textThree: String,
    button: Function,
    buttonText: String
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
  <div class="text">
    <h1>{{ textOne }}</h1>
    <h4 v-if="textTwo">{{ textTwo}}</h4>
    <p v-if="textThree">{{ textThree}}</p>
    <button @click="button" class="btn btn-outline-light">{{ buttonText }}</button>
  </div>
</template>

<style scoped>
p{
  font-size: 18px;
}
</style>