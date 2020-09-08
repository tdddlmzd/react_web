import React, { Component } from 'react'
import { NavLink } from  'react-router-dom'

class Login extends Component{
    state = {
        listImg:[ //轮播的图片名称
            'login_1.png',
            'login_2.png',
            'login_3.png',
        ],
        index:0, //当前图片index
        imgSetInterval: '', //图片轮播计时器
    }
    //计时器执行
    indexChange(){
        if(this.state.index === this.state.listImg.length-1){
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
        this.setState({
            imgSetInterval: setInterval(()=>{
                this.indexChange()
            },2000)
        })
    }
    componentWillUnmount(){
        clearInterval(this.state.imgSetInterval)
    }
    render(){
        let {listImg,index} = this.state;
        return (
            <div className='login'>
                <div className="login_head">
                    <div className='login_head_image'></div>
                    <NavLink to='/'><div className='login_head_back' path={this.props}>返回首页</div></NavLink>
                </div>
                <div className='login_main'>
                    <ul className="login_main_ul">
                        {
                            listImg.map((item,imgIndex)=>{
                                return <li key={imgIndex} style={{backgroundImage:`url(${require("../image/login/" + item)})`,display: index === imgIndex ? 'block' : 'none'}}></li>
                            })   
                        }
                    </ul>
                    <div className='login_content'>
                        <div className='login_content_head'>
                            <NavLink to='/'><img src={require("../image/login/home.png")} className="login_content_img" alt=""/></NavLink>
                            <p className="login_content_p1">登录鲸准</p>
                            <p className="login_content_p2">请输入账号和密码</p>
                        </div>
                        <div className='login_content_main'>
                            <div className='login_from'>
                                <input placeholder='请输入你的手机号' className='login_from_input'/>
                                <span className='login_from_erro'>请输入您的手机号码</span>
                            </div>
                            <div className='login_from'>
                                <input placeholder='请输入密码' className='login_from_input'/>
                                <span className='login_from_erro'>请输入密码</span>
                            </div>
                        </div>
                        <div className='login_login'>
                            <NavLink to=''><div className='login_login_button'>登录</div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
