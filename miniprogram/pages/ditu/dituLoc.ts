import file1 = require("./dataLoc.js");

Page({
  data: {
    // markers: [new file1.Marker(1, '监测', 115.266900, 33.049593, '临泉县环境监测站', '临泉县港口路238号', '0558-6288017', 10)],
    markers: file1.markers,
    marker: new file1.Marker(1, '监测', 115.266900, 33.049593, '临泉县环境监测站', '临泉县港口路238号', '0558-6288017', 10),
    showModalStatus: false,
  },
  //初始化
  onLoad: function () {

  },
  /**
 * 生命周期函数--监听页面显示
 */
  onShow() {
  },
  //点击标记点，显示弹出框
  showModal: function (event: any) {
    this.setData({
      showModalStatus: true,
      marker: this.data.markers[event.markerId - 1]
    })
  },
  //点击页面，隐藏弹出框
  hideModal: function () {
    this.setData({
      showModalStatus: false
    })
  },
  //打电话
  calling: function (event: any) {
    var tel = event.currentTarget.dataset.id;
    wx.makePhoneCall({
      phoneNumber: tel,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  //导航地图
  daohang: function () {
    var marker = this.data.marker;

    wx.openLocation({
      latitude: marker.latitude,
      longitude: marker.longitude,
      scale: marker.scale,
      name: marker.name,
      address: marker.address
    })
  },
})