/*
 * @Author: yanwei
 * @Date: 2020-07-27 10:26:58
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-18 15:22:43
 * @Description : 
 */
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
