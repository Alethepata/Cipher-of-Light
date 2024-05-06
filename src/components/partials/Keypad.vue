<script>
import { store } from "../../data/store";
  export default {
  name: 'Keypad',
  props: {
    buttonBeck: Function,
    password: String,
    },
    data() {
      return {
        store,
        userInputPassword: [],
        wrongPassword: false,
      }
    },
    computed: {},
    mounted() {},
  methods: {
    getNums(id) {
      if (this.userInputPassword.length < 5) {
        this.userInputPassword.push(id);
      }
      if (this.userInputPassword.toString() == this.password.toString()) {
        store.correctPassword = true;
      }
      if (this.userInputPassword.toString() !== this.password.toString() && this.userInputPassword.length == 5) {
        this.wrongPassword=true;
      }
    },
    deleteNums() {
      if (store.correctPassword == false) {
        this.userInputPassword = [];
        if (this.wrongPassword) {
          this.wrongPassword=false;
        }
      }
    }
    }
  }
</script>
<template>
  <div class="keypad">
    <div class="row">
      <div class="col text-end mb-2">
        <button @click="buttonBeck">X</button>
      </div>
    </div>
    <div class="row">
      <div class="col mb-3">
        <div class="keypad-dislay mx-5">
          <div v-if="!this.wrongPassword" class="nums d-flex justify-content-center">
            <div v-for="(num, index) in userInputPassword" :key="index" class="me-2">
              {{ num }}
            </div>
          </div>
          <div v-else class="error">
            <p>Sbagliato</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-3 border border-dark">
      <div v-for="index in 9" :key="index"  class="col">
        <div @click="this.getNums(index)" class="square">{{ index }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <button @click="this.deleteNums" class="btn btn-light">Cancella</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keypad{
  background-color: lightgray;
}
.keypad-dislay{
  height: 30px;
  border: 1px solid black;
  line-height: 30px;
}
.error p{
  font-size: 30px;
}
</style>