<template>
<div style="width:100%;height:100%;" @click="mainClick($event)">
  <mouse-special ref="mousePlugin"></mouse-special>
  <router-view/>
</div>

</template>
<script>
import mouseSpecial from './components/plugins/mouseClick.vue'
import {GetSysSetting} from './http/requestdata'
import ImageServer from './http/ImageServer'
import sysconfig from './sysconfig'
export default {
  components:{
    mouseSpecial
  },
  mounted(){
    console.log("启动！")
    if(sessionStorage.getItem("webinfo")==null){
      //请求信息
      GetSysSetting('web').then(res=>{
        sysconfig.title=res.data.title
        ImageServer.baseUrl=res.data.imageServer
        ImageServer.bgLogin=res.data.bgLogin;
        // sessionStorage.setItem("webinfo",new Date)
        // for(let i in res.data){
        //   sessionStorage.setItem(i,res.data[i])
        // }
        //sessionStorage.setItem("webinfo",res.data)
      }).catch(err=>{
        console.log("系统初始化错误",err)
      })
    }
  },
  methods:{
    mainClick(ev){
      this.$refs.mousePlugin.AfterClick(ev)
    }
  }
}
</script>
<style>
.scrollbar{
  overflow: scroll;
}
.scrollbar::-webkit-scrollbar {
    width: 7px;
    height: 1px;
}
.scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 2px;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 20%);
}
#app {
  font-family: Comic Sans MS, Helvetica, Arial, sans-serif;
  height: 100%;
}
html,body{
  height: 100%;
}
/*#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
