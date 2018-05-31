import { Header } from "../components/Header"

export class Yourright extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            list:[
                {iconfont:"icon-quanqiugou",title:"免税预定",text:""},
                {iconfont:"icon-shangpin-xianxing",title:"免税购物",text:""},
                {iconfont:"icon-liwu1",title:"网上商城",text:""}
            ]
        }
    }

    render(){
        return(
            <div>
                <Header text="我的权益" hasBack={true}/>
            </div>
        )
    }
}