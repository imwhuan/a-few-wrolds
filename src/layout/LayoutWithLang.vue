<template>
<a-config-provider :locale="locale === 'en' ? enUS : zhCN">
  <BasicLayout @switchLang="locale=$event"></BasicLayout>
</a-config-provider>
</template>
<script>
import BasicLayout from './BasicLayout.vue'
import enUS  from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default {
  components:{
    BasicLayout
  },
  data(){
    return {
      enUS,
      zhCN,
      locale:zhCN.locale
    }
  }
}
</script>
<style>

</style>
