//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 地图标记点简单信息 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
export class MarkerSimple {                               //简单的地图标记点类
  id: number;                                             //序号
  type: string;                                           //类型
  longitude: number;                                      //经度
  latitude: number;                                       //纬度 
  name: string;                                           //名称
  constructor(id: number, type: string, longitude: number, latitude: number, name: string) {
    this.id = id;
    this.type = type;
    this.longitude = longitude;
    this.latitude = latitude;
    this.name = name;
  }
};

interface IMarkersSimple {                                //混合类型的接口，简单的地图标记点接口
  (): void;                                               //接口的基础方法
  values: MarkerSimple[];                                 //简单的地图标记点数组，由基础方法从网络请求数据
  valuesCallback?: (values: MarkerSimple[]) => void;      //可选的接口的回调方法，
};

let urlMarkersSimpleJson: string = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/markersSimple.json';//地图标记点的简单信息，仅仅经纬度、名称

function getMarkersSimple(): IMarkersSimple {              //接口实现，仅实现了基础方法代码，未实现回调方法，
  let func = <IMarkersSimple>function () {    
    wx.request({                                          //网络请求取数据
      url: urlMarkersSimpleJson,                         //简单地图标记点json文件的网络地址
      success(res) {
        func.values = <MarkerSimple[]>res.data;
        
        if (func.valuesCallback) {                        //如果回调方法存在，则运行回调方法
          func.valuesCallback(func.values);
        }
      },
      fail(res) {
        console.log('网络连接错误： '+res.errMsg)
      }
    });
  };
  return func;
};
//声明对象变量
export let markersSimple = getMarkersSimple();
//运行对象的基础方法代码，网络请求数据
//markersSimple();
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 地图标记点简单信息 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 地图标记点 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
export class Marker {                       //地图标记点类
  id: number;
  type: string;//类型
  longitude: number;//经度
  latitude: number;//纬度
  name: string;//名称
  address: string;//地址
  tel: string;//电话
  jiedainengli: number;//接待能力
  info: string;//信息文本
  imgNum: number;//图片数量，图片名称是id+imgNum.png，约定：0≤imgNum≤9，如：11.png，21.png，22.png
  constructor(id: number, type: string, longitude: number, latitude: number, name: string, address: string, tel: string, jiedainengli: number,
    info: string = '', imgNum:number=0) {
    this.id = id;
    this.type = type;
    this.longitude = longitude;
    this.latitude = latitude;
    this.name = name;
    this.address = address;
    this.tel = tel;
    this.jiedainengli = jiedainengli;
    this.info = info;
    this.imgNum = imgNum;

    if(imgNum>9)
      this.imgNum = 9;
    else if (imgNum < 0)
      this.imgNum=0    
  }
};

interface IMarker {                                           //混合类型的接口，地图标记点接口
  (id:number): void;                                         //接口的基础方法
  value: Marker;                                           //地图标记点，由基础方法从网络请求数据
  valueCallback?: (value: Marker) => void;                //可选的接口的回调方法，
};

//地图标记点json文件的地址，形如 https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/marker1.json
let urlMarkersJson: string = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/marker';//地图标记点较多信息，含详细信息 地址、电话、等

function getMarker(): IMarker {                            //接口实现，仅实现了基础方法代码，未实现回调方法，
  let func = <IMarker>function (id: number) {              //网络请求取数据
    wx.request({
      url: urlMarkersJson+id+'.json',                     //简单地图标记点json文件的网络地址
      success(res) {

        func.value = <Marker>res.data;
        if (func.valueCallback) {                          //如果回调方法存在，则运行回调方法
          func.valueCallback(func.value);
        }
      },
      fail(res) {
        console.log('网络连接错误 marker'+id+': '+res.errMsg)
      }
    });
  };
  return func;
};
//声明对象变量
export let marker = getMarker();
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 地图标记点 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑