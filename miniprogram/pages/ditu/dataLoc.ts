//用于本地数据
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

export let markers: Marker[] = [
  new Marker(1, '监测', 115.266900, 33.049593, '临泉县环境监测站', '临泉县港口路238号', '0558-6288017', 10),
  new Marker(2, '监测', 115.623710, 33.175151, '太和县环境监测站', '太和县人民北路与建设西路交口南侧', '15156830006', 20),
  new Marker(3, '监测', 115.343471, 33.265740, '界首市环境监测站', '界首市西城街道张庄西路30号附近（界首市颍河省界监测哨）', '0558-4827291', 40),
  new Marker(4, '监测', 115.593541, 32.640021, '阜南县环境监测站', '阜南县城关镇谷河路59号正北方向110米', '13855857699', 30),
  new Marker(5, '监测', 115.580851, 32.590329, '阜南县谷河水监测站（环保宣教基地）', '阜南县苗寺大桥南岸西侧400米', '13866277883', 30),
  new Marker(6, '监测', 115.832517, 32.890714, '阜阳市环境监测站', '阜阳市颍上路254号', '0558-2272162', 30),
]
