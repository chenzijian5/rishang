export class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "请输入关键词"
        }
    }

    render(){
        return(
            <div className="searchinput">
                <input type="text" placeholder={this.state.text} />
                <button>
                    <i className="iconfont icon-sousuo"></i>
                </button>
            </div>
        )
    }
}