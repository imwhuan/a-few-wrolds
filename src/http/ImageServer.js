const ImageServer={
    baseUrl:sessionStorage.getItem("imageServer"),
    logo:sessionStorage.getItem("imglogo")??"few10.gif",
    head:sessionStorage.getItem("imghead")??"few10.jpeg",
    bgLogin:sessionStorage.getItem("bgLogin")??"few50.jpeg"
}
export default ImageServer