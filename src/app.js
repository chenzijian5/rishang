// 总路由文件

// 引入页面
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Search } from "./pages/Search";
import { More } from "./pages/More";
import { Res } from "./pages/Res";
import { Newfriend } from "./pages/Newfriend";
import { Right } from "./pages/Right";
// import { Travel } from "./pages/Travel";
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import { Hpage } from "./pages/Hpage";
import { Detail } from "./pages/Detail";
import { Yourright } from "./pages/Yourright";

export class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/hpage" component={Hpage} />
                    <Route path="/right" component={Right} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/search" component={Search} />
                    <Route path="/res" component={Res} />
                    <Route path="/newfriend" component={Newfriend} />
                    <Route path="/yourright" component={Yourright} />
                    <Route path="/more" component={More} />
                    <Route path="/detail/:goodsID" component={Detail} />
                    <Redirect from="/" to="/home" exact={true}/>
                </Switch>
            </Router>
            
        )
    }
}