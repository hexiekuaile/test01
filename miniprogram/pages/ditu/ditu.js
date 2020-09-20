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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxtQ0FBcUM7QUFDckMseUNBQTJDO0FBQzNDLHFEQUE0RDtBQUU1RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixrQkFBa0IsRUFBRSwrQkFBa0I7UUFDdEMsYUFBYSxFQUEwQixFQUFFO1FBQ3pDLE1BQU0sRUFBMEIsSUFBSTtRQUNwQyxPQUFPLEVBQW9CLEVBQUU7UUFDN0IsV0FBVyxFQUFFLEtBQUs7UUFDbEIsV0FBVyxFQUFFLFFBQVE7UUFDckIsZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFLRCxNQUFNLEVBQU47UUFFRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxVQUNyQyxJQUE0QjtZQUc1QixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUVaLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUVILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7SUFzQkosQ0FBQztJQUtELFVBQVUsRUFBRSxVQUFVLEtBQVU7UUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDeEIsS0FBYyxVQUFpQixFQUFqQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFqQixjQUFpQixFQUFqQixJQUFpQixFQUFFO1lBQTVCLElBQUksQ0FBQyxTQUFBO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE1BQU0sRUFBRSxDQUFDO29CQUNULFdBQVcsRUFBRSxJ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LElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBS0QsT0FBTyxFQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBMEIsRUFBRTtZQUN6QyxNQUFNLEVBQXlCLElBQUk7WUFDbkMsT0FBTyxFQUFvQixFQUFFO1lBQzdCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFFYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBSUQsaUJBQWlCLGdCQUFLLENBQUM7SUFJdkIsTUFBTTtJQUVOLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogeWFud2VpXG4gKiBARGF0ZTogMjAyMC0wNC0xOCAyMDowMDowM1xuICogQExhc3RFZGl0b3JzOiB5YW53ZWlcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDktMTYgMTU6Mjg6NTVcbiAqIEBEZXNjcmlwdGlvbiA6IOWcsOWbvumhtemdouS7o+eggVxuICovXG5pbXBvcnQgKiBhcyBuZXRkYXRhIGZyb20gXCIuL25ldGRhdGFcIjtcbmltcG9ydCAqIGFzIHNsaWRlIGZyb20gXCIuLi8uLi91dGlscy9zbGlkZVwiO1xuaW1wb3J0IHsgRVhURVJOQUxfREFUQV9QQVRIIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkRhdGFcIjtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBFWFRFUk5BTF9EQVRBX1BBVEg6IEVYVEVSTkFMX0RBVEFfUEFUSCwvL+WklumDqOaVsOaNruWSjOWbvueJh+aAu+i3r+W+hFxuICAgIG1hcmtlcnNTaW1wbGU6IDxuZXRkYXRhLk1hcmtlclNpbXBsZVtdPltdLCAvL+WIneWni+WMluWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOepuuaVsOe7hO+8jOmhtemdouato+W4uOaYvuekuuWcsOWbvu+8jOWbnuiwg+WQju+8jOiHquWKqOWcqOWcsOWbvuS4iuaYvuekuuagh+iusOeCue+8jOeUqOaIt+aEn+inieS4jeWIsOW7tui/n1xuICAgIG1hcmtlciE6IDxuZXRkYXRhLk1hcmtlciB8IG51bGw+bnVsbCwgLy/ooqvngrnlh7vnmoTlnLDlm77moIforrDngrnvvIzliJ3lp4vljJbkuLrnqbpcbiAgICBtYXJrZXJzOiA8bmV0ZGF0YS5NYXJrZXJbXT5bXSwgLy/miYDmnInlnLDlm77moIforrDngrnor6bnu4bkv6Hmga9cbiAgICBpc1Nob3dNb2RhbDogZmFsc2UsIC8v5piv5ZCm5pi+56S65qih5oCB5a+56K+d5qGG77yM5Y2z6K+m57uG5L+h5oGv5qGGICAgXG4gICAgZGlhbG9nQ2xhc3M6IFwiZGlhbG9nXCIsLy/mqKHlvI/lr7nor53moYZjc3PnsbvlkI1cbiAgICBldmVudFRvdWNoU3RhcnQ6IHt9XG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cblxuICBvbkxvYWQoKSB7XG4gICAgLy/pobXpnaLliqDovb3vvIzlhYjmraPluLjliqDovb3lnLDlm77vvIxcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgbmV0ZGF0YS5tYXJrZXJzU2ltcGxlKCk7IC8v6L+Q6KGMbWFya2Vyc1NpbXBsZeWvueixoeeahOWfuuehgOaWueazle+8jOWFtuWGhemDqOeahOivt+axgue9kee7nOaVsOaNruS7o+eggeaYr+W8guatpeOAgeW7tui/n+eahFxuICAgIC8v5omA5Lul5peg6ZyA5Yik5patZGF0YUZyb21OZXQubWFya2Vyc1NpbXBsZS52YWx1ZXPmmK/lkKblrZjlnKjjgIHlho3otYvlgLznu5ltYXJrZXJzU2ltcGxl77yM5Y+v55u05o6l5a6a5LmJ5ZKM5L2/55So5Zue6LCDXG4gICAgbGV0IHRoaXNzID0gdGhpczsgLy/lv4XpobvmmoLlrZh0aGlz77yM5ZCm5YiZ5Zyo5Zue6LCD5Luj56CB5Lit55qEdGhpc+S4jeaYr+atpHRoaXPkuoZcbiAgICBuZXRkYXRhLm1hcmtlcnNTaW1wbGUudmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoXG4gICAgICBkYXRhOiBuZXRkYXRhLk1hcmtlclNpbXBsZVtdXG4gICAgKSB7XG4gICAgICAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOeUqOS6jue9kee7nOaVsOaNruivt+axguWQjuWbnuiwg1xuICAgICAgdGhpc3Muc2V0RGF0YSh7XG4gICAgICAgIC8v6K+35rGC5Yiw572R57uc5pWw5o2u5ZCO77yM6K6+572u5Zyw5Zu+5qCH6K6w54K5566A5Y2V5L+h5oGv5pWw57uE77yM5Zyw5Zu+5LiK56uL5Y2z5pi+56S65qCH6K6w54K577yM5LiN5b+F6KaB5pi+56S65Yqg6L295Yqo55S777yM6K6p55So5oi35peg5oSf5bu26L+fXG4gICAgICAgIG1hcmtlcnNTaW1wbGU6IGRhdGEsXG4gICAgICB9KTtcblxuICAgICAgdGhpc3MuaGlkZUxvYWRpbmcoKTsgLy/pmpDol4/liqDovb3liqjnlLtcbiAgICB9O1xuICAgIC8v6aKd5aSW55qE77yM6LCD6K+V5L+h5oGvXG4gICAgLyogIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgY29uc29sZS5sb2coJ+iuvuWkh+WTgeeJjDogJytyZXMuYnJhbmQpXG4gICAgICAgICBjb25zb2xlLmxvZygn6K6+5aSH5Z6L5Y+3OiAnK3Jlcy5tb2RlbClcbiAgICAgICAgIGNvbnNvbGUubG9nKCflvq7kv6HniYjmnKzlj7c6ICcrcmVzLnZlcnNpb24pXG4gICAgICAgICAvL2NvbnNvbGUubG9nKCfmk43kvZzns7vnu5/lj4rniYjmnKw6ICcrcmVzLnN5c3RlbSlcbiAgICAgICAgIGNvbnNvbGUubG9nKCflrqLmiLfnq6/lubPlj7A6ICcrcmVzLnBsYXRmb3JtKVxuICAgICAgICAgY29uc29sZS5sb2coJ+WuouaIt+err+WfuuehgOW6k+eJiOacrDogJytyZXMuU0RLVmVyc2lvbilcbiAgICAgICB9fSkgKi9cblxuICAgIC8qICAgIHZhciBhdXRoVXJsID0gYGh0dHA6Ly9hcGkuMTg5LmNuL0NoaW5hVGVsZWNvbS9saXN0RmlsZXMuYWN0aW9uYDtcbiAgICAgICB3eC5yZXF1ZXN0KHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e9kee7nOivt+axguWPluaVsOaNrlxuICAgICAgICB1cmw6IGF1dGhVcmwsICAgICAgICAgICAgICAgICAgICAgICAgIC8v566A5Y2V5Zyw5Zu+5qCH6K6w54K5anNvbuaWh+S7tueahOe9kee7nOWcsOWdgFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6ZSZ6K+v77yaICcgKyByZXMuZXJyTXNnKVxuICAgICAgICB9XG4gICAgICB9KTsgKi9cbiAgfSxcblxuICAvKipcbiAgICog54K55Ye75Zyw5Zu+5a6a5L2N54K577yM5pi+56S66K+m57uG5L+h5oGv5qih5byP5a+56K+d5qGGXG4gICAqL1xuICBzaG93RGlhbG9nOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTsgLy/mmL7npLrliqDovb3liqjnlLtcbiAgICBsZXQgaWQgPSBldmVudC5tYXJrZXJJZDsgLy/nlKjmiLfngrnlh7vnmoTlnLDlm77moIforrDngrnnmoRpZFxuICAgIGZvciAobGV0IHYgb2YgdGhpcy5kYXRhLm1hcmtlcnMpIHsgLy/lhYjliKTmlq3ooqvngrnlh7vnmoTlnLDlm77ngrnnmoTor6bnu4bkv6Hmga/mmK/lkKblnKjmlbDnu4TkuK3vvIzlpoLlnKjvvIzliJnmmoLlrZjliLBtXG4gICAgICBpZiAoaWQgPT0gdi5pZCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG1hcmtlcjogdixcbiAgICAgICAgICBpc1Nob3dNb2RhbDogdHJ1ZSxcbiAgICAgICAgICAvL2RpYWxvZ0NsYXNzOiBcImRpYWxvZ1VwXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgZGlhbG9nQ2xhc3M6IFwiZGlhbG9nVXBcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhLm1hcmtlcikgeyAvL+WmguS4jeWcqOaVsOe7hOS4re+8jOWImee9kee7nOivt+axguaVsOaNru+8jOWGjeWtmOWIsOaVsOe7hOS4re+8jOS4i+asoeeCueWHu++8jOivu+WPluaVsOe7hO+8jOS4jeWcqOe9kee7nOivt+axglxuXG4gICAgICBpZiAoIW5ldGRhdGEubWFya2VyLnZhbHVlQ2FsbGJhY2spIHsgIC8v5aaC5p6c5LmL5YmN5rKh5pyJ5a6a5LmJ5Zue6LCD5pa55rOVXG4gICAgICAgIGxldCB0aGlzcyA9IHRoaXM7XG4gICAgICAgIG5ldGRhdGEubWFya2VyLnZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWU6IG5ldGRhdGEuTWFya2VyKSB7IC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXG4gICAgICAgICAgdGhpc3MuZGF0YS5tYXJrZXJzLnB1c2godmFsdWUpO1xuICAgICAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAgICAgbWFya2VyOiB2YWx1ZSxcbiAgICAgICAgICAgIGlzU2hvd01vZGFsOiB0cnVlLFxuICAgICAgICAgICAgLy9kaWFsb2dDbGFzczogXCJkaWFsb2dVcFwiLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpc3MuaGlkZUxvYWRpbmcoKTsgLy/pmpDol4/liqDovb3liqjnlLsgICAgICAgICAgXG4gICAgICAgICAgdGhpc3Muc2V0RGF0YSh7XG4gICAgICAgICAgICBkaWFsb2dDbGFzczogXCJkaWFsb2dVcFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgbmV0ZGF0YS5tYXJrZXIoaWQpOyAvL+WQr+WKqOWcsOWbvuagh+iusOeCueaOpeWPo+WfuuehgOaWueazle+8jOivt+axguagh+iusOeCueivpue7hueahOe9kee7nOaVsOaNrlxuICAgIH1cblxuICB9LFxuXG4gIC8qKlxuICAgKueCueWHu+WcsOWbvu+8jOmakOiXj+WvueivneahhlxuICAgKlxuICAgKi9cbiAgaGlkZURpYWxvZygpIHtcbiAgICAvL+eCueWHu+mhtemdou+8jOmakOiXj+aooeW8j+WvueivneahhlxuICAgIGlmICh0aGlzLmRhdGEuZGlhbG9nQ2xhc3MgPT09IFwiZGlhbG9nXCIpIHJldHVybjtcbiAgICBsZXQgYyA9IHRoaXMuZGF0YS5kaWFsb2dDbGFzcyA9PT0gXCJkaWFsb2dVcFwiID8gXCJkaWFsb2dEb3duXCIgOiBcImRpYWxvZ1wiO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtYXJrZXI6IDxuZXRkYXRhLk1hcmtlciB8IG51bGw+bnVsbCwgLy/miormoIforrDngrnorr7nva7kuLrnqbpcbiAgICAgIGltZ3M6IDxTdHJpbmdbXT5bXSxcbiAgICAgIGRpYWxvZ0NsYXNzOiBjLFxuICAgICAgaXNTaG93TW9kYWw6IHRydWUsXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgICogQGRlc2NyaXB0aW9uIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo5byA5aeLXG4gICAgKiBAcGFyYW0geyp9IGVcbiAgICAqL1xuICB0b3VjaFN0YXJ0KGU6IGFueSkge1xuICAgIHRoaXMuZGF0YS5ldmVudFRvdWNoU3RhcnQgPSBlXG4gICAgLyogIHRoaXMuc2V0RGF0YSh7XG4gICAgIH0pOyAqL1xuICB9LFxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfmu5Hliqjnu5PmnZ9cbiAgICovXG4gIHRvdWNoRW5kKGU6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdwcCcpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhLmV2ZW50VG91Y2hTdGFydClcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIGxldCB3YXk6IHN0cmluZyA9IHNsaWRlLnNsaWRlV2F5KHRoaXMuZGF0YS5ldmVudFRvdWNoU3RhcnQsIGUpO1xuICAgIGlmICghd2F5KSByZXR1cm47XG4gICAgaWYgKHdheS5pbmRleE9mKFwi5LiL5ruRIOW/q+mAn1wiKSA+IC0xKVxuICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XG4gICAgZWxzZSBzbGlkZS5qdW1wTmF2KFwiZGl0dVwiLCB3YXkpXG4gIH0sXG4gIC8qKlxuICAgKuaLqOaJk+eUteivnVxuICAgKlxuICAgKiBAcGFyYW0geyp9IGV2ZW50XG4gICAqL1xuICBjYWxsaW5nKGV2ZW50OiBhbnkpIHtcbiAgICAvL+aJk+eUteivnVxuICAgIHZhciB0ZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICBwaG9uZU51bWJlcjogdGVsLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5oiQ5Yqf77yBXCIpXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5aSx6LSl77yBXCIpXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog5a+86IiqXG4gICAqL1xuICBkYW9oYW5nKCkge1xuICAgIGlmICghdGhpcy5kYXRhLm1hcmtlcikgcmV0dXJuO1xuICAgIGxldCB2ID0gdGhpcy5kYXRhLm1hcmtlciBhcyBuZXRkYXRhLk1hcmtlcjtcbiAgICB3eC5vcGVuTG9jYXRpb24oe1xuICAgICAgbGF0aXR1ZGU6IHYubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IHYubG9uZ2l0dWRlLFxuICAgICAgbmFtZTogdi5uYW1lLFxuICAgICAgYWRkcmVzczogdi5hZGRyZXNzLFxuICAgIH0pO1xuICAgIHRoaXMuZGF0YS5tYXJrZXIgPSBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiDliLfmlrDlnLDlm77moIforrDngrnmlbDmja5cbiAgICovXG4gIHNodWF4aW4oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG1hcmtlcnNTaW1wbGU6IDxuZXRkYXRhLk1hcmtlclNpbXBsZVtdPltdLFxuICAgICAgbWFya2VyOiA8bmV0ZGF0YS5NYXJrZXIgfCBudWxsPm51bGwsXG4gICAgICBtYXJrZXJzOiA8bmV0ZGF0YS5NYXJrZXJbXT5bXSxcbiAgICAgIGlzU2hvd01vZGFsOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLm9uTG9hZCgpO1xuICB9LFxuICAvKipcbiAgICog5pi+56S65Yqg6L295Yqo55S7XG4gICAqL1xuICBzaG93TG9hZGluZygpIHtcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lnKjlvZPliY3pobXpnaLmmL7npLrlr7zoiKrmnaHliqDovb3liqjnlLtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAvL+aYvuekuiBsb2FkaW5nIOaPkOekuuahhuOAgumcgOS4u+WKqOiwg+eUqCB3eC5oaWRlTG9hZGluZyDmiY3og73lhbPpl63mj5DnpLrmoYZcbiAgICAgIHRpdGxlOiBcIuWIt+aWsOS4rS4uLlwiLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAqL1xuICBoaWRlTG9hZGluZygpIHtcbiAgICB3eC5oaWRlTG9hZGluZygpOyAvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGXG4gICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v6ZqQ6JeP5a+86Iiq5p2h5Yqg6L295Yqo55S7XG4gICAgLy93eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi3XG4gIH0sXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7IH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuICAgIC8v55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgfSxcbn0pO1xuIl19