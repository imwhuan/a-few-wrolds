<template>
<content-layout>
  <template #header>
    <station-header></station-header>
  </template>
  <template #body>
    <base-vditor></base-vditor>
  </template>
</content-layout>
</template>

<script>
import BaseVditor from '../../components/editor/BaseVditor.vue'
import StationHeader from '../../components/workstation/StationHeader.vue'
import ContentLayout from '../../components/ContentLayout.vue'
export default {
    components:{
        BaseVditor,
        ContentLayout,
        StationHeader
    }
}
</script>

<style>

</style>