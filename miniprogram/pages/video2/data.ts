export class Video {
    id: number;
    vid: string;
    src: string = '';
    title: string;
    constructor(id: number, vid: string, title: string) {
        this.id = id;
        this.vid = vid;
        this.title = title;
        this.getSrc();
    }
    getSrc() {
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
                // console.log(that.id + ' ' + that.title + ' ' + src)
            },
            fail(res) {
                console.log(res.errMsg)
            }
        });
    }

}

export let videos: Video[] = [
    new Video(1, 'n0826ja0xdr', '静静-危废处置有妙招'),
    new Video(2, 'o0825mp79n0', '静静-电子废弃物'),
    new Video(4, 'f3002ulvouw', '静静：水净化之旅'),
    new Video(3, 'd0516l19tbd', '渣渣的一天：垃圾焚烧发电厂'),
];
