import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { Cline } from "../components/Cline";
import { ShopList } from "../components/ShopList";
import jsonp from "fetch-jsonp";

export class Search extends React.Component{
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
                <Header text="购物" hasBack={true} hasSearch={true}/>
                <SearchInput />
                <Cline text="特惠商品推荐" />
                <div className="mainGoods">
                    <ShopList list={this.state.list} />
                </div>
            </div>
        )
    }
}