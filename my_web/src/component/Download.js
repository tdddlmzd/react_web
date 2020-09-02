import React from 'react'
import NavBar from '../component/NavBar'

class Download extends React.Component {
    state = {
        currentIndex: 1,
    }
    //滚动条滚动
    anchor(index,togo){
        this.setState({
            currentIndex:index //改变当前选择状态
        })
        // 如果对应id的锚点存在，就跳转到锚点
        let anchorElement = document.getElementById(togo)
        if(anchorElement) {
            anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'})
        }
    }
    //下载
    downLoad(){
        window.open('http://120.55.217.60/download/flavor/default/1.0.0/windows_64/Setup.exe');
    }
  render() {
    return (
        <div className='download'>
            <div className='download_head'>
                <NavBar></NavBar>
            </div>
            <div className='download_main'>
                <div className='download_main_p1'>船期 跟踪，就是鲸准 !</div>
                <div className='download_main_p2'>同时支持Windows ,微信公众号</div>
                <div className='download_main_p3' onClick={() => this.downLoad()}>立即下载</div>
                <div className='download_main_p4'></div>
            </div>
            <div className="download_conent">
                <ul className='download_conent_ul'>
                    <li className='download_conent_li' onClick={() => this.anchor(1,'a01')}>
                        <img src={require('../image/download/icon_chuanqi.png') }className='download_conent_img' alt=''/>
                        <p className='download_conent_text'>计划船期</p>
                        <p className={['download_conent_line',(1 === this.state.currentIndex ? "download_conent_blend_line" : '')].join(' ')}></p>
                    </li>
                    <li className='download_conent_li' onClick={() => this.anchor(2,'a02')}>
                        <img src={require('../image/download/icon_chuanbo.png') }className='download_conent_img' alt=''/>
                        <p className='download_conent_text'>船舶跟踪</p>
                        <p className={['download_conent_line',(2 === this.state.currentIndex ? "download_conent_blend_line" : '')].join(' ')}></p>
                    </li>
                    <li className='download_conent_li' onClick={() => this.anchor(3,'a03')}>
                        <img src={require('../image/download/icon_xianghuo.png') }className='download_conent_img' alt=''/>
                        <p className='download_conent_text'>箱货跟踪</p>
                        <p className={['download_conent_line',(3 === this.state.currentIndex ? "download_conent_blend_line" : '')].join(' ')}></p>
                    </li>
                </ul>
                <div className="download_conent_datamain">
                    <div className="download_conent_plan"></div>
                </div>
                <div className="download_conent_datamain" id="a01">
                    <div className="download_conent_plan1"></div>
                </div>
                <div className="download_conent_datamain" id="a02">
                    <div className="download_conent_plan2"></div>
                </div>
                <div className="download_conent_datamain" id="a03">
                    <div className="download_conent_plan3"></div>
                </div>
            </div>
            <div className='download_footer'>
                <div className='download_footer_p1'>下载鲸准</div>
                <div className='download_footer_p2'>
                    <div className='download_footer_p2_img1' onClick={() => this.downLoad()}></div>
                    <div className='download_footer_p2_img2'></div>
                </div>
            </div>
        </div>
    )
  }
}

export default Download
