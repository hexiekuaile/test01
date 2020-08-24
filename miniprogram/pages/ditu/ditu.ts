/*
 * @Author: yanwei
 * @Date: 2020-04-18 20:00:03
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-24 16:28:29
 * @Description : 地图页面代码
 */

//import dataFromNet = require("./dataFromNet"); //导入请求网络数据代码文件
//import * as dataFromNet from "./dataFromNet"
Page({
  data: {
    markersSimple: <MarkerSimple[]>[], //初始化地图标记点简单信息数组，空数组，页面正常显示地图，回调后，自动在地图上显示标记点，用户感觉不到延迟
    marker!: <Marker | null>null, //被点击的地图标记点，初始化为空
    markers: <Marker[]>[], //所有地图标记点详细信息
    isShowModal: false, //是否显示模态对话框，即详细信息框    
  },
  /**
   * 生命周期函数--监听页面加载
   */

onLoad() {
    //页面加载，先正常加载地图，
    this.showLoading();
    markersSimple(); //运行markersSimple对象的基础方法，其内部的请求网络数据代码是异步、延迟的
    //所以无需判断dataFromNet.markersSimple.values是否存在、再赋值给markersSimple，可直接定义和使用回调
    let thiss = this; //必须暂存this，否则在回调代码中的this不是此this了
    markersSimple.valuesCallback = function (
      data: MarkerSimple[]
    ) {
      //定义实现回调的代码，用于网络数据请求后回调
      thiss.setData({
        //请求到网络数据后，设置地图标记点简单信息数组，地图上立即显示标记点，不必要显示加载动画，让用户无感延迟
        markersSimple: data,
      });

      thiss.hideLoading(); //隐藏加载动画
    };

    //额外的，调试信息
  wx.getSystemInfo({
    success (res) {
      console.log('设备品牌: '+res.brand)
      console.log('设备型号: '+res.model)
      console.log('微信版本号: '+res.version)
      console.log('操作系统及版本: '+res.system)
      console.log('客户端平台: '+res.platform)
      console.log('客户端基础库版本: '+res.SDKVersion)
    }})

  }, 

  /**
   * 显示详细信息框
   */
  showModal: function (event: any) {
    let id = event.markerId; //用户点击的地图标记点的id

    for (let v of this.data.markers) { //先判断被点击的地图点的详细信息是否在数组中，如在，则暂存到m
      if (id == v.id) {
        this.setData({
          marker: v,
          isShowModal: true,
        });    
        break;
      }
    }

    if (!this.data.marker) { //如不在数组中，则网络请求数据，再存到数组中，下次点击，读取数组，不在网络请求
      this.showLoading(); //显示加载动画
      if (!marker.valueCallback) {  //如果之前没有定义回调方法
        let thiss = this;
        marker.valueCallback = function (value: Marker) { //定义实现回调的代码，用于网络数据请求后回调
          thiss.data.markers.push(value);
          thiss.setData({
            marker: value,
            isShowModal: true,
          });       

          thiss.hideLoading(); //隐藏加载动画
        };
      }
      marker(id); //启动地图标记点接口基础方法，请求标记点详细的网络数据
    }
    
  },

  /**
   *隐藏对话框
   *
   */
  hideModal() {
    //点击页面，隐藏弹出框
    this.setData({
      marker:  <Marker | null>null, //把标记点设置为空
      imgs: <String[]>[],
      isShowModal: false,
    });
  },

  /**
   *拨打电话
   *
   * @param {*} event
   */
  calling(event: any) {
    //打电话
    var tel = event.currentTarget.dataset.id;
    wx.makePhoneCall({
      phoneNumber: tel,
      success: function () {
        //console.log("拨打电话成功！")
      },
      fail: function () {
        //console.log("拨打电话失败！")
      },
    });
  },
  /**
   * 导航
   */
  daohang() {
    if (!this.data.marker) return;
    let v = this.data.marker as Marker;
    wx.openLocation({
      latitude: v.latitude,
      longitude: v.longitude,
      name: v.name,
      address: v.address,
    });
    this.data.marker = null;
  },

  /**
   * 刷新地图标记点数据
   */
  shuaxin() {
    this.setData({
      markersSimple: <MarkerSimple[]>[],
      marker: <Marker | null>null,
      markers: <Marker[]>[],
      isShowModal: false,
    });
    this.onLoad();
  },
  /**
   * 显示加载动画
   */
  showLoading() {
    wx.showNavigationBarLoading(); //在当前页面显示导航条加载动画
    wx.showLoading({
      //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      title: "刷新中...",
    });
  },
  /**
   * 隐藏加载动画
   */
  hideLoading() {
    wx.hideLoading(); //隐藏loading 提示框
    wx.hideNavigationBarLoading(); //隐藏导航条加载动画
    //wx.stopPullDownRefresh(); //停止下拉刷
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    //生命周期函数--监听页面显示
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},
});

////////////////待模块化代码/////////////////////////
class MarkerSimple {                               //简单的地图标记点类
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

const URL_MARKERSSIMPLE_JSON: string = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/markersSimple.json';//地图标记点的简单信息，仅仅经纬度、名称

function getMarkersSimple(): IMarkersSimple {              //接口实现，仅实现了基础方法代码，未实现回调方法，
  let func = <IMarkersSimple>function () {
    wx.request({                                          //网络请求取数据
      url: URL_MARKERSSIMPLE_JSON,                         //简单地图标记点json文件的网络地址
      success(res) {
        func.values = <MarkerSimple[]>res.data;

        if (func.valuesCallback) {                        //如果回调方法存在，则运行回调方法
          func.valuesCallback(func.values);
        }
      },
      fail(res) {
        console.log('markersSimple网络连接错误： ' + res.errMsg)
      }
    });
  };
  return func;
};
//声明对象变量
let markersSimple = getMarkersSimple();
//运行对象的基础方法代码，网络请求数据
//markersSimple();

const URL_PATH_PRE_IMG: string = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/img/';//地图标记点代表的开放单位照片url前缀

class Marker {                       //地图标记点类
  id: number;
  type: string;//类型
  longitude: number;//经度
  latitude: number;//纬度
  name: string;//名称
  address: string;//地址
  tel: string;//电话
  jiedainengli: number;//接待能力
  imgNum: number;//图片数量，图片名称是id+imgNum.png，约定：0≤imgNum≤9，如：11.png，21.png，22.png
  imgsURL: string[];//开放单位照片数组
  info: string;//信息文本
  constructor(id: number, type: string, longitude: number, latitude: number, name: string, address: string, tel: string, jiedainengli: number, imgNum: number = 0, imgsURL: string[] = <string[]>[],
    info: string = '') {
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
    this.imgsURL = imgsURL;

    if (imgNum > 9)
      this.imgNum = 9;
    else if (imgNum < 0)
      this.imgNum = 0

    if (imgsURL.length == 0 && imgNum > 0) //设置单位信息中的图片
      for (let i = 0; i < imgNum; i++) {
        let u = URL_PATH_PRE_IMG + id + i + '.jpg';//约定：图片路径
        this.imgsURL.push(u);
      }
  }
};

interface IMarker {                                           //混合类型的接口，地图标记点接口
  (id: number): void;                                         //接口的基础方法
  value: Marker;                                           //地图标记点，由基础方法从网络请求数据
  valueCallback?: (value: Marker) => void;                //可选的接口的回调方法，
};

//地图标记点json文件的地址，形如 https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/marker1.json
const URL_MARKERS_JSON: string = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/marker';//地图标记点较多信息，含详细信息 地址、电话、等

function getMarker(): IMarker {                            //接口实现，仅实现了基础方法代码，未实现回调方法，
  let func = <IMarker>function (id: number) {              //网络请求取数据
    wx.request({
      url: URL_MARKERS_JSON + id + '.json',                 //约定：简单地图标记点json文件的网络地址
      success(res) {

        func.value = <Marker>res.data;                    //自动装配，但没有启动类构建器  

        if (func.value.imgNum > 9)
          func.value.imgNum = 9;
        else if (func.value.imgNum < 0)
          func.value.imgNum = 0

        func.value.imgsURL = <string[]>[];              //初始化图片路径数组

        if (func.value.imgNum > 0 && func.value.imgsURL.length == 0) //设置单位信息中的图片
          for (let i = 1; i < func.value.imgNum + 1; i++) {
            let u = URL_PATH_PRE_IMG + id + i + '.jpg';
            func.value.imgsURL.push(u);
          }
        if (func.valueCallback) {                          //如果回调方法存在，则运行回调方法
          func.valueCallback(func.value);
        }
      },
      fail(res) {
        console.log('地图定位点详细信息，网络连接错误 id=' + id + ' : ' + res.errMsg)
      }
    });
  };
  return func;
};
//声明对象变量
let marker = getMarker();

