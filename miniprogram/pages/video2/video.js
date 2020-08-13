"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../../utils/netVideo");
var slide = require("../../utils/slide");
Page({
    data: {
        URL_VIDEO_JSON: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoKePuPian.json",
        videos: [],
        ivideo: {},
        numCallback: 0,
        startX: 0,
        startY: 0,
    },
    onLoad: function () {
        this.showLoading();
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
                    thiss.hideLoading();
                }
            };
        thiss.data.ivideo();
    },
    touchStart: function (e) {
        this.setData({
            startX: e.changedTouches[0].clientX,
            startY: e.changedTouches[0].clientY,
        });
    },
    touchEnd: function (e) {
        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;
        slide.slide(endX, endY, this.data.startX, this.data.startY, "/pages/video2/video");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLDJDQUE4QztBQUM5Qyx5Q0FBNEM7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLGlGQUFpRjtRQUNqRyxNQUFNLEVBQWdCLEVBQUU7UUFDeEIsTUFBTSxFQUFlLEVBQUU7UUFDdkIsV0FBVyxFQUFFLENBQUM7UUFDZCxNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsS0FBaUI7O2dCQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNsRCxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsT0FBTztvQkFDWCxHQUFDLEdBQUcsSUFBRyxLQUFLO3dCQUNaLENBQUE7Z0JBRUYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUM3RCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFBO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsVUFBVSxZQUFDLENBQU07UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxRQUFRLFlBQUMsQ0FBTTtRQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBUXBGLENBQUM7SUFJRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFnQixFQUFFO1lBQ3hCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFJRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHlhbndlaVxyXG4gKiBARGF0ZTogMjAyMC0wNi0xNyAxNTo1ODowNVxyXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA4LTEzIDExOjUyOjU2XHJcbiAqIEBEZXNjcmlwdGlvbiA6IOenkeaZrueJh+mhtemdouS7o+eggVxyXG4gKi9cclxuaW1wb3J0IHV0aWwgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvbmV0VmlkZW9cIik7XHJcbmltcG9ydCBzbGlkZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9zbGlkZVwiKTsvL+WIpOaWreW3puWPs+a7keWKqOS7o+eggVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgVVJMX1ZJREVPX0pTT046IFwiaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9kYXRhL3ZpZGVvS2VQdVBpYW4uanNvblwiLC8v5a6j5Lyg54mHanNvbuS/oeaBr+WcsOWdgFxyXG4gICAgdmlkZW9zOiA8dXRpbC5WaWRlb1tdPltdLC8vVmlkZW/lr7nosaHmlbDnu4RcclxuICAgIGl2aWRlbzogPHV0aWwuSVZpZGVvPnt9LC8vSVZpZGVv57G75Z6L56m65a+56LGhXHJcbiAgICBudW1DYWxsYmFjazogMCwvL+Wbnuiwg+asoeaVsO+8jOeUqOS6juihqOekuuWFqOmDqOi9rOaNonNyY+WujOaIkOWQju+8jOmakOiXj2xvYWRpbmfliqjnlLtcclxuICAgIHN0YXJ0WDogMCwvL+mAmui/h3h55Z2Q5qCH5YC85Yik5pat5bem5Y+z5ruR5YqoXHJcbiAgICBzdGFydFk6IDAsXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XHJcbiAgICB0aGlzLmRhdGEuaXZpZGVvID0gdXRpbC5nZXRWaWRlbyh0aGlzLmRhdGEuVVJMX1ZJREVPX0pTT04pOy8v5Lyg6YCS5Y+C5pWw77yM6I635b6XSVZpZGVv5o6l5Y+j5a+56LGh44CC5Lmf5Y2z5Yid5aeL5YyWaXZpZGVv5a+56LGhXHJcblxyXG4gICAgbGV0IHRoaXNzID0gdGhpcztcclxuICAgIGlmICghdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2spLy/lpoLmnpzkuYvliY3mnKrlrprkuYnvvIzliJnlrprkuYlJVmlkZW/mjqXlj6PnmoTlm57osIPlh73mlbDvvIxcclxuICAgICAgdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmlkZW86IHV0aWwuVmlkZW8pIHsgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM5Y+C5pWw5piv6L2s5YyWdmlk5Li6c3Jj55qEdmlkZW/lr7nosaEgICBcclxuICAgICAgICB0aGlzcy5kYXRhLm51bUNhbGxiYWNrID0gKyt0aGlzcy5kYXRhLm51bUNhbGxiYWNrOy8v6K6w5b2V5Zue6LCD5qyh5pWw77yM5Y2z6K6w5b2Vc3Jj6L2s5o2i5a6M5oiQ55qE5a+56LGh5pWwXHJcbiAgICAgICAgbGV0IGxlbjogTnVtYmVyID0gdGhpc3MuZGF0YS52aWRlb3MubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0bXAgPSAndmlkZW9zWycgKyBsZW4gKyAnXSc7ICAvL+azqOaEj++8muS4jeaYr2ktMe+8jOaYr2nvvIzmmK/lnKjmlbDnu4TlsL7pg6jlop7liqDkuIDkuKrlhYPntKBcclxuICAgICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICAgIFt0bXBdOiB2aWRlbyAgIC8v5Yqo5oCB5aKe5Yqg5pWw57uE5Lit55qEdmlkZW/lr7nosaHvvIzmraR2aWRlb+WvueixoXNyY+W3sue7j+WujOaIkOi9rOaNouOAguWJjeerr+mhtemdouWunuaXtuWinuWKoOS4gOS4quinhumikVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzcy5kYXRhLm51bUNhbGxiYWNrID09IHRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlcy5sZW5ndGgpIHsvL+WmguaenOWvueixoXNyY+WFqOmDqOi9rOaNouWujOaIkFxyXG4gICAgICAgICAgdGhpc3MuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB0aGlzcy5kYXRhLml2aWRlbygpOyAvL+WQr+WKqElWaWRlb+aOpeWPo+WvueixoeeahOWfuuehgOWHveaVsO+8jOe9kee7nOivu+WPluWQhOinhumikeS/oeaBr++8jOaciee9kee7nOivt+axguW7tui/n1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xyXG4gICAgICovXHJcbiAgdG91Y2hTdGFydChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHN0YXJ0WDogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICBzdGFydFk6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcclxuICAgIH0pXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOe7k+adn1xyXG4gICAqL1xyXG4gIHRvdWNoRW5kKGU6IGFueSkge1xyXG4gICAgbGV0IGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICBsZXQgZW5kWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgIHNsaWRlLnNsaWRlKGVuZFgsIGVuZFksIHRoaXMuZGF0YS5zdGFydFgsIHRoaXMuZGF0YS5zdGFydFksXCIvcGFnZXMvdmlkZW8yL3ZpZGVvXCIpO1xyXG4gICAvKiAgbGV0IHVybCE6IHN0cmluZztcclxuICAgIGlmICh0dXJuID09PSBcImxlZnRcIilcclxuICAgICAgdXJsID0gXCIvcGFnZXMvdmlkZW8xL3ZpZGVvXCI7XHJcbiAgICBlbHNlIGlmICh0dXJuID09PSBcInJpZ2h0XCIpXHJcbiAgICAgIHVybCA9IFwiL3BhZ2VzL2Fib3V0L2Fib3V0XCI7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG4gICAgd3guc3dpdGNoVGFiKHsgdXJsOiB1cmwgfSk7Ly/ot7PovazliLDlupXpg6h0YWIg6KGo56S655qE6aG16Z2i5YmN77yM5ZCv5Yqob25IaWRl5LqL5Lu2ICovXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmlkZW9zOiA8dXRpbC5WaWRlb1tdPltdLCAgICAvL+WIneWni+WMlnZpZGVv5a+56LGh5Li656m6XHJcbiAgICAgIG51bUNhbGxiYWNrOiAwLy/liJ3lp4vljJblm57osIPmrKHmlbDkuLowXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vbkxvYWQoKTsvL+WGjeasoeaLieWPluaWsOaVsOaNrlxyXG4gIH0sXHJcbiAgLyoqXHJcbiog5pi+56S65Yqg6L295Yqo55S7XHJcbiovXHJcbiAgc2hvd0xvYWRpbmcoKSB7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsvL+WcqOW9k+WJjemhtemdouaYvuekuuWvvOiIquadoeWKoOi9veWKqOeUuyAgICBcclxuICAgIHd4LnNob3dMb2FkaW5nKHsvL+aYvuekuiBsb2FkaW5nIOaPkOekuuahhuOAgumcgOS4u+WKqOiwg+eUqCB3eC5oaWRlTG9hZGluZyDmiY3og73lhbPpl63mj5DnpLrmoYZcclxuICAgICAgdGl0bGU6ICfliLfmlrDkuK0uLi4nLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8qKlxyXG4gICog6ZqQ6JeP5Yqg6L295Yqo55S7XHJcbiAgKi9cclxuICBoaWRlTG9hZGluZygpIHtcclxuICAgIHd4LmhpZGVMb2FkaW5nKCk7Ly/pmpDol49sb2FkaW5nIOaPkOekuuahhiAgICAgICAgIFxyXG4gICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v6ZqQ6JeP5a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgICAgICAgXHJcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi3XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdvbnJlYWR5JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29uc2hvdycpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuZGF0YS50aW1lcilcclxuICB9LFxyXG59KSJdfQ==