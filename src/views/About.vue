<template>
  <div class="about">
    <h1>This is an about page</h1>
     <a-date-picker v-model:value="value1" />
  </div>
  <router-view></router-view>
</template>
<script>
import { ref } from 'vue'
export default({
  setup() {
    return{
      value1:ref()
    }
  }
})
</script>
