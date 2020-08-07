"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netData = require("./netData");
Page({
    data: {
        IMG_PATH_PRE: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/img/about/",
        ABOUT_JSON_PATH: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/about.json",
        map: {},
        keys: {},
        mapImgJudge: []
    },
    onLoad: function () {
        netData.about(this.data.ABOUT_JSON_PATH);
        var thiss = this;
        netData.valueCallback = function (map, keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var k = keys_1[_i];
                if (map[k] instanceof Array)
                    thiss.data.mapImgJudge.push(true);
                else
                    thiss.data.mapImgJudge.push(false);
            }
            thiss.setData({
                map: map,
                keys: keys,
                mapImgJudge: thiss.data.mapImgJudge
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
    previewImg: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFzQztBQUV0QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsb0VBQW9FO1FBQ2xGLGVBQWUsRUFBRSx5RUFBeUU7UUFDMUYsR0FBRyxFQUF3QyxFQUFFO1FBQzdDLElBQUksRUFBWSxFQUFFO1FBQ2xCLFdBQVcsRUFBYSxFQUFFO0tBQzNCO0lBS0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQXlDLEVBQUUsSUFBYztZQUV6RixLQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7Z0JBQWYsSUFBSSxDQUFDLGFBQUE7Z0JBQ1IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSztvQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O29CQUMxRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFekM7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxJQUFJO2dCQUNWLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVc7YUFDcEMsQ0FBQyxDQUFBO1FBSUosQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUtELE9BQU87SUFDUCxDQUFDO0lBS0QsTUFBTTtJQUNOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBQ0QsVUFBVTtJQUtWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV0RGF0YSA9IHJlcXVpcmUoXCIuL25ldERhdGFcIik7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBJTUdfUEFUSF9QUkU6IFwiaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9pbWcvYWJvdXQvXCIsICAvL+WbvueJh+i3r+W+hOWJjee8gFxyXG4gICAgQUJPVVRfSlNPTl9QQVRIOiBcImh0dHBzOi8vYS0xMjU2MTM2NDkzLmNvcy5hcC1uYW5qaW5nLm15cWNsb3VkLmNvbS9meWhic3MvZGF0YS9hYm91dC5qc29uXCIsLy9hYm91dOS/oeaBr2pzb27mlofku7bot6/lvoRcclxuICAgIG1hcDogPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfT57fSwvL+WFs+S6juS/oeaBr++8jOmUruWAvOWvue+8jOWAvOacieaWh+acrOOAgeWbvueJh+i3r+W+hOWIl+ihqFxyXG4gICAga2V5czogPHN0cmluZ1tdPnt9LFxyXG4gICAgbWFwSW1nSnVkZ2U6IDxib29sZWFuW10+W10vL+WIpOaWreaYr+WQpuS4uuWbvueJh+i3r+W+hOaVsOe7hO+8jOWvueW6lG1hcOmUruWAvOWvue+8jOWmguaenG1hcOmUruWAvOWvueaYr+WbvueJh+i3r+W+hOaVsOe7hO+8jOWImeWAvOS4unRydWXvvIznuq/lsZ7kuLp3eG1s6aG16Z2id3g6aWbmnI3liqFcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIG5ldERhdGEuYWJvdXQodGhpcy5kYXRhLkFCT1VUX0pTT05fUEFUSCk7XHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgbmV0RGF0YS52YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LCBrZXlzOiBzdHJpbmdbXSkgeyAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIznlKjkuo7nvZHnu5zmlbDmja7or7fmsYLlkI7lm57osINcclxuXHJcbiAgICAgIGZvciAobGV0IGsgb2Yga2V5cykge1xyXG4gICAgICAgIGlmIChtYXBba10gaW5zdGFuY2VvZiBBcnJheSkgdGhpc3MuZGF0YS5tYXBJbWdKdWRnZS5wdXNoKHRydWUpO1xyXG4gICAgICAgIGVsc2UgdGhpc3MuZGF0YS5tYXBJbWdKdWRnZS5wdXNoKGZhbHNlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCB0aGlzcy5kYXRhLm1hcEltZ0p1ZGdlW2tdKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXNzLnNldERhdGEoe1xyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIGtleXM6IGtleXMsXHJcbiAgICAgICAgbWFwSW1nSnVkZ2U6IHRoaXNzLmRhdGEubWFwSW1nSnVkZ2VcclxuICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuZGF0YS50aW1lcilcclxuICB9LFxyXG4gIHByZXZpZXdJbWcoKSB7XHJcbiAgICAvKiAgICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgIGN1cnJlbnQ6IFwiL2ltYWdlcy/orr7mlr3lvIDmlL7moI/nm64ucG5nXCIsLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgICAgdXJsczogW1wiL2ltYWdlcy/orr7mlr3lvIDmlL7moI/nm64ucG5nXCJdLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgICAgIH0pICovXHJcbiAgfVxyXG59KSJdfQ==