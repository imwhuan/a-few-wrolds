<template>
  <a-result :title="welcome_world">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <a-button type="primary" @click="toLogin">去登录</a-button>
    </template>
  </a-result>
</template>
<script>
import { SmileTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import {GetSysSetting} from '../http/requestdata'
export default defineComponent({
    data(){
      return {
        welcome_world:sessionStorage.getItem("welcome")??"*/+-"
      }
    },
    mounted(){
      if(sessionStorage.getItem("welcome")==null){
        GetSysSetting('welCome').then(res=>{
          this.welcome_world=res.data.title;
          sessionStorage.setItem("welcome",res.data.title)
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    methods:{
        toLogin(){
            this.$router.push('/login')
        }
    },
  components: {
    SmileTwoTone,
  },
});
</script>