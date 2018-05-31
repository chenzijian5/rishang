import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";

export class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return( 
            <a href="javascript:;" className="main" to="/home/mainlist">
                <i className="iconfont icon-news"></i>
                <p>日上新闻</p>
            </a>
        )
    }
}