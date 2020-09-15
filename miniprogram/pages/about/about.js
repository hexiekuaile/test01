"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netdata_1 = require("./netdata");
var slide_1 = require("../../utils/slide");
var commonData_1 = require("../../utils/commonData");
Page({
    data: {
        EXTERNAL_DATA_PATH: commonData_1.EXTERNAL_DATA_PATH,
        IMG_PATH_PRE: commonData_1.EXTERNAL_DATA_PATH + "img/about/",
        ABOUT_JSON_PATH: commonData_1.EXTERNAL_DATA_PATH + "data/about.json",
        map: {},
        keys: [],
        imgJudge: [],
        preImgs: [],
        eventTouchStart: {},
    },
    onLoad: function () {
        this.showLoading();
        var iAbout = netdata_1.getAbout(this.data.ABOUT_JSON_PATH);
        var thiss = this;
        if (!iAbout.valuesCallback)
            iAbout.valuesCallback = function (map, keys) {
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
        iAbout();
    },
    touchStart: function (e) {
        this.setData({
            eventTouchStart: e
        });
    },
    touchEnd: function (e) {
        slide_1.jumpNav2("about", this.data.eventTouchStart, e);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLHFDQUFvQztBQUNwQywyQ0FBNEM7QUFDNUMscURBQTREO0FBRTVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGtCQUFrQixFQUFFLCtCQUFrQjtRQUN0QyxZQUFZLEVBQUUsK0JBQWtCLEdBQUcsWUFBWTtRQUMvQyxlQUFlLEVBQUUsK0JBQWtCLEdBQUcsaUJBQWlCO1FBQ3ZELEdBQUcsRUFBd0MsRUFBRTtRQUM3QyxJQUFJLEVBQVksRUFBRTtRQUNsQixRQUFRLEVBQWEsRUFBRTtRQUN2QixPQUFPLEVBQVksRUFBRTtRQUNyQixlQUFlLEVBQUUsRUFBRTtLQUNwQjtJQVFELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztZQUN4QixNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsR0FBeUMsRUFBRSxJQUFjO2dCQUV6RixLQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7b0JBQWYsSUFBSSxDQUFDLGFBQUE7b0JBQ1IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFO3dCQUUzQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9CLEtBQWMsVUFBTSxFQUFOLEtBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLGNBQU0sRUFBTixJQUFNOzRCQUFmLElBQUksQ0FBQyxTQUFBOzRCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQUE7cUJBQ2hFOzt3QkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hDO2dCQUNELEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osR0FBRyxFQUFFLEdBQUc7b0JBQ1IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDN0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDNUIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFLRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2IsZ0JBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUlELFVBQVUsRUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUMzRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sRUFBRSxHQUFHO1lBQ1osSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsaUJBQWlCLEVBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEdBQUcsRUFBd0MsRUFBRTtZQUM3QyxJQUFJLEVBQVksRUFBRTtZQUNsQixRQUFRLEVBQWEsRUFBRTtZQUN2QixPQUFPLEVBQVksRUFBRTtTQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUlELFdBQVc7UUFDVCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDO1lBRWIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELFdBQVc7UUFDVCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUlELE9BQU8sZ0JBQUssQ0FBQztJQUtiLE1BQU0sZ0JBQUssQ0FBQztJQUtaLE1BQU0sZ0JBQUssQ0FBQztJQUtaLFFBQVE7SUFFUixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogeWFud2VpXHJcbiAqIEBEYXRlOiAyMDIwLTA2LTIyIDEyOjIwOjAyXHJcbiAqIEBMYXN0RWRpdG9yczogeWFud2VpXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDktMTUgMTc6MTY6MjFcclxuICogQERlc2NyaXB0aW9uIDog5YWz5LqO6aG16Z2i55qE5Luj56CBXHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRBYm91dCB9IGZyb20gXCIuL25ldGRhdGFcIlxyXG5pbXBvcnQgeyBqdW1wTmF2MiB9IGZyb20gXCIuLi8uLi91dGlscy9zbGlkZVwiXHJcbmltcG9ydCB7IEVYVEVSTkFMX0RBVEFfUEFUSCB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25EYXRhXCI7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBFWFRFUk5BTF9EQVRBX1BBVEg6IEVYVEVSTkFMX0RBVEFfUEFUSCwvL+WklumDqOaVsOaNruWSjOWbvueJh+aAu+i3r+W+hFxyXG4gICAgSU1HX1BBVEhfUFJFOiBFWFRFUk5BTF9EQVRBX1BBVEggKyBcImltZy9hYm91dC9cIiwgLy/lm77niYfot6/lvoTliY3nvIBcclxuICAgIEFCT1VUX0pTT05fUEFUSDogRVhURVJOQUxfREFUQV9QQVRIICsgXCJkYXRhL2Fib3V0Lmpzb25cIiwgLy9hYm91dOS/oeaBr2pzb27mlofku7bot6/lvoRcclxuICAgIG1hcDogPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfT57fSwgLy/lhbPkuo7kv6Hmga/vvIzplK7lgLzlr7nvvIzlgLzmnInmlofmnKzjgIHlm77niYfot6/lvoTliJfooahcclxuICAgIGtleXM6IDxzdHJpbmdbXT5bXSxcclxuICAgIGltZ0p1ZGdlOiA8Ym9vbGVhbltdPltdLCAvL+WvueW6lG1hcOmUruWAvOWvue+8jOWIpOaWreWAvOaYr+WQpuS4uuaVsOe7hO+8jOaYr+WImeS4uuWbvueJh++8jOS4unRydWXvvIznuq/lsZ7kuLp3eG1s6aG16Z2id3g6aWbmnI3liqHjgILlnKhhYm91dC5qc29u5paH5Lu25Lit77yM5L6L5aaC77yaIFwibG9nb1wiOiBbXCJsb2dvLmpwZ1wiXSxcclxuICAgIHByZUltZ3M6IDxzdHJpbmdbXT5bXSwgLy/miYDmnInpooTop4jlm77niYfot6/lvoTmlbDnu4RcclxuICAgIGV2ZW50VG91Y2hTdGFydDoge30sIC8v5ruR5Yqo5omL5Yq/5byA5aeL5LqL5Lu2XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uOiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqICBcclxuICAgKiBcclxuICAgKi9cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zaG93TG9hZGluZygpOy8v5pi+56S65Yqg6L296L+b5bqm5p2hXHJcbiAgICBsZXQgaUFib3V0ID0gZ2V0QWJvdXQodGhpcy5kYXRhLkFCT1VUX0pTT05fUEFUSCk7Ly/kvKDpgJLlj4LmlbDvvIzojrflvpdJQWJvdXTmjqXlj6Plr7nosaHjgILkuZ/ljbPliJ3lp4vljJZpQWJvdXTlr7nosaFcclxuXHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgaWYgKCFpQWJvdXQudmFsdWVzQ2FsbGJhY2spICAgICAgLy/liKTmlq3lm57osIPlh73mlbDkuI3lrZjlnKjvvIzliJnlrprkuYlcclxuICAgICAgaUFib3V0LnZhbHVlc0NhbGxiYWNrID0gZnVuY3Rpb24gKG1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LCBrZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXHJcbiAgICAgICAgZm9yIChsZXQgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICBpZiAobWFwW2tdIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgLy/lnKhhYm91dC5qc29u5paH5Lu25Lit77yM5L6L5aaC77yaXCJsb2dvXCI6IFtcImxvZ28uanBnXCJdXHJcbiAgICAgICAgICAgIHRoaXNzLmRhdGEuaW1nSnVkZ2UucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBtYXBba10pXHJcbiAgICAgICAgICAgICAgdGhpc3MuZGF0YS5wcmVJbWdzLnB1c2godGhpc3MuZGF0YS5JTUdfUEFUSF9QUkUgKyBcIlBSRVwiICsgcCk7IC8v57qm5a6a77ya5bCP5Zu+6Lev5b6E5YmNK1BSRT3pooTop4jlm77ot6/lvoRcclxuICAgICAgICAgIH0gZWxzZSB0aGlzcy5kYXRhLmltZ0p1ZGdlLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAga2V5czoga2V5cyxcclxuICAgICAgICAgIGltZ0p1ZGdlOiB0aGlzcy5kYXRhLmltZ0p1ZGdlLFxyXG4gICAgICAgICAgcHJlSW1nczogdGhpc3MuZGF0YS5wcmVJbWdzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNzLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaUFib3V0KCk7Ly/lkK/liqhJQWJvdXTmjqXlj6Plr7nosaHnmoTln7rnoYDlh73mlbDvvIznvZHnu5zor7vlj5blkITop4bpopHkv6Hmga/vvIzmnInnvZHnu5zor7fmsYLlu7bov59cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+a7keWKqOW8gOWni1xyXG4gICAqIEBwYXJhbSB7Kn0gZVxyXG4gICAqL1xyXG4gIHRvdWNoU3RhcnQoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBldmVudFRvdWNoU3RhcnQ6IGVcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfmu5Hliqjnu5PmnZ9cclxuICAgKi9cclxuICB0b3VjaEVuZChlOiBhbnkpIHtcclxuICAgIGp1bXBOYXYyKFwiYWJvdXRcIiwgdGhpcy5kYXRhLmV2ZW50VG91Y2hTdGFydCwgZSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDpvKDmoIfngrnlh7vpooTop4jlm77niYflpKflm75cclxuICAgKi9cclxuICBwcmV2aWV3SW1nKGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCB1cmwgPSB0aGlzLmRhdGEuSU1HX1BBVEhfUFJFICsgXCJQUkVcIiArIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmw7IC8v57qm5a6a77ya5bCP5Zu+6Lev5b6E5YmNK1BSRT3pooTop4jlpKflm77ot6/lvoRcclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICBjdXJyZW50OiB1cmwsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJsczogdGhpc3MuZGF0YS5wcmVJbWdzLCAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtYXA6IDx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0+e30sXHJcbiAgICAgIGtleXM6IDxzdHJpbmdbXT5bXSxcclxuICAgICAgaW1nSnVkZ2U6IDxib29sZWFuW10+W10sXHJcbiAgICAgIHByZUltZ3M6IDxzdHJpbmdbXT5bXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkxvYWQoKTsgLy/lho3mrKHmi4nlj5bmlrDmlbDmja5cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOaYvuekuuWKoOi9veWKqOeUu1xyXG4gICAqL1xyXG4gIHNob3dMb2FkaW5nKCkge1xyXG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIC8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgICB0aXRsZTogXCLliLfmlrDkuK0uLi5cIixcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6ZqQ6JeP5Yqg6L295Yqo55S7XHJcbiAgICovXHJcbiAgaGlkZUxvYWRpbmcoKSB7XHJcbiAgICB3eC5oaWRlTG9hZGluZygpOyAvL+makOiXj2xvYWRpbmcg5o+Q56S65qGGXHJcbiAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/pmpDol4/lr7zoiKrmnaHliqDovb3liqjnlLtcclxuICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLdcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHsgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7IH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkgeyB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZXIpXHJcbiAgfSxcclxufSk7Il19