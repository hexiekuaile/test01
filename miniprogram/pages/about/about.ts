/*
 * @Author: yanwei
 * @Date: 2020-06-22 12:20:02
 * @LastEditors: yanwei
 * @LastEditTime: 2020-09-15 17:16:21
 * @Description : 关于页面的代码
 */
import { getAbout } from "./netdata"
import { jumpNav2 } from "../../utils/slide"
import { EXTERNAL_DATA_PATH } from "../../utils/commonData";

Page({
  data: {
    EXTERNAL_DATA_PATH: EXTERNAL_DATA_PATH,//外部数据和图片总路径
    IMG_PATH_PRE: EXTERNAL_DATA_PATH + "img/about/", //图片路径前缀
    ABOUT_JSON_PATH: EXTERNAL_DATA_PATH + "data/about.json", //about信息json文件路径
    map: <{ [key: string]: string | string[] }>{}, //关于信息，键值对，值有文本、图片路径列表
    keys: <string[]>[],
    imgJudge: <boolean[]>[], //对应map键值对，判断值是否为数组，是则为图片，为true，纯属为wxml页面wx:if服务。在about.json文件中，例如： "logo": ["logo.jpg"],
    preImgs: <string[]>[], //所有预览图片路径数组
    eventTouchStart: {}, //滑动手势开始事件
  },

  /**
   * @description: 生命周期函数--监听页面加载
   *  
   * 
   */

  onLoad() {
    this.showLoading();//显示加载进度条
    let iAbout = getAbout(this.data.ABOUT_JSON_PATH);//传递参数，获得IAbout接口对象。也即初始化iAbout对象

    let thiss = this;
    if (!iAbout.valuesCallback)      //判断回调函数不存在，则定义
      iAbout.valuesCallback = function (map: { [key: string]: string | string[] }, keys: string[]): void {
        //定义实现回调的代码，用于网络数据请求后回调
        for (let k of keys) {
          if (map[k] instanceof Array) {
            //在about.json文件中，例如："logo": ["logo.jpg"]
            thiss.data.imgJudge.push(true);
            for (let p of map[k])
              thiss.data.preImgs.push(thiss.data.IMG_PATH_PRE + "PRE" + p); //约定：小图路径前+PRE=预览图路径
          } else thiss.data.imgJudge.push(false);
        }
        thiss.setData({
          map: map,
          keys: keys,
          imgJudge: thiss.data.imgJudge,
          preImgs: thiss.data.preImgs,
        });
        thiss.hideLoading();
      };

    iAbout();//启动IAbout接口对象的基础函数，网络读取各视频信息，有网络请求延迟
  },
  /**
   * @description 页面相关事件处理函数--监听用户滑动开始
   * @param {*} e
   */
  touchStart(e: any) {
    this.setData({
      eventTouchStart: e
    });
  },
  /**
   * 页面相关事件处理函数--监听用户滑动结束
   */
  touchEnd(e: any) {
    jumpNav2("about", this.data.eventTouchStart, e);
  },
  /**
   * 鼠标点击预览图片大图
   */
  previewImg(event: any) {
    let url = this.data.IMG_PATH_PRE + "PRE" + event.currentTarget.dataset.url; //约定：小图路径前+PRE=预览大图路径
    let thiss = this;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: thiss.data.preImgs, // 需要预览的图片http链接列表
    });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      map: <{ [key: string]: string | string[] }>{},
      keys: <string[]>[],
      imgJudge: <boolean[]>[],
      preImgs: <string[]>[],
    });
    this.onLoad(); //再次拉取新数据
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
    wx.stopPullDownRefresh(); //停止下拉刷
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { },

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
});