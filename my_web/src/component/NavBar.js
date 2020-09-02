  import React from 'react'
  import { NavLink } from  'react-router-dom'
  class NavBar extends React.Component {
    
    render() {
      return (
        <div className='navBar_main'>
            <div className='navBar_main'>
            <div className='navBar_mainH'>
                <div className='navBar_head'>
                <NavLink to='/'><div className='navBar_imageYu'></div></NavLink>
                <div className='navBar_login'>
                    <div className='navBar_login_text'>登录</div>
                </div>
                </div>
            </div>
        </div>
        </div>
      )
    }
  }

  export default NavBar
