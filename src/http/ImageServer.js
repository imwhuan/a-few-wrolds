import axios from 'axios';
const ServerConfig={
    BaseUrl:process.env.VUE_APP_IMAGES,
    logo:"few10.gif",
    head:"few10.jpeg",
    bgindex:"few50.jpeg"
}
const ImageServe = axios.create({
    baseURL: ServerConfig.BaseUrl,
    timeout: 10000,
})
function GetImageByName(name){
    return ImageServe.get(name)
}
function GetLogoImg(){
    return ImageServe.get(ServerConfig.logo)
}
export {ImageServe,GetImageByName,GetLogoImg,ServerConfig}