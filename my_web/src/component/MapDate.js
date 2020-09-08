import React, { Component } from 'react'
import {Map, Marker, NavigationControl, MapTypeControl, ScaleControl, OverviewMapControl, InfoWindow, Circle, Polyline, Polygon, MarkerList, MapvLayer, MapvglView, MapvglLayer, Road, Boundary, TrafficLayer} from 'react-bmap'

class MapDate extends Component {

    state = {
        mapWidth: '', //窗口宽
        mapHeight: '', //窗口高
        isZoIn: true, //true放大  false 缩小
    }
    //放大缩小
    bigSmall(){
        this.setState({
            isZoIn:!this.state.isZoIn
        },()=>{
            this.resize()
        })
    }
    //监听窗口变化
    resize = () => {
        var screenWidth = document.documentElement.clientWidth
        var sceenHeight = document.documentElement.clientHeight
        if(screenWidth < 1200){
            screenWidth = 1200
        }
        if(!this.state.isZoIn){ //缩小的时候
            sceenHeight = 40
        }
        this.setState({
            mapWidth: screenWidth + 'px',
            mapHeight: sceenHeight + 'px'
        })
    }
    componentDidMount(){
        var screenWidth = document.documentElement.clientWidth
        var sceenHeight = document.documentElement.clientHeight
        if(!this.state.isZoIn){ //缩小的时候
            sceenHeight = 40
        }
        this.setState({
            mapWidth: screenWidth + 'px',
            mapHeight: sceenHeight + 'px'
        })
        window.addEventListener('resize',this.resize)
    }
    componentWillUnmount(){
        window.removeEventListener('resize')
    }
    render() {
        const {mapWidth, mapHeight, isZoIn} = this.state
        return (
            <div id="map" style={{width: mapWidth,height: mapHeight}}>
                <Map center={{lng: 116.402544, lat: 39.928216}} zoom="11" style={{width: mapWidth,height: mapHeight}}>
                    {/* 点 */}
                    <Marker position={{lng: 116.402544, lat: 39.928216}} />

                    
                    {/* 弹出窗 */}
                    {/* <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="信息窗口内容" title="信息窗口标题"/> */}


                    {/* 圆 范围 */}
                    <Circle
                        center={{lng: 116.403119, lat: 39.929543}} 
                        fillColor='blue' 
                        strokeColor='white' 
                        radius="3000"
                    />


                    {/* 折线 */}
                    {/* <Polyline
                        strokeColor='green' 
                        path={[
                            {lng: 116.403119, lat: 39.929543},
                            {lng: 116.265139, lat: 39.978658},
                            {lng: 116.217996, lat: 39.904309}
                        ]}
                    /> */}


                    {/* 多边形 */}
                    {/* <Polygon 
                        fillColor='red' 
                        strokeColor='yellow' 
                        path={[
                            {lng: 116.442519, lat: 39.945597},
                            {lng: 116.484488, lat: 39.905315},
                            {lng: 116.443094, lat: 39.886494},
                            {lng: 116.426709, lat: 39.900001}
                        ]}
                    /> */}


                    {/* 地图自带的控制 */}
                    {/* <NavigationControl />  */}


                    {/* 模式 地图 卫星 三维*/}
                    {/* <MapTypeControl /> */}


                    {/* 默认位于地图左下方，显示地图的比例关系  */}
                    {/* <ScaleControl /> */}


                    <OverviewMapControl />
                    <MarkerList 
                        data={[
                            {
                                text: "长沙大道",
                                location: "113.22183,28.191712"
                            },
                            {
                                text: "机场高速",
                                location: "113.057565,28.175208"
                            }
                        ]} 
                        fillStyle="#ff3333" 
                        animation={true} 
                        isShowShadow={false} 
                        multiple={true} 
                        autoViewport={true}
                    />
                    <MapvLayer data={[]} options={{}} />
                    <MapvglView effects={['bloom']}>
                    {/* <MapvglLayer
                        type="LineLayer"
                        data={data}
                        options={{
                            blend: 'lighter',
                            width: 10,
                            color: 'rgb(255, 153, 0, 0.6)'
                        }}
                    /> */}
                    </MapvglView>
                    <Road roadPath={['116.330484,40.031406,116.33124,40.029496,116.33124,40.029496']}/>
                    <Boundary data={[
                        {
                            name: '海淀区',
                            count: 20
                        },
                        {
                            name: '朝阳区',
                            count: 10
                        }
                    ]}/>
                    <TrafficLayer />
                </Map>
                {/* <div className='mapBigSmall' onClick={()=>this.bigSmall()}>{isZoIn ? '缩小' : '放大'}</div> */}
            </div>
        )
    }
}

export default MapDate
