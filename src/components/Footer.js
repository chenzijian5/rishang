import { NavLink } from "react-router-dom";

let Item = props => {
    return (
        <li>
            <NavLink to={props.path}>
                <div className={"iconfont " + props.icon}></div>
                <p>{props.text}</p>
            </NavLink>
        </li>
    )
}
// let Item = props => {
//     return (
//         <li>
//             <NavLink to={props.path}>
//                 <div className={"iconfont " + props.icon}></div>
//                 <p>{props.text}</p>
//             </NavLink>
//         </li>
//     )
// }
export class Footer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            navList:[
                {text:"消息",path:"/home",icon:"icon-xiaoxi"},
                {text:"权益",path:"/right",icon:"icon-headlines"},
                {text:"购物",path:"/shop",icon:"icon-caigou"},
                {text:"关系",path:"/res",icon:"icon-group"},
                {text:"更多",path:"/more",icon:"icon-more"}
            ]
        }
    }

    render(){
        let domlist = this.state.navList.map((nav,i)=>{
            return <Item key={i} {...nav}/>
        })
        return (
            <footer>
                <ul>
                    {domlist}
                </ul>
            </footer>
        )
    }

}