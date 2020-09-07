import React from 'react'
import NavBar from '../component/NavBar'
import axios from 'axios';
const localAddress = 'http://localhost:3000/json'
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
    mudCity: [], //目的港选择
    direct: [], //直达数据
    transit: [], //中转数据
    qisValue: '', //起始港value
    qisJson: '', //起始港json
    mudValue: '', //目的港value
    mudJson: '', //目的港json
  }
  //起始港focues
  qisFoucus(){
    this.setState({
      isShowQis: true
    })
  }
  //起始港input离开
  qisBlur(){
    // console.log('1111')
  }
  qiClick(item){
    this.setState({
      qisValue: item.nameCn + '(' + item.nameEn + ')',
      qisJson: item.nameEn,
      isShowQis: false
    })
  }
  //目的港focues
  mudFoucus(){
    this.setState({
      isShowmud: true
    },()=>{
      this.portData('')
    })
  }
  // 目的港change
  mudChange(e){
    this.setState({
      mudValue:e.target.value
    },()=>{
      this.portData(this.state.mudValue)
    })
  }
  portData(value){
    axios.get(localAddress+ '/list/cityName.json').then((res) => {
      if(res.data.status === 1){
        var dataList = []
        if(value){
          dataList = res.data.content.filter(val => {
            return val.cityEn.indexOf(value.toUpperCase()) !== -1
          })
        }else{
          if(res.data.content.length > 0){
            dataList = res.data.content
          }  
        }
        if(dataList.length > 0){
          this.setState({
            mudCity: dataList.slice(0,11)
          })
        }else{
          this.setState({
            mudCity: []
          })
        }
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
  //目的港下拉框选择
  mudlick(item){
    this.setState({
      mudValue: item.countryCn + '(' + item.cityEn + ')',
      mudJson: item.cityEn,
      isShowmud: false
    })
  }
  //目的港input离开
  mudBlur(){
    // this.setState({
    //   isShowmud: false
    // })
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
  getDate(){
    axios.get(localAddress+'/list/Dalian_HongKong.json').then((res) => {
      console.log(res,'res')
      if(res.data.status === 1){
        var direct = res.data.content.direct.length > 0 ? res.data.content.direct : []
        var directList = []
        for (let i = 0; i < direct.length; i++) {
          directList.push({
            pathId: direct[i].pathId,
            id: direct[i].id,
            scac: direct[i].scac,
            staticEtdSort: this.getDateTime("mm-dd",direct[i].staticEtdSort),
            staticEtaSort: this.getDateTime("mm-dd",direct[i].staticEtaSort),
            staticEtdDate: direct[i].staticEtdDate ? direct[i].staticEtdDate : '-',
            polTerninal: direct[i].polTerninal,
            podTerninal: direct[i].podTerninal,
            transTime: direct[i].transTime,
            vessel: direct[i].vessel ? direct[i].vessel : '-',
            voyage: direct[i].voyage ? direct[i].voyage : '-',
            sameRoute: direct[i].sameRoute,
            routeCodeList: direct[i].routeCodeList,
            traceStatus: direct[i].traceStatus,
            isLate: direct[i].isLate
          })
        }
        var transit = res.data.content.transit.length > 0 ? res.data.content.transit : []
        var transitList = []
        for (let j = 0; j < transit.length; j++) {
          transitList.push({
            pathId: transit[j].pathId,
            id: transit[j].id,
            scac: transit[j].scac,
            staticEtdSort: this.getDateTime("mm-dd",transit[j].staticEtdSort),
            staticEtaSort: this.getDateTime("mm-dd",transit[j].staticEtaSort),
            staticEtdDate: transit[j].staticEtdDate ? transit[j].staticEtdDate : '-',
            polTerninal: transit[j].polTerninal,
            podTerninal: transit[j].podTerninal,
            transTime: transit[j].transTime,
            vessel: transit[j].vessel ? transit[j].vessel : '',
            voyage: transit[j].voyage ? transit[j].voyage : '',
            sameRoute: transit[j].sameRoute,
            routeCodeList: transit[j].routeCodeList,
            traceStatus: transit[j].traceStatus,
            isLate: transit[j].isLate
          })          
        }
        this.setState({
          direct:directList,
          transit:transitList
        })
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
  getDateTime(fmt,val){
    if(val){
      let date = new Date(val)
      let ret
      let opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "M+": date.getMinutes().toString(),         // 分
          "S+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
      }
      for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
              fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          }
      }
      let a = fmt.split(' ')
      let weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
      let c = weekDay[new Date(Date.parse(a[0])).getDay()]
      let weekDate = c + "(" + fmt + ")"
      return weekDate
    }else{
      return '--'
    }
  }
  //查询
  search(){
    if(this.state.qisValue && this.state.mudValue){

    }else if(!this.state.qisValue){

    }else if(!this.state.mudValue){

    }else if(!this.state.qisValue && !this.state.mudValue){

    }
  }
  componentDidMount(){
    this.getDate()
  }
  render() {
    var { isShowQis, isShowmud, qisCity, mudCity, direct, transit, qisValue, mudValue} = this.state
    return (
      <div className='list'>
        <div className='list_head'>
          <NavBar path={this.props}></NavBar>
        </div>
        <div className='list_content'>
          <div className='list_content_head'>
            <div className="list_content_divIpnut">
              <input placeholder='请输入起始港' className='list_content_input' onFocus={()=>this.qisFoucus()} onBlur={()=>this.qisBlur()} value={qisValue} readOnly/>
              {
                isShowQis ? 
                <div className='list_content_input_div1'>
                  {
                    qisCity.length > 0 ?
                      qisCity.map(item => {
                        return <p className='list_content_input_div1_p' key={item.portCode} onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)} onClick={()=>this.qiClick(item)}>{item.nameCn + '(' + item.nameEn + ')'}</p>
                      })
                      :
                      <p className='list_content_input_zwsj'>无数据</p>
                  }
                </div>
                : ''
              }
            </div>
            <div className='list_content_switch_image'></div>
            <div className="list_content_divIpnut">
              <input placeholder='请输入目的港' className='list_content_input' onFocus={()=>this.mudFoucus()} onChange={(event)=>this.mudChange(event)} onBlur={()=>this.mudBlur()} value={mudValue}/>
              {
                isShowmud ?
                <div className='list_content_input_div1'>
                  {
                    mudCity.length > 0 ?
                      mudCity.map((item,index) =>{
                        return <p className='list_content_input_div1_p' key={item.id + '' + index} onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)} onClick={()=>this.mudlick(item)}>{item.countryCn + '(' + item.cityEn + ')'}</p>
                      })
                    :
                    <p className='list_content_input_zwsj'>无数据</p>
                  }
                </div>
                : ''
              }
            </div>
            <div className='list_content_search' onClick={()=>this.search()}>查询</div>
          </div>
        </div>
        <div className='list_text'>由SHANGHAI(上海)发往TOKYO(东京)共有27组直航服务，93组中转服务</div>
        <div className='list_main'>
            <ul className='list_main_head_ul'>
              <li className='list_main_head_li li_head1'>船期方案</li>
              <li className='list_main_head_li li_head2'>ETD</li>
              <li className='list_main_head_li li_head3'>航程</li>
              <li className='list_main_head_li li_head4'>ETA</li>
              <li className='list_main_head_li li_head5'>头程大船动态</li>
              <li className='list_main_head_li li_head6'>详情</li>
            </ul>
            {
              direct.map(item =>{
                return (
                  <ul className='list_main_data_ul' key={item.id}>
                    <li className='list_main_direct_li direct__head1'>
                      {
                        item.sameRoute.map((sameRoute,sameIndex) =>{
                          return (
                            <div className='direct__head1_p' key={sameRoute.staticId}>
                              <p style={{backgroundImage:`url(${require('../image/list/' + sameRoute.scac + '.png')})`}} className='direct__head1_img'></p>
                              {
                                sameIndex === item.sameRoute.length - 1
                                ? 
                                ""
                                :
                                <span className='direct__head1_span'></span>
                              }
                            </div>
                          )
                        })
                      }
                    </li>
                    <li className='list_main_direct_li direct__head2'>
                      <p className='direct__head_p1'>{item.staticEtdSort}</p>
                      <p className='direct__head_p2'>{item.polTerninal}</p>
                    </li>
                    <li className='list_main_direct_li direct__head3'>
                      <p className='direct__head3_p1'>{item.transTime ? item.transTime + '天' : ''}</p>
                      <p className='direct__head3_p2'></p>
                      <p className='direct__head3_p3'>{item.traceStatus === 0 ? '直达' : '中转'}</p>
                    </li>
                    <li className='list_main_direct_li direct__head4'>
                      <p className='direct__head_p1'>{item.staticEtaSort}</p>
                      <p className='direct__head_p2'>{item.podTerninal}</p>
                    </li>
                    <li className='list_main_direct_li direct__head5'>
                      <div className='direct__head5_div'>
                        <div className='direct__head5_p1'>
                          <p className='direct__head5_p1_img'></p>
                          <p className='direct__head5_p1_p'>ETD: {item.staticEtdDate}</p>
                        </div>
                        <div className='direct__head5_p2'>船名/航次:{item.vessel + '/' + item.voyage}</div>
                      </div>
                    </li>
                    <li className='list_main_direct_li direct__head6'>
                      <p className='direct__head6_p'>详情</p>
                    </li>
                  </ul>
                )
              })
            }
            <div className='list_main_transit_p'>更多中转方案</div>
            {
              transit.map(item =>{
                return (
                  <ul className='list_main_data_ul' key={item.id}>
                    <li className='list_main_direct_li direct__head1'>
                      {
                        item.routeCodeList.map((routeCode,routeIndex) =>{
                          return (
                            <div className='direct__head1_p' key={routeIndex}>
                              <p style={{backgroundImage:`url(${require('../image/list/' + item.scac + '.png')})`}} className='direct__head1_img'></p>
                              {
                                routeIndex === item.routeCodeList.length - 1
                                ? 
                                ""
                                :
                                <span className='direct__head1_span'></span>
                              }
                            </div>
                          )
                        })
                      }
                    </li>
                    <li className='list_main_direct_li direct__head2'>
                      <p className='direct__head_p1'>{item.staticEtdSort}</p>
                      <p className='direct__head_p2'>{item.polTerninal}</p>
                    </li>
                    <li className='list_main_direct_li direct__head3'>
                      <p className='direct__head3_p1'>{item.transTime ? item.transTime + '天' : ''}</p>
                      <p className='direct__head3_p2'></p>
                      <p className='direct__head3_p3'>{item.traceStatus === 0 ? '直达' : '中转'}</p>
                    </li>
                    <li className='list_main_direct_li direct__head4'>
                      <p className='direct__head_p1'>{item.staticEtaSort}</p>
                      <p className='direct__head_p2'>{item.podTerninal}</p>
                    </li>
                    <li className='list_main_direct_li direct__head5'>
                      <div className='direct__head5_div'>
                        <div className='direct__head5_p1'>
                          <p className='direct__head5_p1_img'></p>
                          <p className='direct__head5_p1_p'>ETD: {item.staticEtdDate}</p>
                        </div>
                        <div className='direct__head5_p2'>船名/航次:{item.vessel + '/' + item.voyage}</div>
                      </div>
                    </li>
                    <li className='list_main_direct_li direct__head6'>
                      <p className='direct__head6_p'>详情</p>
                    </li>
                  </ul>
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default List
