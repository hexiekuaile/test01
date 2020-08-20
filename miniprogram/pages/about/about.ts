/*
 * @Author: yanwei
 * @Date: 2020-06-22 12:20:02
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-20 14:51:58
 * @Description : 关于页面的代码
 */
import netData = require("../../netData");//从网络读取关于信息的代码
import slide = require("../../slide"); //判断左右滑动的代码

Page({
  data: {
    IMG_PATH_PRE:
      "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/img/about/", //图片路径前缀
    ABOUT_JSON_PATH:
      "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/about.json", //about信息json文件路径
    map: <{ [key: string]: string | string[] }>{}, //关于信息，键值对，值有文本、图片路径列表
    keys: <string[]>[],
    imgJudge: <boolean[]>[], //对应map键值对，判断值是否为数组，是则为图片，为true，纯属为wxml页面wx:if服务。在about.json文件中，例如： "logo": ["logo.jpg"],
    preImgs: <string[]>[], //所有预览图片路径数组
    startX: 0, //通过xy坐标值判断左右滑动
    startY: 0,
  },

  /**
   * @description: 生命周期函数--监听页面加载
   *  
   * 
   */
  
  onLoad() {
    this.showLoading();
    netData.about(this.data.ABOUT_JSON_PATH);
    let thiss = this;
    if (!netData.valueCallback)
      //判断回调函数不存在，则定义
      netData.valueCallback = function (
        map: { [key: string]: string | string[] },
        keys: string[]
      ) {
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
  },
/**
 * @description 页面相关事件处理函数--监听用户滑动开始
 * @param {*} e
 */
touchStart(e: any) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
    });
  },
  /**
   * 页面相关事件处理函数--监听用户滑动结束
   */
  touchEnd(e: any) {
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    slide.slide(
      endX,
      endY,
      this.data.startX,
      this.data.startY,
      "/pages/about/about"
    );
   /*  let url!: string;
    if (turn === "left") url = "/pages/video2/video";
    else if (turn === "right") url = "/pages/ditu/ditu";
    if (!url) return;
    wx.switchTab({ url: url }); //跳转到底部tab 表示的页面前，启动onHide事件 */
  },
  /**
   * 鼠标点击预览图片大图
   */
  previewImg(event: any) {
    let url = this.data.IMG_PATH_PRE + "PRE" + event.currentTarget.dataset.url; //约定：小图路径前+PRE=预览图路径
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
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // clearInterval(this.data.timer)
  },
});
