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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0ZBQXNGO1FBQ3RHLE1BQU0sRUFBZ0IsRUFBRTtRQUN4QixNQUFNLEVBQWUsRUFBRTtRQUN2QixXQUFXLEVBQUUsQ0FBQztLQUNmO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsS0FBaUI7O2dCQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNsRCxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsT0FBTztvQkFDWCxHQUFDLEdBQUcsSUFBRyxLQUFLO3dCQUNaLENBQUE7Z0JBRUYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUM3RCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztpQkFDMUI7WUFDSCxDQUFDLENBQUE7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtRQUNmLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFnQixFQUFFO1lBQ3hCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9uZXRWaWRlb1wiKTtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgVVJMX1ZJREVPX0pTT046IFwiaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9kYXRhL3ZpZGVvWHVhbkNodWFuUGlhbi5qc29uXCIsLy/lrqPkvKDniYdqc29u5L+h5oGv5Zyw5Z2AXHJcbiAgICB2aWRlb3M6IDx1dGlsLlZpZGVvW10+W10sLy9WaWRlb+WvueixoeaVsOe7hFxyXG4gICAgaXZpZGVvOiA8dXRpbC5JVmlkZW8+e30sLy9JVmlkZW/nsbvlnovnqbrlr7nosaFcclxuICAgIG51bUNhbGxiYWNrOiAwLy/lm57osIPmrKHmlbDvvIznlKjkuo7ooajnpLrlhajpg6jovazmjaJzcmPlrozmiJDlkI7vvIzpmpDol49sb2FkaW5n5Yqo55S7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmRhdGEuaXZpZGVvID0gdXRpbC5nZXRWaWRlbyh0aGlzLmRhdGEuVVJMX1ZJREVPX0pTT04pOy8v5Lyg6YCS5Y+C5pWw77yM6I635b6XSVZpZGVv5o6l5Y+j5a+56LGh44CC5Lmf5Y2z5Yid5aeL5YyWaXZpZGVv5a+56LGhXHJcblxyXG4gICAgbGV0IHRoaXNzID0gdGhpcztcclxuICAgIGlmICghdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2spLy/lpoLmnpzkuYvliY3mnKrlrprkuYnvvIzliJnlrprkuYlJVmlkZW/mjqXlj6PnmoTlm57osIPlh73mlbDvvIxcclxuICAgICAgdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmlkZW86IHV0aWwuVmlkZW8pIHsgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM5Y+C5pWw5piv6L2s5YyWdmlk5Li6c3Jj55qEdmlkZW/lr7nosaEgICBcclxuICAgICAgICB0aGlzcy5kYXRhLm51bUNhbGxiYWNrID0gKyt0aGlzcy5kYXRhLm51bUNhbGxiYWNrOy8v6K6w5b2V5Zue6LCD5qyh5pWw77yM5Y2z6K6w5b2Vc3Jj6L2s5o2i5a6M5oiQ55qE5a+56LGh5pWwXHJcbiAgICAgICAgbGV0IGxlbjogTnVtYmVyID0gdGhpc3MuZGF0YS52aWRlb3MubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0bXAgPSAndmlkZW9zWycgKyBsZW4gKyAnXSc7ICAvL+azqOaEj++8muS4jeaYr2ktMe+8jOaYr2nvvIzmmK/lnKjmlbDnu4TlsL7pg6jlop7liqDkuIDkuKrlhYPntKBcclxuICAgICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICAgIFt0bXBdOiB2aWRlbyAgIC8v5Yqo5oCB5aKe5Yqg5pWw57uE5Lit55qEdmlkZW/lr7nosaHvvIzmraR2aWRlb+WvueixoXNyY+W3sue7j+WujOaIkOi9rOaNouOAguWJjeerr+mhtemdouWunuaXtuWinuWKoOS4gOS4quinhumikVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzcy5kYXRhLm51bUNhbGxiYWNrID09IHRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlcy5sZW5ndGgpIHsvL+WmguaenOWvueixoXNyY+WFqOmDqOi9rOaNouWujOaIkFxyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTsvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGICAgICAgICAgXHJcbiAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLsgICAgICAgICBcclxuICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB0aGlzcy5kYXRhLml2aWRlbygpOyAvL+WQr+WKqElWaWRlb+aOpeWPo+WvueixoeeahOWfuuehgOWHveaVsO+8jOe9kee7nOivu+WPluWQhOinhumikeS/oeaBr++8jOaciee9kee7nOivt+axguW7tui/n1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25zaG93JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsvL+WcqOW9k+WJjemhtemdouaYvuekuuWvvOiIquadoeWKoOi9veWKqOeUuyAgICBcclxuICAgIHd4LnNob3dMb2FkaW5nKHsvL+aYvuekuiBsb2FkaW5nIOaPkOekuuahhuOAgumcgOS4u+WKqOiwg+eUqCB3eC5oaWRlTG9hZGluZyDmiY3og73lhbPpl63mj5DnpLrmoYZcclxuICAgICAgdGl0bGU6ICfliLfmlrDkuK0uLi4nLFxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2aWRlb3M6IDx1dGlsLlZpZGVvW10+W10sICAgIC8v5Yid5aeL5YyWdmlkZW/lr7nosaHkuLrnqbpcclxuICAgICAgbnVtQ2FsbGJhY2s6IDAvL+WIneWni+WMluWbnuiwg+asoeaVsOS4ujBcclxuICAgIH0pXHJcbiAgICB0aGlzLm9uTG9hZCgpOy8v5YaN5qyh5ouJ5Y+W5paw5pWw5o2uXHJcbiAgfVxyXG59KSJdfQ==