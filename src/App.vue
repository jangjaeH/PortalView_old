<template>
  <div id="app">
    <the-layout>
        <router-view/>
    </the-layout>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TheLayout from "@/layout/general/TheLayout.vue";

@Component({
  name: 'App',
  components: {
    TheLayout
  }
})
class App extends Vue{

}

export default  App;
</script>