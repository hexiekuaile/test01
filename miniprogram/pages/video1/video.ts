/*
 * @Author: yanwei
 * @Date: 2020-04-24 10:06:35
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-13 11:50:35
 * @Description : 宣传片页面代码
 */

import util = require("../../utils/netVideo");
import slide = require("../../utils/slide");//判断左右滑动代码
Page({
  data: {
    URL_VIDEO_JSON: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoXuanChuanPian.json",//宣传片json信息地址
    videos: <util.Video[]>[],//Video对象数组
    ivideo: <util.IVideo>{},//IVideo类型空对象
    numCallback: 0,//回调次数，用于表示全部转换src完成后，隐藏loading动画
    startX: 0,//通过xy坐标值判断左右滑动
    startY: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.showLoading();
    this.data.ivideo = util.getVideo(this.data.URL_VIDEO_JSON);//传递参数，获得IVideo接口对象。也即初始化ivideo对象

    let thiss = this;
    if (!thiss.data.ivideo.valuesCallback)//如果之前未定义，则定义IVideo接口的回调函数，
      thiss.data.ivideo.valuesCallback = function (video: util.Video) {  //定义实现回调的代码，参数是转化vid为src的video对象   
        thiss.data.numCallback = ++thiss.data.numCallback;//记录回调次数，即记录src转换完成的对象数
        let len: Number = thiss.data.videos.length;
        let tmp = 'videos[' + len + ']';  //注意：不是i-1，是i，是在数组尾部增加一个元素
        thiss.setData({
          [tmp]: video   //动态增加数组中的video对象，此video对象src已经完成转换。前端页面实时增加一个视频
        })

        if (thiss.data.numCallback == thiss.data.ivideo.values.length) {//如果对象src全部转换完成
          thiss.hideLoading();
        }
      }

    thiss.data.ivideo(); //启动IVideo接口对象的基础函数，网络读取各视频信息，有网络请求延迟
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      videos: <util.Video[]>[],    //初始化video对象为空
      numCallback: 0//初始化回调次数为0
    })
    this.onLoad();//再次拉取新数据
  },
  /**
     * 页面相关事件处理函数--监听用户滑动开始
     */
  touchStart(e: any) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
    })
  },
  /**
   * 页面相关事件处理函数--监听用户滑动结束
   */
  touchEnd(e: any) {
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    slide.slide(endX, endY, this.data.startX, this.data.startY,"/pages/video1/video");
 /*    let url!: string;
    if (turn === "left")
      url = "/pages/ditu/ditu";
    else if (turn === "right")
      url = "/pages/video2/video";
    if (!url) return;
    wx.switchTab({ url: url });//跳转到底部tab 表示的页面前，启动onHide事件 */
  },
  /**
* 显示加载动画
*/
  showLoading() {
    wx.showNavigationBarLoading();//在当前页面显示导航条加载动画    
    wx.showLoading({//显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      title: '刷新中...',
    })
  },
  /**
  * 隐藏加载动画
  */
  hideLoading() {
    wx.hideLoading();//隐藏loading 提示框         
    wx.hideNavigationBarLoading(); //隐藏导航条加载动画         
    wx.stopPullDownRefresh(); //停止下拉刷
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // clearInterval(this.data.timer)
  },

})