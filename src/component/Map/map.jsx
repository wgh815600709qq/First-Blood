
import React, { Component } from 'react';
import './map.less';
import { Button } from 'antd'
import store from '../../redux/Store/index.js'
import {isLoading, notLoading} from '../../redux/Actions/global-loading.js'
class Map extends Component {
    constructor(props) {
        super(props)
        this.isMapScriptLoaded = false // 是否已经加载好map第三方库
        this.hadRenderCity = false // 是否已经渲染好城市
        this.state = {
            isOpen: false,
            info: ''
        }
        this.loadMapScript = this.loadMapScript.bind(this);
        this.closeMap = this.closeMap.bind(this);
    }
    loadMapScript() {
        store.dispatch(isLoading)
        var me = this
        function renderMap() {
            var BMap = window.BMap
            var map = new BMap.Map("container")
            var geolocation = new BMap.Geolocation()
            geolocation.getCurrentPosition(function (r) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                var currentLat = r.point.lat;
                var currentLon = r.point.lng;
                var pt = new BMap.Point(currentLon, currentLat);
                map.centerAndZoom(pt, 15);
                map.enableScrollWheelZoom(true)
                var geoc = new BMap.Geocoder();
                geoc.getLocation(pt, function (rs) {
                    var addComp = rs.addressComponents;
                    var city = addComp.city;
                    var addComp = rs.addressComponents;
                    var texts = addComp.district + "-" + addComp.street + "-" + addComp.streetNumber;
                    //获取地理位置成功，跳转
                    if (!me.hadRenderCity) {
                        me.setState({
                            info: '城市:' + city + ',' + texts
                        })
                        me.hadRenderCity = true
                    }
                    store.dispatch(notLoading)
                })

            })
        }
        if (this.isMapScriptLoaded) {
            renderMap()
            return
        }
        var head = document.head;
        var script = document.createElement('script');
        head.appendChild(script)
        // script.src = 'http://api.map.baidu.com/api?v=2.0&ak=iG8pPtKhGEktLIlZqgF5DojEKNyr0Et5';
        script.src = 'http://api.map.baidu.com/getscript?v=2.0&ak=iG8pPtKhGEktLIlZqgF5DojEKNyr0Et5&services=&t=20180521160403';
        script.onload = function () {
            console.log('3')
            me.isMapScriptLoaded = true
            renderMap()
        }
    }

    render() {
        const { isOpen } = this.props
        console.log('isOpen111', isOpen)
        const MapContainer =
            <div className="map-wrapper">
                <h1>百度地图
                    <span className="smallfont">{this.state.info}</span>
                    <Button onClick={this.closeMap}>关闭</Button>
                </h1>
                <div id="container"></div>
            </div>
        return (
            <div>
                {(isOpen && MapContainer) || ''}
            </div >
        );
    }
    // 关闭地图
    closeMap() {
        this.props.onChange(false);
    }
    componentDidUpdate() {
        console.log('props', this.props)
        const { isOpen } = this.props
        console.log('isOpen', isOpen)
        if (isOpen) {
            this.loadMapScript()
        }

    }

}

export default Map;
