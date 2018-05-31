import { Link } from "react-router-dom";

let Goods = (props) => {
    return (
        <li>
            <Link className="goods-item" to={"/detail/"+props.goods.goodsID}>
                <div className="img-box">
                    <img src={props.goods.imgSrc} />
                </div>
                <div className="content-box">
                    <h3>{props.goods.goodsName}</h3>
                    <div className="price"><span className="gPrice">¥{props.goods.price}</span>
                        <span className="gMount">库存：充足</span>
                    </div>
                </div>
                
            </Link>
        </li>
    )
}

export class ShopList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let domList = this.props.list.map((good,i)=>{
            return <Goods key={i} goods={good}/>
        })
        return(
            <ul className="goods-list">
                <Link to="/shopcart" className="iconcart">
                    <i className="iconfont icon-caigou-xianxing"></i>
                </Link>
                {domList}
            </ul>
        )
    }
}