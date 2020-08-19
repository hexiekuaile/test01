"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../../utils/netVideo");
var slide = require("../../utils/slide");
Page({
    data: {
        URL_VIDEO_JSON: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoXuanChuanPian.json",
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
    onPullDownRefresh: function () {
        this.setData({
            videos: [],
            numCallback: 0
        });
        this.onLoad();
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
        slide.slide(endX, endY, this.data.startX, this.data.startY, "/pages/video1/video");
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
    toOut: function () {
        wx.navigateTo({
            url: '../out/out',
        });
    },
    onReady: function () {
    },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLDJDQUE4QztBQUM5Qyx5Q0FBNEM7QUFDNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLHNGQUFzRjtRQUN0RyxNQUFNLEVBQWdCLEVBQUU7UUFDeEIsTUFBTSxFQUFlLEVBQUU7UUFDdkIsV0FBVyxFQUFFLENBQUM7UUFDZCxNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsS0FBaUI7O2dCQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNsRCxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsT0FBTztvQkFDWCxHQUFDLEdBQUcsSUFBRyxLQUFLO3dCQUNaLENBQUE7Z0JBRUYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUM3RCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFBO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBZ0IsRUFBRTtZQUN4QixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBSUQsVUFBVSxZQUFDLENBQU07UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxRQUFRLFlBQUMsQ0FBTTtRQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBUXBGLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxLQUFLO1FBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNYLEdBQUcsRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFLQSxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU0sZ0JBQUssQ0FBQztJQUtaLE1BQU0sZ0JBQUssQ0FBQztJQUtaLFFBQVE7SUFFUixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogeWFud2VpXHJcbiAqIEBEYXRlOiAyMDIwLTA0LTI0IDEwOjA2OjM1XHJcbiAqIEBMYXN0RWRpdG9yczogeWFud2VpXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDgtMTggMTY6MTE6NTBcclxuICogQERlc2NyaXB0aW9uIDog5a6j5Lyg54mH6aG16Z2i5Luj56CBXHJcbiAqL1xyXG5cclxuaW1wb3J0IHV0aWwgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvbmV0VmlkZW9cIik7XHJcbmltcG9ydCBzbGlkZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9zbGlkZVwiKTsvL+WIpOaWreW3puWPs+a7keWKqOS7o+eggVxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBVUkxfVklERU9fSlNPTjogXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2RhdGEvdmlkZW9YdWFuQ2h1YW5QaWFuLmpzb25cIiwvL+Wuo+S8oOeJh2pzb27kv6Hmga/lnLDlnYBcclxuICAgIHZpZGVvczogPHV0aWwuVmlkZW9bXT5bXSwvL1ZpZGVv5a+56LGh5pWw57uEXHJcbiAgICBpdmlkZW86IDx1dGlsLklWaWRlbz57fSwvL0lWaWRlb+exu+Wei+epuuWvueixoVxyXG4gICAgbnVtQ2FsbGJhY2s6IDAsLy/lm57osIPmrKHmlbDvvIznlKjkuo7ooajnpLrlhajpg6jovazmjaJzcmPlrozmiJDlkI7vvIzpmpDol49sb2FkaW5n5Yqo55S7XHJcbiAgICBzdGFydFg6IDAsLy/pgJrov4d4eeWdkOagh+WAvOWIpOaWreW3puWPs+a7keWKqFxyXG4gICAgc3RhcnRZOiAwLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xyXG4gICAgdGhpcy5kYXRhLml2aWRlbyA9IHV0aWwuZ2V0VmlkZW8odGhpcy5kYXRhLlVSTF9WSURFT19KU09OKTsvL+S8oOmAkuWPguaVsO+8jOiOt+W+l0lWaWRlb+aOpeWPo+WvueixoeOAguS5n+WNs+WIneWni+WMlml2aWRlb+WvueixoVxyXG5cclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICBpZiAoIXRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlc0NhbGxiYWNrKS8v5aaC5p6c5LmL5YmN5pyq5a6a5LmJ77yM5YiZ5a6a5LmJSVZpZGVv5o6l5Y+j55qE5Zue6LCD5Ye95pWw77yMXHJcbiAgICAgIHRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlc0NhbGxiYWNrID0gZnVuY3Rpb24gKHZpZGVvOiB1dGlsLlZpZGVvKSB7ICAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOWPguaVsOaYr+i9rOWMlnZpZOS4unNyY+eahHZpZGVv5a+56LGhICAgXHJcbiAgICAgICAgdGhpc3MuZGF0YS5udW1DYWxsYmFjayA9ICsrdGhpc3MuZGF0YS5udW1DYWxsYmFjazsvL+iusOW9leWbnuiwg+asoeaVsO+8jOWNs+iusOW9lXNyY+i9rOaNouWujOaIkOeahOWvueixoeaVsFxyXG4gICAgICAgIGxldCBsZW46IE51bWJlciA9IHRoaXNzLmRhdGEudmlkZW9zLmxlbmd0aDtcclxuICAgICAgICBsZXQgdG1wID0gJ3ZpZGVvc1snICsgbGVuICsgJ10nOyAgLy/ms6jmhI/vvJrkuI3mmK9pLTHvvIzmmK9p77yM5piv5Zyo5pWw57uE5bC+6YOo5aKe5Yqg5LiA5Liq5YWD57SgXHJcbiAgICAgICAgdGhpc3Muc2V0RGF0YSh7XHJcbiAgICAgICAgICBbdG1wXTogdmlkZW8gICAvL+WKqOaAgeWinuWKoOaVsOe7hOS4reeahHZpZGVv5a+56LGh77yM5q2kdmlkZW/lr7nosaFzcmPlt7Lnu4/lrozmiJDovazmjaLjgILliY3nq6/pobXpnaLlrp7ml7blop7liqDkuIDkuKrop4bpopFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGhpc3MuZGF0YS5udW1DYWxsYmFjayA9PSB0aGlzcy5kYXRhLml2aWRlby52YWx1ZXMubGVuZ3RoKSB7Ly/lpoLmnpzlr7nosaFzcmPlhajpg6jovazmjaLlrozmiJBcclxuICAgICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgdGhpc3MuZGF0YS5pdmlkZW8oKTsgLy/lkK/liqhJVmlkZW/mjqXlj6Plr7nosaHnmoTln7rnoYDlh73mlbDvvIznvZHnu5zor7vlj5blkITop4bpopHkv6Hmga/vvIzmnInnvZHnu5zor7fmsYLlu7bov59cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2aWRlb3M6IDx1dGlsLlZpZGVvW10+W10sICAgIC8v5Yid5aeL5YyWdmlkZW/lr7nosaHkuLrnqbpcclxuICAgICAgbnVtQ2FsbGJhY2s6IDAvL+WIneWni+WMluWbnuiwg+asoeaVsOS4ujBcclxuICAgIH0pXHJcbiAgICB0aGlzLm9uTG9hZCgpOy8v5YaN5qyh5ouJ5Y+W5paw5pWw5o2uXHJcbiAgfSxcclxuICAvKipcclxuICAgICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo5byA5aeLXHJcbiAgICAgKi9cclxuICB0b3VjaFN0YXJ0KGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc3RhcnRYOiBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgIHN0YXJ0WTogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo57uT5p2fXHJcbiAgICovXHJcbiAgdG91Y2hFbmQoZTogYW55KSB7XHJcbiAgICBsZXQgZW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgIGxldCBlbmRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgc2xpZGUuc2xpZGUoZW5kWCwgZW5kWSwgdGhpcy5kYXRhLnN0YXJ0WCwgdGhpcy5kYXRhLnN0YXJ0WSxcIi9wYWdlcy92aWRlbzEvdmlkZW9cIik7XHJcbiAvKiAgICBsZXQgdXJsITogc3RyaW5nO1xyXG4gICAgaWYgKHR1cm4gPT09IFwibGVmdFwiKVxyXG4gICAgICB1cmwgPSBcIi9wYWdlcy9kaXR1L2RpdHVcIjtcclxuICAgIGVsc2UgaWYgKHR1cm4gPT09IFwicmlnaHRcIilcclxuICAgICAgdXJsID0gXCIvcGFnZXMvdmlkZW8yL3ZpZGVvXCI7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG4gICAgd3guc3dpdGNoVGFiKHsgdXJsOiB1cmwgfSk7Ly/ot7PovazliLDlupXpg6h0YWIg6KGo56S655qE6aG16Z2i5YmN77yM5ZCv5Yqob25IaWRl5LqL5Lu2ICovXHJcbiAgfSxcclxuICAvKipcclxuKiDmmL7npLrliqDovb3liqjnlLtcclxuKi9cclxuICBzaG93TG9hZGluZygpIHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOy8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgIFxyXG4gICAgd3guc2hvd0xvYWRpbmcoey8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgICB0aXRsZTogJ+WIt+aWsOS4rS4uLicsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgKiDpmpDol4/liqDovb3liqjnlLtcclxuICAqL1xyXG4gIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgd3guaGlkZUxvYWRpbmcoKTsvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGICAgICAgICAgXHJcbiAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLsgICAgICAgICBcclxuICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLdcclxuICB9LFxyXG4gIHRvT3V0KCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgIHVybDogJy4uL291dC9vdXQnLFxyXG4gICAgfSlcclxuIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkgeyB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHsgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcblxyXG59KSJdfQ==