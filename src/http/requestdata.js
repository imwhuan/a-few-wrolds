import { ImgRequest,BaseRequest } from "./request";
import baseserve from "./baseserve";

function GetImageByName(name){
    ImgRequest({data:name})
}
function GetWeather(){
    return BaseRequest().get(baseserve.funcs.login)
}
export {GetImageByName,GetWeather}