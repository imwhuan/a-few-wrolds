<template>
  <a-result title="旅行者，欢迎使用ShareMe系统!">
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
import { useRouter} from 'vue-router'
export default defineComponent({
    setup(){
        const router=useRouter();
        return {
            router
        }
    },
    mounted(){
      console.log("全局变量",process.env)
    },
    methods:{
        toLogin(){
            this.router.push('/login')
        }
    },
  components: {
    SmileTwoTone,
  },
});
</script>