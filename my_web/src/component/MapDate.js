import React, { Component } from 'react'
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'

class MapDate extends Component {

    state = {
        mapWidth: '',
        mapHeight: '',
    }
    //监听窗口变化
    resize(){
        var screenWidth = document.documentElement.clientWidth
        var sceenHeight = document.documentElement.clientHeight
        console.log(screenWidth,sceenHeight)
    }
    componentDidMount(){
        this.setState({
            mapWidth: document.documentElement.clientWidth + 'px',
            mapHeight: document.documentElement.clientHeight + 'px'
        })
        window.addEventListener('resize',this.resize)
    }
    componentWillUnmount(){
        window.removeEventListener('resize')
    }
    render() {
        const {mapWidth, mapHeight} = this.state
        return (
            <div id="map" style={{width: mapWidth,height: mapHeight}}>
                <Map center={{lng: 116.402544, lat: 39.928216}} zoom="11">
                    <Marker position={{lng: 116.402544, lat: 39.928216}} />
                    <NavigationControl /> 
                    <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
                </Map>
            </div>
        )
    }
}

export default MapDate
