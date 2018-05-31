import { Link } from "react-router-dom"

export class Endbuy extends React.Component{
    constructor(props){
        super(props);

        this.addMount = this.addMount.bind(this);
        this.delMount = this.delMount.bind(this);
    }

    addMount(){
        let mount = document.querySelector(".bmount");
        mount.innerHTML++;
    }

    delMount(){
        let mount = document.querySelector(".bmount");
        if (mount.innerHTML > 0) {
            mount.innerHTML--;
        }else{
            mount.innerHTML == 0;
        }
    }

    render(){
        return(
            <div className="buybtn">
                <div className="adddel">
                    <i className="delbtn iconfont icon-jian1" onClick={this.delMount}></i>
                    <b className="bmount">0</b>
                    <i className="addbtn iconfont icon-jia" onClick={this.addMount}></i>
                </div>
                <Link to="/buy" className="tobuy">
                    <i className="iconfont icon-caigou"></i>
                </Link>
            </div>
        )
    }
} 