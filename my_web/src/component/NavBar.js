  import React from 'react'
  import { NavLink } from  'react-router-dom'
  
  class NavBar extends React.Component {
    render() {
      var currentPath = this.props && this.props.path ? this.props.path.history.location.pathname : ''
      return (
        <div className='navBar_main'>
            <div className='navBar_main'>
            <div className='navBar_mainH'>
                <div className='navBar_head'>
                  <NavLink to='/'><div className='navBar_imageYu'></div></NavLink>
                  <ul className='navBar_mainH_ul'>
                    <NavLink to='/list'>
                        <li className='navBar_mainH_li'>
                          <p className='navBar_mainH_li_p1'>船期</p>
                          {
                            currentPath == '/list' ? <p className='navBar_mainH_li_p2'></p> : <p className='navBar_mainH_li_p3'></p>
                          }
                        </li>
                      </NavLink>
                      <NavLink to='/download'>
                          <li className='navBar_mainH_li'>
                            <p className='navBar_mainH_li_p1'>下载</p>
                            {
                              currentPath == '/download' ? <p className='navBar_mainH_li_p2'></p> : <p className='navBar_mainH_li_p3'></p>
                            }
                        </li>
                      </NavLink>
                      <NavLink to='/'>
                          <li className='navBar_mainH_li'>
                            <p className='navBar_mainH_li_p1'>任务</p>
                            {
                              currentPath == '/' ? <p className='navBar_mainH_li_p2'></p> : <p className='navBar_mainH_li_p3'></p>
                            }
                        </li>
                      </NavLink>
                    </ul>
                  <div className='navBar_login'>
                    <NavLink to='/login'><div className='navBar_login_text'>登录</div></NavLink>
                  </div>
                </div>
            </div>
        </div>
        </div>
      )
    }
  }

  export default NavBar
