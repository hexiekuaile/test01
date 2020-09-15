"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = void 0;
;
function getAbout(ABOUT_JSON_PATH) {
    var func = function () {
        wx.request({
            url: ABOUT_JSON_PATH,
            success: function (res) {
                var map = res.data;
                var keys = Object.keys(map);
                func.valuesCallback(map, keys);
            },
            fail: function (res) {
                console.log('about.json网络连接错误： ' + res.errMsg);
            },
            complete: function () { }
        });
    };
    return func;
}
exports.getAbout = getAbout;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0ZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldGRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBVUMsQ0FBQztBQUVGLFNBQWdCLFFBQVEsQ0FBQyxlQUF1QjtJQUM5QyxJQUFJLElBQUksR0FBVztRQUNqQixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGVBQWU7WUFDcEIsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFFVCxJQUFJLEdBQUcsR0FBeUMsR0FBRyxDQUFDLElBQTRDLENBQUM7Z0JBRWpHLElBQUksSUFBSSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBTXRDLElBQUksQ0FBQyxjQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNoRCxDQUFDO1lBQ0QsUUFBUSxnQkFBSyxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBeEJELDRCQXdCQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiB5YW53ZWlcclxuICogQERhdGU6IDIwMjAtMDctMjcgMTE6MjM6NDhcclxuICogQExhc3RFZGl0b3JzOiB5YW53ZWlcclxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOC0yMSAxODowMDo0NlxyXG4gKiBARGVzY3JpcHRpb24gOiBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFib3V0IHsgICAgICAgICAgICAgLy/mt7flkIjnsbvlnovnmoTmjqXlj6NcclxuICAoKTogdm9pZDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o6l5Y+j55qE5Z+656GA5pa55rOVXHJcbiAgdmFsdWVzQ2FsbGJhY2s/OiAobWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0sIGtleXM6IHN0cmluZ1tdKSA9PiB2b2lkOyAgICAgIC8v5Y+v6YCJ55qE5o6l5Y+j55qE5Zue6LCD5pa55rOV77yMXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJvdXQoQUJPVVRfSlNPTl9QQVRIOiBzdHJpbmcpOiBJQWJvdXQgeyAgICAvL+aOpeWPo+WunueOsO+8jOS7heWunueOsOS6huWfuuehgOaWueazleS7o+egge+8jOacquWunueOsOWbnuiwg+aWueazle+8jFxyXG4gIGxldCBmdW5jID0gPElBYm91dD5mdW5jdGlvbiAoKSB7XHJcbiAgICB3eC5yZXF1ZXN0KHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nvZHnu5zor7fmsYLlj5bmlbDmja5cclxuICAgICAgdXJsOiBBQk9VVF9KU09OX1BBVEgsICAgICAgICAgICAgICBcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAvLyBsZXQgbWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgbGV0IG1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0gcmVzLmRhdGEgYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9OyAvL3R5cGVzY3JpcHToh6rliqjoo4XphY3vvIzkvYbmsqHmnInlkK/liqjop4bpopHnsbvnmoTmnoTlu7rlmahcclxuICBcclxuICAgICAgICBsZXQga2V5cyA9IDxzdHJpbmdbXT5PYmplY3Qua2V5cyhtYXApOy8v6I635Y+WbWFw6ZSuICAgICBcclxuICBcclxuICAgICAgICAvKiBmb3IgKGxldCBrIG9mIGtleXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCBtYXBba10gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICB9ICovXHJcbiAgXHJcbiAgICAgICAgZnVuYy52YWx1ZXNDYWxsYmFjayEobWFwLCBrZXlzKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWJvdXQuanNvbue9kee7nOi/nuaOpemUmeivr++8miAnICsgcmVzLmVyck1zZylcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGUoKSB7IH1cclxuICAgIH0pO1xyXG4gIFxyXG4gIH07XHJcbiAgcmV0dXJuIGZ1bmM7XHJcbn07Il19