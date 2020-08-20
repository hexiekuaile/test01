"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataFromNet = require("./dataFromNet");
Page({
    data: {
        markersSimple: [],
        marker: null,
        markers: [],
        isShowModal: false,
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
                    isShowModal: true,
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
                        isShowModal: true,
                    });
                    thiss_1.hideLoading();
                };
            }
            dataFromNet.marker(id);
        }
    },
    hideModal: function () {
        this.setData({
            marker: null,
            imgs: [],
            isShowModal: false,
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
    onShow: function () {
    },
    onPullDownRefresh: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSwyQ0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUE4QixFQUFFO1FBQzdDLE1BQU0sRUFBOEIsSUFBSTtRQUN4QyxPQUFPLEVBQXdCLEVBQUU7UUFDakMsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFLSCxNQUFNO1FBRUYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsVUFDekMsSUFBZ0M7WUFHaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFFWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFFSCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBR0osRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sWUFBRSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENB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QUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBRWhDLENBQUM7SUFJRCxNQUFNO0lBRU4sQ0FBQztJQUlELGlCQUFpQixnQkFBSSxDQUFDO0NBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiB5YW53ZWlcbiAqIEBEYXRlOiAyMDIwLTA0LTE4IDIwOjAwOjAzXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOC0xOSAxNjoyNjoxNVxuICogQERlc2NyaXB0aW9uIDog5Zyw5Zu+6aG16Z2i5Luj56CBXG4gKi9cblxuaW1wb3J0IGRhdGFGcm9tTmV0ID0gcmVxdWlyZShcIi4vZGF0YUZyb21OZXRcIik7IC8v5a+85YWl6K+35rGC572R57uc5pWw5o2u5Luj56CB5paH5Lu2XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbWFya2Vyc1NpbXBsZTogPGRhdGFGcm9tTmV0Lk1hcmtlclNpbXBsZVtdPltdLCAvL+WIneWni+WMluWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOepuuaVsOe7hO+8jOmhtemdouato+W4uOaYvuekuuWcsOWbvu+8jOWbnuiwg+WQju+8jOiHquWKqOWcqOWcsOWbvuS4iuaYvuekuuagh+iusOeCue+8jOeUqOaIt+aEn+inieS4jeWIsOW7tui/n1xuICAgIG1hcmtlciE6IDxkYXRhRnJvbU5ldC5NYXJrZXIgfCBudWxsPm51bGwsIC8v6KKr54K55Ye755qE5Zyw5Zu+5qCH6K6w54K577yM5Yid5aeL5YyW5Li656m6XG4gICAgbWFya2VyczogPGRhdGFGcm9tTmV0Lk1hcmtlcltdPltdLCAvL+aJgOacieWcsOWbvuagh+iusOeCueivpue7huS/oeaBr1xuICAgIGlzU2hvd01vZGFsOiBmYWxzZSwgLy/mmK/lkKbmmL7npLrmqKHmgIHlr7nor53moYbvvIzljbPor6bnu4bkv6Hmga/moYYgICAgXG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cblxub25Mb2FkKCkge1xuICAgIC8v6aG16Z2i5Yqg6L2977yM5YWI5q2j5bi45Yqg6L295Zyw5Zu+77yMXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIGRhdGFGcm9tTmV0Lm1hcmtlcnNTaW1wbGUoKTsgLy/ov5DooYxtYXJrZXJzU2ltcGxl5a+56LGh55qE5Z+656GA5pa55rOV77yM5YW25YaF6YOo55qE6K+35rGC572R57uc5pWw5o2u5Luj56CB5piv5byC5q2l44CB5bu26L+f55qEXG4gICAgLy/miYDku6Xml6DpnIDliKTmlq1kYXRhRnJvbU5ldC5tYXJrZXJzU2ltcGxlLnZhbHVlc+aYr+WQpuWtmOWcqOOAgeWGjei1i+WAvOe7mW1hcmtlcnNTaW1wbGXvvIzlj6/nm7TmjqXlrprkuYnlkozkvb/nlKjlm57osINcbiAgICBsZXQgdGhpc3MgPSB0aGlzOyAvL+W/hemhu+aaguWtmHRoaXPvvIzlkKbliJnlnKjlm57osIPku6PnoIHkuK3nmoR0aGlz5LiN5piv5q2kdGhpc+S6hlxuICAgIGRhdGFGcm9tTmV0Lm1hcmtlcnNTaW1wbGUudmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoXG4gICAgICBkYXRhOiBkYXRhRnJvbU5ldC5NYXJrZXJTaW1wbGVbXVxuICAgICkge1xuICAgICAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIznlKjkuo7nvZHnu5zmlbDmja7or7fmsYLlkI7lm57osINcbiAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAvL+ivt+axguWIsOe9kee7nOaVsOaNruWQju+8jOiuvue9ruWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOWcsOWbvuS4iueri+WNs+aYvuekuuagh+iusOeCue+8jOS4jeW/heimgeaYvuekuuWKoOi9veWKqOeUu++8jOiuqeeUqOaIt+aXoOaEn+W7tui/n1xuICAgICAgICBtYXJrZXJzU2ltcGxlOiBkYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAgfTtcblxuICAgIC8v6aKd5aSW55qE77yM6LCD6K+V5L+h5oGvXG4gIHd4LmdldFN5c3RlbUluZm8oe1xuICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgY29uc29sZS5sb2coJ+iuvuWkh+WTgeeJjDogJytyZXMuYnJhbmQpXG4gICAgICBjb25zb2xlLmxvZygn6K6+5aSH5Z6L5Y+3OiAnK3Jlcy5tb2RlbClcbiAgICAgIGNvbnNvbGUubG9nKCflvq7kv6HniYjmnKzlj7c6ICcrcmVzLnZlcnNpb24pXG4gICAgICBjb25zb2xlLmxvZygn5pON5L2c57O757uf5Y+K54mI5pysOiAnK3Jlcy5zeXN0ZW0pXG4gICAgICBjb25zb2xlLmxvZygn5a6i5oi356uv5bmz5Y+wOiAnK3Jlcy5wbGF0Zm9ybSlcbiAgICAgIGNvbnNvbGUubG9nKCflrqLmiLfnq6/ln7rnoYDlupPniYjmnKw6ICcrcmVzLlNES1ZlcnNpb24pXG4gICAgfX0pXG5cbiAgfSwgXG5cbiAgLyoqXG4gICAqIOaYvuekuuivpue7huS/oeaBr+ahhlxuICAgKi9cbiAgc2hvd01vZGFsOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIGxldCBpZCA9IGV2ZW50Lm1hcmtlcklkOyAvL+eUqOaIt+eCueWHu+eahOWcsOWbvuagh+iusOeCueeahGlkXG5cbiAgICBmb3IgKGxldCB2IG9mIHRoaXMuZGF0YS5tYXJrZXJzKSB7IC8v5YWI5Yik5pat6KKr54K55Ye755qE5Zyw5Zu+54K555qE6K+m57uG5L+h5oGv5piv5ZCm5Zyo5pWw57uE5Lit77yM5aaC5Zyo77yM5YiZ5pqC5a2Y5YiwbVxuICAgICAgaWYgKGlkID09IHYuaWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtYXJrZXI6IHYsXG4gICAgICAgICAgaXNTaG93TW9kYWw6IHRydWUsXG4gICAgICAgIH0pOyAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRhdGEubWFya2VyKSB7IC8v5aaC5LiN5Zyo5pWw57uE5Lit77yM5YiZ572R57uc6K+35rGC5pWw5o2u77yM5YaN5a2Y5Yiw5pWw57uE5Lit77yM5LiL5qyh54K55Ye777yM6K+75Y+W5pWw57uE77yM5LiN5Zyo572R57uc6K+35rGCXG4gICAgICB0aGlzLnNob3dMb2FkaW5nKCk7IC8v5pi+56S65Yqg6L295Yqo55S7XG4gICAgICBpZiAoIWRhdGFGcm9tTmV0Lm1hcmtlci52YWx1ZUNhbGxiYWNrKSB7ICAvL+WmguaenOS5i+WJjeayoeacieWumuS5ieWbnuiwg+aWueazlVxuICAgICAgICBsZXQgdGhpc3MgPSB0aGlzO1xuICAgICAgICBkYXRhRnJvbU5ldC5tYXJrZXIudmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWx1ZTogZGF0YUZyb21OZXQuTWFya2VyKSB7IC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXG4gICAgICAgICAgdGhpc3MuZGF0YS5tYXJrZXJzLnB1c2godmFsdWUpO1xuICAgICAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAgICAgbWFya2VyOiB2YWx1ZSxcbiAgICAgICAgICAgIGlzU2hvd01vZGFsOiB0cnVlLFxuICAgICAgICAgIH0pOyAgICAgICBcblxuICAgICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBkYXRhRnJvbU5ldC5tYXJrZXIoaWQpOyAvL+WQr+WKqOWcsOWbvuagh+iusOeCueaOpeWPo+WfuuehgOaWueazle+8jOivt+axguagh+iusOeCueivpue7hueahOe9kee7nOaVsOaNrlxuICAgIH1cbiAgICBcbiAgfSxcblxuICAvKipcbiAgICrpmpDol4/lr7nor53moYZcbiAgICpcbiAgICovXG4gIGhpZGVNb2RhbCgpIHtcbiAgICAvL+eCueWHu+mhtemdou+8jOmakOiXj+W8ueWHuuahhlxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtYXJrZXI6ICA8ZGF0YUZyb21OZXQuTWFya2VyIHwgbnVsbD5udWxsLCAvL+aKiuagh+iusOeCueiuvue9ruS4uuepulxuICAgICAgaW1nczogPFN0cmluZ1tdPltdLFxuICAgICAgaXNTaG93TW9kYWw6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKuaLqOaJk+eUteivnVxuICAgKlxuICAgKiBAcGFyYW0geyp9IGV2ZW50XG4gICAqL1xuICBjYWxsaW5nKGV2ZW50OiBhbnkpIHtcbiAgICAvL+aJk+eUteivnVxuICAgIHZhciB0ZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICBwaG9uZU51bWJlcjogdGVsLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5oiQ5Yqf77yBXCIpXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5aSx6LSl77yBXCIpXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog5a+86IiqXG4gICAqL1xuICBkYW9oYW5nKCkge1xuICAgIGlmICghdGhpcy5kYXRhLm1hcmtlcikgcmV0dXJuO1xuICAgIGxldCB2ID0gdGhpcy5kYXRhLm1hcmtlciBhcyBkYXRhRnJvbU5ldC5NYXJrZXI7XG4gICAgd3gub3BlbkxvY2F0aW9uKHtcbiAgICAgIGxhdGl0dWRlOiB2LmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB2LmxvbmdpdHVkZSxcbiAgICAgIG5hbWU6IHYubmFtZSxcbiAgICAgIGFkZHJlc3M6IHYuYWRkcmVzcyxcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEubWFya2VyID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICog5Yi35paw5Zyw5Zu+5qCH6K6w54K55pWw5o2uXG4gICAqL1xuICBzaHVheGluKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtYXJrZXJzU2ltcGxlOiA8ZGF0YUZyb21OZXQuTWFya2VyU2ltcGxlW10+W10sXG4gICAgICBtYXJrZXI6IDxkYXRhRnJvbU5ldC5NYXJrZXIgfCBudWxsPm51bGwsXG4gICAgICBtYXJrZXJzOiA8ZGF0YUZyb21OZXQuTWFya2VyW10+W10sXG4gICAgICBpc1Nob3dNb2RhbDogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy5vbkxvYWQoKTtcbiAgfSxcbiAgLyoqXG4gICAqIOaYvuekuuWKoOi9veWKqOeUu1xuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgLy/mmL7npLogbG9hZGluZyDmj5DnpLrmoYbjgILpnIDkuLvliqjosIPnlKggd3guaGlkZUxvYWRpbmcg5omN6IO95YWz6Zet5o+Q56S65qGGXG4gICAgICB0aXRsZTogXCLliLfmlrDkuK0uLi5cIixcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOmakOiXj+WKoOi9veWKqOeUu1xuICAgKi9cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgd3guaGlkZUxvYWRpbmcoKTsgLy/pmpDol49sb2FkaW5nIOaPkOekuuahhlxuICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+makOiXj+WvvOiIquadoeWKoOi9veWKqOeUu1xuICAgIC8vd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt1xuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gIH0sXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7fSxcbn0pO1xuIl19