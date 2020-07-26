"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataFromNet = require("./dataFromNet");
Page({
    data: {
        videos: new Array(),
    },
    onLoad: function () {
        dataFromNet.video();
        var thiss = this;
        dataFromNet.video.valuesCallback = function (video) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5QyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQXVCLElBQUksS0FBSyxFQUFFO0tBQ3pDO0lBS0QsTUFBTTtRQUNKLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUdwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsVUFBVSxLQUF3Qjs7WUFDbkUsSUFBSSxDQUFDLEdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3pDLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxPQUFPO2dCQUNYLEdBQUMsR0FBRyxJQUFHLEtBQUs7b0JBQ1osQ0FBQTtRQUNKLENBQUMsQ0FBQTtJQUVILENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQVVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFGcm9tTmV0ID0gcmVxdWlyZShcIi4vZGF0YUZyb21OZXRcIik7XHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICB2aWRlb3M6IDxkYXRhRnJvbU5ldC5WaWRlb1tdPm5ldyBBcnJheSgpLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgZGF0YUZyb21OZXQudmlkZW8oKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WQr+WKqOinhumikea3t+WQiOaOpeWPo+eahOWfuuehgOWHveaVsO+8jOe9kee7nOivu+WPluWQhOinhumikeS/oeaBr++8jOaciee9kee7nOivt+axguW7tui/n1xyXG5cclxuICAgIC8v5a6a5LmJ6KeG6aKR5re35ZCI57uT5ZCI55qE5Zue6LCD5Ye95pWw77yMXHJcbiAgICBsZXQgdGhpc3MgPSB0aGlzO1xyXG4gICAgZGF0YUZyb21OZXQudmlkZW8udmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmlkZW86IGRhdGFGcm9tTmV0LlZpZGVvKSB7ICAvL+WumuS5ieWunueOsOWbnuiwg+eahOS7o+egge+8jOeUqOS6jue9kee7nOaVsOaNruivt+axguWQjuWbnuiwgyAgICAgXHJcbiAgICAgIGxldCBpOiBOdW1iZXIgPSB0aGlzcy5kYXRhLnZpZGVvcy5sZW5ndGg7XHJcbiAgICAgIGxldCB0bXAgPSAndmlkZW9zWycgKyBpICsgJ10nO1xyXG4gICAgICB0aGlzcy5zZXREYXRhKHtcclxuICAgICAgICBbdG1wXTogdmlkZW8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqo5oCB5aKe5Yqg5pWw57uE5YWD57SgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnb25zaG93JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVyKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCfkuIvmi4nliLfmlrAnKVxyXG5cclxuICAgIC8qICBkYXRhRnJvbU5ldC52aWRlb3MuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgdi5nZXRTcmMoKTtcclxuICAgICAgIGNvbnNvbGUubG9nKHYuc3JjKVxyXG4gICAgIH0pXHJcbiAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgIHZpZGVvczogZGF0YUZyb21OZXQudmlkZW9zXHJcbiAgICAgfSkgKi9cclxuICB9XHJcbn0pIl19