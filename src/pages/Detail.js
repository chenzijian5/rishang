import jsonp from "fetch-jsonp";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Endbuy } from "../components/Endbuy"

export class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goods : {
                list:[],
                goodsName:"",
                price:"",
                detail:"",
            }
        }
    }

    componentDidMount(){

        let goodsID = this.props.match.params.goodsID;
        
        jsonp(`http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=${goodsID}`)
            .then(r=>r.json())
            .then(data=>{
                data = data[0];

                let {goodsName,price,discount,detail,goodsBenUrl} = data;

                let list = JSON.parse(goodsBenUrl).map(url=>{
                    return {imgSrc:url}
                });

                let goods = {
                    goodsName,
                    price,
                    detail,
                    list,
                }
                this.setState({
                    goods
                })
            })
    }

    render(){
        return(
            <div>
                <Header text="商品详情" hasShop={true} hasBack={this.props.history} />
                <div className="detailmain">
                    <Banner list={this.state.goods.list} hasPag={true}/>
                </div>
                <hr />
                <div className="detailp">
                    <h3>{this.state.goods.goodsName}</h3>
                    <p className="pprice">
                        <span className="dprice">￥{this.state.goods.price}</span>
                        <span className="mount">库存：充足</span>
                    </p>
                    <hr />
                    <p className="ddetail">
                        <span>商品详情:</span> 
                        {this.state.goods.detail}
                    </p>
                </div>
                <Endbuy />
            </div>
        )
    }
}