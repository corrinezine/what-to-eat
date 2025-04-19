// 餐厅数据
const restaurants = [
    {
        name: "台乡缘（外滩店）",
        review: "没有人不爱吃外滩店的台乡缘! 道道好吃，随便点。杂鱼啊沙蒜豆面都是基本款了",
        source: "推拿熊",
        address: "广东路500号世界贸易大厦1F-2F",
        location: "121.490962,31.236425",
        price: "¥200/人"
    },
    {
        name: "债晶台州菜（外滩店）",
        review: "也在外滩，比较老派，但是海鲜很划算好吃，我钟爱豆腐鱼和肉燕汤 (是叫肉燕吗? 反正就是皮和馅都是肉做的，很$$!)",
        source: "推拿熊",
        address: "中山东一路外滩",
        location: "121.491374,31.236876",
        price: "¥300/人"
    },
    {
        name: "柿合缘（国金店）",
        review: "我吃的那家在国金，这家也是甬府旗下的，非常好吃，就是南方人北方人都爱吃的那种，推荐鱼头配油条，炙子羊肉",
        source: "推拿熊",
        address: "世纪大道8号上海ifc商场L4层",
        location: "121.506751,31.238286",
        price: "¥250/人"
    },
    {
        name: "荣家黄鱼面（上海店）",
        review: "这家店和荣小馆一样，都是我有空就会去排队吃的，这家店推荐姜汤面",
        source: "推拿熊",
        address: "南京西路688号L105A-1",
        location: "121.459772,31.230415",
        price: "¥50以下/人"
    },
    {
        name: "荣小馆（上海店）",
        review: "因为不能预约只能现场排队，推荐东海杂鱼，脆炸乳鲍，临海扇食，黄鱼烧年糕，密汁红薯",
        source: "推拿熊",
        address: "太仓路128号安达仕酒店",
        location: "121.475642,31.227831"
    },
    {
        name: "人逸道（上海店）",
        review: "总之就是比较养肠胃的饭馆，淮扬菜做的很家常，天目竹笋干红烧肉，龙虾炒年糕，金陵烤鸭也很有特色。推荐陈皮红豆",
        source: "推拿熊",
        address: "北京东路99号益丰·外滩源F2层",
        location: "121.483646,31.241245"
    },
    {
        name: "晟永兴（富士康大楼店）",
        review: "我最近喜欢吃那家富士康大楼的店，除了烤鸭好吃其他菜也很好吃! 乾隆白菜都很不错，牛肉啊羊肉啊都豪饪得很香",
        source: "推拿熊",
        address: "陆家嘴环路1366号富士康大厦4层",
        location: "121.501845,31.234121"
    },
    {
        name: "隆台（上海店）",
        review: "也是一种类型的台州菜，特点就是海鲜很鲜，老板自己有渔船，所以海鲜很正啊! 超级爱吃那个炒饭，绝味",
        source: "推拿熊",
        address: "龙华东路810号黄浦绿地缤纷城3楼301-303室",
        location: "121.47242,31.19421"
    },
    {
        name: "喜粤八号（上海店）",
        review: "总之就是午餐吃吃很快乐，因为晚饭就有很多点心没了。可以说是最平价米其林",
        source: "推拿熊",
        address: "南京东路139号美伦大楼5层501号",
        location: "121.487672,31.236789"
    },
    {
        name: "barbarian（武定路店）",
        review: "武定路店，我很喜欢不文明夫妇套餐，尤其是冬天在露台烤着火吃着烧烤",
        source: "推拿熊",
        address: "胶州路322号1幢",
        location: "121.437882,31.235001"
    },
    {
        name: "铁屋（古北店）",
        review: "每次去古北都要吃铁屋，上海的日式烤肉最好吃就是这家",
        source: "推拿熊",
        address: "虹梅路3081号虹桥基金小镇G63",
        location: "121.396272,31.175634"
    },
    {
        name: "逸谷会（上海店）",
        review: "工作餐很合适，午市套餐很合理，比如逸谷会的鱼头汤和脆皮鸡，糟卤四宝，红烧肉，咸肉菜饭很好吃!",
        source: "推拿熊",
        address: "花木路1378号嘉里城2楼219A号",
        location: "121.557645,31.215678"
    },
    {
        name: "食访（上海店）",
        review: "一定要吃狮子头和烟蚂黄鱼，和葱油嫩鸡和醉八仙也很香! 我会一直爱吃这家店!",
        source: "推拿熊",
        address: "西康路1143号鸿寿坊F1层",
        location: "121.438976,31.236789"
    },
    {
        name: "泰珍葵（上海店）",
        review: "上海只选一家泰国菜我就吃这家，也是不能预定只能现场排队拿号。最爱他家冬阴功汤和各种烤肉",
        source: "推拿熊",
        address: "中山东二路588号BFC外滩金融中心4楼",
        location: "121.497654,31.234567",
        price: "贵饭"
    },
    {
        name: "Hakkasan（上海店）",
        review: "请人吃饭很体面，我觉得是高端粤式比较有意思的一家了，各种鱼子",
        source: "推拿熊",
        address: "外滩街道中山东一路18号外滩十八号5层",
        location: "121.490234,31.234567",
        price: "贵饭"
    },
    {
        name: "誉八仙（新天地店）",
        review: "新天地店，相对老派一点，但是靓汤真不错，做传统粤式点心也很有滋味",
        source: "推拿熊",
        address: "太仓路181弄新天地北里",
        location: "121.475678,31.219876",
        price: "¥200/人"
    },
    {
        name: "御宝轩（外滩店）",
        review: "外滩店! 我觉得相对亲民，点心和汤还有福建炒饭! 去吃到捧肚子",
        source: "推拿熊",
        address: "北京东路99号益丰·外滩源4层402-403号",
        location: "121.483646,31.241245",
        price: "¥200/人"
    },
    {
        name: "klay（上海店）",
        review: "想吃咖喱了就来这家，真是觉得沾鞋底都好吃啊!",
        source: "推拿熊",
        address: "北京西路1124号",
        location: "121.445678,31.234567",
        price: "¥50以下/人"
    },
    {
        name: "赣江村（上海店）",
        review: "总之就是，又辣又好吃还便宜，就是菊花难保",
        source: "推拿熊",
        address: "浦东大道地铁站6号口步行230米",
        location: "121.534567,31.245678",
        price: "¥50以下/人"
    },
    {
        name: "竹屋（上海店）",
        review: "有段时间我经常点他家的外卖，炒鸡杂，毛血旺，江油肥肠，辣子鸡，都很好吃! 下饭超级下饭",
        source: "推拿熊",
        address: "淮海中路99号B107",
        location: "121.475678,31.223456",
        price: "¥50以下/人"
    },
    {
        name: "10'mils（音乐学院店）",
        review: "音乐学院附近，属于是我和姐妹早上睡到十点去排队，每个人点一份餐，就是道道都好吃",
        source: "推拿熊",
        address: "汾阳路20号上海音乐学院附近",
        location: "121.458123,31.217345"
    },
    {
        name: "BOR（安福路店）",
        review: "在安福路，上次去人很少不懂为什么，烤章鱼脚，烟玛猪肋排，烤虾配柚子，香前扇贝配鱼子着，都很值得吃吃",
        source: "推拿熊",
        address: "安福路308号",
        location: "121.447234,31.219876"
    },
    {
        name: "bistro11（上海店）",
        review: "口味很好，早点去排队这样吃得开心",
        source: "推拿熊",
        address: "富民路179号1楼",
        location: "121.452345,31.218765"
    },
    {
        name: "Polux by Paul Pairet（新天地店）",
        review: "在新天地，最实惠米其林餐厅了，每一季的菜单都会有轮换，牛肉塔塔和牛排苗条喜欢的人比较多，我很喜欢吃忽肝着派，沾小面包好吃绝了",
        source: "推拿熊",
        address: "太仓路181弄5号",
        location: "121.475678,31.219876",
        price: "贵饭"
    },
    {
        name: "calypso（静安店）",
        review: "地中海菜，在静安香格里拉附近，我很喜欢去这家吃午餐，烤鳃鱼煎扇贝都很香，他家的披萨也是原汁原味的",
        source: "推拿熊",
        address: "延安中路1218号静安香格里拉大酒店附近",
        location: "121.445678,31.229876"
    },
    {
        name: "Bella napoli（长乐路店）",
        review: "我很喜欢的西西里餐厅! 记得去长乐路店更正宗。披萨很薄很好吃，火腿拼盘啊意面也道道香，如果吃海鲈鱼可以说少放盐",
        source: "推拿熊",
        address: "长乐路946弄4号一层",
        location: "121.456789,31.223456"
    },
    {
        name: "Mercato by Jean Georges（上海店）",
        review: "就是典型的商务西餐代表了，四平八稳我觉得有点无聊! 米其林水准，价格还好",
        source: "推拿熊",
        address: "中山东一路3号外滩3号4层",
        location: "121.490234,31.234567",
        price: "贵饭"
    },
    {
        name: "张爪爪贵州油灿鸡（上海店）",
        review: "简单吃一点一解乡愁!",
        source: "推拿熊",
        price: "¥50以下/人",
        status: "已关闭"
    },
    {
        name: "亲亲长沙米粉（上海店）",
        review: "老板娘一度回家了! 现在重新开店，想念她家的白辣椒肉丝粉，我们吃米粉大省人就爱这口",
        source: "推拿熊",
        address: "新闸路868号",
        location: "121.467890,31.234567",
        price: "¥50以下/人"
    },
    {
        name: "蓁豐道BIRD HUT（泰兴路店）",
        review: "原334 BIRD HUT改名后的店铺，依然保持着很好的品质。打工人中午点个外卖或者去堂食都很好，就是很好吃很新鲜的那种残油鸡饭海南鸡饭，鸡有鸡味!",
        source: "推拿熊",
        address: "泰兴路325号-8",
        location: "121.457662,31.232558",
        price: "¥50以下/人",
        note: "原334 BIRD HUT"
    },
    {
        name: "潮兴肠粉店（菜场店）",
        review: "潮兴肠粉店的肠粉是上海最好吃的肠粉之一，皮薄韧性好，馅料实在，酱汁也很香。店面虽小但生意火爆，建议避开高峰期。",
        source: "小红书",
        address: "上海市静安区宝通路203号-2包运大楼",
        location: "121.478338,31.256202"
    },
    {
        name: "伊祥敦煌楼（上海店）",
        review: "他家真的很正宗啊! 想吃一碗正宗的牛肉面加烤串，配糟就去这家就行了",
        source: "推拿熊",
        address: "银城路66号尚悦湾GALA MALL2楼215D",
        location: "121.505678,31.234567"
    },
    {
        name: "快活湖南粉馆（上海店）",
        review: "有段时间我天天去吃……因为那个米粉真的很新鲜很好吃有嚼劲!",
        source: "推拿熊",
        address: "淮海中路333号新天地广场B2层",
        location: "121.475678,31.223456",
        price: "¥50以下/人"
    },
    {
        name: "温州海鲜黄牛馆（大统路店）",
        review: "大统路店，典型的大排档，但是海鲜很新鲜炒得猎气十足，聚餐很合适",
        source: "推拿熊",
        address: "大统路105号",
        location: "121.478901,31.245678"
    },
    {
        name: "纪州豚骨效油拉面（上海店）",
        review: "这也是我在上海最爱吃的拉面店，实话实说真的改良得很好",
        source: "推拿熊",
        address: "威宁路55号1层",
        location: "121.406789,31.206543",
        price: "¥50以下/人"
    },
    {
        name: "bpeefman（上海店）",
        review: "钟爱他家的午市套餐，牛肉饼是美味",
        source: "推拿熊",
        address: "南京西路1266号恒隆广场4楼",
        location: "121.459876,31.231234"
    },
    {
        name: "江西客家传统小炒（上海店）",
        review: "嘿嘿，好吃，外卖常客",
        source: "推拿熊",
        address: "商城路1118号",
        location: "121.523456,31.234567",
        price: "¥50以下/人"
    },
    {
        name: "潮人姐妹轩（上海店）",
        review: "在森林湾大厦，我很喜欢他家的炸鸡，炸的外皮酥脆，肉质鲜嫩多汁，配上他家的酱料，绝了",
        source: "推拿熊",
        address: "海宁路269号森林湾大厦B座一楼",
        location: "121.476234,31.241567"
    },
    {
        name: "Garlic Barbecue（上海店）",
        review: "在建国东路，18小时果木烟熏烤肉，每一口都是惊喜，肉质鲜嫩，烟熏味恰到好处",
        source: "推拿熊",
        address: "建国东路285号中海环宇荟1楼L107-108",
        location: "121.485678,31.223456"
    },
    {
        name: "惠食佳（上海店）",
        review: "在延安西路，这家店的菜品种类很丰富，价格实惠，味道也不错",
        source: "推拿熊",
        address: "延安西路396号美丽园龙都大酒店3-4层",
        location: "121.445678,31.219876"
    },
    {
        name: "柴米多（莘庄店）",
        review: "在乌中市集，滇味很正，米线和各种小菜都很地道",
        source: "推拿熊",
        address: "乌鲁木齐中路318号乌中市集二楼",
        location: "121.447890,31.218765"
    },
    {
        name: "photoshop（上海店）",
        review: "在北京西路，越南菜很地道，生春卷和河粉都很好吃",
        source: "推拿熊",
        address: "北京西路1718号",
        location: "121.456789,31.234567"
    },
    {
        name: "滇道（康定路店）",
        review: "在康定路，云南菜做得很地道，特别是各种菌菜，味道很好",
        source: "推拿熊",
        address: "康定路1025号(近武宁南路)",
        location: "121.438765,31.234567"
    },
    {
        name: "bottega（上海店）",
        review: "在陕西北路，意大利餐厅，环境很好，披萨和意面都很正宗",
        source: "推拿熊",
        address: "陕西北路457号1幢1层",
        location: "121.456789,31.229876"
    },
    {
        name: "mbd（上海店）",
        review: "在东长治路，面包店里的可颂和丹麦酥都很好吃，咖啡也不错",
        source: "推拿熊",
        address: "东长治路588号上海白玉兰广场购物中心F1层",
        location: "121.478901,31.245678"
    },
    {
        name: "小隆台(南洋1931店)",
        review: "小隆台的台菜，口味正宗，价格实惠。特色菜品包括卤肉饭、三杯鸡等经典台湾美食。环境舒适，服务态度好。",
        source: "推拿熊",
        address: "裕德路125号二层01部位F2-01A+01B号单元",
        location: "121.433543,31.185922"
    },
    {
        name: "隆台(黄埔绿地缤纷城店)",
        review: "隆台是一家知名的台湾料理餐厅，菜品种类丰富，口味地道。推荐尝试他们的卤肉饭、牛肉面和盐酥鸡。店内装修典雅，很有台湾特色。",
        source: "大众点评",
        address: "龙华东路810号黄浦绿地缤纷城3楼301-303室",
        location: "121.473446,31.193269"
    },
    {
        name: "L'ATELIER de Joël Robuchon（上海店）",
        review: "米其林三星，环境服务都很好，但是我觉得还是略贵了点，不过确实是请客必备",
        source: "推拿熊",
        address: "南京西路789号兴业太古汇3层",
        location: "121.472345,31.234567",
        price: "贵饭"
    }
];

// 为所有餐厅添加状态字段
restaurants.forEach(restaurant => {
    if (!restaurant.source) {
        restaurant.source = "推拿熊";
    }
    if (!restaurant.status) {
        restaurant.status = "营业中";  // 默认状态为营业中
    }
});

// 生成地图链接
function generateMapLink(restaurant) {
    if (!restaurant.location) {
        return null;
    }
    return `https://uri.amap.com/marker?position=${restaurant.location}&name=${encodeURIComponent(restaurant.name)}`;
}

// 显示餐厅信息
function displayRestaurant(restaurant) {
    const resultDiv = document.getElementById('result');
    const mapLink = generateMapLink(restaurant);
    
    let html = `
        <h2>${restaurant.name}</h2>
        <p class="review">${restaurant.review}</p>
        ${restaurant.price ? `<p class="price">人均：${restaurant.price}</p>` : ''}
        <p class="source">来源：${restaurant.source}</p>
        ${restaurant.status !== "营业中" ? `<p class="status">${restaurant.status}</p>` : ''}
    `;
    
    if (mapLink && restaurant.status === "营业中") {
        html += `
            <div class="map-link">
                <a href="${mapLink}" target="_blank">
                    <img src="assets/打开地图按钮.png" alt="打开地图" class="map-button">
                </a>
            </div>
        `;
    }
    
    resultDiv.innerHTML = html;
}

// 获取随机餐厅（排除已关闭的餐厅）
function getRandomRestaurant() {
    const openRestaurants = restaurants.filter(r => r.status === "营业中");
    if (openRestaurants.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * openRestaurants.length);
    return openRestaurants[randomIndex];
} 