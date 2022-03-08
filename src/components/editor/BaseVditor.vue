<template>
  <div id="vditor"></div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
export default {
    data(){
        return {
            contentEditor:{}
        }
    },
    mounted(){
        this.contentEditor = new Vditor('vditor', {
            height: 360,
            toolbarConfig: {
                pin: true,
            },
            cache: {
                enable: false,
            },
            after: () => {
                this.contentEditor.setValue('hello, Vditor + Vue!')
            },
        })
    }
}
</script>

<style>
.vditor--fullscreen .vditor-toolbar--pin{
    position: static;
}
</style>