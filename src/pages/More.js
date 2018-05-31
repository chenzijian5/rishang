import { NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

let Option = props => {
    return (
        <li>
            <NavLink to={props.path}>
                <i className={"iconfont " + props.icon}></i>
                <div>{props.text}</div>
            </NavLink>
        </li>
    )
}

export class More extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myList : [
                {text:"我的心愿单",path:"/home",icon:"icon-xinyuandan_"},
                {text:"旅行团",path:"/right",icon:"icon-shangpin-xianxing"},
                {text:"免税店订单",path:"/shop",icon:"icon-quanqiugou"},
                {text:"好友心愿单",path:"/res",icon:"icon-xinyuandan-"},
                {text:"每日签到",path:"/more",icon:"icon-headlines"},
                {text:"使用条款",path:"/shop",icon:"icon-tiaokuanguanli"},
                {text:"会员绑定",path:"/res",icon:"icon-bangding"},
                {text:"关于",path:"/more",icon:"icon-jijianfasong-xianxing"}
            ]
        }
    }
    render(){

        let comList = this.state.myList.map((item,i)=>{
            return <Option key={i} {...item}/>
        })

        return(
            <div>
                <Header text="更多" hasScan={true} />
                    <a href="javascript:;" className="loginState">                 
                        <div className="hbox">
                            <i className="iconfont icon-xingzhuang"></i>
                        </div>
                        <span>未登录</span>
                        <i className="iconfont icon-jiantouyou"></i>
                    </a>
                    <b className="wCube"></b>
                <ul className="comUl">
                    {comList}
                </ul>
                <Footer />
            </div>
        )
    }
    
}
