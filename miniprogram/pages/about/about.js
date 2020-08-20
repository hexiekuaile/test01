"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netData = require("../../netData");
var slide = require("../../slide");
Page({
    data: {
        IMG_PATH_PRE: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/img/about/",
        ABOUT_JSON_PATH: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/about.json",
        map: {},
        keys: [],
        imgJudge: [],
        preImgs: [],
        startX: 0,
        startY: 0,
    },
    onLoad: function () {
        this.showLoading();
        netData.about(this.data.ABOUT_JSON_PATH);
        var thiss = this;
        if (!netData.valueCallback)
            netData.valueCallback = function (map, keys) {
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    if (map[k] instanceof Array) {
                        thiss.data.imgJudge.push(true);
                        for (var _a = 0, _b = map[k]; _a < _b.length; _a++) {
                            var p = _b[_a];
                            thiss.data.preImgs.push(thiss.data.IMG_PATH_PRE + "PRE" + p);
                        }
                    }
                    else
                        thiss.data.imgJudge.push(false);
                }
                thiss.setData({
                    map: map,
                    keys: keys,
                    imgJudge: thiss.data.imgJudge,
                    preImgs: thiss.data.preImgs,
                });
                thiss.hideLoading();
            };
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
        slide.slide(endX, endY, this.data.startX, this.data.startY, "/pages/about/about");
    },
    previewImg: function (event) {
        var url = this.data.IMG_PATH_PRE + "PRE" + event.currentTarget.dataset.url;
        var thiss = this;
        wx.previewImage({
            current: url,
            urls: thiss.data.preImgs,
        });
    },
    onPullDownRefresh: function () {
        this.setData({
            map: {},
            keys: [],
            imgJudge: [],
            preImgs: [],
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
        wx.stopPullDownRefresh();
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLHVDQUEwQztBQUMxQyxtQ0FBc0M7QUFFdEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUNWLG9FQUFvRTtRQUN0RSxlQUFlLEVBQ2IseUVBQXlFO1FBQzNFLEdBQUcsRUFBd0MsRUFBRTtRQUM3QyxJQUFJLEVBQVksRUFBRTtRQUNsQixRQUFRLEVBQWEsRUFBRTtRQUN2QixPQUFPLEVBQVksRUFBRTtRQUNyQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFRRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1lBRXhCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFDdEIsR0FBeUMsRUFDekMsSUFBYztnQkFHZCxLQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7b0JBQWYsSUFBSSxDQUFDLGFBQUE7b0JBQ1IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFO3dCQUUzQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9CLEtBQWMsVUFBTSxFQUFOLEtBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLGNBQU0sRUFBTixJQUFNOzRCQUFmLElBQUksQ0FBQyxTQUFBOzRCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQUE7cUJBQ2hFOzt3QkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hDO2dCQUNELEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osR0FBRyxFQUFFLEdBQUc7b0JBQ1IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDN0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDNUIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7SUFDTixDQUFDO0lBS0gsVUFBVSxZQUFDLENBQU07UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxRQUFRLFlBQUMsQ0FBTTtRQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQ1QsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCLG9CQUFvQixDQUNyQixDQUFDO0lBTUosQ0FBQztJQUlELFVBQVUsWUFBQyxLQUFVO1FBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQXdDLEVBQUU7WUFDN0MsSUFBSSxFQUFZLEVBQUU7WUFDbEIsUUFBUSxFQUFhLEVBQUU7WUFDdkIsT0FBTyxFQUFZLEVBQUU7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUViLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFJRCxPQUFPLGdCQUFJLENBQUM7SUFLWixNQUFNLGdCQUFJLENBQUM7SUFLWCxNQUFNLGdCQUFJLENBQUM7SUFLWCxRQUFRO0lBRVIsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHlhbndlaVxyXG4gKiBARGF0ZTogMjAyMC0wNi0yMiAxMjoyMDowMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA4LTIwIDE0OjUxOjU4XHJcbiAqIEBEZXNjcmlwdGlvbiA6IOWFs+S6jumhtemdoueahOS7o+eggVxyXG4gKi9cclxuaW1wb3J0IG5ldERhdGEgPSByZXF1aXJlKFwiLi4vLi4vbmV0RGF0YVwiKTsvL+S7jue9kee7nOivu+WPluWFs+S6juS/oeaBr+eahOS7o+eggVxyXG5pbXBvcnQgc2xpZGUgPSByZXF1aXJlKFwiLi4vLi4vc2xpZGVcIik7IC8v5Yik5pat5bem5Y+z5ruR5Yqo55qE5Luj56CBXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBJTUdfUEFUSF9QUkU6XHJcbiAgICAgIFwiaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9pbWcvYWJvdXQvXCIsIC8v5Zu+54mH6Lev5b6E5YmN57yAXHJcbiAgICBBQk9VVF9KU09OX1BBVEg6XHJcbiAgICAgIFwiaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9kYXRhL2Fib3V0Lmpzb25cIiwgLy9hYm91dOS/oeaBr2pzb27mlofku7bot6/lvoRcclxuICAgIG1hcDogPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfT57fSwgLy/lhbPkuo7kv6Hmga/vvIzplK7lgLzlr7nvvIzlgLzmnInmlofmnKzjgIHlm77niYfot6/lvoTliJfooahcclxuICAgIGtleXM6IDxzdHJpbmdbXT5bXSxcclxuICAgIGltZ0p1ZGdlOiA8Ym9vbGVhbltdPltdLCAvL+WvueW6lG1hcOmUruWAvOWvue+8jOWIpOaWreWAvOaYr+WQpuS4uuaVsOe7hO+8jOaYr+WImeS4uuWbvueJh++8jOS4unRydWXvvIznuq/lsZ7kuLp3eG1s6aG16Z2id3g6aWbmnI3liqHjgILlnKhhYm91dC5qc29u5paH5Lu25Lit77yM5L6L5aaC77yaIFwibG9nb1wiOiBbXCJsb2dvLmpwZ1wiXSxcclxuICAgIHByZUltZ3M6IDxzdHJpbmdbXT5bXSwgLy/miYDmnInpooTop4jlm77niYfot6/lvoTmlbDnu4RcclxuICAgIHN0YXJ0WDogMCwgLy/pgJrov4d4eeWdkOagh+WAvOWIpOaWreW3puWPs+a7keWKqFxyXG4gICAgc3RhcnRZOiAwLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbjog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKiAgXHJcbiAgICogXHJcbiAgICovXHJcbiAgXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xyXG4gICAgbmV0RGF0YS5hYm91dCh0aGlzLmRhdGEuQUJPVVRfSlNPTl9QQVRIKTtcclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICBpZiAoIW5ldERhdGEudmFsdWVDYWxsYmFjaylcclxuICAgICAgLy/liKTmlq3lm57osIPlh73mlbDkuI3lrZjlnKjvvIzliJnlrprkuYlcclxuICAgICAgbmV0RGF0YS52YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gKFxyXG4gICAgICAgIG1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LFxyXG4gICAgICAgIGtleXM6IHN0cmluZ1tdXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXHJcbiAgICAgICAgZm9yIChsZXQgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICBpZiAobWFwW2tdIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgLy/lnKhhYm91dC5qc29u5paH5Lu25Lit77yM5L6L5aaC77yaXCJsb2dvXCI6IFtcImxvZ28uanBnXCJdXHJcbiAgICAgICAgICAgIHRoaXNzLmRhdGEuaW1nSnVkZ2UucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBtYXBba10pXHJcbiAgICAgICAgICAgICAgdGhpc3MuZGF0YS5wcmVJbWdzLnB1c2godGhpc3MuZGF0YS5JTUdfUEFUSF9QUkUgKyBcIlBSRVwiICsgcCk7IC8v57qm5a6a77ya5bCP5Zu+6Lev5b6E5YmNK1BSRT3pooTop4jlm77ot6/lvoRcclxuICAgICAgICAgIH0gZWxzZSB0aGlzcy5kYXRhLmltZ0p1ZGdlLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAga2V5czoga2V5cyxcclxuICAgICAgICAgIGltZ0p1ZGdlOiB0aGlzcy5kYXRhLmltZ0p1ZGdlLFxyXG4gICAgICAgICAgcHJlSW1nczogdGhpc3MuZGF0YS5wcmVJbWdzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH07XHJcbiAgfSxcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xyXG4gKiBAcGFyYW0geyp9IGVcclxuICovXHJcbnRvdWNoU3RhcnQoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzdGFydFg6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgc3RhcnRZOiBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo57uT5p2fXHJcbiAgICovXHJcbiAgdG91Y2hFbmQoZTogYW55KSB7XHJcbiAgICBsZXQgZW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgIGxldCBlbmRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgc2xpZGUuc2xpZGUoXHJcbiAgICAgIGVuZFgsXHJcbiAgICAgIGVuZFksXHJcbiAgICAgIHRoaXMuZGF0YS5zdGFydFgsXHJcbiAgICAgIHRoaXMuZGF0YS5zdGFydFksXHJcbiAgICAgIFwiL3BhZ2VzL2Fib3V0L2Fib3V0XCJcclxuICAgICk7XHJcbiAgIC8qICBsZXQgdXJsITogc3RyaW5nO1xyXG4gICAgaWYgKHR1cm4gPT09IFwibGVmdFwiKSB1cmwgPSBcIi9wYWdlcy92aWRlbzIvdmlkZW9cIjtcclxuICAgIGVsc2UgaWYgKHR1cm4gPT09IFwicmlnaHRcIikgdXJsID0gXCIvcGFnZXMvZGl0dS9kaXR1XCI7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG4gICAgd3guc3dpdGNoVGFiKHsgdXJsOiB1cmwgfSk7IC8v6Lez6L2s5Yiw5bqV6YOodGFiIOihqOekuueahOmhtemdouWJje+8jOWQr+WKqG9uSGlkZeS6i+S7tiAqL1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6byg5qCH54K55Ye76aKE6KeI5Zu+54mH5aSn5Zu+XHJcbiAgICovXHJcbiAgcHJldmlld0ltZyhldmVudDogYW55KSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5kYXRhLklNR19QQVRIX1BSRSArIFwiUFJFXCIgKyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsOyAvL+e6puWumu+8muWwj+Wbvui3r+W+hOWJjStQUkU96aKE6KeI5Zu+6Lev5b6EXHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgY3VycmVudDogdXJsLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcbiAgICAgIHVybHM6IHRoaXNzLmRhdGEucHJlSW1ncywgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbWFwOiA8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9Pnt9LFxyXG4gICAgICBrZXlzOiA8c3RyaW5nW10+W10sXHJcbiAgICAgIGltZ0p1ZGdlOiA8Ym9vbGVhbltdPltdLFxyXG4gICAgICBwcmVJbWdzOiA8c3RyaW5nW10+W10sXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25Mb2FkKCk7IC8v5YaN5qyh5ouJ5Y+W5paw5pWw5o2uXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDmmL7npLrliqDovb3liqjnlLtcclxuICAgKi9cclxuICBzaG93TG9hZGluZygpIHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WcqOW9k+WJjemhtemdouaYvuekuuWvvOiIquadoeWKoOi9veWKqOeUu1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAvL+aYvuekuiBsb2FkaW5nIOaPkOekuuahhuOAgumcgOS4u+WKqOiwg+eUqCB3eC5oaWRlTG9hZGluZyDmiY3og73lhbPpl63mj5DnpLrmoYZcclxuICAgICAgdGl0bGU6IFwi5Yi35paw5LitLi4uXCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmakOiXj+WKoOi9veWKqOeUu1xyXG4gICAqL1xyXG4gIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgd3guaGlkZUxvYWRpbmcoKTsgLy/pmpDol49sb2FkaW5nIOaPkOekuuahhlxyXG4gICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v6ZqQ6JeP5a+86Iiq5p2h5Yqg6L295Yqo55S7XHJcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi3XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcbn0pO1xyXG4iXX0=