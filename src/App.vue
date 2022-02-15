<template>
  <div id="app">
    <HelloWorldVue />
  </div>
</template>


<script lang="ts">
import { ref, defineComponent } from "vue";
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorldVue
  }
}
</script>


<style lang="less" scoped>

</style>
