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
        var authUrl = "http://api.189.cn/ChinaTelecom/listFiles.action";
        wx.request({
            url: authUrl,
            success: function (res) {
                console.log(res);
            },
            fail: function (res) {
                console.log('错误： ' + res.errMsg);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxtQ0FBcUM7QUFDckMseUNBQTJDO0FBQzNDLHFEQUE0RDtBQUU1RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixrQkFBa0IsRUFBRSwrQkFBa0I7UUFDdEMsYUFBYSxFQUEwQixFQUFFO1FBQ3pDLE1BQU0sRUFBMEIsSUFBSTtRQUNwQyxPQUFPLEVBQW9CLEVBQUU7UUFDN0IsV0FBVyxFQUFFLEtBQUs7UUFDbEIsV0FBVyxFQUFFLFFBQVE7UUFDckIsZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFLRCxNQUFNLEVBQU47UUFFRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxVQUNyQyxJQUE0QjtZQUc1QixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUVaLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUVILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFZQyxJQUFJLE9BQU8sR0FBRyxpREFBaUQsQ0FBQztRQUNoRSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1YsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbEMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLRCxVQUFVLEVBQUUsVUFBVSxLQUFVO1FBQzlCLElBQUksQ0FBQyxXQUFXLEVB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LElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUF3QixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7WUFDcEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO1lBQ3RCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtZQUNaLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUtELE9BQU8sRUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQTBCLEVBQUU7WUFDekMsTUFBTSxFQUF5QixJQUFJO1lBQ25DLE9BQU8sRUFBb0IsRUFBRTtZQUM3QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUlELFdBQVc7UUFDVCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDO1lBRWIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELFdBQVc7UUFDVCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFFaEMsQ0FBQztJQUlELGlCQUFpQixnQkFBSyxDQUFDO0lBSXZCLE1BQU07SUFFTixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHlhbndlaVxuICogQERhdGU6IDIwMjAtMDQtMTggMjA6MDA6MDNcbiAqIEBMYXN0RWRpdG9yczogeWFud2VpXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA5LTE1IDEwOjUxOjA1XG4gKiBARGVzY3JpcHRpb24gOiDlnLDlm77pobXpnaLku6PnoIFcbiAqL1xuaW1wb3J0ICogYXMgbmV0ZGF0YSBmcm9tIFwiLi9uZXRkYXRhXCI7XG5pbXBvcnQgKiBhcyBzbGlkZSBmcm9tIFwiLi4vLi4vdXRpbHMvc2xpZGVcIjtcbmltcG9ydCB7IEVYVEVSTkFMX0RBVEFfUEFUSCB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25EYXRhXCI7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgRVhURVJOQUxfREFUQV9QQVRIOiBFWFRFUk5BTF9EQVRBX1BBVEgsLy/lpJbpg6jmlbDmja7lkozlm77niYfmgLvot6/lvoRcbiAgICBtYXJrZXJzU2ltcGxlOiA8bmV0ZGF0YS5NYXJrZXJTaW1wbGVbXT5bXSwgLy/liJ3lp4vljJblnLDlm77moIforrDngrnnroDljZXkv6Hmga/mlbDnu4TvvIznqbrmlbDnu4TvvIzpobXpnaLmraPluLjmmL7npLrlnLDlm77vvIzlm57osIPlkI7vvIzoh6rliqjlnKjlnLDlm77kuIrmmL7npLrmoIforrDngrnvvIznlKjmiLfmhJ/op4nkuI3liLDlu7bov59cbiAgICBtYXJrZXIhOiA8bmV0ZGF0YS5NYXJrZXIgfCBudWxsPm51bGwsIC8v6KKr54K55Ye755qE5Zyw5Zu+5qCH6K6w54K577yM5Yid5aeL5YyW5Li656m6XG4gICAgbWFya2VyczogPG5ldGRhdGEuTWFya2VyW10+W10sIC8v5omA5pyJ5Zyw5Zu+5qCH6K6w54K56K+m57uG5L+h5oGvXG4gICAgaXNTaG93TW9kYWw6IGZhbHNlLCAvL+aYr+WQpuaYvuekuuaooeaAgeWvueivneahhu+8jOWNs+ivpue7huS/oeaBr+ahhiAgIFxuICAgIGRpYWxvZ0NsYXNzOiBcImRpYWxvZ1wiLC8v5qih5byP5a+56K+d5qGGY3Nz57G75ZCNXG4gICAgZXZlbnRUb3VjaFN0YXJ0OiB7fVxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG5cbiAgb25Mb2FkKCkge1xuICAgIC8v6aG16Z2i5Yqg6L2977yM5YWI5q2j5bi45Yqg6L295Zyw5Zu+77yMXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIG5ldGRhdGEubWFya2Vyc1NpbXBsZSgpOyAvL+i/kOihjG1hcmtlcnNTaW1wbGXlr7nosaHnmoTln7rnoYDmlrnms5XvvIzlhbblhoXpg6jnmoTor7fmsYLnvZHnu5zmlbDmja7ku6PnoIHmmK/lvILmraXjgIHlu7bov5/nmoRcbiAgICAvL+aJgOS7peaXoOmcgOWIpOaWrWRhdGFGcm9tTmV0Lm1hcmtlcnNTaW1wbGUudmFsdWVz5piv5ZCm5a2Y5Zyo44CB5YaN6LWL5YC857uZbWFya2Vyc1NpbXBsZe+8jOWPr+ebtOaOpeWumuS5ieWSjOS9v+eUqOWbnuiwg1xuICAgIGxldCB0aGlzcyA9IHRoaXM7IC8v5b+F6aG75pqC5a2YdGhpc++8jOWQpuWImeWcqOWbnuiwg+S7o+eggeS4reeahHRoaXPkuI3mmK/mraR0aGlz5LqGXG4gICAgbmV0ZGF0YS5tYXJrZXJzU2ltcGxlLnZhbHVlc0NhbGxiYWNrID0gZnVuY3Rpb24gKFxuICAgICAgZGF0YTogbmV0ZGF0YS5NYXJrZXJTaW1wbGVbXVxuICAgICkge1xuICAgICAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIznlKjkuo7nvZHnu5zmlbDmja7or7fmsYLlkI7lm57osINcbiAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAvL+ivt+axguWIsOe9kee7nOaVsOaNruWQju+8jOiuvue9ruWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOWcsOWbvuS4iueri+WNs+aYvuekuuagh+iusOeCue+8jOS4jeW/heimgeaYvuekuuWKoOi9veWKqOeUu++8jOiuqeeUqOaIt+aXoOaEn+W7tui/n1xuICAgICAgICBtYXJrZXJzU2ltcGxlOiBkYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAgfTtcbiAgICAvL+mineWklueahO+8jOiwg+ivleS/oeaBr1xuICAgIC8qICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKCforr7lpIflk4HniYw6ICcrcmVzLmJyYW5kKVxuICAgICAgICAgY29uc29sZS5sb2coJ+iuvuWkh+Wei+WPtzogJytyZXMubW9kZWwpXG4gICAgICAgICBjb25zb2xlLmxvZygn5b6u5L+h54mI5pys5Y+3OiAnK3Jlcy52ZXJzaW9uKVxuICAgICAgICAgLy9jb25zb2xlLmxvZygn5pON5L2c57O757uf5Y+K54mI5pysOiAnK3Jlcy5zeXN0ZW0pXG4gICAgICAgICBjb25zb2xlLmxvZygn5a6i5oi356uv5bmz5Y+wOiAnK3Jlcy5wbGF0Zm9ybSlcbiAgICAgICAgIGNvbnNvbGUubG9nKCflrqLmiLfnq6/ln7rnoYDlupPniYjmnKw6ICcrcmVzLlNES1ZlcnNpb24pXG4gICAgICAgfX0pICovXG5cbiAgICAgICB2YXIgYXV0aFVybCA9IGBodHRwOi8vYXBpLjE4OS5jbi9DaGluYVRlbGVjb20vbGlzdEZpbGVzLmFjdGlvbmA7XG4gICAgICAgd3gucmVxdWVzdCh7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nvZHnu5zor7fmsYLlj5bmlbDmja5cbiAgICAgICAgdXJsOiBhdXRoVXJsLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+eugOWNleWcsOWbvuagh+iusOeCuWpzb27mlofku7bnmoTnvZHnu5zlnLDlnYBcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+mUmeivr++8miAnICsgcmVzLmVyck1zZylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeCueWHu+WcsOWbvuWumuS9jeeCue+8jOaYvuekuuivpue7huS/oeaBr+aooeW8j+WvueivneahhlxuICAgKi9cbiAgc2hvd0RpYWxvZzogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7IC8v5pi+56S65Yqg6L295Yqo55S7XG4gICAgbGV0IGlkID0gZXZlbnQubWFya2VySWQ7IC8v55So5oi354K55Ye755qE5Zyw5Zu+5qCH6K6w54K555qEaWRcbiAgICBmb3IgKGxldCB2IG9mIHRoaXMuZGF0YS5tYXJrZXJzKSB7IC8v5YWI5Yik5pat6KKr54K55Ye755qE5Zyw5Zu+54K555qE6K+m57uG5L+h5oGv5piv5ZCm5Zyo5pWw57uE5Lit77yM5aaC5Zyo77yM5YiZ5pqC5a2Y5YiwbVxuICAgICAgaWYgKGlkID09IHYuaWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtYXJrZXI6IHYsXG4gICAgICAgICAgaXNTaG93TW9kYWw6IHRydWUsXG4gICAgICAgICAgLy9kaWFsb2dDbGFzczogXCJkaWFsb2dVcFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpOyAvL+makOiXj+WKoOi9veWKqOeUu1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGRpYWxvZ0NsYXNzOiBcImRpYWxvZ1VwXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGF0YS5tYXJrZXIpIHsgLy/lpoLkuI3lnKjmlbDnu4TkuK3vvIzliJnnvZHnu5zor7fmsYLmlbDmja7vvIzlho3lrZjliLDmlbDnu4TkuK3vvIzkuIvmrKHngrnlh7vvvIzor7vlj5bmlbDnu4TvvIzkuI3lnKjnvZHnu5zor7fmsYJcblxuICAgICAgaWYgKCFuZXRkYXRhLm1hcmtlci52YWx1ZUNhbGxiYWNrKSB7ICAvL+WmguaenOS5i+WJjeayoeacieWumuS5ieWbnuiwg+aWueazlVxuICAgICAgICBsZXQgdGhpc3MgPSB0aGlzO1xuICAgICAgICBuZXRkYXRhLm1hcmtlci52YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlOiBuZXRkYXRhLk1hcmtlcikgeyAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOeUqOS6jue9kee7nOaVsOaNruivt+axguWQjuWbnuiwg1xuICAgICAgICAgIHRoaXNzLmRhdGEubWFya2Vycy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB0aGlzcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG1hcmtlcjogdmFsdWUsXG4gICAgICAgICAgICBpc1Nob3dNb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgIC8vZGlhbG9nQ2xhc3M6IFwiZGlhbG9nVXBcIixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3M6IFwiZGlhbG9nVXBcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG5ldGRhdGEubWFya2VyKGlkKTsgLy/lkK/liqjlnLDlm77moIforrDngrnmjqXlj6Pln7rnoYDmlrnms5XvvIzor7fmsYLmoIforrDngrnor6bnu4bnmoTnvZHnu5zmlbDmja5cbiAgICB9XG5cbiAgfSxcblxuICAvKipcbiAgICrngrnlh7vlnLDlm77vvIzpmpDol4/lr7nor53moYZcbiAgICpcbiAgICovXG4gIGhpZGVEaWFsb2coKSB7XG4gICAgLy/ngrnlh7vpobXpnaLvvIzpmpDol4/mqKHlvI/lr7nor53moYZcbiAgICBpZiAodGhpcy5kYXRhLmRpYWxvZ0NsYXNzID09PSBcImRpYWxvZ1wiKSByZXR1cm47XG4gICAgbGV0IGMgPSB0aGlzLmRhdGEuZGlhbG9nQ2xhc3MgPT09IFwiZGlhbG9nVXBcIiA/IFwiZGlhbG9nRG93blwiIDogXCJkaWFsb2dcIjtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbWFya2VyOiA8bmV0ZGF0YS5NYXJrZXIgfCBudWxsPm51bGwsIC8v5oqK5qCH6K6w54K56K6+572u5Li656m6XG4gICAgICBpbWdzOiA8U3RyaW5nW10+W10sXG4gICAgICBkaWFsb2dDbGFzczogYyxcbiAgICAgIGlzU2hvd01vZGFsOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICAqIEBkZXNjcmlwdGlvbiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xuICAgICogQHBhcmFtIHsqfSBlXG4gICAgKi9cbiAgdG91Y2hTdGFydChlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEuZXZlbnRUb3VjaFN0YXJ0ID0gZVxuICAgIC8qICB0aGlzLnNldERhdGEoe1xuICAgICB9KTsgKi9cbiAgfSxcbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo57uT5p2fXG4gICAqL1xuICB0b3VjaEVuZChlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncHAnKVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5ldmVudFRvdWNoU3RhcnQpXG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICBsZXQgd2F5OiBzdHJpbmcgPSBzbGlkZS5zbGlkZVdheSh0aGlzLmRhdGEuZXZlbnRUb3VjaFN0YXJ0LCBlKTtcbiAgICBpZiAoIXdheSkgcmV0dXJuO1xuICAgIGlmICh3YXkuaW5kZXhPZihcIuS4i+a7kSDlv6vpgJ9cIikgPiAtMSlcbiAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgIGVsc2Ugc2xpZGUuanVtcE5hdihcImRpdHVcIiwgd2F5KVxuICB9LFxuICAvKipcbiAgICrmi6jmiZPnlLXor51cbiAgICpcbiAgICogQHBhcmFtIHsqfSBldmVudFxuICAgKi9cbiAgY2FsbGluZyhldmVudDogYW55KSB7XG4gICAgLy/miZPnlLXor51cbiAgICB2YXIgdGVsID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgcGhvbmVOdW1iZXI6IHRlbCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaLqOaJk+eUteivneaIkOWKn++8gVwiKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaLqOaJk+eUteivneWksei0pe+8gVwiKVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOWvvOiIqlxuICAgKi9cbiAgZGFvaGFuZygpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS5tYXJrZXIpIHJldHVybjtcbiAgICBsZXQgdiA9IHRoaXMuZGF0YS5tYXJrZXIgYXMgbmV0ZGF0YS5NYXJrZXI7XG4gICAgd3gub3BlbkxvY2F0aW9uKHtcbiAgICAgIGxhdGl0dWRlOiB2LmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB2LmxvbmdpdHVkZSxcbiAgICAgIG5hbWU6IHYubmFtZSxcbiAgICAgIGFkZHJlc3M6IHYuYWRkcmVzcyxcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEubWFya2VyID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICog5Yi35paw5Zyw5Zu+5qCH6K6w54K55pWw5o2uXG4gICAqL1xuICBzaHVheGluKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtYXJrZXJzU2ltcGxlOiA8bmV0ZGF0YS5NYXJrZXJTaW1wbGVbXT5bXSxcbiAgICAgIG1hcmtlcjogPG5ldGRhdGEuTWFya2VyIHwgbnVsbD5udWxsLFxuICAgICAgbWFya2VyczogPG5ldGRhdGEuTWFya2VyW10+W10sXG4gICAgICBpc1Nob3dNb2RhbDogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy5vbkxvYWQoKTtcbiAgfSxcbiAgLyoqXG4gICAqIOaYvuekuuWKoOi9veWKqOeUu1xuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgLy/mmL7npLogbG9hZGluZyDmj5DnpLrmoYbjgILpnIDkuLvliqjosIPnlKggd3guaGlkZUxvYWRpbmcg5omN6IO95YWz6Zet5o+Q56S65qGGXG4gICAgICB0aXRsZTogXCLliLfmlrDkuK0uLi5cIixcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOmakOiXj+WKoOi9veWKqOeUu1xuICAgKi9cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgd3guaGlkZUxvYWRpbmcoKTsgLy/pmpDol49sb2FkaW5nIOaPkOekuuahhlxuICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+makOiXj+WvvOiIquadoeWKoOi9veWKqOeUu1xuICAgIC8vd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt1xuICB9LFxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkgeyB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gIH0sXG59KTtcbiJdfQ==