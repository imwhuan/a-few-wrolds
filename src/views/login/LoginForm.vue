<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :labelCol="{span: 8}"
    labelAlign='left'
  >
    <a-form-item
      label="名称"
      name="username"
      has-feedback 
      :rules="[{ required: true, message: '请输入用户名!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      has-feedback 
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <div class="login-form-wrap login-form-forgot">
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
      </a-form-item>
      <a href="">忘记密码</a>
    </div>

    <a-form-item>
      <a-button type="primary" :loading="logining" html-type="submit" class="login-form-button">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive,ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { Login } from '../../http/requestdata'
import { useRouter} from 'vue-router'
import {env} from 'process'
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
      console.log("全局变量",process.env,env,env.ImgServer)
    const router=useRouter();
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });
    const logining=ref(false)
    const onFinish = () => {
      logining.value=true
      //console.log('Success:', values);
      const msgkey='msgkey'
      message.loading({ content: '正在登录...',key: msgkey,duration:0 });
      Login(formState.username,formState.password).then(()=>{
        sessionStorage.setItem("username",formState.username)
        logining.value=false
        message.success({ content: "登录成功！,即将跳转至首页...",key: msgkey })
        setTimeout(()=>{
          router.replace({name:'home'})
        },1000)
      }).catch(err=>{
        logining.value=false
        console.log('Failed:', err);
        message.error({ content: "登录失败！"+err.message,key: msgkey })
      })
    };

    const onFinishFailed = () => {
      //console.log('Failed:', errorInfo);
    };
    return {
      formState,
      logining,
      onFinish,
      onFinishFailed
    };
  },

});
</script>
<style>
.login-form .login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-form .login-form-forgot {
  margin-bottom: 24px;
}
.login-form .login-form-button {
  width: 100%;
}
</style>