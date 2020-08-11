"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../../utils/netVideo");
Page({
    data: {
        URL_VIDEO_JSON: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoXuanChuanPian.json",
        videos: [],
        ivideo: {},
        numCallback: 0
    },
    onLoad: function () {
        this.data.ivideo = util.getVideo(this.data.URL_VIDEO_JSON);
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
                    wx.hideLoading();
                    wx.hideNavigationBarLoading();
                    wx.stopPullDownRefresh();
                }
            };
        thiss.data.ivideo();
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        wx.showLoading({
            title: '刷新中...',
        });
        this.setData({
            videos: [],
            numCallback: 0
        });
        this.onLoad();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0ZBQXNGO1FBQ3RHLE1BQU0sRUFBZ0IsRUFBRTtRQUN4QixNQUFNLEVBQWUsRUFBRTtRQUN2QixXQUFXLEVBQUUsQ0FBQztLQUNmO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztZQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsVUFBVSxLQUFpQjs7Z0JBQzVELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2xELElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxPQUFPO29CQUNYLEdBQUMsR0FBRyxJQUFHLEtBQUs7d0JBQ1osQ0FBQTtnQkFFRixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQzdELEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDakIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQTtRQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCO1FBQ0UsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQWdCLEVBQUU7WUFDeEIsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlsID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL25ldFZpZGVvXCIpO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBVUkxfVklERU9fSlNPTjogXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2RhdGEvdmlkZW9YdWFuQ2h1YW5QaWFuLmpzb25cIiwvL+Wuo+S8oOeJh2pzb27kv6Hmga/lnLDlnYBcclxuICAgIHZpZGVvczogPHV0aWwuVmlkZW9bXT5bXSwvL1ZpZGVv5a+56LGh5pWw57uEXHJcbiAgICBpdmlkZW86IDx1dGlsLklWaWRlbz57fSwvL0lWaWRlb+exu+Wei+epuuWvueixoVxyXG4gICAgbnVtQ2FsbGJhY2s6IDAvL+Wbnuiwg+asoeaVsO+8jOeUqOS6juihqOekuuWFqOmDqOi9rOaNonNyY+WujOaIkOWQju+8jOmakOiXj2xvYWRpbmfliqjnlLtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZGF0YS5pdmlkZW8gPSB1dGlsLmdldFZpZGVvKHRoaXMuZGF0YS5VUkxfVklERU9fSlNPTik7Ly/kvKDpgJLlj4LmlbDvvIzojrflvpdJVmlkZW/mjqXlj6Plr7nosaHjgILkuZ/ljbPliJ3lp4vljJZpdmlkZW/lr7nosaFcclxuXHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgaWYgKCF0aGlzcy5kYXRhLml2aWRlby52YWx1ZXNDYWxsYmFjaykvL+WmguaenOS5i+WJjeacquWumuS5ie+8jOWImeWumuS5iUlWaWRlb+aOpeWPo+eahOWbnuiwg+WHveaVsO+8jFxyXG4gICAgICB0aGlzcy5kYXRhLml2aWRlby52YWx1ZXNDYWxsYmFjayA9IGZ1bmN0aW9uICh2aWRlbzogdXRpbC5WaWRlbykgeyAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIzlj4LmlbDmmK/ovazljJZ2aWTkuLpzcmPnmoR2aWRlb+WvueixoSAgIFxyXG4gICAgICAgIHRoaXNzLmRhdGEubnVtQ2FsbGJhY2sgPSArK3RoaXNzLmRhdGEubnVtQ2FsbGJhY2s7Ly/orrDlvZXlm57osIPmrKHmlbDvvIzljbPorrDlvZVzcmPovazmjaLlrozmiJDnmoTlr7nosaHmlbBcclxuICAgICAgICBsZXQgbGVuOiBOdW1iZXIgPSB0aGlzcy5kYXRhLnZpZGVvcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHRtcCA9ICd2aWRlb3NbJyArIGxlbiArICddJzsgIC8v5rOo5oSP77ya5LiN5pivaS0x77yM5pivae+8jOaYr+WcqOaVsOe7hOWwvumDqOWinuWKoOS4gOS4quWFg+e0oFxyXG4gICAgICAgIHRoaXNzLnNldERhdGEoe1xyXG4gICAgICAgICAgW3RtcF06IHZpZGVvICAgLy/liqjmgIHlop7liqDmlbDnu4TkuK3nmoR2aWRlb+Wvueixoe+8jOatpHZpZGVv5a+56LGhc3Jj5bey57uP5a6M5oiQ6L2s5o2i44CC5YmN56uv6aG16Z2i5a6e5pe25aKe5Yqg5LiA5Liq6KeG6aKRXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXNzLmRhdGEubnVtQ2FsbGJhY2sgPT0gdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzLmxlbmd0aCkgey8v5aaC5p6c5a+56LGhc3Jj5YWo6YOo6L2s5o2i5a6M5oiQXHJcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpOy8v6ZqQ6JePbG9hZGluZyDmj5DnpLrmoYYgICAgICAgICBcclxuICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+makOiXj+WvvOiIquadoeWKoOi9veWKqOeUuyAgICAgICAgIFxyXG4gICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHRoaXNzLmRhdGEuaXZpZGVvKCk7IC8v5ZCv5YqoSVZpZGVv5o6l5Y+j5a+56LGh55qE5Z+656GA5Ye95pWw77yM572R57uc6K+75Y+W5ZCE6KeG6aKR5L+h5oGv77yM5pyJ572R57uc6K+35rGC5bu26L+fXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25yZWFkeScpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdvbnNob3cnKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZXIpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOy8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgIFxyXG4gICAgd3guc2hvd0xvYWRpbmcoey8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgICB0aXRsZTogJ+WIt+aWsOS4rS4uLicsXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHZpZGVvczogPHV0aWwuVmlkZW9bXT5bXSwgICAgLy/liJ3lp4vljJZ2aWRlb+WvueixoeS4uuepulxyXG4gICAgICBudW1DYWxsYmFjazogMC8v5Yid5aeL5YyW5Zue6LCD5qyh5pWw5Li6MFxyXG4gICAgfSlcclxuICAgIHRoaXMub25Mb2FkKCk7Ly/lho3mrKHmi4nlj5bmlrDmlbDmja5cclxuICB9XHJcbn0pIl19