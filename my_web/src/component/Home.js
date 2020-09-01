import React from 'react'
import NavBar from '../component/NavBar'
class Home extends React.Component {
    render() {
      return (
        <div className='home_main'>
          <div className='home_head'>
            <NavBar></NavBar>
            <div className='home_head_text'>
                <p className='home_text_p1'>鲸准API服务</p>
                <p className='home_text_p1'>鲸准丰富的API服务，方便您快速构建自己的智能化航运！</p>
                <p className='home_text_p1'>在线申请</p>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home
