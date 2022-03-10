import axios from 'axios';
const ServerConfig={
    BaseUrl:"http://172.20.156.234/",
    logo:"few10.gif",
    head:"few10.jpeg"
}
const ImageServe = axios.create({
    baseURL: ServerConfig.BaseUrl,
    timeout: 5000,
})
function GetImageByName(name){
    return ImageServe.get(name)
}
function GetLogoImg(){
    return ImageServe.get(ServerConfig.logo)
}
export {ImageServe,GetImageByName,GetLogoImg}