"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netData = require("./netData");
var slide = require("../../utils/slide");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFzQztBQUN0Qyx5Q0FBNEM7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUNWLG9FQUFvRTtRQUN0RSxlQUFlLEVBQ2IseUVBQXlFO1FBQzNFLEdBQUcsRUFBd0MsRUFBRTtRQUM3QyxJQUFJLEVBQVksRUFBRTtRQUNsQixRQUFRLEVBQWEsRUFBRTtRQUN2QixPQUFPLEVBQVksRUFBRTtRQUNyQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFRRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1lBRXhCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFDdEIsR0FBeUMsRUFDekMsSUFBYztnQkFHZCxLQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7b0JBQWYsSUFBSSxDQUFDLGFBQUE7b0JBQ1IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFO3dCQUUzQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9CLEtBQWMsVUFBTSxFQUFOLEtBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLGNBQU0sRUFBTixJQUFNOzRCQUFmLElBQUksQ0FBQyxTQUFBOzRCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQUE7cUJBQ2hFOzt3QkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hDO2dCQUNELEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osR0FBRyxFQUFFLEdBQUc7b0JBQ1IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDN0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDNUIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7SUFDTixDQUFDO0lBS0gsVUFBVSxZQUFDLENBQU07UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxRQUFRLFlBQUMsQ0FBTTtRQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQ1QsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCLG9CQUFvQixDQUNyQixDQUFDO0lBTUosQ0FBQztJQUlELFVBQVUsWUFBQyxLQUFVO1FBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQXdDLEVBQUU7WUFDN0MsSUFBSSxFQUFZLEVBQUU7WUFDbEIsUUFBUSxFQUFhLEVBQUU7WUFDdkIsT0FBTyxFQUFZLEVBQUU7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUViLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFJRCxPQUFPLGdCQUFJLENBQUM7SUFLWixNQUFNLGdCQUFJLENBQUM7SUFLWCxNQUFNLGdCQUFJLENBQUM7SUFLWCxRQUFRO0lBRVIsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHlhbndlaVxyXG4gKiBARGF0ZTogMjAyMC0wNi0yMiAxMjoyMDowMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlhbndlaVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA4LTEzIDExOjUxOjUxXHJcbiAqIEBEZXNjcmlwdGlvbiA6IOWFs+S6jumhtemdoueahOS7o+eggVxyXG4gKi9cclxuaW1wb3J0IG5ldERhdGEgPSByZXF1aXJlKFwiLi9uZXREYXRhXCIpOy8v5LuO572R57uc6K+75Y+W5YWz5LqO5L+h5oGv55qE5Luj56CBXHJcbmltcG9ydCBzbGlkZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9zbGlkZVwiKTsgLy/liKTmlq3lt6blj7Pmu5HliqjnmoTku6PnoIFcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIElNR19QQVRIX1BSRTpcclxuICAgICAgXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2ltZy9hYm91dC9cIiwgLy/lm77niYfot6/lvoTliY3nvIBcclxuICAgIEFCT1VUX0pTT05fUEFUSDpcclxuICAgICAgXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2RhdGEvYWJvdXQuanNvblwiLCAvL2Fib3V05L+h5oGvanNvbuaWh+S7tui3r+W+hFxyXG4gICAgbWFwOiA8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9Pnt9LCAvL+WFs+S6juS/oeaBr++8jOmUruWAvOWvue+8jOWAvOacieaWh+acrOOAgeWbvueJh+i3r+W+hOWIl+ihqFxyXG4gICAga2V5czogPHN0cmluZ1tdPltdLFxyXG4gICAgaW1nSnVkZ2U6IDxib29sZWFuW10+W10sIC8v5a+55bqUbWFw6ZSu5YC85a+577yM5Yik5pat5YC85piv5ZCm5Li65pWw57uE77yM5piv5YiZ5Li65Zu+54mH77yM5Li6dHJ1Ze+8jOe6r+WxnuS4und4bWzpobXpnaJ3eDppZuacjeWKoeOAguWcqGFib3V0Lmpzb27mlofku7bkuK3vvIzkvovlpoLvvJogXCJsb2dvXCI6IFtcImxvZ28uanBnXCJdLFxyXG4gICAgcHJlSW1nczogPHN0cmluZ1tdPltdLCAvL+aJgOaciemihOiniOWbvueJh+i3r+W+hOaVsOe7hFxyXG4gICAgc3RhcnRYOiAwLCAvL+mAmui/h3h55Z2Q5qCH5YC85Yik5pat5bem5Y+z5ruR5YqoXHJcbiAgICBzdGFydFk6IDAsXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uOiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqICBcclxuICAgKiBcclxuICAgKi9cclxuICBcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XHJcbiAgICBuZXREYXRhLmFib3V0KHRoaXMuZGF0YS5BQk9VVF9KU09OX1BBVEgpO1xyXG4gICAgbGV0IHRoaXNzID0gdGhpcztcclxuICAgIGlmICghbmV0RGF0YS52YWx1ZUNhbGxiYWNrKVxyXG4gICAgICAvL+WIpOaWreWbnuiwg+WHveaVsOS4jeWtmOWcqO+8jOWImeWumuS5iVxyXG4gICAgICBuZXREYXRhLnZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoXHJcbiAgICAgICAgbWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0sXHJcbiAgICAgICAga2V5czogc3RyaW5nW11cclxuICAgICAgKSB7XHJcbiAgICAgICAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIznlKjkuo7nvZHnu5zmlbDmja7or7fmsYLlkI7lm57osINcclxuICAgICAgICBmb3IgKGxldCBrIG9mIGtleXMpIHtcclxuICAgICAgICAgIGlmIChtYXBba10gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAvL+WcqGFib3V0Lmpzb27mlofku7bkuK3vvIzkvovlpoLvvJpcImxvZ29cIjogW1wibG9nby5qcGdcIl1cclxuICAgICAgICAgICAgdGhpc3MuZGF0YS5pbWdKdWRnZS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwIG9mIG1hcFtrXSlcclxuICAgICAgICAgICAgICB0aGlzcy5kYXRhLnByZUltZ3MucHVzaCh0aGlzcy5kYXRhLklNR19QQVRIX1BSRSArIFwiUFJFXCIgKyBwKTsgLy/nuqblrprvvJrlsI/lm77ot6/lvoTliY0rUFJFPemihOiniOWbvui3r+W+hFxyXG4gICAgICAgICAgfSBlbHNlIHRoaXNzLmRhdGEuaW1nSnVkZ2UucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXNzLnNldERhdGEoe1xyXG4gICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICBrZXlzOiBrZXlzLFxyXG4gICAgICAgICAgaW1nSnVkZ2U6IHRoaXNzLmRhdGEuaW1nSnVkZ2UsXHJcbiAgICAgICAgICBwcmVJbWdzOiB0aGlzcy5kYXRhLnByZUltZ3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc3MuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfTtcclxuICB9LFxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35ruR5Yqo5byA5aeLXHJcbiAqIEBwYXJhbSB7Kn0gZVxyXG4gKi9cclxudG91Y2hTdGFydChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHN0YXJ0WDogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICBzdGFydFk6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfmu5Hliqjnu5PmnZ9cclxuICAgKi9cclxuICB0b3VjaEVuZChlOiBhbnkpIHtcclxuICAgIGxldCBlbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgbGV0IGVuZFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICBzbGlkZS5zbGlkZShcclxuICAgICAgZW5kWCxcclxuICAgICAgZW5kWSxcclxuICAgICAgdGhpcy5kYXRhLnN0YXJ0WCxcclxuICAgICAgdGhpcy5kYXRhLnN0YXJ0WSxcclxuICAgICAgXCIvcGFnZXMvYWJvdXQvYWJvdXRcIlxyXG4gICAgKTtcclxuICAgLyogIGxldCB1cmwhOiBzdHJpbmc7XHJcbiAgICBpZiAodHVybiA9PT0gXCJsZWZ0XCIpIHVybCA9IFwiL3BhZ2VzL3ZpZGVvMi92aWRlb1wiO1xyXG4gICAgZWxzZSBpZiAodHVybiA9PT0gXCJyaWdodFwiKSB1cmwgPSBcIi9wYWdlcy9kaXR1L2RpdHVcIjtcclxuICAgIGlmICghdXJsKSByZXR1cm47XHJcbiAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6IHVybCB9KTsgLy/ot7PovazliLDlupXpg6h0YWIg6KGo56S655qE6aG16Z2i5YmN77yM5ZCv5Yqob25IaWRl5LqL5Lu2ICovXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDpvKDmoIfngrnlh7vpooTop4jlm77niYflpKflm75cclxuICAgKi9cclxuICBwcmV2aWV3SW1nKGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCB1cmwgPSB0aGlzLmRhdGEuSU1HX1BBVEhfUFJFICsgXCJQUkVcIiArIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmw7IC8v57qm5a6a77ya5bCP5Zu+6Lev5b6E5YmNK1BSRT3pooTop4jlm77ot6/lvoRcclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICBjdXJyZW50OiB1cmwsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJsczogdGhpc3MuZGF0YS5wcmVJbWdzLCAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtYXA6IDx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0+e30sXHJcbiAgICAgIGtleXM6IDxzdHJpbmdbXT5bXSxcclxuICAgICAgaW1nSnVkZ2U6IDxib29sZWFuW10+W10sXHJcbiAgICAgIHByZUltZ3M6IDxzdHJpbmdbXT5bXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkxvYWQoKTsgLy/lho3mrKHmi4nlj5bmlrDmlbDmja5cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOaYvuekuuWKoOi9veWKqOeUu1xyXG4gICAqL1xyXG4gIHNob3dMb2FkaW5nKCkge1xyXG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIC8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgICB0aXRsZTogXCLliLfmlrDkuK0uLi5cIixcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6ZqQ6JeP5Yqg6L295Yqo55S7XHJcbiAgICovXHJcbiAgaGlkZUxvYWRpbmcoKSB7XHJcbiAgICB3eC5oaWRlTG9hZGluZygpOyAvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGXHJcbiAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLtcclxuICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLdcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZXIpXHJcbiAgfSxcclxufSk7XHJcbiJdfQ==