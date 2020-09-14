"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netdata = require("./netdata");
var slide = require("../../utils/slide");
var commonData_1 = require("../../utils/commonData");
Page({
    data: {
        EXTERNAL_DATA_PATH: commonData_1.EXTERNAL_DATA_PATH,
        markersSimple: [],
        marker: null,
        markers: [],
        isShowModal: false,
        dialogClass: "dialog",
        eventTouchStart: {}
    },
    onLoad: function () {
        this.showLoading();
        netdata.markersSimple();
        var thiss = this;
        netdata.markersSimple.valuesCallback = function (data) {
            thiss.setData({
                markersSimple: data,
            });
            thiss.hideLoading();
        };
    },
    showDialog: function (event) {
        this.showLoading();
        var id = event.markerId;
        for (var _i = 0, _a = this.data.markers; _i < _a.length; _i++) {
            var v = _a[_i];
            if (id == v.id) {
                this.setData({
                    marker: v,
                    isShowModal: true,
                });
                this.hideLoading();
                this.setData({
                    dialogClass: "dialogUp",
                });
                break;
            }
        }
        if (!this.data.marker) {
            if (!netdata.marker.valueCallback) {
                var thiss_1 = this;
                netdata.marker.valueCallback = function (value) {
                    thiss_1.data.markers.push(value);
                    thiss_1.setData({
                        marker: value,
                        isShowModal: true,
                    });
                    thiss_1.hideLoading();
                    thiss_1.setData({
                        dialogClass: "dialogUp",
                    });
                };
            }
            netdata.marker(id);
        }
    },
    hideDialog: function () {
        if (this.data.dialogClass === "dialog")
            return;
        var c = this.data.dialogClass === "dialogUp" ? "dialogDown" : "dialog";
        this.setData({
            marker: null,
            imgs: [],
            dialogClass: c,
            isShowModal: true,
        });
    },
    touchStart: function (e) {
        this.data.eventTouchStart = e;
    },
    touchEnd: function (e) {
        var way = slide.slideWay(this.data.eventTouchStart, e);
        if (!way)
            return;
        if (way.indexOf("下滑 快速") > -1)
            this.hideDialog();
        else
            slide.jumpNav("ditu", way);
    },
    calling: function (event) {
        var tel = event.currentTarget.dataset.id;
        wx.makePhoneCall({
            phoneNumber: tel,
            success: function () {
            },
            fail: function () {
            },
        });
    },
    daohang: function () {
        if (!this.data.marker)
            return;
        var v = this.data.marker;
        wx.openLocation({
            latitude: v.latitude,
            longitude: v.longitude,
            name: v.name,
            address: v.address,
        });
        this.data.marker = null;
    },
    shuaxin: function () {
        this.setData({
            markersSimple: [],
            marker: null,
            markers: [],
            isShowModal: false,
        });
        this.onLoad();
    },
    showLoading: function () {
        wx.showNavigationBarLoading();
        wx.showLoading({
            title: "刷新中...",
        });
    },
    hideLoading: function () {
        wx.hideLoading();
        wx.hideNavigationBarLoading();
    },
    onPullDownRefresh: function () { },
    onShow: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxtQ0FBcUM7QUFDckMseUNBQTJDO0FBQzNDLHFEQUE0RDtBQUU1RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixrQkFBa0IsRUFBRSwrQkFBa0I7UUFDdEMsYUFBYSxFQUEwQixFQUFFO1FBQ3pDLE1BQU0sRUFBMEIsSUFBSTtRQUNwQyxPQUFPLEVBQW9CLEVBQUU7UUFDN0IsV0FBVyxFQUFFLEtBQUs7UUFDbEIsV0FBVyxFQUFFLFFBQVE7UUFDckIsZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFLRCxNQUFNO1FBRUosSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsVUFDckMsSUFBNEI7WUFHNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFFWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFFSCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBYUosQ0FBQztJQUtELFVBQVUsRUFBRSxVQUFVLEtBQVU7UUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDeEIsS0FBYyxVQUFpQixFQUFqQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFqQixjQUFpQixFQUFqQixJQUFpQixFQUFFO1lBQTVCLElBQUksQ0FBQyxTQUFBO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE1BQU0sRUFBRSxDQUFDO29CQUNULFdBQVcsRUFBRSxJQUFJO2lCQUVsQixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxVQUFVO2lCQUN4QixDQUFDLENBQUM7Z0JBQ0gsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUNqQyxJQUFJLE9BQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLFVBQVUsS0FBcUI7b0JBQzVELE9BQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsT0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixNQUFNLEVBQUUsS0FBSzt3QkFDYixXQUFXLEVBQUUsSUFBSTtxQkFFbEIsQ0FBQyxDQUFDO29CQUVILE9BQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEIsT0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixXQUFXLEVBQUUsVUFBVTtxQkFDeEIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQzthQUNIO1lBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwQjtJQUVILENBQUM7SUFNRCxVQUFVO1FBRVIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRO1lBQUUsT0FBTztRQUMvQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQXlCLElBQUk7WUFDbkMsSUFBSSxFQUFZLEVBQUU7WUFDbEIsV0FBVyxFQUFFLENBQUM7WUFDZCxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsVUFBVSxZQUFDLENBQU07UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUE7SUFHL0IsQ0FBQztJQUlELFFBQVEsWUFBQyxDQUFNO1FBSWIsSUFBSSxHQUFHLEdBQVcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDakIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQU1ELE9BQU8sWUFBQyxLQUFVO1FBRWhCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsV0FBVyxFQUFFLEdBQUc7WUFDaEIsT0FBTyxFQUFFO1lBRVQsQ0FBQztZQUNELElBQUksRUFBRTtZQUVOLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBd0IsQ0FBQztRQUMzQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUztZQUN0QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDWixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFLRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBMEIsRUFBRTtZQUN6QyxNQUFNLEVBQXlCLElBQUk7WUFDbkMsT0FBTyxFQUFvQixFQUFFO1lBQzdCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFFYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBSUQsaUJBQWlCLGdCQUFLLENBQUM7SUFJdkIsTUFBTTtJQUVOLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogeWFud2VpXG4gKiBARGF0ZTogMjAyMC0wNC0xOCAyMDowMDowM1xuICogQExhc3RFZGl0b3JzOiB5YW53ZWlcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDktMTQgMTE6MjU6NTZcbiAqIEBEZXNjcmlwdGlvbiA6IOWcsOWbvumhtemdouS7o+eggVxuICovXG5pbXBvcnQgKiBhcyBuZXRkYXRhIGZyb20gXCIuL25ldGRhdGFcIjtcbmltcG9ydCAqIGFzIHNsaWRlIGZyb20gXCIuLi8uLi91dGlscy9zbGlkZVwiO1xuaW1wb3J0IHsgRVhURVJOQUxfREFUQV9QQVRIIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkRhdGFcIjtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBFWFRFUk5BTF9EQVRBX1BBVEg6IEVYVEVSTkFMX0RBVEFfUEFUSCwvL+WklumDqOaVsOaNruWSjOWbvueJh+aAu+i3r+W+hFxuICAgIG1hcmtlcnNTaW1wbGU6IDxuZXRkYXRhLk1hcmtlclNpbXBsZVtdPltdLCAvL+WIneWni+WMluWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOepuuaVsOe7hO+8jOmhtemdouato+W4uOaYvuekuuWcsOWbvu+8jOWbnuiwg+WQju+8jOiHquWKqOWcqOWcsOWbvuS4iuaYvuekuuagh+iusOeCue+8jOeUqOaIt+aEn+inieS4jeWIsOW7tui/n1xuICAgIG1hcmtlciE6IDxuZXRkYXRhLk1hcmtlciB8IG51bGw+bnVsbCwgLy/ooqvngrnlh7vnmoTlnLDlm77moIforrDngrnvvIzliJ3lp4vljJbkuLrnqbpcbiAgICBtYXJrZXJzOiA8bmV0ZGF0YS5NYXJrZXJbXT5bXSwgLy/miYDmnInlnLDlm77moIforrDngrnor6bnu4bkv6Hmga9cbiAgICBpc1Nob3dNb2RhbDogZmFsc2UsIC8v5piv5ZCm5pi+56S65qih5oCB5a+56K+d5qGG77yM5Y2z6K+m57uG5L+h5oGv5qGGICAgXG4gICAgZGlhbG9nQ2xhc3M6IFwiZGlhbG9nXCIsLy/mqKHlvI/lr7nor53moYZjc3PnsbvlkI1cbiAgICBldmVudFRvdWNoU3RhcnQ6IHt9XG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cblxuICBvbkxvYWQoKSB7XG4gICAgLy/pobXpnaLliqDovb3vvIzlhYjmraPluLjliqDovb3lnLDlm77vvIxcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgbmV0ZGF0YS5tYXJrZXJzU2ltcGxlKCk7IC8v6L+Q6KGMbWFya2Vyc1NpbXBsZeWvueixoeeahOWfuuehgOaWueazle+8jOWFtuWGhemDqOeahOivt+axgue9kee7nOaVsOaNruS7o+eggeaYr+W8guatpeOAgeW7tui/n+eahFxuICAgIC8v5omA5Lul5peg6ZyA5Yik5patZGF0YUZyb21OZXQubWFya2Vyc1NpbXBsZS52YWx1ZXPmmK/lkKblrZjlnKjjgIHlho3otYvlgLznu5ltYXJrZXJzU2ltcGxl77yM5Y+v55u05o6l5a6a5LmJ5ZKM5L2/55So5Zue6LCDXG4gICAgbGV0IHRoaXNzID0gdGhpczsgLy/lv4XpobvmmoLlrZh0aGlz77yM5ZCm5YiZ5Zyo5Zue6LCD5Luj56CB5Lit55qEdGhpc+S4jeaYr+atpHRoaXPkuoZcbiAgICBuZXRkYXRhLm1hcmtlcnNTaW1wbGUudmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoXG4gICAgICBkYXRhOiBuZXRkYXRhLk1hcmtlclNpbXBsZVtdXG4gICAgKSB7XG4gICAgICAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOeUqOS6jue9kee7nOaVsOaNruivt+axguWQjuWbnuiwg1xuICAgICAgdGhpc3Muc2V0RGF0YSh7XG4gICAgICAgIC8v6K+35rGC5Yiw572R57uc5pWw5o2u5ZCO77yM6K6+572u5Zyw5Zu+5qCH6K6w54K5566A5Y2V5L+h5oGv5pWw57uE77yM5Zyw5Zu+5LiK56uL5Y2z5pi+56S65qCH6K6w54K577yM5LiN5b+F6KaB5pi+56S65Yqg6L295Yqo55S777yM6K6p55So5oi35peg5oSf5bu26L+fXG4gICAgICAgIG1hcmtlcnNTaW1wbGU6IGRhdGEsXG4gICAgICB9KTtcblxuICAgICAgdGhpc3MuaGlkZUxvYWRpbmcoKTsgLy/pmpDol4/liqDovb3liqjnlLtcbiAgICB9O1xuXG4gICAgLy/pop3lpJbnmoTvvIzosIPor5Xkv6Hmga9cbiAgICAvKiAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICBjb25zb2xlLmxvZygn6K6+5aSH5ZOB54mMOiAnK3Jlcy5icmFuZClcbiAgICAgICAgIGNvbnNvbGUubG9nKCforr7lpIflnovlj7c6ICcrcmVzLm1vZGVsKVxuICAgICAgICAgY29uc29sZS5sb2coJ+W+ruS/oeeJiOacrOWPtzogJytyZXMudmVyc2lvbilcbiAgICAgICAgIC8vY29uc29sZS5sb2coJ+aTjeS9nOezu+e7n+WPiueJiOacrDogJytyZXMuc3lzdGVtKVxuICAgICAgICAgY29uc29sZS5sb2coJ+WuouaIt+err+W5s+WPsDogJytyZXMucGxhdGZvcm0pXG4gICAgICAgICBjb25zb2xlLmxvZygn5a6i5oi356uv5Z+656GA5bqT54mI5pysOiAnK3Jlcy5TREtWZXJzaW9uKVxuICAgICAgIH19KSAqL1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeCueWHu+WcsOWbvuWumuS9jeeCue+8jOaYvuekuuivpue7huS/oeaBr+aooeW8j+WvueivneahhlxuICAgKi9cbiAgc2hvd0RpYWxvZzogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7IC8v5pi+56S65Yqg6L295Yqo55S7XG4gICAgbGV0IGlkID0gZXZlbnQubWFya2VySWQ7IC8v55So5oi354K55Ye755qE5Zyw5Zu+5qCH6K6w54K555qEaWRcbiAgICBmb3IgKGxldCB2IG9mIHRoaXMuZGF0YS5tYXJrZXJzKSB7IC8v5YWI5Yik5pat6KKr54K55Ye755qE5Zyw5Zu+54K555qE6K+m57uG5L+h5oGv5piv5ZCm5Zyo5pWw57uE5Lit77yM5aaC5Zyo77yM5YiZ5pqC5a2Y5YiwbVxuICAgICAgaWYgKGlkID09IHYuaWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtYXJrZXI6IHYsXG4gICAgICAgICAgaXNTaG93TW9kYWw6IHRydWUsXG4gICAgICAgICAgLy9kaWFsb2dDbGFzczogXCJkaWFsb2dVcFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpOyAvL+makOiXj+WKoOi9veWKqOeUu1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGRpYWxvZ0NsYXNzOiBcImRpYWxvZ1VwXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGF0YS5tYXJrZXIpIHsgLy/lpoLkuI3lnKjmlbDnu4TkuK3vvIzliJnnvZHnu5zor7fmsYLmlbDmja7vvIzlho3lrZjliLDmlbDnu4TkuK3vvIzkuIvmrKHngrnlh7vvvIzor7vlj5bmlbDnu4TvvIzkuI3lnKjnvZHnu5zor7fmsYJcblxuICAgICAgaWYgKCFuZXRkYXRhLm1hcmtlci52YWx1ZUNhbGxiYWNrKSB7ICAvL+WmguaenOS5i+WJjeayoeacieWumuS5ieWbnuiwg+aWueazlVxuICAgICAgICBsZXQgdGhpc3MgPSB0aGlzO1xuICAgICAgICBuZXRkYXRhLm1hcmtlci52YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlOiBuZXRkYXRhLk1hcmtlcikgeyAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOeUqOS6jue9kee7nOaVsOaNruivt+axguWQjuWbnuiwg1xuICAgICAgICAgIHRoaXNzLmRhdGEubWFya2Vycy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB0aGlzcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG1hcmtlcjogdmFsdWUsXG4gICAgICAgICAgICBpc1Nob3dNb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgIC8vZGlhbG9nQ2xhc3M6IFwiZGlhbG9nVXBcIixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3M6IFwiZGlhbG9nVXBcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG5ldGRhdGEubWFya2VyKGlkKTsgLy/lkK/liqjlnLDlm77moIforrDngrnmjqXlj6Pln7rnoYDmlrnms5XvvIzor7fmsYLmoIforrDngrnor6bnu4bnmoTnvZHnu5zmlbDmja5cbiAgICB9XG5cbiAgfSxcblxuICAvKipcbiAgICrngrnlh7vlnLDlm77vvIzpmpDol4/lr7nor53moYZcbiAgICpcbiAgICovXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgLy/ngrnlh7vpobXpnaLvvIzpmpDol4/mqKHlvI/lr7nor53moYZcbiAgICBpZiAodGhpcy5kYXRhLmRpYWxvZ0NsYXNzID09PSBcImRpYWxvZ1wiKSByZXR1cm47XG4gICAgbGV0IGMgPSB0aGlzLmRhdGEuZGlhbG9nQ2xhc3MgPT09IFwiZGlhbG9nVXBcIiA/IFwiZGlhbG9nRG93blwiIDogXCJkaWFsb2dcIjtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbWFya2VyOiA8bmV0ZGF0YS5NYXJrZXIgfCBudWxsPm51bGwsIC8v5oqK5qCH6K6w54K56K6+572u5Li656m6XG4gICAgICBpbWdzOiA8U3RyaW5nW10+W10sXG4gICAgICBkaWFsb2dDbGFzczogYyxcbiAgICAgIGlzU2hvd01vZGFsOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICAqIEBkZXNjcmlwdGlvbiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xuICAgICogQHBhcmFtIHsqfSBlXG4gICAgKi9cbiAgdG91Y2hTdGFydChlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEuZXZlbnRUb3VjaFN0YXJ0ID0gZVxuICAgIC8qICB0aGlzLnNldERhdGEoe1xuICAgICB9KTsgKi9cbiAgfSxcbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo57uT5p2fXG4gICAqL1xuICB0b3VjaEVuZChlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncHAnKVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5ldmVudFRvdWNoU3RhcnQpXG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICBsZXQgd2F5OiBzdHJpbmcgPSBzbGlkZS5zbGlkZVdheSh0aGlzLmRhdGEuZXZlbnRUb3VjaFN0YXJ0LCBlKTtcbiAgICBpZiAoIXdheSkgcmV0dXJuO1xuICAgIGlmICh3YXkuaW5kZXhPZihcIuS4i+a7kSDlv6vpgJ9cIikgPiAtMSlcbiAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgIGVsc2Ugc2xpZGUuanVtcE5hdihcImRpdHVcIiwgd2F5KVxuICB9LFxuICAvKipcbiAgICrmi6jmiZPnlLXor51cbiAgICpcbiAgICogQHBhcmFtIHsqfSBldmVudFxuICAgKi9cbiAgY2FsbGluZyhldmVudDogYW55KSB7XG4gICAgLy/miZPnlLXor51cbiAgICB2YXIgdGVsID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgcGhvbmVOdW1iZXI6IHRlbCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaLqOaJk+eUteivneaIkOWKn++8gVwiKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaLqOaJk+eUteivneWksei0pe+8gVwiKVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOWvvOiIqlxuICAgKi9cbiAgZGFvaGFuZygpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS5tYXJrZXIpIHJldHVybjtcbiAgICBsZXQgdiA9IHRoaXMuZGF0YS5tYXJrZXIgYXMgbmV0ZGF0YS5NYXJrZXI7XG4gICAgd3gub3BlbkxvY2F0aW9uKHtcbiAgICAgIGxhdGl0dWRlOiB2LmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB2LmxvbmdpdHVkZSxcbiAgICAgIG5hbWU6IHYubmFtZSxcbiAgICAgIGFkZHJlc3M6IHYuYWRkcmVzcyxcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEubWFya2VyID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICog5Yi35paw5Zyw5Zu+5qCH6K6w54K55pWw5o2uXG4gICAqL1xuICBzaHVheGluKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtYXJrZXJzU2ltcGxlOiA8bmV0ZGF0YS5NYXJrZXJTaW1wbGVbXT5bXSxcbiAgICAgIG1hcmtlcjogPG5ldGRhdGEuTWFya2VyIHwgbnVsbD5udWxsLFxuICAgICAgbWFya2VyczogPG5ldGRhdGEuTWFya2VyW10+W10sXG4gICAgICBpc1Nob3dNb2RhbDogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy5vbkxvYWQoKTtcbiAgfSxcbiAgLyoqXG4gICAqIOaYvuekuuWKoOi9veWKqOeUu1xuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgLy/mmL7npLogbG9hZGluZyDmj5DnpLrmoYbjgILpnIDkuLvliqjosIPnlKggd3guaGlkZUxvYWRpbmcg5omN6IO95YWz6Zet5o+Q56S65qGGXG4gICAgICB0aXRsZTogXCLliLfmlrDkuK0uLi5cIixcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOmakOiXj+WKoOi9veWKqOeUu1xuICAgKi9cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgd3guaGlkZUxvYWRpbmcoKTsgLy/pmpDol49sb2FkaW5nIOaPkOekuuahhlxuICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+makOiXj+WvvOiIquadoeWKoOi9veWKqOeUu1xuICAgIC8vd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt1xuICB9LFxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkgeyB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gIH0sXG59KTtcbiJdfQ==