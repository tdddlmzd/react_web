import React from 'react'
import NavBar from '../component/NavBar'

class List extends React.Component {
  state = {
    isShowQis: false,//起始港下拉框
    isShowmud: false,//起始港下拉框
    qisCity: //起始港默认选择值
    [
        {"nameCn": "上海","nameEn": "SHANGHAI", "portCode": "CNSHA"},
        {"nameCn": "厦门","nameEn": "XIAMEN", "portCode": "CNXMN"},
        {"nameCn": "大连","nameEn": "DALIAN","portCode": "CNDLC"},
        {"nameCn": "天津","nameEn": "TIANJIN", "portCode": "CNTXG"},
        {"nameCn": "宁波","nameEn": "NINGBO","portCode": "CNNGB"},
        {"nameCn": "广州","nameEn": "GUANGZHOU","portCode": "CNCAN"},
        {"nameCn": "深圳","nameEn": "SHENZHEN","portCode": "CNSZX"},
        {"nameCn": "青岛","nameEn": "QINGDAO","portCode": "CNTAO"}
    ],
    mudCity: []
  }
  //起始港focues
  qisFoucus(){
    this.setState({
      isShowQis: true
    })
  }
  //起始港input离开
  qisBlur(){
    this.setState({
      isShowQis: false
    })
  }
  //目的港focues
  mudFoucus(){
    this.setState({
      isShowmud: true
    })
  }
  //目的港input离开
  mudBlur(){
    this.setState({
      isShowmud: false
    })
  }
  //鼠标移入
  mouseover(event){
    event.persist()
    event.target.style = "background:#dcdfe6;font-weight:600"
  }
  //鼠标移出
  mouseout(event){
    event.persist()
    event.target.style = "background:#fff;font-weight:normal"
  }
  render() {
    var { isShowQis, isShowmud, qisCity, mudCity} = this.state
    return (
      <div className='list'>
        <div className='list_head'>
          <NavBar path={this.props}></NavBar>
        </div>
        <div className='list_content'>
          <div className='list_content_head'>
            <div className="list_content_divIpnut">
              <input placeholder='请输入起始港' className='list_content_input' onFocus={()=>this.qisFoucus()} onBlur={()=>this.qisBlur()}/>
              {
                isShowQis ? 
                <div className='list_content_input_div1'>
                  {
                    qisCity.length > 0 ?
                      qisCity.map(item => {
                        return <p className='list_content_input_div1_p' key={item.portCode} onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)}>{item.nameCn + '(' + item.nameEn + ')'}</p>
                      })
                      :
                      <p className='list_content_input_zwsj'>无数据</p>
                  }
                </div>
                : ''
              }
            </div>
            <div className="list_content_divIpnut">
              <input placeholder='请输入目的港' className='list_content_input' onFocus={()=>this.mudFoucus()} onBlur={()=>this.mudBlur()}/>
              {
                isShowmud ?
                <div className='list_content_input_div1'>
                  {
                    mudCity.length > 0 ?
                      mudCity.map(item =>{
                        return <p className='list_content_input_div1_p'>{item.countryCn + '(' + item.cityEn + ')'}</p>
                      })
                    :
                    <p className='list_content_input_zwsj'>无数据</p>
                  }
                </div>
                : ''
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List
