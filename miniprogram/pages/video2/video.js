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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFpRDtBQUNqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQWdCLElBQUksS0FBSyxFQUFFO0tBQ2xDO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBVyxpRkFBaUYsQ0FBQztRQUNqSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsS0FBSyxFQUFFLENBQUM7UUFHUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLEtBQWlCOztZQUNoRCxJQUFJLENBQUMsR0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDekMsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDOUIsS0FBSyxDQUFDLE9BQU87Z0JBQ1gsR0FBQyxHQUFHLElBQUcsS0FBSztvQkFDWixDQUFBO1FBQ0osQ0FBQyxDQUFBO0lBRUgsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBVWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9uZXRWaWRlby5qc1wiKTtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdmlkZW9zOiA8dXRpbC5WaWRlb1tdPm5ldyBBcnJheSgpLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHVybFZpZGVvS2VQdVBpYW46IHN0cmluZyA9ICdodHRwczovL2EtMTI1NjEzNjQ5My5jb3MuYXAtbmFuamluZy5teXFjbG91ZC5jb20vZnloYnNzL2RhdGEvdmlkZW9LZVB1UGlhbi5qc29uJzsvL+enkeaZrueJh2pzb27kv6Hmga/lnLDlnYBcclxuICAgIGxldCB2aWRlbyA9IHV0aWwuZ2V0VmlkZW8odXJsVmlkZW9LZVB1UGlhbik7XHJcbiAgICB2aWRlbygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5ZCv5Yqo6KeG6aKR5re35ZCI5o6l5Y+j55qE5Z+656GA5Ye95pWw77yM572R57uc6K+75Y+W5ZCE6KeG6aKR5L+h5oGv77yM5pyJ572R57uc6K+35rGC5bu26L+fXHJcblxyXG4gICAgLy/lrprkuYnop4bpopHmt7flkIjnu5PlkIjnmoTlm57osIPlh73mlbDvvIxcclxuICAgIGxldCB0aGlzcyA9IHRoaXM7XHJcbiAgICB2aWRlby52YWx1ZXNDYWxsYmFjayA9IGZ1bmN0aW9uICh2aWRlbzogdXRpbC5WaWRlbykgeyAgLy/lrprkuYnlrp7njrDlm57osIPnmoTku6PnoIHvvIznlKjkuo7nvZHnu5zmlbDmja7or7fmsYLlkI7lm57osIMgICAgIFxyXG4gICAgICBsZXQgaTogTnVtYmVyID0gdGhpc3MuZGF0YS52aWRlb3MubGVuZ3RoO1xyXG4gICAgICBsZXQgdG1wID0gJ3ZpZGVvc1snICsgaSArICddJztcclxuICAgICAgdGhpc3Muc2V0RGF0YSh7XHJcbiAgICAgICAgW3RtcF06IHZpZGVvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKqOaAgeWinuWKoOaVsOe7hOWFg+e0oFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdvbnJlYWR5JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29uc2hvdycpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuZGF0YS50aW1lcilcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygn5LiL5ouJ5Yi35pawJylcclxuXHJcbiAgICAvKiAgZGF0YUZyb21OZXQudmlkZW9zLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgIHYuZ2V0U3JjKCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh2LnNyYylcclxuICAgICB9KVxyXG4gICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICB2aWRlb3M6IGRhdGFGcm9tTmV0LnZpZGVvc1xyXG4gICAgIH0pICovXHJcbiAgfVxyXG59KSJdfQ==