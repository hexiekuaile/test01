Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["rtmp://video.mee.gov.cn/masvod/public/2018/11/27/20181127_1675312b286_r27_800k.mp4"]
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(this.data.list.length)
    console.log(this.data.list[0])
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
  }
})