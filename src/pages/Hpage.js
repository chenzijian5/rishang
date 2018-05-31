import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import jsonp from "fetch-jsonp";
import { ShopList } from "../components/ShopList";
import { Banner } from "../components/Banner";

export class Hpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bannerList:[],
            list : []
        }
    }
    componentWillMount(){
        jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
        .then(r => r.json())
        .then(data => {
            let newData = data.map(goods => {
                //将数据结构重新封装
                let obj = {
                    goodsID: goods.goodsID,
                    goodsName: goods.goodsName,
                    // imgSrc: JSON.parse(goods.goodsBenUrl)[0]
                    imgSrc : goods.goodsListImg
                }
                // 将封装好的数据返回给新的数组
                return obj;
            })
            
            //将新的数据重新赋给当前组件(Home)的state.bannerList
            // 由于state.bannerList被传递给了子级(Banner)的props 
            // 所以  一旦state.bannerList发生了更新则 子级(Banner)的props也会发生更新
            this.setState({
                bannerList: newData,
                list:newData
            })
        })
    }
    render(){
        return(
            <div className="hpage">
                <Header text="聚焦日上" hasBack={true} />
                <Banner list={this.state.bannerList} hasPag={true} />
                <div className="hplist">
                    <ShopList list={this.state.list} />
                </div>
            </div>
        )
    }
}