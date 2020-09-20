/*
 * @Author: yanwei
 * @Date: 2020-04-18 20:00:03
 * @LastEditors: yanwei
 * @LastEditTime: 2020-09-16 15:28:55
 * @Description : 地图页面代码
 */
import * as netdata from "./netdata";
import * as slide from "../../utils/slide";
import { EXTERNAL_DATA_PATH } from "../../utils/commonData";

Page({
  data: {
    EXTERNAL_DATA_PATH: EXTERNAL_DATA_PATH,//外部数据和图片总路径
    markersSimple: <netdata.MarkerSimple[]>[], //初始化地图标记点简单信息数组，空数组，页面正常显示地图，回调后，自动在地图上显示标记点，用户感觉不到延迟
    marker!: <netdata.Marker | null>null, //被点击的地图标记点，初始化为空
    markers: <netdata.Marker[]>[], //所有地图标记点详细信息
    isShowModal: false, //是否显示模态对话框，即详细信息框   
    dialogClass: "dialog",//模式对话框css类名
    eventTouchStart: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad() {
    //页面加载，先正常加载地图，
    this.showLoading();
    netdata.markersSimple(); //运行markersSimple对象的基础方法，其内部的请求网络数据代码是异步、延迟的
    //所以无需判断dataFromNet.markersSimple.values是否存在、再赋值给markersSimple，可直接定义和使用回调
    let thiss = this; //必须暂存this，否则在回调代码中的this不是此this了
    netdata.markersSimple.valuesCallback = function (
      data: netdata.MarkerSimple[]
    ) {
      //定义实现回调的代码，用于网络数据请求后回调
      thiss.setData({
        //请求到网络数据后，设置地图标记点简单信息数组，地图上立即显示标记点，不必要显示加载动画，让用户无感延迟
        markersSimple: data,
      });

      thiss.hideLoading(); //隐藏加载动画
    };
    //额外的，调试信息
    /*  wx.getSystemInfo({
       success (res) {
         console.log('设备品牌: '+res.brand)
         console.log('设备型号: '+res.model)
         console.log('微信版本号: '+res.version)
         //console.log('操作系统及版本: '+res.system)
         console.log('客户端平台: '+res.platform)
         console.log('客户端基础库版本: '+res.SDKVersion)
       }}) */

    /*    var authUrl = `http://api.189.cn/ChinaTelecom/listFiles.action`;
       wx.request({                                          //网络请求取数据
        url: authUrl,                         //简单地图标记点json文件的网络地址
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log('错误： ' + res.errMsg)
        }
      }); */
  },

  /**
   * 点击地图定位点，显示详细信息模式对话框
   */
  showDialog: function (event: any) {
    this.showLoading(); //显示加载动画
    let id = event.markerId; //用户点击的地图标记点的id
    for (let v of this.data.markers) { //先判断被点击的地图点的详细信息是否在数组中，如在，则暂存到m
      if (id == v.id) {
        this.setData({
          marker: v,
          isShowModal: true,
          //dialogClass: "dialogUp",
        });
        this.hideLoading(); //隐藏加载动画
        this.setData({
          dialogClass: "dialogUp",
        });
        break;
      }
    }

    if (!this.data.marker) { //如不在数组中，则网络请求数据，再存到数组中，下次点击，读取数组，不在网络请求

      if (!netdata.marker.valueCallback) {  //如果之前没有定义回调方法
        let thiss = this;
        netdata.marker.valueCallback = function (value: netdata.Marker) { //定义实现回调的代码，用于网络数据请求后回调
          thiss.data.markers.push(value);
          thiss.setData({
            marker: value,
            isShowModal: true,
            //dialogClass: "dialogUp",
          });

          thiss.hideLoading(); //隐藏加载动画          
          thiss.setData({
            dialogClass: "dialogUp",
          });
        };
      }
      netdata.marker(id); //启动地图标记点接口基础方法，请求标记点详细的网络数据
    }

  },

  /**
   *点击地图，隐藏对话框
   *
   */
  hideDialog() {
    //点击页面，隐藏模式对话框
    if (this.data.dialogClass === "dialog") return;
    let c = this.data.dialogClass === "dialogUp" ? "dialogDown" : "dialog";
    this.setData({
      marker: <netdata.Marker | null>null, //把标记点设置为空
      imgs: <String[]>[],
      dialogClass: c,
      isShowModal: true,
    });
  },
  /**
    * @description 页面相关事件处理函数--监听用户滑动开始
    * @param {*} e
    */
  touchStart(e: any) {
    this.data.eventTouchStart = e
    /*  this.setData({
     }); */
  },
  /**
   * 页面相关事件处理函数--监听用户滑动结束
   */
  touchEnd(e: any) {
    // console.log('pp')
    // console.log(this.data.eventTouchStart)
    // console.log(e)
    let way: string = slide.slideWay(this.data.eventTouchStart, e);
    if (!way) return;
    if (way.indexOf("下滑 快速") > -1)
      this.hideDialog();
    else slide.jumpNav("ditu", way)
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
    let v = this.data.marker as netdata.Marker;
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
      markersSimple: <netdata.MarkerSimple[]>[],
      marker: <netdata.Marker | null>null,
      markers: <netdata.Marker[]>[],
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() { },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    //生命周期函数--监听页面显示
  },
});
