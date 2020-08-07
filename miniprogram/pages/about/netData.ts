
export function about(url: string) {                //接口实现，仅实现了基础方法代码，未实现回调方法，
  wx.request({                                     //网络请求取数据
    url: url,                                       //简单地图标记点json文件的网络地址
    success(res) {
      // let map: { [key: string]: string } = {};
      let map: { [key: string]: string | string[] } = res.data as { [key: string]: string | string[] }; //typescript自动装配，但没有启动视频类的构建器

      let keys = <string[]>Object.keys(map);//获取map键     

      /* for (let k of keys) {
        console.log( map[k] instanceof Array)
      } */

      valueCallback(map, keys);
    },
    fail(res) {
      console.log('视频请求网络连接错误： ' + res.errMsg)
    }
  });

};
export let valueCallback: (map: { [key: string]: string | string[] }, keys: string[]) => void;

//export let v=about('https://a-1256136493.cos.ap-nanjing.myqcloud.com/fyhbss/data/about.json');
