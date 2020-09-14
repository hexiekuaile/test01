/*
 * @Author: yanwei
 * @Date: 2020-07-27 10:26:58
 * @LastEditors: yanwei
 * @LastEditTime: 2020-09-01 16:22:43
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
        //str例如：QZOutputJson={"dltype":1,"exem":0,"fl":{"cnt":2,"fi":[{"id":100701,"name":"msd","lmt":0,"sb":1,"cname":"标清;(270P)","br":29,"profile":2,"drm":0,"video":1,"audio":1,"fs":6361681,"super":0,"hdr10enh":0,"sname":"标清","resolution":"270P","recommend":0,"sl":1},{"id":2,"name":"mp4","lmt":0,"sb":1,"cname":"高清;(480P)","br":34,"profile":1,"drm":0,"video":1,"audio":1,"fs":13387594,"super":0,"hdr10enh":0,"sname":"高清","resolution":"480P","recommend":0,"sl":0}]},"hs":0,"ip":"60.172.0.131","ls":0,"preview":216,"s":"o","sfl":{"cnt":0},"tstid":23,"testbucket":"0701_b9ed2d6","tm":1598944110,"vl":{"cnt":1,"vi":[{"br":29,"ch":0,"cl":{"fc":0,"keyid":"d0516l19tbd.100701"},"ct":21600,"drm":0,"dsb":0,"fmd5":"3a969a2c8892fa8a31a15ede6ca49162","fn":"d0516l19tbd.m701.mp4","fs":6361681,"fst":5,"fvkey":"3BB495FB1BD78D19DE92E3952F59719713E0196EE0BB29E8A6E26DABB758400C016208E09998D6AEEEDA1E6724B1925CFE4C8727F6DE7999580751BCB3F40E294669C046D06F5BE16A0DA1B48473D2D1F4D038FF479A35C02ABDE36CFC856EC4CF0DE843B80F7AFC6F3CD52817BB42BE","head":0,"hevc":0,"iflag":0,"level":0,"lnk":"d0516l19tbd","logo":1,"mst":8,"pl":null,"share":1,"sp":0,"st":2,"tail":0,"td":"216.04","ti":"《渣渣的一天》垃圾焚烧发电厂科普动画片","tie":0,"type":3,"ul":{"ui":[{"url":"http://ugcdx.qq.com/","vt":179,"dtc":0,"dt":2},{"url":"http://vhot2.qqvideo.tc.qq.com/uwMROfz2r5zCIaQXGdGnC2dfhzk_jigLCkkLvI0zErHWpl3G/","vt":200,"dtc":0,"dt":2},{"url":"http://video.dispatch.tc.qq.com/uwMROfz2r5zCIaQXGdGnCGdfhzlZa5CI6NFRiK3DQbR50oiA/","vt":0,"dtc":0,"dt":2}]},"vh":272,"vid":"d0516l19tbd","videotype":0,"vr":0,"vst":2,"vw":480,"wh":1.7647059,"wl":{"wi":[]},"uptime":1497948530,"fvideo":0,"cached":1,"fvpint":0,"swhdcp":0,"sshot":3,"mshot":0}]}};
        str = str.substring("QZOutputJson=".length, str.length - 1);//去掉字符串开头的"QZOutputJson="和结尾的";"，生成json字符串
        let json = JSON.parse(str);
        let fn = json.vl.vi[0].fn;//用json处理
        let url = json.vl.vi[0].ul.ui[0].url;
        let fvkey = json.vl.vi[0].fvkey

        that.src = url + fn + "?vkey=" + fvkey;

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
