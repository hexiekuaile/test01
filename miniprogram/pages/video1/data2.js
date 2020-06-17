"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFile() {
    wx.request({
        url: 'https://docs.qq.com/doc/DQ0NteklOWHVQam1T',
        responseType: 'text',
        success: function (res) {
            var str = res.data;
            console.log(str);
        },
        fail: function (res) {
            console.log(res.errMsg);
        }
    });
}
exports.getFile = getFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLE9BQU87SUFDbkIsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNQLEdBQUcsRUFBRSwyQ0FBMkM7UUFDaEQsWUFBWSxFQUFFLE1BQU07UUFDcEIsT0FBTyxZQUFDLEdBQUc7WUFDUCxJQUFJLEdBQUcsR0FBVyxHQUFHLENBQUMsSUFBYyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsQ0FBQztRQUNELElBQUksWUFBQyxHQUFHO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0IsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFaRCwwQkFZQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlKCkge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9kb2NzLnFxLmNvbS9kb2MvRFEwTnRla2xPV0hWUWFtMVQnLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHI6IHN0cmluZyA9IHJlcy5kYXRhIGFzIHN0cmluZztcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdfQ==