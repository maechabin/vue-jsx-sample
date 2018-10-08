<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/helloworld/HelloWorld.vue';
// import HelloWorld from './components/helloworld/HelloWorld';
// import HelloWorld from './components/sfc/HelloWorld.vue';
// import HelloWorld from './components/tsx/HelloWorld';
// import HelloWorld from './components/hoc/HelloWorld';

import HelloWorld from './components/mousetracker/MouseTracker';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 32px;
  height: 100vh;
}
</style>
