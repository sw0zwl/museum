import React from 'react';
import Script from 'react-load-script';
//import mapboxgl from 'mapbox-gl'

//mapboxgl.accessToken = 'pk.eyJ1Ijoic3cwendsIiwiYSI6ImNrM2YwdDAzcDAwOXIzb3FrZnY5aXBvN3YifQ.neKXdlR6Tv2byAYavJmEDg';

export const styles = {
    map: { topMargin: '7em' },
    width: { width: '7em' },
    height: { width: '7em' },
    stock: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

class MapApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lng: 123.4547,
          lat: 41.6756,
          zoom: 16.38,
          scriptStatus: 'no'
        };
      }

    handleScriptCreate() {
      this.setState({ scriptLoaded: false })
    }
     
    handleScriptError() {
      this.setState({ scriptError: true })
    }
     
    handleScriptLoad() {
      this.setState({ scriptLoaded: true, scriptStatus: 'yes' })
    }

      componentDidMount() {
      }
    
      render() {
        return (
          <>
            <Script
              url="./lib/config.js"
              onCreate={this.handleScriptCreate.bind(this)}
              onError={this.handleScriptError.bind(this)}
              onLoad={this.handleScriptLoad.bind(this)}
              />
              <Script
              url="./lib/esmap.min.js"
              onCreate={this.handleScriptCreate.bind(this)}
              onError={this.handleScriptError.bind(this)}
              onLoad={this.handleScriptLoad.bind(this)}
            >
              <esmap
                container="container" //渲染dom
                mapDataSrc="defaultOpt.mapDataUrl" //地图数据位置
                mapThemeSrc="defaultOpt.mapThemeUrl" //主题数据位置
                themeID="defaultOpt.themeID"//样式ID
                visibleFloors="all"//更多初始化参数配置请参考https://www.esmap.cn/escopemap/content/cn/develope/map-config.html
                token="sy0museum03"
              />            
            </Script>
          </>
      )
//        return window.open('about:blank').location.href="https://mx-soft.com:65518/BaseMap/BaseMap/basic.html?id=sy_museum_3";
//        return (
///            <div ref={el => this.mapContainer = el} 
//                 className="absolute top right left bottom"  
//                 style={{marginTop: "2em", width: '1180px', height: '730px'}}
//            />
//        );
      }    
}

export default MapApp;
