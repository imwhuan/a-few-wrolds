<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100%">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" @click="Info">Love You</div>
      <div class="scrollbar" style="height: calc(100% - 48px);">
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="ClickMenuItem">
        <a-menu-item key="/">
          <user-outlined />
          <span>主页</span>
        </a-menu-item>
        <a-menu-item key="about">
          <video-camera-outlined />
          <span>关于</span>
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
      
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;position:fixed;width:100%;height: 48px;line-height: 48px;">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <div style="display:inline-block">
          <head-bread></head-bread>
          </div>
      </a-layout-header>
      <a-layout-content class="scrollbar"
        :style="{ margin: '64px 16px 24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <a-tag color="green">imwhuan</a-tag>
        <br/>
        Ant Design Vue ©2022 Created by Huan
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import HeadBread from '../components/HeaderBread.vue'

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HeadBread
  },

  setup() {
    return {
      selectedKeys: ref(['/']),
      collapsed: ref(false),
    };
  },
  methods:{
    ClickMenuItem(e){
      const path=e.keyPath.join('/')
      this.$router.push(path)
      // if(this.$route.path!==path){
      //   this.$router.push(path)
      // }
    },
    Info(){
      message.info('💕好喜欢你丫🤟');
    }
  }
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 48px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 24px;
  background: rgb(65 184 131);
  margin: 12px;
  font-size: 16px;
  text-align: center;
  border-radius: 12px;
  transition: all .5s;
  cursor: pointer;
  user-select: none;
}
#components-layout-demo-custom-trigger .logo:hover {
    transform: scale(1.1);
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>