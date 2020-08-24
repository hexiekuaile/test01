/*
 * @Author: yanwei
 * @Date: 2020-07-27 11:23:48
 * @LastEditors: yanwei
 * @LastEditTime: 2020-08-21 18:00:46
 * @Description : 
 */
export interface IAbout {             //混合类型的接口
  (): void;                          //接口的基础方法
  valuesCallback?: (map: { [key: string]: string | string[] }, keys: string[]) => void;      //可选的接口的回调方法，
};

export function getAbout(ABOUT_JSON_PATH: string): IAbout {    //接口实现，仅实现了基础方法代码，未实现回调方法，
  let func = <IAbout>function () {
    wx.request({                                     //网络请求取数据
      url: ABOUT_JSON_PATH,              
      success(res) {
        // let map: { [key: string]: string } = {};
        let map: { [key: string]: string | string[] } = res.data as { [key: string]: string | string[] }; //typescript自动装配，但没有启动视频类的构建器
  
        let keys = <string[]>Object.keys(map);//获取map键     
  
        /* for (let k of keys) {
          console.log( map[k] instanceof Array)
        } */
  
        func.valuesCallback!(map, keys);
      },
      fail(res) {
        console.log('about.json网络连接错误： ' + res.errMsg)
      },
      complete() { }
    });
  
  };
  return func;
};