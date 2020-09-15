"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netVideo_1 = require("../../utils/netVideo");
var slide_1 = require("../../utils/slide");
var commonData_1 = require("../../utils/commonData");
Page({
    data: {
        URL_VIDEO_JSON: commonData_1.EXTERNAL_DATA_PATH + "data/videoKePuPian.json",
        videos: [],
        ivideo: {},
        numCallback: 0,
        eventTouchStart: {},
    },
    onLoad: function () {
        this.showLoading();
        this.data.ivideo = netVideo_1.getVideo(this.data.URL_VIDEO_JSON);
        var thiss = this;
        if (!thiss.data.ivideo.valuesCallback)
            thiss.data.ivideo.valuesCallback = function (video) {
                var _a;
                thiss.data.numCallback = ++thiss.data.numCallback;
                var len = thiss.data.videos.length;
                var tmp = 'videos[' + len + ']';
                thiss.setData((_a = {},
                    _a[tmp] = video,
                    _a));
                if (thiss.data.numCallback == thiss.data.ivideo.values.length) {
                    thiss.hideLoading();
                }
            };
        thiss.data.ivideo();
    },
    touchStart: function (e) {
        this.setData({
            eventTouchStart: e
        });
    },
    touchEnd: function (e) {
        slide_1.jumpNav2("videokepu", this.data.eventTouchStart, e);
    },
    onPullDownRefresh: function () {
        this.setData({
            videos: [],
            numCallback: 0
        });
        this.onLoad();
    },
    showLoading: function () {
        wx.showNavigationBarLoading();
        wx.showLoading({
            title: '刷新中...',
        });
    },
    hideLoading: function () {
        wx.hideLoading();
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9rZXB1LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlkZW9rZXB1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBVUEsaURBQThEO0FBQzlELDJDQUE0QztBQUM1QyxxREFBNEQ7QUFDNUQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLCtCQUFrQixHQUFHLHlCQUF5QjtRQUM5RCxNQUFNLEVBQVcsRUFBRTtRQUNuQixNQUFNLEVBQVUsRUFBRTtRQUNsQixXQUFXLEVBQUUsQ0FBQztRQUNkLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsS0FBWTs7Z0JBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2xELElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxPQUFPO29CQUNYLEdBQUMsR0FBRyxJQUFHLEtBQUs7d0JBQ1osQ0FBQTtnQkFFRixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQzdELEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUE7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFJRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2IsZ0JBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUlELGlCQUFpQixFQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQVcsRUFBRTtZQUNuQixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBSUQsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiB5YW53ZWlcclxuICogQERhdGU6IDIwMjAtMDYtMTcgMTU6NTg6MDVcclxuICogQExhc3RFZGl0b3JzOiB5YW53ZWlcclxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOS0xNCAxMTozNzowOVxyXG4gKiBARGVzY3JpcHRpb24gOiDnp5Hmma7niYfpobXpnaLku6PnoIFcclxuICovXHJcbi8vIGltcG9ydCB1dGlsID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL25ldFZpZGVvXCIpO1xyXG4vLyBpbXBvcnQgc2xpZGUgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvc2xpZGVcIik7Ly/liKTmlq3lt6blj7Pmu5Hliqjku6PnoIFcclxuLy9pbXBvcnQgdmlkZW8gPSByZXF1aXJlKFwiLi4vdmlkZW8xL3ZpZGVvXCIpO1xyXG5pbXBvcnQgeyBWaWRlbywgSVZpZGVvLCBnZXRWaWRlbyB9IGZyb20gXCIuLi8uLi91dGlscy9uZXRWaWRlb1wiXHJcbmltcG9ydCB7IGp1bXBOYXYyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3NsaWRlXCJcclxuaW1wb3J0IHsgRVhURVJOQUxfREFUQV9QQVRIIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkRhdGFcIjtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgVVJMX1ZJREVPX0pTT046IEVYVEVSTkFMX0RBVEFfUEFUSCArIFwiZGF0YS92aWRlb0tlUHVQaWFuLmpzb25cIiwvL+Wuo+S8oOeJh2pzb27kv6Hmga/lnLDlnYBcclxuICAgIHZpZGVvczogPFZpZGVvW10+W10sLy9WaWRlb+WvueixoeaVsOe7hFxyXG4gICAgaXZpZGVvOiA8SVZpZGVvPnt9LC8vSVZpZGVv57G75Z6L56m65a+56LGhXHJcbiAgICBudW1DYWxsYmFjazogMCwvL+Wbnuiwg+asoeaVsO+8jOeUqOS6juihqOekuuWFqOmDqOi9rOaNonNyY+WujOaIkOWQju+8jOmakOiXj2xvYWRpbmfliqjnlLtcclxuICAgIGV2ZW50VG91Y2hTdGFydDoge30sIC8v5ruR5Yqo5omL5Yq/5byA5aeL5LqL5Lu2XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XHJcbiAgICB0aGlzLmRhdGEuaXZpZGVvID0gZ2V0VmlkZW8odGhpcy5kYXRhLlVSTF9WSURFT19KU09OKTsvL+S8oOmAkuWPguaVsO+8jOiOt+W+l0lWaWRlb+aOpeWPo+WvueixoeOAguS5n+WNs+WIneWni+WMlml2aWRlb+WvueixoVxyXG5cclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICBpZiAoIXRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlc0NhbGxiYWNrKS8v5aaC5p6c5LmL5YmN5pyq5a6a5LmJ77yM5YiZ5a6a5LmJSVZpZGVv5o6l5Y+j55qE5Zue6LCD5Ye95pWw77yMXHJcbiAgICAgIHRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlc0NhbGxiYWNrID0gZnVuY3Rpb24gKHZpZGVvOiBWaWRlbykgeyAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIzlj4LmlbDmmK/ovazljJZ2aWTkuLpzcmPnmoR2aWRlb+WvueixoSAgIFxyXG4gICAgICAgIHRoaXNzLmRhdGEubnVtQ2FsbGJhY2sgPSArK3RoaXNzLmRhdGEubnVtQ2FsbGJhY2s7Ly/orrDlvZXlm57osIPmrKHmlbDvvIzljbPorrDlvZVzcmPovazmjaLlrozmiJDnmoTlr7nosaHmlbBcclxuICAgICAgICBsZXQgbGVuOiBOdW1iZXIgPSB0aGlzcy5kYXRhLnZpZGVvcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHRtcCA9ICd2aWRlb3NbJyArIGxlbiArICddJzsgIC8v5rOo5oSP77ya5LiN5pivaS0x77yM5pivae+8jOaYr+WcqOaVsOe7hOWwvumDqOWinuWKoOS4gOS4quWFg+e0oFxyXG4gICAgICAgIHRoaXNzLnNldERhdGEoe1xyXG4gICAgICAgICAgW3RtcF06IHZpZGVvICAgLy/liqjmgIHlop7liqDmlbDnu4TkuK3nmoR2aWRlb+Wvueixoe+8jOatpHZpZGVv5a+56LGhc3Jj5bey57uP5a6M5oiQ6L2s5o2i44CC5YmN56uv6aG16Z2i5a6e5pe25aKe5Yqg5LiA5Liq6KeG6aKRXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXNzLmRhdGEubnVtQ2FsbGJhY2sgPT0gdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzLmxlbmd0aCkgey8v5aaC5p6c5a+56LGhc3Jj5YWo6YOo6L2s5o2i5a6M5oiQXHJcbiAgICAgICAgICB0aGlzcy5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHRoaXNzLmRhdGEuaXZpZGVvKCk7IC8v5ZCv5YqoSVZpZGVv5o6l5Y+j5a+56LGh55qE5Z+656GA5Ye95pWw77yM572R57uc6K+75Y+W5ZCE6KeG6aKR5L+h5oGv77yM5pyJ572R57uc6K+35rGC5bu26L+fXHJcbiAgfSxcclxuICAvKipcclxuICAgICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo5byA5aeLXHJcbiAgICAgKi9cclxuICB0b3VjaFN0YXJ0KGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZXZlbnRUb3VjaFN0YXJ0OiBlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfmu5Hliqjnu5PmnZ9cclxuICAgKi9cclxuICB0b3VjaEVuZChlOiBhbnkpIHtcclxuICAgIGp1bXBOYXYyKFwidmlkZW9rZXB1XCIsIHRoaXMuZGF0YS5ldmVudFRvdWNoU3RhcnQsIGUpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHZpZGVvczogPFZpZGVvW10+W10sICAgIC8v5Yid5aeL5YyWdmlkZW/lr7nosaHkuLrnqbpcclxuICAgICAgbnVtQ2FsbGJhY2s6IDAvL+WIneWni+WMluWbnuiwg+asoeaVsOS4ujBcclxuICAgIH0pXHJcbiAgICB0aGlzLm9uTG9hZCgpOy8v5YaN5qyh5ouJ5Y+W5paw5pWw5o2uXHJcbiAgfSxcclxuICAvKipcclxuKiDmmL7npLrliqDovb3liqjnlLtcclxuKi9cclxuICBzaG93TG9hZGluZygpIHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOy8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgIFxyXG4gICAgd3guc2hvd0xvYWRpbmcoey8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgICB0aXRsZTogJ+WIt+aWsOS4rS4uLicsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgKiDpmpDol4/liqDovb3liqjnlLtcclxuICAqL1xyXG4gIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgd3guaGlkZUxvYWRpbmcoKTsvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGICAgICAgICAgXHJcbiAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLsgICAgICAgICBcclxuICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLdcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25zaG93JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcbn0pXHJcblxyXG4iXX0=