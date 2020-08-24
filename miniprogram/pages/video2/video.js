"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var video = require("../video1/video");
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
        this.data.ivideo = video.getVideo(this.data.URL_VIDEO_JSON);
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
        video.slide(endX, endY, this.data.startX, this.data.startY, "/pages/video2/video");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNBLHVDQUEwQztBQUMxQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsaUZBQWlGO1FBQ2pHLE1BQU0sRUFBaUIsRUFBRTtRQUN6QixNQUFNLEVBQWdCLEVBQUU7UUFDeEIsV0FBVyxFQUFFLENBQUM7UUFDZCxNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFLRCxNQUFNLEVBQU47UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztZQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsVUFBVSxLQUFrQjs7Z0JBQzdELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2xELElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxPQUFPO29CQUNYLEdBQUMsR0FBRyxJQUFHLEtBQUs7d0JBQ1osQ0FBQTtnQkFFRixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQzdELEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUE7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFJRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDbkMsTUFBTSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztTQUNwQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBSUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBUXJGLENBQUM7SUFJRCxpQkFBaUIsRUFBakI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFpQixFQUFFO1lBQ3pCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFJRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHlhbndlaVxyXG4gKiBARGF0ZTogMjAyMC0wNi0xNyAxNTo1ODowNVxyXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA4LTI0IDE3OjA2OjI2XHJcbiAqIEBEZXNjcmlwdGlvbiA6IOenkeaZrueJh+mhtemdouS7o+eggVxyXG4gKi9cclxuLy8gaW1wb3J0IHV0aWwgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvbmV0VmlkZW9cIik7XHJcbi8vIGltcG9ydCBzbGlkZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9zbGlkZVwiKTsvL+WIpOaWreW3puWPs+a7keWKqOS7o+eggVxyXG5pbXBvcnQgdmlkZW8gPSByZXF1aXJlKFwiLi4vdmlkZW8xL3ZpZGVvXCIpO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBVUkxfVklERU9fSlNPTjogXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2RhdGEvdmlkZW9LZVB1UGlhbi5qc29uXCIsLy/lrqPkvKDniYdqc29u5L+h5oGv5Zyw5Z2AXHJcbiAgICB2aWRlb3M6IDx2aWRlby5WaWRlb1tdPltdLC8vVmlkZW/lr7nosaHmlbDnu4RcclxuICAgIGl2aWRlbzogPHZpZGVvLklWaWRlbz57fSwvL0lWaWRlb+exu+Wei+epuuWvueixoVxyXG4gICAgbnVtQ2FsbGJhY2s6IDAsLy/lm57osIPmrKHmlbDvvIznlKjkuo7ooajnpLrlhajpg6jovazmjaJzcmPlrozmiJDlkI7vvIzpmpDol49sb2FkaW5n5Yqo55S7XHJcbiAgICBzdGFydFg6IDAsLy/pgJrov4d4eeWdkOagh+WAvOWIpOaWreW3puWPs+a7keWKqFxyXG4gICAgc3RhcnRZOiAwLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xyXG4gICAgdGhpcy5kYXRhLml2aWRlbyA9IHZpZGVvLmdldFZpZGVvKHRoaXMuZGF0YS5VUkxfVklERU9fSlNPTik7Ly/kvKDpgJLlj4LmlbDvvIzojrflvpdJVmlkZW/mjqXlj6Plr7nosaHjgILkuZ/ljbPliJ3lp4vljJZpdmlkZW/lr7nosaFcclxuXHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgaWYgKCF0aGlzcy5kYXRhLml2aWRlby52YWx1ZXNDYWxsYmFjaykvL+WmguaenOS5i+WJjeacquWumuS5ie+8jOWImeWumuS5iUlWaWRlb+aOpeWPo+eahOWbnuiwg+WHveaVsO+8jFxyXG4gICAgICB0aGlzcy5kYXRhLml2aWRlby52YWx1ZXNDYWxsYmFjayA9IGZ1bmN0aW9uICh2aWRlbzogdmlkZW8uVmlkZW8pIHsgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM5Y+C5pWw5piv6L2s5YyWdmlk5Li6c3Jj55qEdmlkZW/lr7nosaEgICBcclxuICAgICAgICB0aGlzcy5kYXRhLm51bUNhbGxiYWNrID0gKyt0aGlzcy5kYXRhLm51bUNhbGxiYWNrOy8v6K6w5b2V5Zue6LCD5qyh5pWw77yM5Y2z6K6w5b2Vc3Jj6L2s5o2i5a6M5oiQ55qE5a+56LGh5pWwXHJcbiAgICAgICAgbGV0IGxlbjogTnVtYmVyID0gdGhpc3MuZGF0YS52aWRlb3MubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0bXAgPSAndmlkZW9zWycgKyBsZW4gKyAnXSc7ICAvL+azqOaEj++8muS4jeaYr2ktMe+8jOaYr2nvvIzmmK/lnKjmlbDnu4TlsL7pg6jlop7liqDkuIDkuKrlhYPntKBcclxuICAgICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICAgIFt0bXBdOiB2aWRlbyAgIC8v5Yqo5oCB5aKe5Yqg5pWw57uE5Lit55qEdmlkZW/lr7nosaHvvIzmraR2aWRlb+WvueixoXNyY+W3sue7j+WujOaIkOi9rOaNouOAguWJjeerr+mhtemdouWunuaXtuWinuWKoOS4gOS4quinhumikVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzcy5kYXRhLm51bUNhbGxiYWNrID09IHRoaXNzLmRhdGEuaXZpZGVvLnZhbHVlcy5sZW5ndGgpIHsvL+WmguaenOWvueixoXNyY+WFqOmDqOi9rOaNouWujOaIkFxyXG4gICAgICAgICAgdGhpc3MuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB0aGlzcy5kYXRhLml2aWRlbygpOyAvL+WQr+WKqElWaWRlb+aOpeWPo+WvueixoeeahOWfuuehgOWHveaVsO+8jOe9kee7nOivu+WPluWQhOinhumikeS/oeaBr++8jOaciee9kee7nOivt+axguW7tui/n1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xyXG4gICAgICovXHJcbiAgdG91Y2hTdGFydChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHN0YXJ0WDogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICBzdGFydFk6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcclxuICAgIH0pXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOe7k+adn1xyXG4gICAqL1xyXG4gIHRvdWNoRW5kKGU6IGFueSkge1xyXG4gICAgbGV0IGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICBsZXQgZW5kWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgIHZpZGVvLnNsaWRlKGVuZFgsIGVuZFksIHRoaXMuZGF0YS5zdGFydFgsIHRoaXMuZGF0YS5zdGFydFksIFwiL3BhZ2VzL3ZpZGVvMi92aWRlb1wiKTtcclxuICAgIC8qICBsZXQgdXJsITogc3RyaW5nO1xyXG4gICAgIGlmICh0dXJuID09PSBcImxlZnRcIilcclxuICAgICAgIHVybCA9IFwiL3BhZ2VzL3ZpZGVvMS92aWRlb1wiO1xyXG4gICAgIGVsc2UgaWYgKHR1cm4gPT09IFwicmlnaHRcIilcclxuICAgICAgIHVybCA9IFwiL3BhZ2VzL2Fib3V0L2Fib3V0XCI7XHJcbiAgICAgaWYgKCF1cmwpIHJldHVybjtcclxuICAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6IHVybCB9KTsvL+i3s+i9rOWIsOW6lemDqHRhYiDooajnpLrnmoTpobXpnaLliY3vvIzlkK/liqhvbkhpZGXkuovku7YgKi9cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2aWRlb3M6IDx2aWRlby5WaWRlb1tdPltdLCAgICAvL+WIneWni+WMlnZpZGVv5a+56LGh5Li656m6XHJcbiAgICAgIG51bUNhbGxiYWNrOiAwLy/liJ3lp4vljJblm57osIPmrKHmlbDkuLowXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vbkxvYWQoKTsvL+WGjeasoeaLieWPluaWsOaVsOaNrlxyXG4gIH0sXHJcbiAgLyoqXHJcbiog5pi+56S65Yqg6L295Yqo55S7XHJcbiovXHJcbiAgc2hvd0xvYWRpbmcoKSB7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsvL+WcqOW9k+WJjemhtemdouaYvuekuuWvvOiIquadoeWKoOi9veWKqOeUuyAgICBcclxuICAgIHd4LnNob3dMb2FkaW5nKHsvL+aYvuekuiBsb2FkaW5nIOaPkOekuuahhuOAgumcgOS4u+WKqOiwg+eUqCB3eC5oaWRlTG9hZGluZyDmiY3og73lhbPpl63mj5DnpLrmoYZcclxuICAgICAgdGl0bGU6ICfliLfmlrDkuK0uLi4nLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8qKlxyXG4gICog6ZqQ6JeP5Yqg6L295Yqo55S7XHJcbiAgKi9cclxuICBoaWRlTG9hZGluZygpIHtcclxuICAgIHd4LmhpZGVMb2FkaW5nKCk7Ly/pmpDol49sb2FkaW5nIOaPkOekuuahhiAgICAgICAgIFxyXG4gICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v6ZqQ6JeP5a+86Iiq5p2h5Yqg6L295Yqo55S7ICAgICAgICAgXHJcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi3XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdvbnJlYWR5JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29uc2hvdycpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuZGF0YS50aW1lcilcclxuICB9LFxyXG59KVxyXG5cclxuIl19