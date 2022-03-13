import axios from 'axios';
import { notification } from 'ant-design-vue'
import { ResponseModel } from './requestmodel';

const ServerConfig={
    BaseUrl:"https://localhost:7018/",
    FuncRegister:"Account/Register",
    FuncLogin:"Account/Login",
    FuncGetPublicData:"Account/GetPublicData",
    FuncGetSecretData:"Account/GetSecretData"
}

const ShareMeServer = axios.create({
    baseURL: ServerConfig.BaseUrl,
    timeout: 10000
    // 'transformRequest' 允许在向服务器发送前，修改请求数据
    // transformRequest: [function (data) {
    //     // 对 data 做序列化处理
    //     return qs.stringify(data);
    // }],
})

ShareMeServer.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//------------------请求拦截-------------------//
//------------在发送请求之前做些什么------------//
ShareMeServer.interceptors.request.use(config => {
    // 若存在token则带token
    const token = window.sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = "Bearer "+ token;
    }
    console.log("准备请求")
    // 放行
    return config;
}, err => {
    console.log("请求拦截=>", err);
    notification.error({message:'请求拦截',description:"不存在用户token"})
    return err;
})

//------------------响应拦截-------------------//
//-------------对响应数据做点什么-------------//
ShareMeServer.interceptors.response.use(res => {
    //例：后端数据处理错误，并返回错误原因；前端获取错误原因并展示
    console.log("响应拦截=>", res);
    let resdata=new ResponseModel();
    resdata=res.data;
    if (resdata.success) {
        return resdata
    }
    else{
        notification.error({message:'错误请重试',description:resdata.message});
        return Promise.reject(resdata);
    }
    
}, err => {
    if(err.response){
        const statuscode=err.response.status
        const errmsg=err.response.data.message
        if(statuscode==401){
            notification.error({message:'401-错误请重试',description:errmsg})
        }else if(statuscode==500){
            notification.error({message:'500-错误请重试',description:errmsg})
        }else{
            notification.error({message:statuscode+'-错误请重试',description:errmsg})
        }
        return Promise.reject(err.response.data)
    }else{
        notification.error({message:'错误请重试',description:err.message})
        console.log("响应拦截错误完整信息=>",err)
        //throw err;
        const res =new ResponseModel()
        res.success=false;
        res.message=err.message
        return Promise.reject(res)
    }
})

async function Login(name,pwd){
    try {
        const res = await ShareMeServer.post(ServerConfig.FuncLogin, { Name: name, Password: pwd });
        sessionStorage.setItem("token",res.data)
        return await Promise.resolve(res);
    } catch (err) {
        return await Promise.reject(err);
    }
    //return BaseRequest().post(baseserve.funcs.login,{name:name,password:pwd})
}
function Register(data){
    return ShareMeServer.post(ServerConfig.FuncRegister,data)
}
function GetSecretData(){
    return ShareMeServer.get(ServerConfig.FuncGetSecretData)
}
function GetPublicData(){
    return ShareMeServer.get(ServerConfig.FuncGetPublicData)
}

export {ShareMeServer,Login,GetSecretData,GetPublicData,Register}