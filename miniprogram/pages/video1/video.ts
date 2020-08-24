/*
 * @Author: yanwei
 * @Date: 2020-04-24 10:06:35
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-24 17:04:56
 * @Description : 宣传片页面代码
 */

// import util = require("../../utils/netVideo");
// import slide = require("../../utils/slide");//判断左右滑动代码
Page({
  data: {
    URL_VIDEO_JSON: "https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/videoXuanChuanPian.json",//宣传片json信息地址
    videos: <Video[]>[],//Video对象数组
    ivideo: <IVideo>{},//IVideo类型空对象
    numCallback: 0,//回调次数，用于表示全部转换src完成后，隐藏loading动画
    startX: 0,//通过xy坐标值判断左右滑动
    startY: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.showLoading();
    this.data.ivideo = getVideo(this.data.URL_VIDEO_JSON);//传递参数，获得IVideo接口对象。也即初始化ivideo对象

    let thiss = this;
    if (!thiss.data.ivideo.valuesCallback)//如果之前未定义，则定义IVideo接口的回调函数，
      thiss.data.ivideo.valuesCallback = function (video: Video) {  //定义实现回调的代码，参数是转化vid为src的video对象   
        thiss.data.numCallback = ++thiss.data.numCallback;//记录回调次数，即记录src转换完成的对象数
        let len: Number = thiss.data.videos.length;
        let tmp = 'videos[' + len + ']';  //注意：不是i-1，是i，是在数组尾部增加一个元素
        thiss.setData({
          [tmp]: video   //动态增加数组中的video对象，此video对象src已经完成转换。前端页面实时增加一个视频
        })

        if (thiss.data.numCallback == thiss.data.ivideo.values.length) {//如果对象src全部转换完成
          thiss.hideLoading();
        }
      }

    thiss.data.ivideo(); //启动IVideo接口对象的基础函数，网络读取各视频信息，有网络请求延迟
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      videos: <Video[]>[],    //初始化video对象为空
      numCallback: 0//初始化回调次数为0
    })
    this.onLoad();//再次拉取新数据
  },
  /**
     * 页面相关事件处理函数--监听用户滑动开始
     */
  touchStart(e: any) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
    })
  },
  /**
   * 页面相关事件处理函数--监听用户滑动结束
   */
  touchEnd(e: any) {
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    slide(endX, endY, this.data.startX, this.data.startY,"/pages/video1/video"); 
  },
  /**
* 显示加载动画
*/
  showLoading() {
    wx.showNavigationBarLoading();//在当前页面显示导航条加载动画    
    wx.showLoading({//显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      title: '刷新中...',
    })
  },
  /**
  * 隐藏加载动画
  */
  hideLoading() {
    wx.hideLoading();//隐藏loading 提示框         
    wx.hideNavigationBarLoading(); //隐藏导航条加载动画         
    wx.stopPullDownRefresh(); //停止下拉刷
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // clearInterval(this.data.timer)
  },

});

/////////////////////// 待模块化代码 /////////////////////////////


export class Video {                                          //腾讯视频类
  vid: string;                                               //腾讯视频vid
  type: string;                                             //类型
  name: string;                                            //名称
  src?: string;                                              //腾讯视频实际网络地址  
  valueCallback?: (value: Video) => void;              //可选的回调方法，                                                                                  
  constructor(vid: string, type: string, name: string, valueCallback?: (value: Video) => void) {
    this.vid = vid;
    this.type = type;
    this.name = name;
    this.valueCallback = valueCallback;
    this.convertVidToUrl();//在初始化对象时，联网转化vid
  }
  convertVidToUrl() {                                    //将vid转换为URL,有网络请求延迟
    let that = this
    wx.request({
      url: 'https://vv.video.qq.com/getinfo',
      data: {
        vids: that.vid,
        platform: 101001,
        charge: 0,
        otype: 'json'
      },
      header: {
        'content-type': 'application/json;charset=UTF-8' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      success(res) {
        let str: string = res.data as string;
        //用正则表达式
        let url = str.match(/(?<=\[{"url":").*?(?=","vt")/);
        let urll = url ? url[0] : '';
        let fn = str.match(/(?<=,"fn":").*?(?=","fs")/);
        let fnn = fn ? fn[0] : '';
        let fvkey = str.match(/(?<=,"fvkey":").*?(?=","head")/);
        let fvkeyy = fvkey ? fvkey : '';
        //规律url + fn + '?vkey=' + fvkey 
        let src = urll + fnn + "?vkey=" + fvkeyy;
        that.src = src;
        //console.log(src)
        that.valueCallback!(that);//！表示已经初始化，回调存在。传递本video对象
      },
      fail(res) {
        console.log(that.name + ' 转换视频vid时错误：' + res.errMsg)
      }
    });
  }
};

export interface IVideo {                                //混合类型的接口，视频接口
  (): void;                                             //接口的基础方法
  values: Video[];                                      //视频数组，由基础方法从网络请求数据
  valuesCallback?: (video: Video) => void;           //可选的接口的回调方法，
};

export function getVideo(URLVideoJSON: string): IVideo {    //接口实现，仅实现了基础方法代码，未实现回调方法，
  let func = <IVideo>function () {
    wx.request({                                     //网络请求取数据
      url: URLVideoJSON,                                       //简单地图标记点json文件的网络地址
      success(res) {
        let vs = <Video[]>res.data;                   //typescript自动装配，其他信息都存在，仅src为空，但不启动视频类的构建器，需要人工new对象

        func.values = new Array(vs.length);           //生成固定长度视频对象   

        for (let i = 0; i < vs.length; i++)
          func.values[i] = new Video(vs[i].vid, vs[i].type, vs[i].name, func.valuesCallback);//人工new对象，启动构建器，网络拉取数据转化vid为src
      },
      fail(res) {
        console.log('视频请求网络连接错误： ' + res.errMsg)
      }
    });
  };
  return func;
};


export function slide  (
  endX: number,
  endY: number,
  startX: number,
  startY: number,
  currentURL: string
) {
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
