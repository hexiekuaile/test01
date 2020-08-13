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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl0dS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpdHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSwyQ0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUE4QixFQUFFO1FBQzdDLE1BQU0sRUFBa0MsU0FBUztRQUNqRCxPQUFPLEVBQXdCLEVBQUU7UUFDakMsZUFBZSxFQUFFLEtBQUs7S0FDdkI7SUFLSCxNQUFNO1FBRUYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsVUFDekMsSUFBZ0M7WUFHaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFFWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFFSCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUtELFNBQVMsRUFBRSxVQUFVLEtBQVU7UUFDN0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUV4QixLQUFjLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7WUFBNUIsSUFBSSxDQUFDLFNBQUE7WUFFUixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsTUFBTSxFQUFFLENBQUM7b0JBQ1QsZUFBZSxFQUFFLElBQUk7aUJBQ3RCLENBQUMsQ0FBQztnQkFDSCxNQUFNO2FBQ1A7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUVyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUVyQyxJQUFJLE9BQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLFVBQ2pDLEtBQXlCO29CQUd6QixPQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLE9BQUssQ0FBQyxPQUFPLENBQUM7d0JBQ1osTUFBTSxFQUFFLEtBQUs7d0JBQ2IsZUFBZSxFQUFFLElBQUk7cUJBQ3RCLENBQUMsQ0FBQztvQkFFSCxPQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQzthQUNIO1lBQ0QsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFNRCxTQUFTO1FBRVAsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLElBQUksRUFBWSxFQUFFO1lBQ2xCLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFPRCxPQUFPLFlBQUMsS0FBVTtRQUVoQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDekMsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLFdBQVcsRUFBRSxHQUFHO1lBQ2hCLE9BQU8sRUFBRTtZQUVULENBQUM7WUFDRCxJQUFJLEVBQUU7WUFFTixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQTRCLENBQUM7UUFDL0MsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7WUFDdEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ1osT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQThCLEVBQUU7WUFDN0MsTUFBTSxFQUFrQyxTQUFTO1lBQ2pELE9BQU8sRUFBd0IsRUFBRTtZQUNqQyxlQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUlELFdBQVc7UUFDVCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDO1lBRWIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELFdBQVc7UUFDVCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFFaEMsQ0FBQztJQUlELE1BQU07SUFFTixDQUFDO0lBSUQsaUJBQWlCLGdCQUFJLENBQUM7Q0FDdkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHlhbndlaVxuICogQERhdGU6IDIwMjAtMDQtMTggMjA6MDA6MDNcbiAqIEBMYXN0RWRpdG9yczogeWFud2VpXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA4LTEzIDExOjQ5OjA0XG4gKiBARGVzY3JpcHRpb24gOiDlnLDlm77pobXpnaLku6PnoIFcbiAqL1xuXG5pbXBvcnQgZGF0YUZyb21OZXQgPSByZXF1aXJlKFwiLi9kYXRhRnJvbU5ldFwiKTsgLy/lr7zlhaXor7fmsYLnvZHnu5zmlbDmja7ku6PnoIHmlofku7ZcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtYXJrZXJzU2ltcGxlOiA8ZGF0YUZyb21OZXQuTWFya2VyU2ltcGxlW10+W10sIC8v5Yid5aeL5YyW5Zyw5Zu+5qCH6K6w54K5566A5Y2V5L+h5oGv5pWw57uE77yM56m65pWw57uE77yM6aG16Z2i5q2j5bi45pi+56S65Zyw5Zu+77yM5Zue6LCD5ZCO77yM6Ieq5Yqo5Zyo5Zyw5Zu+5LiK5pi+56S65qCH6K6w54K577yM55So5oi35oSf6KeJ5LiN5Yiw5bu26L+fXG4gICAgbWFya2VyOiA8ZGF0YUZyb21OZXQuTWFya2VyIHwgdW5kZWZpbmVkPnVuZGVmaW5lZCwgLy/ooqvngrnlh7vnmoTlnLDlm77moIforrDngrnvvIzliJ3lp4vljJbkuLrnqbpcbiAgICBtYXJrZXJzOiA8ZGF0YUZyb21OZXQuTWFya2VyW10+W10sIC8v5omA5pyJ5Zyw5Zu+5qCH6K6w54K56K+m57uG5L+h5oGvXG4gICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZSwgLy/mmL7npLror6bnu4bkv6Hmga/moIflv5cgICAgXG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cblxub25Mb2FkKCkge1xuICAgIC8v6aG16Z2i5Yqg6L2977yM5YWI5q2j5bi45Yqg6L295Zyw5Zu+77yMXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIGRhdGFGcm9tTmV0Lm1hcmtlcnNTaW1wbGUoKTsgLy/ov5DooYxtYXJrZXJzU2ltcGxl5a+56LGh55qE5Z+656GA5pa55rOV77yM5YW25YaF6YOo55qE6K+35rGC572R57uc5pWw5o2u5Luj56CB5piv5byC5q2l44CB5bu26L+f55qEXG4gICAgLy/miYDku6Xml6DpnIDliKTmlq1kYXRhRnJvbU5ldC5tYXJrZXJzU2ltcGxlLnZhbHVlc+aYr+WQpuWtmOWcqOOAgeWGjei1i+WAvOe7mW1hcmtlcnNTaW1wbGXvvIzlj6/nm7TmjqXlrprkuYnlkozkvb/nlKjlm57osINcbiAgICBsZXQgdGhpc3MgPSB0aGlzOyAvL+W/hemhu+aaguWtmHRoaXPvvIzlkKbliJnlnKjlm57osIPku6PnoIHkuK3nmoR0aGlz5LiN5piv5q2kdGhpc+S6hlxuICAgIGRhdGFGcm9tTmV0Lm1hcmtlcnNTaW1wbGUudmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoXG4gICAgICBkYXRhOiBkYXRhRnJvbU5ldC5NYXJrZXJTaW1wbGVbXVxuICAgICkge1xuICAgICAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIznlKjkuo7nvZHnu5zmlbDmja7or7fmsYLlkI7lm57osINcbiAgICAgIHRoaXNzLnNldERhdGEoe1xuICAgICAgICAvL+ivt+axguWIsOe9kee7nOaVsOaNruWQju+8jOiuvue9ruWcsOWbvuagh+iusOeCueeugOWNleS/oeaBr+aVsOe7hO+8jOWcsOWbvuS4iueri+WNs+aYvuekuuagh+iusOeCue+8jOS4jeW/heimgeaYvuekuuWKoOi9veWKqOeUu++8jOiuqeeUqOaIt+aXoOaEn+W7tui/n1xuICAgICAgICBtYXJrZXJzU2ltcGxlOiBkYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JeP5Yqg6L295Yqo55S7XG4gICAgfTtcbiAgfSwgXG5cbiAgLyoqXG4gICAqIOaYvuekuuivpue7huS/oeaBr+ahhlxuICAgKi9cbiAgc2hvd01vZGFsOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIHZhciBpZCA9IGV2ZW50Lm1hcmtlcklkOyAvL+eUqOaIt+eCueWHu+eahOWcsOWbvuagh+iusOeCueeahGlkXG5cbiAgICBmb3IgKGxldCB2IG9mIHRoaXMuZGF0YS5tYXJrZXJzKSB7XG4gICAgICAvL+WFiOWIpOaWreiiq+eCueWHu+eahOWcsOWbvueCueeahOivpue7huS/oeaBr+aYr+WQpuWcqOaVsOe7hOS4re+8jOWmguWcqO+8jOWImeaaguWtmOWIsG1cbiAgICAgIGlmIChpZCA9PSB2LmlkKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbWFya2VyOiB2LFxuICAgICAgICAgIHNob3dNb2RhbFN0YXR1czogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YS5tYXJrZXIpIHtcbiAgICAgIC8v5aaC5LiN5Zyo5pWw57uE5Lit77yM5YiZ572R57uc6K+35rGC5pWw5o2u77yM5YaN5a2Y5Yiw5pWw57uE5Lit77yM5LiL5qyh54K55Ye777yM6K+75Y+W5pWw57uE77yM5LiN5Zyo572R57uc6K+35rGCXG4gICAgICB0aGlzLnNob3dMb2FkaW5nKCk7IC8v5pi+56S65Yqg6L295Yqo55S7XG5cbiAgICAgIGlmICghZGF0YUZyb21OZXQubWFya2VyLnZhbHVlQ2FsbGJhY2spIHtcbiAgICAgICAgLy/lpoLmnpzkuYvliY3msqHmnInlrprkuYnlm57osIPmlrnms5VcbiAgICAgICAgbGV0IHRoaXNzID0gdGhpcztcbiAgICAgICAgZGF0YUZyb21OZXQubWFya2VyLnZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoXG4gICAgICAgICAgdmFsdWU6IGRhdGFGcm9tTmV0Lk1hcmtlclxuICAgICAgICApIHtcbiAgICAgICAgICAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOeUqOS6jue9kee7nOaVsOaNruivt+axguWQjuWbnuiwg1xuICAgICAgICAgIHRoaXNzLmRhdGEubWFya2Vycy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB0aGlzcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG1hcmtlcjogdmFsdWUsXG4gICAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IHRydWUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzcy5oaWRlTG9hZGluZygpOyAvL+makOiXj+WKoOi9veWKqOeUu1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZGF0YUZyb21OZXQubWFya2VyKGlkKTsgLy/lkK/liqjlnLDlm77moIforrDngrnmjqXlj6Pln7rnoYDmlrnms5XvvIzor7fmsYLmoIforrDngrnor6bnu4bnmoTnvZHnu5zmlbDmja5cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAq6ZqQ6JeP5a+56K+d5qGGXG4gICAqXG4gICAqL1xuICBoaWRlTW9kYWwoKSB7XG4gICAgLy/ngrnlh7vpobXpnaLvvIzpmpDol4/lvLnlh7rmoYZcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbWFya2VyOiB1bmRlZmluZWQsIC8v5oqK5qCH6K6w54K56K6+572u5Li656m6XG4gICAgICBpbWdzOiA8U3RyaW5nW10+W10sXG4gICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKuaLqOaJk+eUteivnVxuICAgKlxuICAgKiBAcGFyYW0geyp9IGV2ZW50XG4gICAqL1xuICBjYWxsaW5nKGV2ZW50OiBhbnkpIHtcbiAgICAvL+aJk+eUteivnVxuICAgIHZhciB0ZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICBwaG9uZU51bWJlcjogdGVsLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5oiQ5Yqf77yBXCIpXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5ouo5omT55S16K+d5aSx6LSl77yBXCIpXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog5a+86IiqXG4gICAqL1xuICBkYW9oYW5nKCkge1xuICAgIGlmICghdGhpcy5kYXRhLm1hcmtlcikgcmV0dXJuO1xuICAgIGxldCB2ID0gdGhpcy5kYXRhLm1hcmtlciBhcyBkYXRhRnJvbU5ldC5NYXJrZXI7XG4gICAgd3gub3BlbkxvY2F0aW9uKHtcbiAgICAgIGxhdGl0dWRlOiB2LmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiB2LmxvbmdpdHVkZSxcbiAgICAgIG5hbWU6IHYubmFtZSxcbiAgICAgIGFkZHJlc3M6IHYuYWRkcmVzcyxcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEubWFya2VyID0gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiDliLfmlrDlnLDlm77moIforrDngrnmlbDmja5cbiAgICovXG4gIHNodWF4aW4oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG1hcmtlcnNTaW1wbGU6IDxkYXRhRnJvbU5ldC5NYXJrZXJTaW1wbGVbXT5bXSxcbiAgICAgIG1hcmtlcjogPGRhdGFGcm9tTmV0Lk1hcmtlciB8IHVuZGVmaW5lZD51bmRlZmluZWQsXG4gICAgICBtYXJrZXJzOiA8ZGF0YUZyb21OZXQuTWFya2VyW10+W10sXG4gICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlLFxuICAgIH0pO1xuICAgIHRoaXMub25Mb2FkKCk7XG4gIH0sXG4gIC8qKlxuICAgKiDmmL7npLrliqDovb3liqjnlLtcbiAgICovXG4gIHNob3dMb2FkaW5nKCkge1xuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WcqOW9k+WJjemhtemdouaYvuekuuWvvOiIquadoeWKoOi9veWKqOeUu1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIC8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxuICAgICAgdGl0bGU6IFwi5Yi35paw5LitLi4uXCIsXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDpmpDol4/liqDovb3liqjnlLtcbiAgICovXG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHd4LmhpZGVMb2FkaW5nKCk7IC8v6ZqQ6JePbG9hZGluZyDmj5DnpLrmoYZcbiAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLtcbiAgICAvL3d4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLdcbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgLy/nlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICB9LFxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge30sXG59KTtcbiJdfQ==