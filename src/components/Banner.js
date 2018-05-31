import Swiper from "swiper";

require("swiper/dist/css/swiper.css");

export class Banner extends React.Component{
    constructor(props){
        super(props);
    }
    // 加载完毕的时候
    // 如果第一次初始化的时候结构里没有数据 则循环就会出现问题
    /*
        解决办法：
        对接收到的数据进行判断，如果没有则不进行初始化
    */
    componentDidMount(){
        if (this.props.list.length != 0) {
            
            let option = {loop:true};

            if (this.props.hasPag) {
                option.pagination = {
                    el : ".swiper-pagination"
                }
            }

            let oname = this.props.cname ? `.${this.props.cname}` : ".banner";

            this.swiper = new Swiper(oname,option)
        }
    }
    componentDidUpdate(){
        if (this.props.list.length != 0) {

            let option = {
                loop:true,
                autoplay:true,
                delay:2000,
                autoplayDisableOnInteraction : false,
            };

            if (this.props.hasPag) {
                option.pagination = {
                    el : '.swiper-pagination'
                }
            }

            let oname = this.props.cname ? `.${this.props.cname}` : ".banner";
            
            this.swiper = new Swiper(oname,option);  
            // console.log(22);         
        }
    }


    render(){
            let sl = this.props.list.map((ban,i)=>{
                return (
                    <div className="swiper-slide" key={i}>
                        <img src={ban.imgSrc} />
                    </div>
                )
            })

            let pag = this.props.hasPag ? <div className="swiper-pagination"></div> : null;
            // console.log(pag);
        return(
            <div className={"banner swiper-container" + this.props.cname} >
                <div className="swiper-wrapper">
                    {sl}
                </div>
                {pag}
            </div>
        )
    }

}