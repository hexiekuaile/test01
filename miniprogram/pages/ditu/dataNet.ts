//用于网络提取数据文件
export class Marker {
  id: number;
  type: string;
  longitude: number;//经度
  latitude: number;//纬度
  name: string;
  address: string;
  tel: string;
  jiedainengli: number;
  scale: number;//缩放级别
  constructor(id: number, type: string, longitude: number, latitude: number, name: string, address: string, tel: string, jiedainengli: number, scale: number = 8) {
    this.id = id;
    this.type = type;
    this.longitude = longitude;
    this.latitude = latitude;
    this.name = name;
    this.address = address;
    this.tel = tel;
    this.jiedainengli = jiedainengli;
    this.scale = scale;
  }
}
export class Markers {
  markers: Marker[] = [];
  constructor() {
    this.getMarkersFromNetFile();
  };
  getMarkersFromNetFile() {
    let that = this
    wx.request({
      url: 'https://wss-1259372845.file.myqcloud.com/gifhbaf/2/sk/2skjgifhbaf?cdn_sign=1592383446-79-0-03f36187ee2e15deb2f4472034a897ba&response-content-disposition=attachment%3B%20filename%3D%22markers.json%22%3B%20filename%2A%3Dutf-8%27%27markers.json',
      success(res) {
        that.markers = (<Marker[]>res.data)
        //console.log('getMarkersFromNetFile ' + that.markers.length)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    });
    //console.log(markers.length)
    //return markers;
  }
}

export let markers = new Markers();

/* export let markers: Marker[] = [
  new Marker(1, '监测', 115.266900, 33.049593, '临泉县环境监测站', '临泉县港口路238号', '0558-6288017', 10),
  new Marker(2, '监测', 115.623710, 33.175151, '太和县环境监测站', '太和县人民北路与建设西路交口南侧', '15156830006', 20),
  new Marker(3, '监测', 115.343471, 33.265740, '界首市环境监测站', '界首市西城街道张庄西路30号附近（界首市颍河省界监测哨）', '0558-4827291', 40),
  new Marker(4, '监测', 115.593541, 32.640021, '阜南县环境监测站', '阜南县城关镇谷河路59号正北方向110米', '13855857699', 30),
  new Marker(5, '监测', 115.580851, 32.590329, '阜南县谷河水监测站（环保宣教基地）', '阜南县苗寺大桥南岸西侧400米', '13866277883', 30),
  new Marker(6, '监测', 115.832517, 32.890714, '阜阳市环境监测站', '阜阳市颍上路254号', '0558-2272162', 30),
] */


/*
var markers = [
  {
    "id": 1,
    "type": "监测",
    "longitude": 115.266900,
    "latitude": 33.049593,
    "name": "临泉县环境监测站",
    "address": "临泉县港口路238号",
    "tel": "0558-6288017",
    "jieDaiNengLi": "10人",
    "scale": 8
  },
  {
    "id": 2,
    "type": "监测",
    "longitude": 115.623710,
    "latitude": 33.175151,
    "name": "太和县环境监测站",
    "address": "太和县人民北路与建设西路交口南侧",
    "tel": "15156830006",
    "jieDaiNengLi": "20人",
    "scale": 8
  },
  {
    "id": 3,
    "type": "监测",
    "longitude": 115.343471,
    "latitude": 33.265740,
    "name": "界首市环境监测站",
    "address": "界首市西城街道张庄西路30号附近（界首市颍河省界监测哨）",
    "tel": "0558-4827291",
    "jieDaiNengLi": "40人",
    "scale": 8
  },
  {
    "id": 4,
    "type": "监测",
    "longitude": 115.593541,
    "latitude": 32.640021,
    "name": "阜南县环境监测站",
    "address": "阜南县城关镇谷河路59号正北方向110米",
    "tel": "13855857699",
    "jieDaiNengLi": "30人",
    "scale": 8
  },
  {
    "id": 5,
    "type": "监测",
    "longitude": 115.580851,
    "latitude": 32.590329,
    "name": "阜南县谷河水监测站（环保宣教基地）",
    "address": "阜南县苗寺大桥南岸西侧400米",
    "tel": "13866277883",
    "jieDaiNengLi": "30人",
    "scale": 8
  },
  {
    "id": 6,
    "type": "监测",
    "longitude": 115.832517,
    "latitude": 32.890714,
    "name": "阜阳市环境监测站",
    "address": "阜阳市颍上路254号",
    "tel": "0558-2272162",
    "jieDaiNengLi": "50人",
    "scale": 8
  },
  {
    "id": 7,
    "type": "监测",
    "longitude": 115.936178,
    "latitude": 32.842953,
    "name": "袁寨水自动监测站",
    "address": "颍东区袁寨镇中心小学南边靠近河岸",
    "tel": "0558-2310603",
    "jieDaiNengLi": "50人",
    "scale": 8
  },
  {
    "id": 8,
    "type": "垃圾",
    "longitude": 115.320628,
    "latitude": 33.066340,
    "name": "临泉皖能环保电力有限公司",
    "address": "临泉县邢塘街道临泉县垃圾填埋场东侧",
    "tel": "0558-3966515",
    "jieDaiNengLi": "20人",
    "scale": 8
  },
  {
    "id": 9,
    "type": "垃圾",
    "longitude": 115.593346,
    "latitude": 33.313657,
    "name": "太和县天楹环保能源有限公司",
    "address": "太和县双浮镇双兴村",
    "tel": "0558-2927201",
    "jieDaiNengLi": "40人",
    "scale": 8
  },
  {
    "id": 10,
    "type": "垃圾",
    "longitude": 115.657547,
    "latitude": 32.587159,
    "name": "阜南绿色东方新能源有限公司",
    "address": "阜南县苗集镇平安村",
    "tel": "0558-6978012",
    "jieDaiNengLi": "40人",
    "scale": 8
  },
  {
    "id": 11,
    "type": "垃圾",
    "longitude": 116.273440,
    "latitude": 32.729391,
    "name": "颍上皖能环保电力有限公司",
    "address": "颍上循环经济园",
    "tel": "0558-4215119",
    "jieDaiNengLi": "50人",
    "scale": 8
  },
  {
    "id": 12,
    "type": "垃圾",
    "longitude": 115.953277,
    "latitude": 32.982964,
    "name": "颍东皖能环保电力有限公司",
    "address": "颍东区插花镇",
    "tel": "0558-2229931",
    "jieDaiNengLi": "60人",
    "scale": 8
  },
  {
    "id": 13,
    "type": "垃圾",
    "longitude": 115.356515,
    "latitude": 33.296755,
    "name": "界首市伟明环保能源有限公司",
    "address": "界首市西城街道吕闫村北侧垃圾填埋场院内",
    "tel": "15357668807",
    "jieDaiNengLi": "40人",
    "scale": 8
  },
  {
    "id": 14,
    "type": "污水",
    "longitude": 115.286420,
    "latitude": 33.066121,
    "name": "临泉县凌志水务有限公司",
    "address": "临泉县邢塘街道人民东路",
    "tel": "13966846641",
    "jieDaiNengLi": "30人",
    "scale": 8
  },
  {
    "id": 15,
    "type": "污水",
    "longitude": 115.634151,
    "latitude": 33.144738,
    "name": "太和县污水处理厂",
    "address": "太和县沙河东路",
    "tel": "13956765264",
    "jieDaiNengLi": "50人",
    "scale": 8
  },
  {
    "id": 16,
    "type": "污水",
    "longitude": 115.598068,
    "latitude": 32.623295,
    "name": "阜南县污水处理厂",
    "address": "阜南县阜中路西段南侧",
    "tel": "0558-2883738",
    "jieDaiNengLi": "30人",
    "scale": 8
  }
];
module.exports = { markers: markers };
*/