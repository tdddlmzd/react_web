import React from 'react'
import NavBar from '../component/NavBar'

class List extends React.Component {
  render() {
    return (
      <div className='list'>
        <div className='list_head'>
          <NavBar path={this.props}></NavBar>
        </div>
      </div>
    )
  }
}

export default List
