import axios from 'axios';
import qs from 'qs';
import { notification } from 'ant-design-vue'
import BaseServe from './baseserve';
import { ImageServe } from './imageserve';
import { ResponseModel } from './requestmodel';

//导出request方法，供其它地方使用
function ImgRequest(config) {
    const instance = axios.create({
        baseURL: ImageServe.url,
        timeout: 5000,
        method:'GET',
        // 'transformRequest' 允许在向服务器发送前，修改请求数据
        transformRequest: [function (data) {
            // 对 data 做序列化处理
            return qs.stringify(data);
        }],
    })

    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

    //------------------请求拦截-------------------//
    //------------在发送请求之前做些什么------------//
    instance.interceptors.request.use(config => {
        // 若存在token则带token
        const token = window.localStorage.getItem('token');
        if (token) {
            config.headers.Authorization =token;
        }
        // 放行
        return config;
    }, err => {
        console.log("请求拦截=>", err);
        notification.error({message:'请求拦截',description:"不存在用户token"})
        return err;
    })

    //------------------请求拦截-------------------//
    //-------------对响应数据做点什么-------------//
    instance.interceptors.response.use(res => {
        //例：后端数据处理错误，并返回错误原因；前端获取错误原因并展示
        console.log("响应拦截=>", res.data);
        if (res.data.success==false) {
            notification.error({message:'错误请重试',description:res.data.data.message})
        }
        return res ? res.data : res;
    }, err => {
        console.log(err);
        console.log("响应拦截错误完整信息=>",err.response)
        //也可以在这里对不同的错误码做不同的展示处理
        notification.error({message:'错误请重试',description:err.response})
        throw err;
    })

    return instance(config);
}

function BaseRequest() {
    const instance = axios.create({
        baseURL: BaseServe.url,
        timeout: 5000,
        // 'transformRequest' 允许在向服务器发送前，修改请求数据
        transformRequest: [function (data) {
            // 对 data 做序列化处理
            return qs.stringify(data);
        }],
    })

    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

    //------------------请求拦截-------------------//
    //------------在发送请求之前做些什么------------//
    instance.interceptors.request.use(config => {
        // 若存在token则带token
        const token = window.localStorage.getItem('token');
        if (token) {
            config.headers.Authorization =token;
        }
        console.log("准备请求")
        // 放行
        return config;
    }, err => {
        console.log("请求拦截=>", err);
        notification.error({message:'请求拦截',description:"不存在用户token"})
        return err;
    })

    //------------------请求拦截-------------------//
    //-------------对响应数据做点什么-------------//
    instance.interceptors.response.use(res => {
        //例：后端数据处理错误，并返回错误原因；前端获取错误原因并展示
        console.log("响应拦截=>", res.data);
        if (res.data.success==false) {
            notification.error({message:'错误请重试',description:res.data.data.message})
        }
        return res ? res.data : res;
    }, err => {
        console.log("响应拦截错误完整信息=>",err)
        const errmsg=err?err.message:"未知异常"
        //也可以在这里对不同的错误码做不同的展示处理
        notification.error({message:'错误请重试',description:errmsg})
        //throw err;
        const res =new ResponseModel()
        res.sucess=false;
        res.msg=errmsg
        return Promise.reject(res)
    })

    return instance;
}

export {ImgRequest,BaseRequest}