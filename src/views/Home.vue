<template>
  <div class="home">
    <test-table></test-table>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import TestTable from '../Test/TestTable.vue'
export default {
  name: 'Home',
  components: {
    TestTable
  }
}
</script>
