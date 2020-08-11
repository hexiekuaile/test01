"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netData = require("./netData");
Page({
    data: {
        IMG_PATH_PRE: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/img/about/",
        ABOUT_JSON_PATH: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/about.json",
        map: {},
        keys: [],
        imgJudge: [],
        preImgs: []
    },
    onLoad: function () {
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
                            thiss.data.preImgs.push(thiss.data.IMG_PATH_PRE + 'PRE' + p);
                        }
                    }
                    else
                        thiss.data.imgJudge.push(false);
                }
                thiss.setData({
                    map: map,
                    keys: keys,
                    imgJudge: thiss.data.imgJudge,
                    preImgs: thiss.data.preImgs
                });
            };
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    previewImg: function (event) {
        var url = this.data.IMG_PATH_PRE + 'PRE' + event.currentTarget.dataset.url;
        var thiss = this;
        wx.previewImage({
            current: url,
            urls: thiss.data.preImgs
        });
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        wx.showLoading({
            title: '刷新中...',
        });
        this.setData({
            map: {},
            keys: [],
            imgJudge: [],
            preImgs: []
        });
        this.onLoad();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFzQztBQUV0QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsb0VBQW9FO1FBQ2xGLGVBQWUsRUFBRSx5RUFBeUU7UUFDMUYsR0FBRyxFQUF3QyxFQUFFO1FBQzdDLElBQUksRUFBWSxFQUFFO1FBQ2xCLFFBQVEsRUFBYSxFQUFFO1FBQ3ZCLE9BQU8sRUFBWSxFQUFFO0tBQ3RCO0lBS0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1lBQ3hCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUF5QyxFQUFFLElBQWM7Z0JBQ3pGLEtBQWMsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtvQkFBZixJQUFJLENBQUMsYUFBQTtvQkFDUixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEVBQUU7d0JBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsS0FBYyxVQUFNLEVBQU4sS0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU4sY0FBTSxFQUFOLElBQU07NEJBQWYsSUFBSSxDQUFDLFNBQUE7NEJBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFBQTtxQkFDaEU7O3dCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixHQUFHLEVBQUUsR0FBRztvQkFDUixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUM3QixPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO2lCQUM1QixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7SUFDTCxDQUFDO0lBS0QsT0FBTztJQUNQLENBQUM7SUFLRCxNQUFNO0lBQ04sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFJRCxVQUFVLFlBQUMsS0FBVTtRQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsT0FBTyxFQUFFLEdBQUc7WUFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxpQkFBaUI7UUFFZixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUU5QixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEdBQUcsRUFBd0MsRUFBRTtZQUM3QyxJQUFJLEVBQVksRUFBRTtZQUNsQixRQUFRLEVBQWEsRUFBRTtZQUN2QixPQUFPLEVBQVksRUFBRTtTQUN0QixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXREYXRhID0gcmVxdWlyZShcIi4vbmV0RGF0YVwiKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIElNR19QQVRIX1BSRTogXCJodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2ltZy9hYm91dC9cIiwgIC8v5Zu+54mH6Lev5b6E5YmN57yAXHJcbiAgICBBQk9VVF9KU09OX1BBVEg6IFwiaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9kYXRhL2Fib3V0Lmpzb25cIiwvL2Fib3V05L+h5oGvanNvbuaWh+S7tui3r+W+hFxyXG4gICAgbWFwOiA8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9Pnt9LC8v5YWz5LqO5L+h5oGv77yM6ZSu5YC85a+577yM5YC85pyJ5paH5pys44CB5Zu+54mH6Lev5b6E5YiX6KGoXHJcbiAgICBrZXlzOiA8c3RyaW5nW10+W10sXHJcbiAgICBpbWdKdWRnZTogPGJvb2xlYW5bXT5bXSwvL+WvueW6lG1hcOmUruWAvOWvue+8jOWIpOaWreWAvOaYr+WQpuS4uuaVsOe7hO+8jOaYr+WImeS4uuWbvueJh++8jOS4unRydWXvvIznuq/lsZ7kuLp3eG1s6aG16Z2id3g6aWbmnI3liqHjgILlnKhhYm91dC5qc29u5paH5Lu25Lit77yM5L6L5aaC77yaIFwibG9nb1wiOiBbXCJsb2dvLmpwZ1wiXSxcclxuICAgIHByZUltZ3M6IDxzdHJpbmdbXT5bXS8v5omA5pyJ6aKE6KeI5Zu+54mH6Lev5b6E5pWw57uEXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICBuZXREYXRhLmFib3V0KHRoaXMuZGF0YS5BQk9VVF9KU09OX1BBVEgpO1xyXG4gICAgbGV0IHRoaXNzID0gdGhpcztcclxuICAgIGlmICghbmV0RGF0YS52YWx1ZUNhbGxiYWNrKS8v5Yik5pat5Zue6LCD5Ye95pWw5LiN5a2Y5Zyo77yM5YiZ5a6a5LmJXHJcbiAgICAgIG5ldERhdGEudmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIChtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSwga2V5czogc3RyaW5nW10pIHsgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDXHJcbiAgICAgICAgZm9yIChsZXQgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICBpZiAobWFwW2tdIGluc3RhbmNlb2YgQXJyYXkpIHsgLy/lnKhhYm91dC5qc29u5paH5Lu25Lit77yM5L6L5aaC77yaXCJsb2dvXCI6IFtcImxvZ28uanBnXCJdXHJcbiAgICAgICAgICAgIHRoaXNzLmRhdGEuaW1nSnVkZ2UucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBtYXBba10pXHJcbiAgICAgICAgICAgICAgdGhpc3MuZGF0YS5wcmVJbWdzLnB1c2godGhpc3MuZGF0YS5JTUdfUEFUSF9QUkUgKyAnUFJFJyArIHApOy8v57qm5a6a77ya5bCP5Zu+6Lev5b6E5YmNK1BSRT3pooTop4jlm77ot6/lvoRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgdGhpc3MuZGF0YS5pbWdKdWRnZS5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc3Muc2V0RGF0YSh7XHJcbiAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgIGtleXM6IGtleXMsXHJcbiAgICAgICAgICBpbWdKdWRnZTogdGhpc3MuZGF0YS5pbWdKdWRnZSxcclxuICAgICAgICAgIHByZUltZ3M6IHRoaXNzLmRhdGEucHJlSW1nc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuZGF0YS50aW1lcilcclxuICB9LFxyXG4gIC8qKlxyXG4gICog6byg5qCH54K55Ye76aKE6KeI5Zu+54mH5aSn5Zu+XHJcbiAgKi9cclxuICBwcmV2aWV3SW1nKGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCB1cmwgPSB0aGlzLmRhdGEuSU1HX1BBVEhfUFJFICsgJ1BSRScgKyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsOy8v57qm5a6a77ya5bCP5Zu+6Lev5b6E5YmNK1BSRT3pooTop4jlm77ot6/lvoRcclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICBjdXJyZW50OiB1cmwsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJsczogdGhpc3MuZGF0YS5wcmVJbWdzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgIH0pXHJcbiAgfSxcclxuICAvKipcclxuICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIC8v5Zyo5b2T5YmN6aG16Z2i5pi+56S65a+86Iiq5p2h5Yqg6L295Yqo55S7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcclxuICAgIC8v5pi+56S6IGxvYWRpbmcg5o+Q56S65qGG44CC6ZyA5Li75Yqo6LCD55SoIHd4LmhpZGVMb2FkaW5nIOaJjeiDveWFs+mXreaPkOekuuahhlxyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WIt+aWsOS4rS4uLicsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbWFwOiA8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9Pnt9LFxyXG4gICAgICBrZXlzOiA8c3RyaW5nW10+W10sXHJcbiAgICAgIGltZ0p1ZGdlOiA8Ym9vbGVhbltdPltdLFxyXG4gICAgICBwcmVJbWdzOiA8c3RyaW5nW10+W11cclxuICAgIH0pXHJcbiAgICB0aGlzLm9uTG9hZCgpOy8v5YaN5qyh5ouJ5Y+W5paw5pWw5o2uXHJcbiAgfVxyXG5cclxufSkiXX0=