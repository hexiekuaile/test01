export function getFile() {
    wx.request({
        url: 'https://docs.qq.com/doc/DQ0NteklOWHVQam1T',
        responseType: 'text',
        success(res) {
            let str: string = res.data as string;
           console.log(str)
        },
        fail(res) {
            console.log(res.errMsg)
        }
    });
}
