<template>
  <div>
        <a-card title="登录">
            <a-input-group compact>
                <a-input v-model:value="name" style="width: 20%" />
                <a-input v-model:value="pwd" style="width: 30%" />
            </a-input-group>
            <a-button type="primary" @click="tlogin">登录</a-button>
            <a-textarea
            v-model:value="loginres"
            placeholder="登录结果"
            auto-size
            />
        </a-card>
        <br />
        <a-card title="获取加密数据">
            <a-button type="primary" @click="tgets">获取加密数据</a-button>
            <a-textarea
            v-model:value="sdatares"
            placeholder="获取结果"
            auto-size
            />
        </a-card>
        <br />
        <a-card title="获取公开数据">
            <a-button type="primary" @click="tgetp">获取公开数据</a-button>
            <a-textarea
            v-model:value="pdatares"
            placeholder="获取结果"
            auto-size
            />
        </a-card>
        <br />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {Login,GetSecretData,GetPublicData} from '../http/requestdata'
export default {
    data(){
        return {
            name:ref(''),
            pwd:ref(''),
            loginres:'',
            sdatares:'',
            pdatares:''
        }
    },
    methods:{
        tlogin(){
            Login(this.name,this.pwd).then(res=>{
                console.log("登录成功",res)
                this.loginres=JSON.stringify(res)
            }).catch(err=>{
                console.log("登录失败",err)
                this.loginres=JSON.stringify(err)
            })
        },
        tgets(){
            GetSecretData().then(res=>{
                console.log("获取秘密成功",res)
                this.sdatares=JSON.stringify(res)
            }).catch(err=>{
                console.log("获取秘密失败",err)
                this.sdatares=JSON.stringify(err)
            })
        },
        tgetp(){
            GetPublicData().then(res=>{
                console.log("获取公开成功",res)
                this.pdatares=JSON.stringify(res)
            }).catch(err=>{
                console.log("获取公开失败",err)
                this.pdatares=JSON.stringify(err)
            })
        }
    }
}
</script>

<style>

</style>