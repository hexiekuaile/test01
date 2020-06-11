//var externalData = require("data.js");
import file1 = require("./data");
//import file2 = require("./videoURL");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videos: file1.videos,
    videos02: file1.videos,
    showLoadingStatus: true,
    timer: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //this.getVideosURL();
    var that = this
    let t = setInterval(() => {
      let i = that.data.videos.length;
      file1.videos.forEach((v) => {
        if (v.src.length > 10) i--;
      })
      if (i == 0) {
        that.setData({
          showLoadingStatus: false,
          videos: file1.videos
        });
        clearInterval(that.data.timer)
      }
      console.log('定时器')
    }, 100);
    that.setData({
      timer: t
    })
    console.log('onload')
    /* 
        do {
          let i = that.data.videos.length;
          that.data.videos.forEach((v) => {
            if (v.src.length > 10) i--;
          })
          if (i == 0) this.setData({
            showLoadingStatus: false,
            videos: that.data.videos
          });
          console.log(this.data.showLoadingStatus)
        } while (that.data.showLoadingStatus) */
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
    clearInterval(this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {};
  },
  videoErrorCallback(e: any) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  /**
   * 获取几个视频的真实地址
   */
  /*   getVideosURL() {
      var that = this;
      let i = that.data.videos02.length;
      let interfaceURL: string = "https://vv.video.qq.com/getinfo";
  
      that.data.videos02.forEach((v) => {
        //this.getVideoURL(v);
        wx.request({
          url: interfaceURL,
          data: {
            vids: v.vid,
            platform: 101001,
            charge: 0,
            otype: 'json'
          },
          header: {
            'content-type': 'application/json;charset=UTF-8' // 默认值
          },
          method: 'GET',
          dataType: 'json',
          success: function (res) {
            let str: string = res.data as string;
            //用正则表达式
            let url = str.match(/(?<=\[{"url":").*?(?=","vt")/);
            let urll = url ? url[0] : '';
            let fn = str.match(/(?<=,"fn":").*?(?=","fs")/);
            let fnn = fn ? fn[0] : '';
            let fvkey = str.match(/(?<=,"fvkey":").*?(?=","head")/);
            let fvkeyy = fvkey ? fvkey : '';
            //规律url + fn + '?vkey=' + fvkey 
            let src = urll + fnn + "?vkey=" + fvkeyy;
            v.src = src;
            i--;
            if (i == 0) {//表示全部获取真实地址成功
              that.setData({
                videos: that.data.videos02,
                showLoadingStatus: false
              })
            }
          }
        });
  
      });
    }, */

})