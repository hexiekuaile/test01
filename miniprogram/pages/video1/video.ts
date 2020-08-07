import util = require("../../utils/netVideo.js");
Page({
  data: {
    videos: <util.Video[]>new Array(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let urlVideoXuanchuanPian: string = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoXuanChuanPian.json';//宣传片json信息地址
    let video = util.getVideo(urlVideoXuanchuanPian);
    video();                              //启动视频混合接口的基础函数，网络读取各视频信息，有网络请求延迟

    //定义视频混合结合的回调函数，
    let thiss = this;
    video.valuesCallback = function (video: util.Video) {  //定义实现回调的代码，用于网络数据请求后回调     
      let i: Number = thiss.data.videos.length;
      let tmp = 'videos[' + i + ']';
      thiss.setData({
        [tmp]: video                                //动态增加数组元素
      })
    }

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
  onShow() {
    //console.log('onshow')
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
    //console.log('下拉刷新')

    /*  dataFromNet.videos.forEach((v) => {
       v.getSrc();
       console.log(v.src)
     })
     this.setData({
       videos: dataFromNet.videos
     }) */
  }
})