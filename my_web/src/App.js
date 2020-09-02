import React from 'react';

//css文件引用
import './css/app.css'
import './css/home.css'
import './css/navBar.css'

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
