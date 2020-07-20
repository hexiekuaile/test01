"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file1 = require("./dataLoc.js");
Page({
    data: {
        markers: file1.markers,
        marker: new file1.Marker(1, '监测', 115.266900, 33.049593, '临泉县环境监测站', '临泉县港口路238号', '0558-6288017', 10),
        showModalStatus: false,
    },
    onLoad: function () {
    },
    onShow: function () {
    },
    showModal: function (event) {
        this.setData({
            showModalStatus: true,
            marker: this.data.markers[event.markerId - 1]
        });
    },
    hideModal: function () {
        this.setData({
            showModalStatus: false
        });
    },
    calling: function (event) {
        var tel = event.currentTarget.dataset.id;
        wx.makePhoneCall({
            phoneNumber: tel,
            success: function () {
                console.log("拨打电话成功！");
            },
            fail: function () {
                console.log("拨打电话失败！");
            }
        });
    },
    daohang: function () {
        var marker = this.data.marker;
        wx.openLocation({
            latitude: marker.latitude,
            longitude: marker.longitude,
            scale: marker.scale,
            name: marker.name,
            address: marker.address
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dUxvYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHVMb2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBdUM7QUFFdkMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBRUosT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQztRQUN0RyxlQUFlLEVBQUUsS0FBSztLQUN2QjtJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFJRCxNQUFNO0lBQ04sQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLEtBQVU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUM5QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUUsVUFBVSxLQUFVO1FBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsV0FBVyxFQUFFLEdBQUc7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDeEIsQ0FBQztZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3hCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO1FBQ1AsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFOUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWxlMSA9IHJlcXVpcmUoXCIuL2RhdGFMb2MuanNcIik7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgLy8gbWFya2VyczogW25ldyBmaWxlMS5NYXJrZXIoMSwgJ+ebkea1iycsIDExNS4yNjY5MDAsIDMzLjA0OTU5MywgJ+S4tOazieWOv+eOr+Wig+ebkea1i+ermScsICfkuLTms4nljr/muK/lj6Pot68yMzjlj7cnLCAnMDU1OC02Mjg4MDE3JywgMTApXSxcbiAgICBtYXJrZXJzOiBmaWxlMS5tYXJrZXJzLFxuICAgIG1hcmtlcjogbmV3IGZpbGUxLk1hcmtlcigxLCAn55uR5rWLJywgMTE1LjI2NjkwMCwgMzMuMDQ5NTkzLCAn5Li05rOJ5Y6/546v5aKD55uR5rWL56uZJywgJ+S4tOazieWOv+a4r+WPo+i3rzIzOOWPtycsICcwNTU4LTYyODgwMTcnLCAxMCksXG4gICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZSxcbiAgfSxcbiAgLy/liJ3lp4vljJZcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbiAgLyoqXG4gKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICovXG4gIG9uU2hvdygpIHtcbiAgfSxcbiAgLy/ngrnlh7vmoIforrDngrnvvIzmmL7npLrlvLnlh7rmoYZcbiAgc2hvd01vZGFsOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzaG93TW9kYWxTdGF0dXM6IHRydWUsXG4gICAgICBtYXJrZXI6IHRoaXMuZGF0YS5tYXJrZXJzW2V2ZW50Lm1hcmtlcklkIC0gMV1cbiAgICB9KVxuICB9LFxuICAvL+eCueWHu+mhtemdou+8jOmakOiXj+W8ueWHuuahhlxuICBoaWRlTW9kYWw6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZVxuICAgIH0pXG4gIH0sXG4gIC8v5omT55S16K+dXG4gIGNhbGxpbmc6IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgdmFyIHRlbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgIHBob25lTnVtYmVyOiB0ZWwsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5oiQ5Yqf77yBXCIpXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaLqOaJk+eUteivneWksei0pe+8gVwiKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8v5a+86Iiq5Zyw5Zu+XG4gIGRhb2hhbmc6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWFya2VyID0gdGhpcy5kYXRhLm1hcmtlcjtcblxuICAgIHd4Lm9wZW5Mb2NhdGlvbih7XG4gICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlLFxuICAgICAgc2NhbGU6IG1hcmtlci5zY2FsZSxcbiAgICAgIG5hbWU6IG1hcmtlci5uYW1lLFxuICAgICAgYWRkcmVzczogbWFya2VyLmFkZHJlc3NcbiAgICB9KVxuICB9LFxufSkiXX0=