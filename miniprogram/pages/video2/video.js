"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../../utils/netVideo.js");
Page({
    data: {
        videos: new Array(),
    },
    onLoad: function () {
        var urlVideoKePuPian = 'https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoKePuPian.json';
        var video = util.getVideo(urlVideoKePuPian);
        video();
        var thiss = this;
        video.valuesCallback = function (video) {
            var _a;
            var i = thiss.data.videos.length;
            var tmp = 'videos[' + i + ']';
            thiss.setData((_a = {},
                _a[tmp] = video,
                _a));
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
    onPullDownRefresh: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFpRDtBQUNqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQWdCLElBQUksS0FBSyxFQUFFO0tBQ2xDO0lBS0QsTUFBTTtRQUNKLElBQUksZ0JBQWdCLEdBQVcsaUZBQWlGLENBQUM7UUFDakgsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLEtBQUssRUFBRSxDQUFDO1FBR1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEdBQUcsVUFBVSxLQUFpQjs7WUFDaEQsSUFBSSxDQUFDLEdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3pDLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxPQUFPO2dCQUNYLEdBQUMsR0FBRyxJQUFHLEtBQUs7b0JBQ1osQ0FBQTtRQUNKLENBQUMsQ0FBQTtJQUVILENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQVVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWwgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvbmV0VmlkZW8uanNcIik7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHZpZGVvczogPHV0aWwuVmlkZW9bXT5uZXcgQXJyYXkoKSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB1cmxWaWRlb0tlUHVQaWFuOiBzdHJpbmcgPSAnaHR0cHM6Ly9hLTEyNTYxMzY0OTMuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2Z5aGJzcy9kYXRhL3ZpZGVvS2VQdVBpYW4uanNvbic7Ly/np5Hmma7niYdqc29u5L+h5oGv5Zyw5Z2AXHJcbiAgICBsZXQgdmlkZW8gPSB1dGlsLmdldFZpZGVvKHVybFZpZGVvS2VQdVBpYW4pO1xyXG4gICAgdmlkZW8oKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WQr+WKqOinhumikea3t+WQiOaOpeWPo+eahOWfuuehgOWHveaVsO+8jOe9kee7nOivu+WPluWQhOinhumikeS/oeaBr++8jOaciee9kee7nOivt+axguW7tui/n1xyXG5cclxuICAgIC8v5a6a5LmJ6KeG6aKR5re35ZCI57uT5ZCI55qE5Zue6LCD5Ye95pWw77yMXHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgdmlkZW8udmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmlkZW86IHV0aWwuVmlkZW8pIHsgIC8v5a6a5LmJ5a6e546w5Zue6LCD55qE5Luj56CB77yM55So5LqO572R57uc5pWw5o2u6K+35rGC5ZCO5Zue6LCDICAgICBcclxuICAgICAgbGV0IGk6IE51bWJlciA9IHRoaXNzLmRhdGEudmlkZW9zLmxlbmd0aDtcclxuICAgICAgbGV0IHRtcCA9ICd2aWRlb3NbJyArIGkgKyAnXSc7XHJcbiAgICAgIHRoaXNzLnNldERhdGEoe1xyXG4gICAgICAgIFt0bXBdOiB2aWRlbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liqjmgIHlop7liqDmlbDnu4TlhYPntKBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25yZWFkeScpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdvbnNob3cnKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZXIpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsCcpXHJcblxyXG4gICAgLyogIGRhdGFGcm9tTmV0LnZpZGVvcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICB2LmdldFNyYygpO1xyXG4gICAgICAgY29uc29sZS5sb2codi5zcmMpXHJcbiAgICAgfSlcclxuICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgdmlkZW9zOiBkYXRhRnJvbU5ldC52aWRlb3NcclxuICAgICB9KSAqL1xyXG4gIH1cclxufSkiXX0=