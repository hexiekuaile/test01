import netData = require("./netData");

Page({
  data: {
    IMG_PATH_PRE: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/img/about/",  //图片路径前缀
    ABOUT_JSON_PATH: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/about.json",//about信息json文件路径
    map: <{ [key: string]: string | string[] }>{},//关于信息，键值对，值有文本、图片路径列表
    keys: <string[]>{},
    mapImgJudge: <boolean[]>[]//判断是否为图片路径数组，对应map键值对，如果map键值对是图片路径数组，则值为true，纯属为wxml页面wx:if服务
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    netData.about(this.data.ABOUT_JSON_PATH);
    let thiss = this;
    netData.valueCallback = function (map: { [key: string]: string | string[] }, keys: string[]) {  //定义实现回调的代码，用于网络数据请求后回调

      for (let k of keys) {
        if (map[k] instanceof Array) thiss.data.mapImgJudge.push(true);
        else thiss.data.mapImgJudge.push(false);
        //console.log( thiss.data.mapImgJudge[k])
      }
      thiss.setData({
        map: map,
        keys: keys,
        mapImgJudge: thiss.data.mapImgJudge
      })



    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
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
  previewImg() {
    /*     wx.previewImage({
          current: "/images/设施开放栏目.png",// 当前显示图片的http链接
          urls: ["/images/设施开放栏目.png"]// 需要预览的图片http链接列表
        }) */
  }
})