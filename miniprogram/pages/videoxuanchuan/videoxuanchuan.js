"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netVideo_1 = require("../../utils/netVideo");
var slide_1 = require("../../utils/slide");
var commonData_1 = require("../../utils/commonData");
Page({
    data: {
        URL_VIDEO_JSON: commonData_1.EXTERNAL_DATA_PATH + "data/videoXuanChuanPian.json",
        videos: [],
        ivideo: {},
        numCallback: 0,
        eventTouchStart: {},
    },
    onLoad: function () {
        this.showLoading();
        this.data.ivideo = netVideo_1.getVideo(this.data.URL_VIDEO_JSON);
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
            eventTouchStart: e
        });
    },
    touchEnd: function (e) {
        slide_1.jumpNav2("videoxuanchuan", this.data.eventTouchStart, e);
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
    onShow: function () { },
    onHide: function () { },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW94dWFuY2h1YW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlb3h1YW5jaHVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLGlEQUE4RDtBQUM5RCwyQ0FBNEM7QUFDNUMscURBQTREO0FBRTVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSwrQkFBa0IsR0FBRyw4QkFBOEI7UUFDbkUsTUFBTSxFQUFXLEVBQUU7UUFDbkIsTUFBTSxFQUFVLEVBQUU7UUFDbEIsV0FBVyxFQUFFLENBQUM7UUFDZCxlQUFlLEVBQUUsRUFBRTtLQUNwQjtJQUtELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1lBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxVQUFVLEtBQVk7O2dCQUN2RCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNsRCxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsT0FBTztvQkFDWCxHQUFDLEdBQUcsSUFBRyxLQUFLO3dCQUNaLENBQUE7Z0JBRUYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUM3RCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFBO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsaUJBQWlCLEVBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBVyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2IsZ0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDO0lBSUQsV0FBVztRQUNULEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBTUQsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNLGdCQUFLLENBQUM7SUFLWixNQUFNLGdCQUFLLENBQUM7SUFLWixRQUFRO0lBRVIsQ0FBQztDQUVGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHlhbndlaVxyXG4gKiBARGF0ZTogMjAyMC0wNC0yNCAxMDowNjozNVxyXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA5LTE0IDExOjM4OjEyXHJcbiAqIEBEZXNjcmlwdGlvbiA6IOWuo+S8oOeJh+mhtemdouS7o+eggVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFZpZGVvLCBJVmlkZW8sIGdldFZpZGVvIH0gZnJvbSBcIi4uLy4uL3V0aWxzL25ldFZpZGVvXCJcclxuaW1wb3J0IHsganVtcE5hdjIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvc2xpZGVcIlxyXG5pbXBvcnQgeyBFWFRFUk5BTF9EQVRBX1BBVEggfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uRGF0YVwiO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgVVJMX1ZJREVPX0pTT046IEVYVEVSTkFMX0RBVEFfUEFUSCArIFwiZGF0YS92aWRlb1h1YW5DaHVhblBpYW4uanNvblwiLC8v5a6j5Lyg54mHanNvbuS/oeaBr+WcsOWdgFxyXG4gICAgdmlkZW9zOiA8VmlkZW9bXT5bXSwvL1ZpZGVv5a+56LGh5pWw57uEXHJcbiAgICBpdmlkZW86IDxJVmlkZW8+e30sLy9JVmlkZW/nsbvlnovnqbrlr7nosaFcclxuICAgIG51bUNhbGxiYWNrOiAwLC8v5Zue6LCD5qyh5pWw77yM55So5LqO6KGo56S65YWo6YOo6L2s5o2ic3Jj5a6M5oiQ5ZCO77yM6ZqQ6JePbG9hZGluZ+WKqOeUu1xyXG4gICAgZXZlbnRUb3VjaFN0YXJ0OiB7fSwgLy/mu5HliqjmiYvlir/lvIDlp4vkuovku7ZcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcclxuICAgIHRoaXMuZGF0YS5pdmlkZW8gPSBnZXRWaWRlbyh0aGlzLmRhdGEuVVJMX1ZJREVPX0pTT04pOy8v5Lyg6YCS5Y+C5pWw77yM6I635b6XSVZpZGVv5o6l5Y+j5a+56LGh44CC5Lmf5Y2z5Yid5aeL5YyWaXZpZGVv5a+56LGhXHJcblxyXG4gICAgbGV0IHRoaXNzID0gdGhpcztcclxuICAgIGlmICghdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2spLy/lpoLmnpzkuYvliY3mnKrlrprkuYnvvIzliJnlrprkuYlJVmlkZW/mjqXlj6PnmoTlm57osIPlh73mlbDvvIxcclxuICAgICAgdGhpc3MuZGF0YS5pdmlkZW8udmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmlkZW86IFZpZGVvKSB7ICAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOWPguaVsOaYr+i9rOWMlnZpZOS4unNyY+eahHZpZGVv5a+56LGhICAgXHJcbiAgICAgICAgdGhpc3MuZGF0YS5udW1DYWxsYmFjayA9ICsrdGhpc3MuZGF0YS5udW1DYWxsYmFjazsvL+iusOW9leWbnuiwg+asoeaVsO+8jOWNs+iusOW9lXNyY+i9rOaNouWujOaIkOeahOWvueixoeaVsFxyXG4gICAgICAgIGxldCBsZW46IE51bWJlciA9IHRoaXNzLmRhdGEudmlkZW9zLmxlbmd0aDtcclxuICAgICAgICBsZXQgdG1wID0gJ3ZpZGVvc1snICsgbGVuICsgJ10nOyAgLy/ms6jmhI/vvJrkuI3mmK9pLTHvvIzmmK9p77yM5piv5Zyo5pWw57uE5bC+6YOo5aKe5Yqg5LiA5Liq5YWD57SgXHJcbiAgICAgICAgdGhpc3Muc2V0RGF0YSh7XHJcbiAgICAgICAgICBbdG1wXTogdmlkZW8gICAvL+WKqOaAgeWinuWKoOaVsOe7hOS4reeahHZpZGVv5a+56LGh77yM5q2kdmlkZW/lr7nosaFzcmPlt7Lnu4/lrozmiJDovazmjaLjgILliY3nq6/pobXpnaLlrp7ml7blop7liqDkuIDkuKrop4bpopFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGhpc3MuZGF0YS5udW1DYWxsYmFjayA9PSB0aGlzcy5kYXRhLml2aWRlby52YWx1ZXMubGVuZ3RoKSB7Ly/lpoLmnpzlr7nosaFzcmPlhajpg6jovazmjaLlrozmiJBcclxuICAgICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgdGhpc3MuZGF0YS5pdmlkZW8oKTsgLy/lkK/liqhJVmlkZW/mjqXlj6Plr7nosaHnmoTln7rnoYDlh73mlbDvvIznvZHnu5zor7vlj5blkITop4bpopHkv6Hmga/vvIzmnInnvZHnu5zor7fmsYLlu7bov59cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2aWRlb3M6IDxWaWRlb1tdPltdLCAgICAvL+WIneWni+WMlnZpZGVv5a+56LGh5Li656m6XHJcbiAgICAgIG51bUNhbGxiYWNrOiAwLy/liJ3lp4vljJblm57osIPmrKHmlbDkuLowXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vbkxvYWQoKTsvL+WGjeasoeaLieWPluaWsOaVsOaNrlxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xyXG4gICAgICovXHJcbiAgdG91Y2hTdGFydChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGV2ZW50VG91Y2hTdGFydDogZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo57uT5p2fXHJcbiAgICovXHJcbiAgdG91Y2hFbmQoZTogYW55KSB7XHJcbiAgICBqdW1wTmF2MihcInZpZGVveHVhbmNodWFuXCIsIHRoaXMuZGF0YS5ldmVudFRvdWNoU3RhcnQsIGUpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiog5pi+56S65Yqg6L295Yqo55S7XHJcbiovXHJcbiAgc2hvd0xvYWRpbmcoKSB7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsvL+WcqOW9k+WJjemhtemdouaYvuekuuWvvOiIquadoeWKoOi9veWKqOeUuyAgICBcclxuICAgIHd4LnNob3dMb2FkaW5nKHsvL+aYvuekuiBsb2FkaW5nIOaPkOekuuahhuOAgumcgOS4u+WKqOiwg+eUqCB3eC5oaWRlTG9hZGluZyDmiY3og73lhbPpl63mj5DnpLrmoYZcclxuICAgICAgdGl0bGU6ICfliLfmlrDkuK0uLi4nLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8qKlxyXG4gICog6ZqQ6JeP5Yqg6L295Yqo55S7XHJcbiAgKi9cclxuICBoaWRlTG9hZGluZygpIHtcclxuICAgIHd4LmhpZGVMb2FkaW5nKCk7Ly/pmpDol49sb2FkaW5nIOaPkOekuuahhiAgICAgICAgIFxyXG4gICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v6ZqQ6JeP5a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgICAgICAgXHJcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi3XHJcbiAgfSxcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkgeyB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHsgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcblxyXG59KTtcclxuIl19