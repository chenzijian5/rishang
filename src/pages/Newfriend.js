import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";

export class Newfriend extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header text="新朋友" hasBack={true} />
                <SearchInput />
                <hr className="fhr" />
                <p className="nofriend">
                    暂无新朋友
                </p>
                <hr className="fhr" />
            </div>
        )
    }
}