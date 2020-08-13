/*
 * @Author: yanwei
 * @Date: 2020-04-18 20:00:03
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-13 11:49:04
 * @Description : 地图页面代码
 */

import dataFromNet = require("./dataFromNet"); //导入请求网络数据代码文件

Page({
  data: {
    markersSimple: <dataFromNet.MarkerSimple[]>[], //初始化地图标记点简单信息数组，空数组，页面正常显示地图，回调后，自动在地图上显示标记点，用户感觉不到延迟
    marker: <dataFromNet.Marker | undefined>undefined, //被点击的地图标记点，初始化为空
    markers: <dataFromNet.Marker[]>[], //所有地图标记点详细信息
    showModalStatus: false, //显示详细信息标志    
  },
  /**
   * 生命周期函数--监听页面加载
   */

onLoad() {
    //页面加载，先正常加载地图，
    this.showLoading();
    dataFromNet.markersSimple(); //运行markersSimple对象的基础方法，其内部的请求网络数据代码是异步、延迟的
    //所以无需判断dataFromNet.markersSimple.values是否存在、再赋值给markersSimple，可直接定义和使用回调
    let thiss = this; //必须暂存this，否则在回调代码中的this不是此this了
    dataFromNet.markersSimple.valuesCallback = function (
      data: dataFromNet.MarkerSimple[]
    ) {
      //定义实现回调的代码，用于网络数据请求后回调
      thiss.setData({
        //请求到网络数据后，设置地图标记点简单信息数组，地图上立即显示标记点，不必要显示加载动画，让用户无感延迟
        markersSimple: data,
      });

      thiss.hideLoading(); //隐藏加载动画
    };
  }, 

  /**
   * 显示详细信息框
   */
  showModal: function (event: any) {
    var id = event.markerId; //用户点击的地图标记点的id

    for (let v of this.data.markers) {
      //先判断被点击的地图点的详细信息是否在数组中，如在，则暂存到m
      if (id == v.id) {
        this.setData({
          marker: v,
          showModalStatus: true,
        });
        break;
      }
    }
    if (!this.data.marker) {
      //如不在数组中，则网络请求数据，再存到数组中，下次点击，读取数组，不在网络请求
      this.showLoading(); //显示加载动画

      if (!dataFromNet.marker.valueCallback) {
        //如果之前没有定义回调方法
        let thiss = this;
        dataFromNet.marker.valueCallback = function (
          value: dataFromNet.Marker
        ) {
          //定义实现回调的代码，用于网络数据请求后回调
          thiss.data.markers.push(value);
          thiss.setData({
            marker: value,
            showModalStatus: true,
          });

          thiss.hideLoading(); //隐藏加载动画
        };
      }
      dataFromNet.marker(id); //启动地图标记点接口基础方法，请求标记点详细的网络数据
    }
  },

  /**
   *隐藏对话框
   *
   */
  hideModal() {
    //点击页面，隐藏弹出框
    this.setData({
      marker: undefined, //把标记点设置为空
      imgs: <String[]>[],
      showModalStatus: false,
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
    let v = this.data.marker as dataFromNet.Marker;
    wx.openLocation({
      latitude: v.latitude,
      longitude: v.longitude,
      name: v.name,
      address: v.address,
    });
    this.data.marker = undefined;
  },

  /**
   * 刷新地图标记点数据
   */
  shuaxin() {
    this.setData({
      markersSimple: <dataFromNet.MarkerSimple[]>[],
      marker: <dataFromNet.Marker | undefined>undefined,
      markers: <dataFromNet.Marker[]>[],
      showModalStatus: false,
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
