import { Link } from "react-router-dom";

export class Header extends React.Component{
    constructor(props){
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        // this.props.hasBack.goBack();
        return history.back(-1);
    }

    render(){

        let backBtn = null;
        let shopBtn = null;
        let scanBtn = null;
        let shareBtn = null;
        let searchText = null; 

        if (this.props.hasBack) {
            backBtn = <a href="javascript:;" onClick={this.goBack} className="back-btn iconfont icon-fanhui"></a>
        }
        if (this.props.hasShop) {
            shopBtn = <a href="javascript:;" className="shop-btn iconfont icon-peizaizhuangche-xianxing"></a>
        }
        if (this.props.hasScan) {
            scanBtn = <a href="javascript:;" className="iconfont icon-saoyisao"></a>
        }
        if (this.props.hasShare) {
            shareBtn = <a href="javascript:;" className="iconfont icon-fenxiang"></a>
        }
        if (this.props.hasSearch) {
            searchText = <Link to="/Usearch" className="upperSearch">高级搜索</Link>
        }

        return(
            <header>
                {backBtn}
                <h2>{this.props.text}</h2>
                {shopBtn}
                {scanBtn}
                {shareBtn}
                {searchText}
            </header>
        )
    }
}