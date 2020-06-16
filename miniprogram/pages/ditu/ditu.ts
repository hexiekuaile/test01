import file1 = require("./data");
Page({
  data: {
    markers: file1.markers,
    marker: new file1.Marker(1, '监测', 115.266900, 33.049593, '临泉县环境监测站', '临泉县港口路238号', '0558-6288017', 10),
    controls: [{
      id: 1,
      iconPath: '/images/mk.png',
      position: {
        left: 0,
        top: 300 - 1,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  //初始化
  onLoad: function () {
    this.setData({
      isshow: true,
      //markers: file1.mariks
    });
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
  login: function (event: any) {
    console.log(event)
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