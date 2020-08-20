/*
 * @Author: yanwei
 * @Date: 2020-08-12 16:27:16
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-13 17:11:58
 * @Description : 判断页面左右滑动的方法
 */
export const slide = (
  endX: number,
  endY: number,
  startX: number,
  startY: number,
  currentURL: string
) => {
  let url!: string; //即将跳转的tab页面地址

  if (Math.abs(endX - startX) < Math.abs(endY - startY))
    //保证 横向滑动 > 纵向滑动
    return;

  if (endX - startX > 50) {    //右滑
    if (currentURL === "/pages/video1/video") url = "/pages/video2/video";
    else if (currentURL === "/pages/video2/video") url = "/pages/about/about";
    else if (currentURL === "/pages/about/about") url = "/pages/ditu/ditu";
  } else if (endX - startX < -50) {    //左滑
    if (currentURL === "/pages/video1/video") url = "/pages/ditu/ditu";
    else if (currentURL === "/pages/video2/video") url = "/pages/video1/video";
    else if (currentURL === "/pages/about/about") url = "/pages/video2/video";
  }
  wx.switchTab({ url: url });
};
