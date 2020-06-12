"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file1 = require("./data");
var file2 = require("./data2");
Page({
    data: {
        showLoadingStatus: false
    },
    onLoad: function () {
        console.log('onLoad');
        var that = this;
        that.setData({
            videos: file1.videos
        });
        file2.getFile();
    },
    onReady: function () {
        console.log('onready');
    },
    onShow: function () {
        console.log('onshow');
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        console.log('下拉刷新');
        file1.videos.forEach(function (v) {
            v.getSrc();
            console.log(v.src);
        });
        this.setData({
            videos: file1.videos
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhCQUFpQztBQUNqQywrQkFBaUM7QUFFakMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBR0osaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUtELE1BQU07UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXJCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFLRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBS0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25CLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyIGV4dGVybmFsRGF0YSA9IHJlcXVpcmUoXCJkYXRhLmpzXCIpO1xyXG5pbXBvcnQgZmlsZTEgPSByZXF1aXJlKFwiLi9kYXRhXCIpO1xyXG5pbXBvcnQgZmlsZTIgPSByZXF1aXJlKCcuL2RhdGEyJylcclxuLy9pbXBvcnQgZmlsZTIgPSByZXF1aXJlKFwiLi92aWRlb1VSTFwiKTtcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIC8vdmlkZW9zOiBmaWxlMS52aWRlb3MsXHJcbiAgICAvLyB2aWRlb3MwMjogZmlsZTEudmlkZW9zLFxyXG4gICAgc2hvd0xvYWRpbmdTdGF0dXM6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcclxuICAgIC8vdGhpcy5nZXRWaWRlb3NVUkwoKTtcclxuICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgdmlkZW9zOiBmaWxlMS52aWRlb3NcclxuICAgIH0pO1xyXG4gICAgZmlsZTIuZ2V0RmlsZSgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbnJlYWR5JylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbnNob3cnKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZXIpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCfkuIvmi4nliLfmlrAnKVxyXG4gICAgZmlsZTEudmlkZW9zLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgdi5nZXRTcmMoKTtcclxuICAgICAgY29uc29sZS5sb2codi5zcmMpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmlkZW9zOiBmaWxlMS52aWRlb3NcclxuICAgIH0pXHJcbiAgfVxyXG59KSJdfQ==