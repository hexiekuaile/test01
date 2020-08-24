"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slide = function (endX, endY, startX, startY, currentURL) {
    var url;
    if (Math.abs(endX - startX) < Math.abs(endY - startY))
        return;
    if (endX - startX > 50) {
        if (currentURL === "/pages/video1/video")
            url = "/pages/video2/video";
        else if (currentURL === "/pages/video2/video")
            url = "/pages/about/about";
        else if (currentURL === "/pages/about/about")
            url = "/pages/ditu/ditu";
    }
    else if (endX - startX < -50) {
        if (currentURL === "/pages/video1/video")
            url = "/pages/ditu/ditu";
        else if (currentURL === "/pages/video2/video")
            url = "/pages/video1/video";
        else if (currentURL === "/pages/about/about")
            url = "/pages/video2/video";
    }
    wx.switchTab({ url: url });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9hLFFBQUEsS0FBSyxHQUFHLFVBQ25CLElBQVksRUFDWixJQUFZLEVBQ1osTUFBYyxFQUNkLE1BQWMsRUFDZCxVQUFrQjtJQUVsQixJQUFJLEdBQVksQ0FBQztJQUVqQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUVuRCxPQUFPO0lBRVQsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUN0QixJQUFJLFVBQVUsS0FBSyxxQkFBcUI7WUFBRSxHQUFHLEdBQUcscUJBQXFCLENBQUM7YUFDakUsSUFBSSxVQUFVLEtBQUsscUJBQXFCO1lBQUUsR0FBRyxHQUFHLG9CQUFvQixDQUFDO2FBQ3JFLElBQUksVUFBVSxLQUFLLG9CQUFvQjtZQUFFLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztLQUN4RTtTQUFNLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM5QixJQUFJLFVBQVUsS0FBSyxxQkFBcUI7WUFBRSxHQUFHLEdBQUcsa0JBQWtCLENBQUM7YUFDOUQsSUFBSSxVQUFVLEtBQUsscUJBQXFCO1lBQUUsR0FBRyxHQUFHLHFCQUFxQixDQUFDO2FBQ3RFLElBQUksVUFBVSxLQUFLLG9CQUFvQjtZQUFFLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztLQUMzRTtJQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiB5YW53ZWlcclxuICogQERhdGU6IDIwMjAtMDgtMTIgMTY6Mjc6MTZcclxuICogQExhc3RFZGl0b3JzOiB5YW53ZWlcclxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOC0yMCAxNjowODowMVxyXG4gKiBARGVzY3JpcHRpb24gOiDliKTmlq3pobXpnaLlt6blj7Pmu5HliqjnmoTmlrnms5VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzbGlkZSA9IChcclxuICBlbmRYOiBudW1iZXIsXHJcbiAgZW5kWTogbnVtYmVyLFxyXG4gIHN0YXJ0WDogbnVtYmVyLFxyXG4gIHN0YXJ0WTogbnVtYmVyLFxyXG4gIGN1cnJlbnRVUkw6IHN0cmluZ1xyXG4pID0+IHtcclxuICBsZXQgdXJsITogc3RyaW5nOyAvL+WNs+Wwhui3s+i9rOeahHRhYumhtemdouWcsOWdgFxyXG5cclxuICBpZiAoTWF0aC5hYnMoZW5kWCAtIHN0YXJ0WCkgPCBNYXRoLmFicyhlbmRZIC0gc3RhcnRZKSlcclxuICAgIC8v5L+d6K+BIOaoquWQkea7keWKqCA+IOe6teWQkea7keWKqFxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBpZiAoZW5kWCAtIHN0YXJ0WCA+IDUwKSB7ICAgIC8v5Y+z5ruRXHJcbiAgICBpZiAoY3VycmVudFVSTCA9PT0gXCIvcGFnZXMvdmlkZW8xL3ZpZGVvXCIpIHVybCA9IFwiL3BhZ2VzL3ZpZGVvMi92aWRlb1wiO1xyXG4gICAgZWxzZSBpZiAoY3VycmVudFVSTCA9PT0gXCIvcGFnZXMvdmlkZW8yL3ZpZGVvXCIpIHVybCA9IFwiL3BhZ2VzL2Fib3V0L2Fib3V0XCI7XHJcbiAgICBlbHNlIGlmIChjdXJyZW50VVJMID09PSBcIi9wYWdlcy9hYm91dC9hYm91dFwiKSB1cmwgPSBcIi9wYWdlcy9kaXR1L2RpdHVcIjtcclxuICB9IGVsc2UgaWYgKGVuZFggLSBzdGFydFggPCAtNTApIHsgICAgLy/lt6bmu5FcclxuICAgIGlmIChjdXJyZW50VVJMID09PSBcIi9wYWdlcy92aWRlbzEvdmlkZW9cIikgdXJsID0gXCIvcGFnZXMvZGl0dS9kaXR1XCI7XHJcbiAgICBlbHNlIGlmIChjdXJyZW50VVJMID09PSBcIi9wYWdlcy92aWRlbzIvdmlkZW9cIikgdXJsID0gXCIvcGFnZXMvdmlkZW8xL3ZpZGVvXCI7XHJcbiAgICBlbHNlIGlmIChjdXJyZW50VVJMID09PSBcIi9wYWdlcy9hYm91dC9hYm91dFwiKSB1cmwgPSBcIi9wYWdlcy92aWRlbzIvdmlkZW9cIjtcclxuICB9XHJcbiAgd3guc3dpdGNoVGFiKHsgdXJsOiB1cmwgfSk7XHJcbn07XHJcbiJdfQ==