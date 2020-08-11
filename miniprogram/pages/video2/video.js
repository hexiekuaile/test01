"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../../utils/netVideo");
Page({
    data: {
        URL_VIDEO_JSON: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoKePuPian.json",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsaUZBQWlGO1FBQ2pHLE1BQU0sRUFBZ0IsRUFBRTtRQUN4QixNQUFNLEVBQWUsRUFBRTtRQUN2QixXQUFXLEVBQUUsQ0FBQztLQUNmO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztZQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsVUFBVSxLQUFpQjs7Z0JBQzVELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2xELElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxPQUFPO29CQUNYLEdBQUMsR0FBRyxJQUFHLEtBQUs7d0JBQ1osQ0FBQTtnQkFFRixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQzdELEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDakIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQTtRQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCO1FBQ0UsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQWdCLEVBQUU7WUFDeEIsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlsID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL25ldFZpZGVvXCIpO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBVUkxfVklERU9fSlNPTjogXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2RhdGEvdmlkZW9LZVB1UGlhbi5qc29uXCIsLy/lrqPkvKDniYdqc29u5L+h5oGv5Zyw5Z2AXHJcbiAgICB2aWRlb3M6IDx1dGlsLlZpZGVvW10+W10sLy9WaWRlb+WvueixoeaVsOe7hFxyXG4gICAgaXZpZGVvOiA8dXRpbC5JVmlkZW8+e30sLy9JVmlkZW/nsbvlnovnqbrlr7nosaFcclxuICAgIG51bUNhbGxiYWNrOiAwLy/lm57osIPmrKHmlbDvvIznlKjkuo7ooajnpLrlhajpg6jovazmjaJzcmPlrozmiJDlkI7vvIzpmpDol49sb2FkaW5n5Yqo55S7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmRhdGEuaXZpZGVvID0gdXRpbC5nZXRWaWRlbyh0aGlzLmRhdGEuVVJMX1ZJREVPX0pTT04pOy8v5Lyg6YCS5Y+C5pWw77yM6I635b6XSVZpZGVv5o6l5Y+j5a+56LGh44CC5Lmf5Y2z5Yid5aeL5YyWaXZpZGVv5a+56LGhXHJcblxyXG4gICAgbGV0IHRoaXNzID0gdGhpcztcclxuICAgIGlmICghdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2spLy/lpoLmnpzkuYvliY3mnKrlrprkuYnvvIzliJnlrprkuYlJVmlkZW/mjqXlj6PnmoTlm57osIPlh73mlbDvvIxcclxuICAgICAgdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmlkZW86IHV0aWwuVmlkZW8pIHsgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM5Y+C5pWw5piv6L2s5YyWdmlk5Li6c3Jj55qEdmlkZW/lr7nosaEgICBcclxuICAgICAgICB0aGlzcy5kYXRhLm51bUNhbGxiYWNrID0gKyt0aGlzcy5kYXRhLm51bUNhbGxiYWNrOy8v6K6w5b2V5Zue6LCD5qyh5pWw77yM5Y2z6K6w5b2Vc3Jj6L2s5o2i5a6M5oiQ55qE5a+56LGh5pWwXHJcbiAgICAgICAgbGV0IGxlbjogTnVtYmVyID0gdGhpc3MuZGF0YS52aWRlb3MubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0bXAgPSAndmlkZW9zWycgKyBsZW4gKyAnXSc7ICAvL+azqOaEj++8muS4jeaYr2ktMe+8jOaYr2nvvIzmmK/lnKjmlbDnu4TlsL7pg6jlop7liqDkuIDkuKrlhYPntKBcclxuICAgICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICAgIFt0bXBdOiB2aWRlbyAgIC8v5Yqo5oCB5aKe5Yqg5pWw57uE5Lit55qEdmlkZW/lr7nosaHvvIzmraR2aWRlb+WvueixoXNyY+W3sue7j+WujOaIkOi9rOaNouOAguWJjeerr+mhtemdouWunuaXtuWinuWKoOS4gOS4quinhumikVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzcy5kYXRhLm51bUNhbGxiYWNrID09IHRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlcy5sZW5ndGgpIHsvL+WmguaenOWvueixoXNyY+WFqOmDqOi9rOaNouWujOaIkFxyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTsvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGICAgICAgICAgXHJcbiAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLsgICAgICAgICBcclxuICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB0aGlzcy5kYXRhLml2aWRlbygpOyAvL+WQr+WKqElWaWRlb+aOpeWPo+WvueixoeeahOWfuuehgOWHveaVsO+8jOe9kee7nOivu+WPluWQhOinhumikeS/oeaBr++8jOaciee9kee7nOivt+axguW7tui/n1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25zaG93JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOy8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgIFxyXG4gICAgd3guc2hvd0xvYWRpbmcoey8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgICB0aXRsZTogJ+WIt+aWsOS4rS4uLicsXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHZpZGVvczogPHV0aWwuVmlkZW9bXT5bXSwgICAgLy/liJ3lp4vljJZ2aWRlb+WvueixoeS4uuepulxyXG4gICAgICBudW1DYWxsYmFjazogMC8v5Yid5aeL5YyW5Zue6LCD5qyh5pWw5Li6MFxyXG4gICAgfSlcclxuICAgIHRoaXMub25Mb2FkKCk7Ly/lho3mrKHmi4nlj5bmlrDmlbDmja5cclxuICB9XHJcbn0pIl19