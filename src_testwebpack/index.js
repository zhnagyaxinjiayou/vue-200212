// 入口文件
import indexCss from "./public/css/index.css";
// 本质上拿到的是图片的路径
import imgSrc from "./public/imgs/3.jpg";
let pp = document.createElement("p");
pp.innerText = "渊哥爱赵丽颖";
document.getElementById("app").appendChild(pp);

let MyFunc = () => {
  console.log("测试ES6语法");
};
MyFunc();

// 创建图片
let imgNode = new Image();
imgNode.src = imgSrc;
document.getElementById("app").appendChild(imgNode);
