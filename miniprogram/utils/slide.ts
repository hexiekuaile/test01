/*
 * @Author: yanwei
 * @Date: 2020-08-12 16:27:16
 * @LastEditors: yanwei
 * @LastEditTime: 2020-09-20 15:59:51
 * @Description : 
 */

//import { map } from "core-js/fn/array";

// 取得手势滑动方式
export function slideWay(eventTouchStart: any, eventTouchEnd: any): string {
  let startX: number = eventTouchStart.changedTouches[0].clientX;
  let startY: number = eventTouchStart.changedTouches[0].clientY;
  let endX: number = eventTouchEnd.changedTouches[0].clientX;
  let endY: number = eventTouchEnd.changedTouches[0].clientY;
  if (startX == 0 && endX == 0 && startY == 0 && endY == 0) {
    startX = eventTouchStart.changedTouches[0].pageX;
    startY = eventTouchStart.changedTouches[0].pageY;
    endX = eventTouchEnd.changedTouches[0].pageX;
    endY = eventTouchEnd.changedTouches[0].pageY;
  }

  let way!: string; //滑动方式
  //console.log(startX + ' ' + endX + ' ' + startY + ' ' + endY)
  let lenx = endX - startX;
  let leny = endY - startY;

  if (Math.abs(lenx) > 50 && Math.abs(leny) < 50) {
    if (lenx > 0) way = "右滑"
    else if (lenx < 0) way = "左滑"
  }
  else if (Math.abs(leny) > 50 && Math.abs(lenx) < 50) {
    if (leny > 0) way = "下滑"
    else if (leny < 0) way = "上滑"
  }
  if (!way) return way;

  if ((eventTouchEnd.timeStamp - eventTouchStart.timeStamp) < 200) way = way + ' 快速';

  //console.log(eventTouchStart.timeStamp + ' ' + eventTouchEnd.timeStamp + ' ' + (eventTouchEnd.timeStamp - eventTouchStart.timeStamp));

  return way;
};

let mapUrlKeys: string[] = ["ditu", "videokepu", "about"];//页面链接关键词

let urls: string[] = ["/pages/ditu/ditu", "/pages/videokepu/videokepu", "/pages/about/about"]//页面链接

// 根据手势左右滑动跳转到邻近页面
export function jumpNav(currentUrlKey: string, slideWay: string): void {
  let url!: string; //即将跳转的tab页面地址
  let i = -1;
  let len = mapUrlKeys.length;

  mapUrlKeys.every((val, idx) => {
    if (val == currentUrlKey) {
      i = idx
      return false;//退出循环
    }
    else return true;
  });
  if (i == -1) return;
  if (slideWay.indexOf("右滑") > -1) {    //右滑
    i = (i + 1) % len
  } else if (slideWay.indexOf("左滑") > -1) {    //左滑
    i = (i - 1) % len
    if (i < 0) i = len + i;
  }
  url = urls[i];
  if (url)
    wx.switchTab({ url: url });
};
//根据手势左右滑动跳转到邻近页面
export function jumpNav2(currentURL: string, eventTouchStart: any, eventTouchEnd: any): void {
  let way = slideWay(eventTouchStart, eventTouchEnd);
  jumpNav(currentURL, way);
}