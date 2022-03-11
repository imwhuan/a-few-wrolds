<template>
  <a-dropdown>
        <a-button type="dashed" shape="circle" title="设置">
            <template #icon><translation-outlined /></template>
        </a-button>
        <template #overlay>
        <a-menu>
            <a-menu-item>
                <a-button type="text" @click="switchlang('cn')">简体中文</a-button>
            </a-menu-item>
            <a-menu-item>
                <a-button type="text" @click="switchlang('en')">英语</a-button>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
            <a href="javascript:;">繁体中文</a>
            </a-menu-item>
            <a-menu-item>
            <a href="javascript:;">日语</a>
            </a-menu-item>
        </a-menu>
        </template>
    </a-dropdown>
</template>

<script>
import { TranslationOutlined } from '@ant-design/icons-vue';
export default {
    emits:{
        switchLang:(lang)=>{
            if(lang){
                return true
            }else{
                return false
            }
        }
    },
    components:{
        TranslationOutlined
    },
    methods:{
        switchlang(lang){
            this.$emit("switchLang",lang)
        }
    }
}
</script>

<style>

</style>