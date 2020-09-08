import React from 'react';

//css文件引用
import './css/app.css'
import './css/home.css'
import './css/navBar.css'
import './css/login.css'
import './css/download.css'
import './css/list.css'
import './css/details.css'
import './css/map.css'

class App extends React.Component{
  render(){
    return (
      <div className='app'>
        {this.props.children}
    </div>
    )
  }
}

export default App
