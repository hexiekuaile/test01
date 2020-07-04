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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBdUM7QUFDdkMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBRUosT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQztRQUN0RyxlQUFlLEVBQUUsS0FBSztLQUN2QjtJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFJRCxNQUFNO0lBQ04sQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLEtBQVU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUM5QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUUsVUFBVSxLQUFVO1FBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsV0FBVyxFQUFFLEdBQUc7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDeEIsQ0FBQztZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3hCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO1FBQ1AsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFOUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWxlMSA9IHJlcXVpcmUoXCIuL2RhdGFMb2MuanNcIik7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIC8vIG1hcmtlcnM6IFtuZXcgZmlsZTEuTWFya2VyKDEsICfnm5HmtYsnLCAxMTUuMjY2OTAwLCAzMy4wNDk1OTMsICfkuLTms4nljr/njq/looPnm5HmtYvnq5knLCAn5Li05rOJ5Y6/5riv5Y+j6LevMjM45Y+3JywgJzA1NTgtNjI4ODAxNycsIDEwKV0sXG4gICAgbWFya2VyczogZmlsZTEubWFya2VycyxcbiAgICBtYXJrZXI6IG5ldyBmaWxlMS5NYXJrZXIoMSwgJ+ebkea1iycsIDExNS4yNjY5MDAsIDMzLjA0OTU5MywgJ+S4tOazieWOv+eOr+Wig+ebkea1i+ermScsICfkuLTms4nljr/muK/lj6Pot68yMzjlj7cnLCAnMDU1OC02Mjg4MDE3JywgMTApLFxuICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2UsXG4gIH0sXG4gIC8v5Yid5aeL5YyWXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG4gIC8qKlxuICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAqL1xuICBvblNob3coKSB7XG4gIH0sXG4gIC8v54K55Ye75qCH6K6w54K577yM5pi+56S65by55Ye65qGGXG4gIHNob3dNb2RhbDogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2hvd01vZGFsU3RhdHVzOiB0cnVlLFxuICAgICAgbWFya2VyOiB0aGlzLmRhdGEubWFya2Vyc1tldmVudC5tYXJrZXJJZCAtIDFdXG4gICAgfSlcbiAgfSxcbiAgLy/ngrnlh7vpobXpnaLvvIzpmpDol4/lvLnlh7rmoYZcbiAgaGlkZU1vZGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2VcbiAgICB9KVxuICB9LFxuICAvL+aJk+eUteivnVxuICBjYWxsaW5nOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIHZhciB0ZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICBwaG9uZU51bWJlcjogdGVsLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaLqOaJk+eUteivneaIkOWKn++8gVwiKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmi6jmiZPnlLXor53lpLHotKXvvIFcIilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvL+WvvOiIquWcsOWbvlxuICBkYW9oYW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hcmtlciA9IHRoaXMuZGF0YS5tYXJrZXI7XG5cbiAgICB3eC5vcGVuTG9jYXRpb24oe1xuICAgICAgbGF0aXR1ZGU6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZTogbWFya2VyLmxvbmdpdHVkZSxcbiAgICAgIHNjYWxlOiBtYXJrZXIuc2NhbGUsXG4gICAgICBuYW1lOiBtYXJrZXIubmFtZSxcbiAgICAgIGFkZHJlc3M6IG1hcmtlci5hZGRyZXNzXG4gICAgfSlcbiAgfSxcbn0pIl19