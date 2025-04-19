// 餐厅数据
const restaurants = [
    {
        name: "台乡缘（外滩店）",
        review: "没有人不爱吃外滩店的台乡缘! 道道好吃，随便点。杂鱼啊沙蒜豆面都是基本款了",
        source: "推拿熊"
    },
    {
        name: "债晶台州菜（外滩店）",
        review: "也在外滩，比较老派，但是海鲜很划算好吃，我钟爱豆腐鱼和肉燕汤 (是叫肉燕吗? 反正就是皮和馅都是肉做的，很$$!)",
        source: "推拿熊"
    },
    {
        name: "柿合缘（国金店）",
        review: "我吃的那家在国金，这家也是甬府旗下的，非常好吃，就是南方人北方人都爱吃的那种，推荐鱼头配油条，炙子羊肉",
        source: "推拿熊"
    },
    {
        name: "荣家黄鱼面（上海店）",
        review: "这家店和荣小馆一样，都是我有空就会去排队吃的，这家店推荐姜汤面",
        source: "推拿熊"
    },
    {
        name: "荣小馆（上海店）",
        review: "因为不能预约只能现场排队，推荐东海杂鱼，脆炸乳鲍，临海扇食，黄鱼烧年糕，密汁红薯",
        source: "推拿熊"
    },
    {
        name: "人逸道（上海店）",
        review: "总之就是比较养肠胃的饭馆，淮扬菜做的很家常，天目竹笋干红烧肉，龙虾炒年糕，金陵烤鸭也很有特色。推荐陈皮红豆",
        source: "推拿熊"
    },
    {
        name: "晟永兴（富士康大楼店）",
        review: "我最近喜欢吃那家富士康大楼的店，除了烤鸭好吃其他菜也很好吃! 乾隆白菜都很不错，牛肉啊羊肉啊都豪饪得很香",
        source: "推拿熊"
    },
    {
        name: "隆台（上海店）",
        review: "也是一种类型的台州菜，特点就是海鲜很鲜，老板自己有渔船，所以海鲜很正啊! 超级爱吃那个炒饭，绝味",
        source: "推拿熊"
    },
    {
        name: "喜粤八号（上海店）",
        review: "总之就是午餐吃吃很快乐，因为晚饭就有很多点心没了。可以说是最平价米其林",
        source: "推拿熊"
    },
    {
        name: "barbarian（武定路店）",
        review: "武定路店，我很喜欢不文明夫妇套餐，尤其是冬天在露台烤着火吃着烧烤",
        source: "推拿熊"
    },
    {
        name: "铁屋（古北店）",
        review: "每次去古北都要吃铁屋，上海的日式烤肉最好吃就是这家",
        source: "推拿熊"
    },
    {
        name: "逸谷会（上海店）",
        review: "工作餐很合适，午市套餐很合理，比如逸谷会的鱼头汤和脆皮鸡，糟卤四宝，红烧肉，咸肉菜饭很好吃!",
        source: "推拿熊"
    },
    {
        name: "食访（上海店）",
        review: "一定要吃狮子头和烟蚂黄鱼，和葱油嫩鸡和醉八仙也很香! 我会一直爱吃这家店!",
        source: "推拿熊"
    },
    {
        name: "泰珍葵（上海店）",
        review: "上海只选一家泰国菜我就吃这家，也是不能预定只能现场排队拿号。最爱他家冬阴功汤和各种烤肉",
        source: "推拿熊"
    },
    {
        name: "Hakkasan（上海店）",
        review: "请人吃饭很体面，我觉得是高端粤式比较有意思的一家了，各种鱼子",
        source: "推拿熊"
    },
    {
        name: "誉八仙（新天地店）",
        review: "新天地店，相对老派一点，但是靓汤真不错，做传统粤式点心也很有滋味",
        source: "推拿熊"
    },
    {
        name: "御宝轩（外滩店）",
        review: "外滩店! 我觉得相对亲民，点心和汤还有福建炒饭! 去吃到捧肚子",
        source: "推拿熊"
    },
    {
        name: "klay（上海店）",
        review: "想吃咖喱了就来这家，真是觉得沾鞋底都好吃啊!",
        source: "推拿熊"
    },
    {
        name: "赣江村（上海店）",
        review: "总之就是，又辣又好吃还便宜，就是菊花难保",
        source: "推拿熊"
    },
    {
        name: "竹屋（上海店）",
        review: "有段时间我经常点他家的外卖，炒鸡杂，毛血旺，江油肥肠，辣子鸡，都很好吃! 下饭超级下饭",
        source: "推拿熊"
    },
    {
        name: "10'mils（音乐学院店）",
        review: "音乐学院附近，属于是我和姐妹早上睡到十点去排队，每个人点一份餐，就是道道都好吃",
        source: "推拿熊"
    },
    {
        name: "BOR（安福路店）",
        review: "在安福路，上次去人很少不懂为什么，烤章鱼脚，烟玛猪肋排，烤虾配柚子，香前扇贝配鱼子着，都很值得吃吃",
        source: "推拿熊"
    },
    {
        name: "bistro11（上海店）",
        review: "口味很好，早点去排队这样吃得开心",
        source: "推拿熊"
    },
    {
        name: "Polux by Paul Pairet（新天地店）",
        review: "在新天地，最实惠米其林餐厅了，每一季的菜单都会有轮换，牛肉塔塔和牛排苗条喜欢的人比较多，我很喜欢吃忽肝着派，沾小面包好吃绝了",
        source: "推拿熊"
    },
    {
        name: "calypso（静安店）",
        review: "地中海菜，在静安香格里拉附近，我很喜欢去这家吃午餐，烤鳃鱼煎扇贝都很香，他家的披萨也是原汁原味的",
        source: "推拿熊"
    },
    {
        name: "Bella napoli（长乐路店）",
        review: "我很喜欢的西西里餐厅! 记得去长乐路店更正宗。披萨很薄很好吃，火腿拼盘啊意面也道道香，如果吃海鲈鱼可以说少放盐",
        source: "推拿熊"
    },
    {
        name: "Mercato by Jean Georges（上海店）",
        review: "就是典型的商务西餐代表了，四平八稳我觉得有点无聊! 米其林水准，价格还好",
        source: "推拿熊"
    },
    {
        name: "张爪爪贵州油灿鸡（上海店）",
        review: "简单吃一点一解乡愁!",
        source: "推拿熊"
    },
    {
        name: "亲亲长沙米粉（上海店）",
        review: "老板娘一度回家了! 现在重新开店，想念她家的白辣椒肉丝粉，我们吃米粉大省人就爱这口",
        source: "推拿熊"
    },
    {
        name: "334 BIRD HUT（上海店）",
        review: "打工人中午点个外卖或者去堂食都很好，就是很好吃很新鲜的那种残油鸡饭海南鸡饭，鸡有鸡味!",
        source: "推拿熊"
    },
    {
        name: "潮兴肠粉店（菜场店）",
        review: "菜场店美食代表，中午还有那种套餐，就是一些卤味+汤+米饭，讽味的汤汁淋在米饭上真是香喷喷! 我超喜欢他家的肠粉。老板人很好，救助了一些流浪猫",
        source: "推拿熊"
    },
    {
        name: "伊祥敦煌楼（上海店）",
        review: "他家真的很正宗啊! 想吃一碗正宗的牛肉面加烤串，配糟就去这家就行了",
        source: "推拿熊"
    },
    {
        name: "快活湖南粉馆（上海店）",
        review: "有段时间我天天去吃……因为那个米粉真的很新鲜很好吃有嚼劲!",
        source: "推拿熊"
    },
    {
        name: "温州海鲜黄牛馆（大统路店）",
        review: "大统路店，典型的大排档，但是海鲜很新鲜炒得猎气十足，聚餐很合适",
        source: "推拿熊"
    },
    {
        name: "纪州豚骨效油拉面（上海店）",
        review: "这也是我在上海最爱吃的拉面店，实话实说真的改良得很好",
        source: "推拿熊"
    },
    {
        name: "bpeefman（上海店）",
        review: "钟爱他家的午市套餐，牛肉饼是美味",
        source: "推拿熊"
    },
    {
        name: "江西客家传统小炒（上海店）",
        review: "嘿嘿，好吃，外卖常客",
        source: "推拿熊"
    },
    {
        name: "潮人姐妹轩（上海店）",
        review: "嘿嘿，聚餐圣地，真是每道都好吃，注意，肠胃不好的朋友别点生腌",
        source: "推拿熊"
    },
    {
        name: "Garlic Barbecue（上海店）",
        review: "嘿嘿，澳洲牛胸肉猪排小汉堡配上汽水真是美味! 我好爱! 这种香喷喷让人怀念",
        source: "推拿熊"
    },
    {
        name: "惠食佳（上海店）",
        review: "嗜嗜煲好好吃，各种甜品也很美味，不懂为什么不火了",
        source: "推拿熊"
    },
    {
        name: "柴米多（菜场店）",
        review: "也是菜场店，我很喜欢吃改良的披萨和香肠拼盘，包浆豆腐和火腿铜锅饭也很地道",
        source: "推拿熊"
    },
    {
        name: "photoshop（上海店）",
        review: "这家越南河粉的汤是老板每天现熬的，所以味道不是那种预制菜，真的很香甜",
        source: "推拿熊"
    },
    {
        name: "滇道（康定路店）",
        review: "差点忘了这家康定路上的云南菜了，大救加和老奶洋芋豆花米线我每次必点",
        source: "推拿熊"
    },
    {
        name: "bottega（上海店）",
        review: "和mamamia，都是披萨店，就放一起写了，和同事如果下午饿了会点mamamia的外卖",
        source: "推拿熊"
    },
    {
        name: "mbd（上海店）",
        review: "我有时候下午出外勤会去蹲守他家的面包上新，刚烤好的小面包真是香!",
        source: "推拿熊"
    }
];

// 为所有餐厅添加来源字段
restaurants.forEach(restaurant => {
    if (!restaurant.source) {
        restaurant.source = "推拿熊";
    }
});

// 生成地图链接的辅助函数
function generateMapLink(restaurant) {
    if (!restaurant.address) {
        return null;
    }
    
    // 默认使用高德地图（因为在中国大陆使用更方便）
    const baseUrl = "https://uri.amap.com/marker";
    const position = restaurant.coordinates 
        ? `${restaurant.coordinates.lng},${restaurant.coordinates.lat}`
        : '';
    const name = encodeURIComponent(restaurant.name);
    const address = encodeURIComponent(restaurant.address);
    
    return `${baseUrl}?position=${position}&name=${name}&address=${address}`;
}

export { restaurants, generateMapLink }; 