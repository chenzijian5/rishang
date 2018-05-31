import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavLink,Link } from "react-router-dom";

let Item = props => {
    return (
        <li>
            <NavLink to={props.path}>
                <p>{props.title}</p>
                <span>{props.value}</span>
                <div className={"iconfont " + props.icon}></div>
            </NavLink>
        </li>
    )
}

let Unit = props => {
    return (
        <li>
            <NavLink to={props.path}>
                <div className={"iconfont " + props.icon}></div>
                <p>{props.title}</p>
                <span>{props.value}</span> 
            </NavLink>
        </li>
    )
}

export class Right extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            powList:[
                {title:"当前积分",path:"",value:0,icon:""},
                {title:"我的折扣券",path:"",value:0,icon:""},
                {title:"会员卡",path:"",value:"",icon:"icon-huiyuanqia"}
            ],
            rightList:[
                {title:"兑换券",path:"",icon:"icon-duihuanquan"},
                {title:"每日签到",path:"",icon:"icon-qiandao"},
                {title:"购物",path:"",icon:"icon-gouwu"},
                {title:"官方发放",path:"",icon:"icon-guanfang"},
                {title:"专属活动",path:"",icon:"icon-uEA-ste-service-"}
            ],
            fooList:[
                {title:"免税预定",path:"",icon:"icon-t"},
                {title:"提前备货",path:"",icon:"icon-beihuo"},
                {title:"回国补货",path:"",icon:"icon-gouwu1"},
                {title:"专属客服",path:"",icon:"icon-zhuanshukefu"}
            ]
        }
    }
    render(){
        let powlist = this.state.powList.map((pow,i)=>{
            return <Item key={i} {...pow}/>
        })

        let rightlist = this.state.rightList.map((ri,j)=>{
            return <Unit key={j} {...ri} />
        })

        let foolist = this.state.fooList.map((foo,l)=>{
            return <Unit key={l} {...foo}/>
        })
        return(
            <div>
                <Header text = "权益" hasScan={true}/>
                    <div className="rightInfo">
                        <h2>尊敬的会员</h2>
                        <h3>Mr G</h3>
                        <Link to="/yourright" className="rightLine">查看你的权益</Link>
                        <ul className="powUl">  
                            { powlist }
                        </ul>
                    </div>
                    <p className="gmark">获取积分</p>
                    <ul className="getMark">
                        {rightlist}
                    </ul>
                    <p className="umark">使用积分</p>
                    <ul className="useMark">
                        {foolist}
                    </ul>
                <Footer />
            </div>
        )
    }
} 