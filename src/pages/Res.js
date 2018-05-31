import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";

let Rescube = props =>{
    return (
        <li>
            <NavLink to={props.path}>
                <div className={"iconfont " + props.icon}></div>
                <p>{props.title}</p>
            </NavLink>
        </li>
    )
}

export class Res extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resList : [
                {title:"新朋友",icon:"icon-tianjiaxinpengyou",path:"/newfriend"},
                {title:"旅行团",icon:"icon-tianjialvhangtuan-",path:"/travel"},
                {title:"专属客服",icon:"icon-zhuanshukefu",path:"/servicer"},
                {title:"店铺导购",icon:"icon-shoppingguide",path:""},
                {title:"暂无好友",icon:"",path:""}
            ]
        }
    }
    render(){

        let reslist = this.state.resList.map((re,i)=>{
            return <Rescube key={i} {...re}/>
        })

        return(
            <div>
                <Header text = "关系" hasScan={true}/>
                    <ul className="resUl">
                        {reslist}
                    </ul>
                <Footer />
            </div>
        )
    }
} 