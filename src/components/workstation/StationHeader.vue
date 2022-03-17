<template>
  <div class="gutter-example">
    <a-row :gutter="[16,16]" justify="center">
      <a-col class="gutter-row" flex="100px">
         <a-avatar :size="64" :src="headimg" />
      </a-col>
      <a-col class="gutter-row" flex="auto">
        <a-row :gutter="[16,8]" justify="space-between">
            <a-col class="gutter-row" :xs="24" :sm="24" :md="14">
              <a-space direction="vertical">
                <a-typography-text>早安, Vben Admin, 开始您一天的工作吧！</a-typography-text>
                <a-typography-text type="secondary">今日晴，20℃ - 32℃！😄👻🎇💕😁👩🎊🎞️🎠🎡🖼️🧶🥪🥯</a-typography-text>
              </a-space>
            </a-col>
            <a-col class="gutter-row" :xs="24" :sm="24" :md="10">
                <a-row :gutter="16" justify="end">
                  <a-col class="gutter-row">
                    <a-space direction="vertical">
                      <a-typography-text type="secondary">便签</a-typography-text>
                      <a-typography-text>1/7</a-typography-text>
                    </a-space>
                  </a-col>
                  <a-col class="gutter-row">
                    <a-space direction="vertical">
                      <a-typography-text type="secondary">任务</a-typography-text>
                      <a-typography-text>19</a-typography-text>
                    </a-space>
                  </a-col>
                  <a-col class="gutter-row">
                    <a-space direction="vertical">
                      <a-typography-text type="secondary">提醒</a-typography-text>
                      <a-typography-text>27</a-typography-text>
                    </a-space>
                  </a-col>
              </a-row>
            </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ImageServer from '../../http/ImageServer'
export default {
  data(){
    return {
      headimg:ImageServer.baseUrl+ImageServer.head
    }
  }
}
</script>

<style scoped>
.gutter-example {
  padding: 16px;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>