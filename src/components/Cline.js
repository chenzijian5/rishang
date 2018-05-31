export class Cline extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cline">
                <i></i>
                <div>{this.props.text}</div>
            </div>
        )
    }
}