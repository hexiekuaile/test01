"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataFromNet = require("./dataFromNet");
Page({
    data: {
        markersSimple: [],
        marker: undefined,
        markers: [],
        showModalStatus: false,
    },
    onLoad: function () {
        this.showLoading();
        dataFromNet.markersSimple();
        var thiss = this;
        dataFromNet.markersSimple.valuesCallback = function (data) {
            thiss.setData({
                markersSimple: data,
            });
            thiss.hideLoading();
        };
        wx.getSystemInfo({
            success: function (res) {
                console.log('设备品牌: ' + res.brand);
                console.log('设备型号: ' + res.model);
                console.log('微信版本号: ' + res.version);
                console.log('操作系统及版本: ' + res.system);
                console.log('客户端平台: ' + res.platform);
                console.log('客户端基础库版本: ' + res.SDKVersion);
            }
        });
    },
    showModal: function (event) {
        var id = event.markerId;
        for (var _i = 0, _a = this.data.markers; _i < _a.length; _i++) {
            var v = _a[_i];
            if (id == v.id) {
                this.setData({
                    marker: v,
                    showModalStatus: true,
                });
                break;
            }
        }
        if (!this.data.marker) {
            this.showLoading();
            if (!dataFromNet.marker.valueCallback) {
                var thiss_1 = this;
                dataFromNet.marker.valueCallback = function (value) {
                    thiss_1.data.markers.push(value);
                    thiss_1.setData({
                        marker: value,
                        showModalStatus: true,
                    });
                    thiss_1.hideLoading();
                };
            }
            dataFromNet.marker(id);
        }
    },
    hideModal: function () {
        this.setData({
            marker: undefined,
            imgs: [],
            showModalStatus: false,
        });
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
        this.data.marker = undefined;
    },
    shuaxin: function () {
        this.setData({
            markersSimple: [],
            marker: undefined,
            markers: [],
            showModalStatus: false,
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
    onShow: function () {
    },
    onPullDownRefresh: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSwyQ0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUE4QixFQUFFO1FBQzdDLE1BQU0sRUFBa0MsU0FBUztRQUNqRCxPQUFPLEVBQXdCLEVBQUU7UUFDakMsZUFBZSxFQUFFLEtBQUs7S0FDdkI7SUFLSCxNQUFNO1FBRUYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsVUFDekMsSUFBZ0M7WUFHaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFFWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFFSCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBR0osRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sWUFBRSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENB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QUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBRWhDLENBQUM7SUFJRCxNQUFNO0lBRU4sQ0FBQztJQUlELGlCQUFpQixnQkFBSSxDQUFDO0NBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiB5YW53ZWlcbiAqIEBEYXRlOiAyMDIwLTA0LTE4IDIwOjAwOjAzXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOC0xOSAxMDo0MjozMlxuICogQERlc2NyaXB0aW9uIDog5Zyw5Zu+6aG16Z2i5Luj56CBXG4gKi9cblxuaW1wb3J0IGRhdGFGcm9tTmV0ID0gcmVxdWlyZShcIi4vZGF0YUZyb21OZXRcIik7IC8v5a+85YWl6K+35rGC572R57uc5pWw5o2u5Luj56CB5paH5Lu2XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbWFya2Vyc1NpbXBsZTogPGRhdGFGcm9tTmV0Lk1hcmtlclNpbXBsZVtdPltdLCAvL+WIneWni+WMluWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOepuuaVsOe7hO+8jOmhtemdouato+W4uOaYvuekuuWcsOWbvu+8jOWbnuiwg+WQju+8jOiHquWKqOWcqOWcsOWbvuS4iuaYvuekuuagh+iusOeCue+8jOeUqOaIt+aEn+inieS4jeWIsOW7tui/n1xuICAgIG1hcmtlcjogPGRhdGFGcm9tTmV0Lk1hcmtlciB8IHVuZGVmaW5lZD51bmRlZmluZWQsIC8v6KKr54K55Ye755qE5Zyw5Zu+5qCH6K6w54K577yM5Yid5aeL5YyW5Li656m6XG4gICAgbWFya2VyczogPGRhdGFGcm9tTmV0Lk1hcmtlcltdPltdLCAvL+aJgOacieWcsOWbvuagh+iusOeCueivpue7huS/oeaBr1xuICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2UsIC8v5pi+56S66K+m57uG5L+h5oGv5qCH5b+XICAgIFxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG5cbm9uTG9hZCgpIHtcbiAgICAvL+mhtemdouWKoOi9ve+8jOWFiOato+W4uOWKoOi9veWcsOWbvu+8jFxuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICBkYXRhRnJvbU5ldC5tYXJrZXJzU2ltcGxlKCk7IC8v6L+Q6KGMbWFya2Vyc1NpbXBsZeWvueixoeeahOWfuuehgOaWueazle+8jOWFtuWGhemDqOeahOivt+axgue9kee7nOaVsOaNruS7o+eggeaYr+W8guatpeOAgeW7tui/n+eahFxuICAgIC8v5omA5Lul5peg6ZyA5Yik5patZGF0YUZyb21OZXQubWFya2Vyc1NpbXBsZS52YWx1ZXPmmK/lkKblrZjlnKjjgIHlho3otYvlgLznu5ltYXJrZXJzU2ltcGxl77yM5Y+v55u05o6l5a6a5LmJ5ZKM5L2/55So5Zue6LCDXG4gICAgbGV0IHRoaXNzID0gdGhpczsgLy/lv4XpobvmmoLlrZh0aGlz77yM5ZCm5YiZ5Zyo5Zue6LCD5Luj56CB5Lit55qEdGhpc+S4jeaYr+atpHRoaXPkuoZcbiAgICBkYXRhRnJvbU5ldC5tYXJrZXJzU2ltcGxlLnZhbHVlc0NhbGxiYWNrID0gZnVuY3Rpb24gKFxuICAgICAgZGF0YTogZGF0YUZyb21OZXQuTWFya2VyU2ltcGxlW11cbiAgICApIHtcbiAgICAgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXG4gICAgICB0aGlzcy5zZXREYXRhKHtcbiAgICAgICAgLy/or7fmsYLliLDnvZHnu5zmlbDmja7lkI7vvIzorr7nva7lnLDlm77moIforrDngrnnroDljZXkv6Hmga/mlbDnu4TvvIzlnLDlm77kuIrnq4vljbPmmL7npLrmoIforrDngrnvvIzkuI3lv4XopoHmmL7npLrliqDovb3liqjnlLvvvIzorqnnlKjmiLfml6DmhJ/lu7bov59cbiAgICAgICAgbWFya2Vyc1NpbXBsZTogZGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzcy5oaWRlTG9hZGluZygpOyAvL+makOiXj+WKoOi9veWKqOeUu1xuICAgIH07XG5cbiAgICBcbiAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICBjb25zb2xlLmxvZygn6K6+5aSH5ZOB54mMOiAnK3Jlcy5icmFuZClcbiAgICAgIGNvbnNvbGUubG9nKCforr7lpIflnovlj7c6ICcrcmVzLm1vZGVsKVxuICAgICAgY29uc29sZS5sb2coJ+W+ruS/oeeJiOacrOWPtzogJytyZXMudmVyc2lvbilcbiAgICAgIGNvbnNvbGUubG9nKCfmk43kvZzns7vnu5/lj4rniYjmnKw6ICcrcmVzLnN5c3RlbSlcbiAgICAgIGNvbnNvbGUubG9nKCflrqLmiLfnq6/lubPlj7A6ICcrcmVzLnBsYXRmb3JtKVxuICAgICAgY29uc29sZS5sb2coJ+WuouaIt+err+WfuuehgOW6k+eJiOacrDogJytyZXMuU0RLVmVyc2lvbilcbiAgICB9fSlcblxuICB9LCBcblxuICAvKipcbiAgICog5pi+56S66K+m57uG5L+h5oGv5qGGXG4gICAqL1xuICBzaG93TW9kYWw6IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgdmFyIGlkID0gZXZlbnQubWFya2VySWQ7IC8v55So5oi354K55Ye755qE5Zyw5Zu+5qCH6K6w54K555qEaWRcblxuICAgIGZvciAobGV0IHYgb2YgdGhpcy5kYXRhLm1hcmtlcnMpIHtcbiAgICAgIC8v5YWI5Yik5pat6KKr54K55Ye755qE5Zyw5Zu+54K555qE6K+m57uG5L+h5oGv5piv5ZCm5Zyo5pWw57uE5Lit77yM5aaC5Zyo77yM5YiZ5pqC5a2Y5YiwbVxuICAgICAgaWYgKGlkID09IHYuaWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtYXJrZXI6IHYsXG4gICAgICAgICAgc2hvd01vZGFsU3RhdHVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5kYXRhLm1hcmtlcikge1xuICAgICAgLy/lpoLkuI3lnKjmlbDnu4TkuK3vvIzliJnnvZHnu5zor7fmsYLmlbDmja7vvIzlho3lrZjliLDmlbDnu4TkuK3vvIzkuIvmrKHngrnlh7vvvIzor7vlj5bmlbDnu4TvvIzkuI3lnKjnvZHnu5zor7fmsYJcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTsgLy/mmL7npLrliqDovb3liqjnlLtcblxuICAgICAgaWYgKCFkYXRhRnJvbU5ldC5tYXJrZXIudmFsdWVDYWxsYmFjaykge1xuICAgICAgICAvL+WmguaenOS5i+WJjeayoeacieWumuS5ieWbnuiwg+aWueazlVxuICAgICAgICBsZXQgdGhpc3MgPSB0aGlzO1xuICAgICAgICBkYXRhRnJvbU5ldC5tYXJrZXIudmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIChcbiAgICAgICAgICB2YWx1ZTogZGF0YUZyb21OZXQuTWFya2VyXG4gICAgICAgICkge1xuICAgICAgICAgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXG4gICAgICAgICAgdGhpc3MuZGF0YS5tYXJrZXJzLnB1c2godmFsdWUpO1xuICAgICAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAgICAgbWFya2VyOiB2YWx1ZSxcbiAgICAgICAgICAgIHNob3dNb2RhbFN0YXR1czogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBkYXRhRnJvbU5ldC5tYXJrZXIoaWQpOyAvL+WQr+WKqOWcsOWbvuagh+iusOeCueaOpeWPo+WfuuehgOaWueazle+8jOivt+axguagh+iusOeCueivpue7hueahOe9kee7nOaVsOaNrlxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICrpmpDol4/lr7nor53moYZcbiAgICpcbiAgICovXG4gIGhpZGVNb2RhbCgpIHtcbiAgICAvL+eCueWHu+mhtemdou+8jOmakOiXj+W8ueWHuuahhlxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtYXJrZXI6IHVuZGVmaW5lZCwgLy/miormoIforrDngrnorr7nva7kuLrnqbpcbiAgICAgIGltZ3M6IDxTdHJpbmdbXT5bXSxcbiAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAq5ouo5omT55S16K+dXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZXZlbnRcbiAgICovXG4gIGNhbGxpbmcoZXZlbnQ6IGFueSkge1xuICAgIC8v5omT55S16K+dXG4gICAgdmFyIHRlbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgIHBob25lTnVtYmVyOiB0ZWwsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCLmi6jmiZPnlLXor53miJDlip/vvIFcIilcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCLmi6jmiZPnlLXor53lpLHotKXvvIFcIilcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDlr7zoiKpcbiAgICovXG4gIGRhb2hhbmcoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEubWFya2VyKSByZXR1cm47XG4gICAgbGV0IHYgPSB0aGlzLmRhdGEubWFya2VyIGFzIGRhdGFGcm9tTmV0Lk1hcmtlcjtcbiAgICB3eC5vcGVuTG9jYXRpb24oe1xuICAgICAgbGF0aXR1ZGU6IHYubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IHYubG9uZ2l0dWRlLFxuICAgICAgbmFtZTogdi5uYW1lLFxuICAgICAgYWRkcmVzczogdi5hZGRyZXNzLFxuICAgIH0pO1xuICAgIHRoaXMuZGF0YS5tYXJrZXIgPSB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOWIt+aWsOWcsOWbvuagh+iusOeCueaVsOaNrlxuICAgKi9cbiAgc2h1YXhpbigpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbWFya2Vyc1NpbXBsZTogPGRhdGFGcm9tTmV0Lk1hcmtlclNpbXBsZVtdPltdLFxuICAgICAgbWFya2VyOiA8ZGF0YUZyb21OZXQuTWFya2VyIHwgdW5kZWZpbmVkPnVuZGVmaW5lZCxcbiAgICAgIG1hcmtlcnM6IDxkYXRhRnJvbU5ldC5NYXJrZXJbXT5bXSxcbiAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy5vbkxvYWQoKTtcbiAgfSxcbiAgLyoqXG4gICAqIOaYvuekuuWKoOi9veWKqOeUu1xuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgLy/mmL7npLogbG9hZGluZyDmj5DnpLrmoYbjgILpnIDkuLvliqjosIPnlKggd3guaGlkZUxvYWRpbmcg5omN6IO95YWz6Zet5o+Q56S65qGGXG4gICAgICB0aXRsZTogXCLliLfmlrDkuK0uLi5cIixcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOmakOiXj+WKoOi9veWKqOeUu1xuICAgKi9cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgd3guaGlkZUxvYWRpbmcoKTsgLy/pmpDol49sb2FkaW5nIOaPkOekuuahhlxuICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+makOiXj+WvvOiIquadoeWKoOi9veWKqOeUu1xuICAgIC8vd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt1xuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gIH0sXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7fSxcbn0pO1xuIl19