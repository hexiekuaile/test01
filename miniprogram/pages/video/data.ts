export class Video {
    id: number;
    vid: string;
    src: string = '';
    title: string;
    constructor(id: number, vid: string, title: string) {
        console.log(999)
        this.id = id;
        this.vid = vid;
        this.title = title;
        this.getSrc();
    }
    getSrc() {
        var that = this
        wx.request({
            url: 'https://vv.video.qq.com/getinfo',
            data: {
                vids: this.vid,
                platform: 101001,
                charge: 0,
                otype: 'json'
            },
            header: {
                'content-type': 'application/json;charset=UTF-8' // 默认值
            },
            method: 'GET',
            dataType: 'json',
            success: function (res) {
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
                console.log(that.id + ' ' + that.title + ' ' + src)
            }
        });
    }

}

export let videos: Video[] = [
    new Video(1, 'x0961yzsbpk', '生态环境部宣传片'),
    new Video(2, 'z0961nhl5vi', '环境监测设施'),
    new Video(3, 'f0979palcaj', '城市污水处理设施'),
    new Video(4, 'u096134l8rp', '生活垃圾处理设施'),
    new Video(5, 'x09614l32ux', '废弃电器电子产品处理设施')
];
//module.exports = { videos: videos };
//export = videos;