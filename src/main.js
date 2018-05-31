// 渲染文件
import { render } from "react-dom";
import { App } from "./app";

require("./css/base.css");
require("./less/style.less")

let w = document.documentElement.clientWidth;
// 使用rem 实际大小/模板大小 = 实际字体/模板字体
let fs = w/1080 * 100;
document.documentElement.style.fontSize = `${fs}px`;

render(<App />,document.getElementById("app"));