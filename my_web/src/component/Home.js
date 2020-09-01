import React from 'react'
import NavBar from '../component/NavBar'
class Home extends React.Component {
    state = {
      e:'233',
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
    //点击咨询
    openQQ() {
      window.open("https://wpa.qq.com/msgrd?v=3&uin=68381850&site=qq&menu=yes",'_blank')
    }
    render() {
      return (
        <div className='home_main'>
          <div className='home_head'>
            <NavBar></NavBar>
            <div className='home_head_text'>
                <p className='home_text_p1'>鲸准API服务</p>
                <p className='home_text_p2'>鲸准丰富的API服务，方便您快速构建自己的智能化航运！</p>
                <p className='home_text_p3' onClick={() => this.openQQ()}>在线申请</p>
            </div>
          </div>
          <div className='home_content'>
            <ul className='home_content_ul'>
              <li className='home_content_li' onClick={() => this.anchor(1,'a01')}>
                <img src={require('../image/home/icon_chuanqi.png') }className='home_content_img' alt=''/>
                <p className='home_content_text'>船期数据</p>
                <p className={['home_content_line',(1 === this.state.currentIndex ? "home_content_blend_line" : '')].join(' ')}></p>
              </li>
              <li className='home_content_li' onClick={() => this.anchor(2,'a02')}>
                <img src={require('../image/home/icon_xianghuo.png') }className='home_content_img' alt=''/>
                <p className='home_content_text'>箱货跟踪</p>
                <p className={['home_content_line',(2 === this.state.currentIndex ? "home_content_blend_line" : '')].join(' ')}></p>
              </li>
              <li className='home_content_li' onClick={() => this.anchor(3,'a03')}>
                <img src={require('../image/home/icon_ditu.png') }className='home_content_img' alt=''/>
                <p className='home_content_text'>地图式箱货跟踪</p>
                <p className={['home_content_line',(3 === this.state.currentIndex ? "home_content_blend_line" : '')].join(' ')}></p>
              </li>
            </ul>
            <div className="home_content_datamain" id="a01">
                <div className="home_content_flexmain">
                    <h2>船期数据</h2>
                    <ul className="home_content_datamm">
                        <li>
                            <div className="home_content_backgro home_content_hxcq"></div>
                            <div className="home_content_titlemain">
                                <p className="home_content_p1">航线船期</p>
                                <p className="home_content_p2">按起运港、目的港，查询船期数据</p>
                            </div>
                        </li>
                        <li>
                            <div className="home_content_backgro home_content_cbcq"></div>
                            <div className="home_content_titlemain">
                                <p className="home_content_p1">船舶船期</p>
                                <p className="home_content_p2">按船名，查询该船舶的航线船期和挂靠港信息</p>
                            </div>
                        </li>
                        <li>
                            <div className="home_content_backgro home_content_lszdl"></div>
                            <div className="home_content_titlemain">
                                <p className="home_content_p1">历史准点率</p>
                                <p className="home_content_p2">按起运港、目的港、航线代码，查询过去90天的准点率。</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home_content_datamain" id="a02">
                <div className="home_content_flexmain">
                    <h2>箱货跟踪</h2>
                    <ul className="home_content_datamm">
                        <li>
                            <div className="home_content_backgro home_content_hxcq"></div>
                            <div className="home_content_titlemain">
                                <p className="home_content_p1">操作码头船舶计划</p>
                                <p className="home_content_p2">按提单号/箱号，查询船舶计划靠泊、实际靠泊、计划离泊、实际离泊</p>
                            </div>
                        </li>
                        <li>
                            <div className="home_content_backgro home_content_cbcq"></div>
                            <div className="home_content_titlemain">
                                <p className="home_content_p1">码头箱货跟踪</p>
                                <p className="home_content_p2">按提单号/箱号，查询进港、海关放行、码头放行、配载上船信息</p>
                            </div>
                        </li>
                        <li>
                            <div className="home_content_backgro home_content_lszdl"></div>
                            <div className="home_content_titlemain">
                                <p className="home_content_p1">船公司箱货跟踪</p>
                                <p className="home_content_p2">按提单号/箱号，查询提空箱、进港、上船、离港、到港、卸船、提货、还空箱</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home_content_datamain home_content_tsdatmain" id="a03">
              <div className="home_content_flexmain">
                  <h2>地图式箱货追踪</h2>
                  <div className="home_content_xhgz">
                      <div className="home_content_dtsxh"></div>
                      <p className="home_content_tidah">按提单号/箱号，查询运单的船期规划，船舶的当前位置，过去7天的航运轨迹，目的港ETA和剩余航程。</p>
                  </div>
              </div>
            </div>
            <div className="home_content_shucfoo">
              <div className="home_content_shujh">船期 跟踪，就是鲸准 !</div>
              <div className="home_content_buttons">
                  <span onClick={() => this.openQQ()}>在线咨询</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home
