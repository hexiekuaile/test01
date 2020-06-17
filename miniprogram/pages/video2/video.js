"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file1 = require("./data");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhCQUFpQztBQUdqQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFHSixpQkFBaUIsRUFBRSxLQUFLO0tBQ3pCO0lBS0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUNyQixDQUFDLENBQUM7SUFFTCxDQUFDO0lBS0QsT0FBTztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUtELE1BQU07UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhciBleHRlcm5hbERhdGEgPSByZXF1aXJlKFwiZGF0YS5qc1wiKTtcclxuaW1wb3J0IGZpbGUxID0gcmVxdWlyZShcIi4vZGF0YVwiKTtcclxuLy9pbXBvcnQgZmlsZTIgPSByZXF1aXJlKCcuL2RhdGEyJylcclxuLy9pbXBvcnQgZmlsZTIgPSByZXF1aXJlKFwiLi92aWRlb1VSTFwiKTtcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIC8vdmlkZW9zOiBmaWxlMS52aWRlb3MsXHJcbiAgICAvLyB2aWRlb3MwMjogZmlsZTEudmlkZW9zLFxyXG4gICAgc2hvd0xvYWRpbmdTdGF0dXM6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcclxuICAgIC8vdGhpcy5nZXRWaWRlb3NVUkwoKTtcclxuICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgdmlkZW9zOiBmaWxlMS52aWRlb3NcclxuICAgIH0pO1xyXG4gICAvLyBmaWxlMi5nZXRGaWxlKCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG4gICAgY29uc29sZS5sb2coJ29ucmVhZHknKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uc2hvdycpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuZGF0YS50aW1lcilcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsCcpXHJcbiAgICBmaWxlMS52aWRlb3MuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICB2LmdldFNyYygpO1xyXG4gICAgICBjb25zb2xlLmxvZyh2LnNyYylcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2aWRlb3M6IGZpbGUxLnZpZGVvc1xyXG4gICAgfSlcclxuICB9XHJcbn0pIl19