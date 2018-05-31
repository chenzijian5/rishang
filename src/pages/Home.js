import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BrowserRouter as Router,Route,Switch,Redirect,Link} from "react-router-dom";
import { Hpage } from "./Hpage";

export class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header text="消息" hasScan={true} />
                    {/* <Switch> */}
                        <div className="main">
                            <Link to="/hpage">
                                <i className="iconfont icon-news"></i>
                                <p>日上新闻</p>
                            </Link>
                        </div>
                    {/* </Switch> */}
                <Footer />
            </div>
        )
    }
}