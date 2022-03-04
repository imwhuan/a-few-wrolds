<template>
<content-layout>
  <template #header>
    <station-header></station-header>
  </template>
  <template #body>
    <div class="home">
    <test-table></test-table>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  </template>
</content-layout>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import TestTable from '../Test/TestTable.vue'
import ContentLayout from '../components/ContentLayout.vue'
import StationHeader from '../components/workstation/StationHeader.vue'
export default {
  name: 'Home',
  components: {
    TestTable,
    ContentLayout,
    StationHeader
  }
}
</script>
