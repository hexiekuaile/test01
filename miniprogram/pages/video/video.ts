//var externalData = require("data.js");
import file1 = require("./data");
import file2 = require('./data2')
//import file2 = require("./videoURL");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //videos: file1.videos,
    // videos02: file1.videos,
    showLoadingStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('onLoad')
    //this.getVideosURL();
    let that = this
    that.setData({
      videos: file1.videos
    });
    file2.getFile();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onshow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // clearInterval(this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('下拉刷新')
    file1.videos.forEach((v) => {
      v.getSrc();
      console.log(v.src)
    })
    this.setData({
      videos: file1.videos
    })
  }
})