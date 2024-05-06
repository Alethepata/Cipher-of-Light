<script>
import Menu from "./components/Menu.vue";
import SceneryOne from "./components/SceneryOne.vue";
import WorkInProgress from "./components/partials/WorkInProgress.vue";
import { store } from "./data/store";
export default {
  name: 'App',
  components: {
    Menu,
    SceneryOne,
    WorkInProgress
    },
    data() {
      return {
        store,
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
  <div class="display">
    <div v-if="!store.start" class="container-menu scenery">
      <Menu/>
    </div>
    <div v-else class="container-game">
      <div v-if="!store.correctPassword" class="scenery scenery-one">
        <SceneryOne/>
      </div>
      <div v-else-if="store.correctPassword" class="work-in-progress scenery">
        <WorkInProgress/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.display{
  height: 100vh;
  overflow: auto;
}
.container-menu{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('./assets/img/menu.jpg');
}

.scenery{
  width: 1000px;
  height: 700px;
  margin: 30px auto;
  background-size: cover;
  background-position: center;
}
.scenery-one{
  background-image: url('./assets/img/scenery-one.jpg');
  animation: fadeIn 8s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.work-in-progress{
  background-color: darkslategrey;
}


</style>
