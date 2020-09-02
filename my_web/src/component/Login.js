import React from 'react';

//css文件引用

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            listImg:[
                'login_1.png',
                'login_2.png',
                'login_3.png',
            ],
            index:0
        }
    }
    //计时器执行
    indexChange(){
        console.log(this.state.index)
        if(this.state.index == this.state.listImg.length-1){
            this.setState({
                index:0
            })
        }else{
            this.setState({
                index:this.state.index+1
            })
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.indexChange();
        },2000)
    }
    render(){
        let {listImg,index} = this.state;
        return (
            <div className='login'>
                <div className="login_head">
                    <div className='login_head_image'></div>
                    <div className='login_head_back'>返回首页</div>
                </div>
                <div className='login_main'>
                    <ul className="login_main_ul">
                        {
                            listImg.map((item,imgIndex)=>{
                                return <li key={imgIndex} style={{backgroundImage:`url(${require("../image/login/" + item)})`,display: index == imgIndex ? 'block' : 'none'}}></li>
                            })   
                        }     
                    </ul>
                </div>
            </div>
        )
    }
}

export default Login
