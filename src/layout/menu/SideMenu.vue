<template>
      <div class="scrollbar" style="height: calc(100% - 48px);">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" @click="ClickMenuItem">
        <a-menu-item key="home">
          <user-outlined />
          <span>主页</span>
        </a-menu-item>
        <a-menu-item key="about">
          <video-camera-outlined />
          <span>关于</span>
        </a-menu-item>
        <a-menu-item key="editor">
          <video-camera-outlined />
          <span>编辑器</span>
        </a-menu-item>
        <a-menu-item key="testhttp">
          <video-camera-outlined />
          <span>Http请求</span>
        </a-menu-item>
        <a-sub-menu key="about">
          <template #title>
            <span>
              <upload-outlined />
              <span>其他</span>
            </span>
          </template>
          <a-menu-item key="about2">关于2</a-menu-item>
        </a-sub-menu>
      </a-menu>
      </div>
</template>

<script>
import { ref } from 'vue';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
export default {
    data(){
        return{
            selectedKeys: ref(['/'])
        }
    },
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined
    },
    methods:{
        ClickMenuItem(e){
        this.$router.push({name:e.key})
        // if(this.$route.path!==path){
        //   this.$router.push(path)
        // }
        }
    }
}
</script>

<style scoped>
.logo {
  height: 24px;
  background: rgb(65 184 131);
  margin: 12px;
  font-size: 16px;
  text-align: center;
  border-radius: 12px;
  transition: all .5s;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
}
.logo:hover {
    transform: scale(1.1);
}
</style>