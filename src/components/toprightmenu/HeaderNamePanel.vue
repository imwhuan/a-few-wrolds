<template>
    <a-dropdown>
        <a-space style="cursor: pointer;">
            <a-avatar alt="👻" src="http://172.30.112.22/few10.jpeg" />
            ImwHuan
        </a-space>
        <template #overlay>
        <a-menu>
            <a-menu-item>
            <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item>
            <a href="javascript:;">切换账号</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
            <a href="javascript:;">退出系统</a>
            </a-menu-item>
        </a-menu>
        </template>
    </a-dropdown>
</template>

<script>
export default {

}
</script>

<style>

</style>