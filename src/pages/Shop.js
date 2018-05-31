import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ShopList } from "../components/ShopList";
import { Cline } from "../components/Cline";
import { BrowserRouter as Router,Route,Switch,Redirect,Link } from "react-router-dom";
import jsonp from "fetch-jsonp";

export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                let newList = data.map(goods=>{
                    let obj = {
                        goodsID : goods.goodsID,
                        price : goods.price,
                        goodsName : goods.goodsName,
                        imgSrc : goods.goodsListImg 
                    }
                    return obj;
                })
                this.setState({
                    list : newList
                })
            })
    }

    render(){
        return(
            <div>
                <Header text="购物" hasScan={true} />
                    <div className="btns">
                        <Link to="/search" className="search" >
                            <i className="iconfont icon-sousuo"></i>
                            <span>搜索</span>
                        </Link>
                        <Link to="/focus" className="focus" >
                            <i className="iconfont icon-liebiao"></i>
                            <span>聚焦</span>
                        </Link>
                    </div>
                    <Cline text="热门商品推荐" />
                    <div className="mainGoods">
                        <ShopList list={this.state.list} />
                    </div>
                <Footer />
            </div>
        )
    }
}