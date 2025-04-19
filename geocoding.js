// 高德地图地理编码API
async function geocodeAddress(name, city = '杭州市') {
    try {
        const result = await window.mcp_amap_amap_sse_maps_geo({
            address: `${city}${name}`,
            city: city
        });
        
        if (result && result.geocodes && result.geocodes.length > 0) {
            const geocode = result.geocodes[0];
            const [lng, lat] = geocode.location.split(',');
            
            return {
                address: geocode.formatted_address,
                coordinates: {
                    lng: parseFloat(lng),
                    lat: parseFloat(lat)
                },
                location: geocode.location
            };
        }
        return null;
    } catch (error) {
        console.error(`Error geocoding ${name}:`, error);
        return null;
    }
}

// 延迟函数
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 搜索餐厅位置信息
async function searchRestaurant(name, city = '上海') {
    try {
        // 使用文本搜索
        const searchResult = await mcp_amap_amap_sse_maps_text_search({
            keywords: name,
            city: city
        });

        if (searchResult && searchResult.pois && searchResult.pois.length > 0) {
            const firstResult = searchResult.pois[0];
            return {
                address: firstResult.address,
                location: firstResult.location
            };
        }
        return null;
    } catch (error) {
        console.error(`搜索餐厅失败: ${name}`, error);
        return null;
    }
}

// 批量更新餐厅位置信息
async function updateRestaurantLocations(restaurants) {
    const updatedRestaurants = [...restaurants];
    
    for (const restaurant of updatedRestaurants) {
        if (!restaurant.location || !restaurant.address) {
            console.log(`正在搜索: ${restaurant.name}`);
            try {
                const result = await searchRestaurant(restaurant.name);
                if (result) {
                    restaurant.address = result.address;
                    restaurant.location = result.location;
                    console.log(`已更新: ${restaurant.name}`);
                    console.log(`地址: ${result.address}`);
                    console.log(`位置: ${result.location}\n`);
                } else {
                    console.log(`未找到位置信息: ${restaurant.name}\n`);
                }
                // 添加延迟以避免请求过快
                await delay(1000);
            } catch (error) {
                console.error(`处理餐厅信息失败: ${restaurant.name}`, error);
            }
        }
    }
    
    return updatedRestaurants;
}

// 使用高德地图 API 获取餐厅地址信息
async function getRestaurantLocation(restaurantName) {
    try {
        // 提取餐厅名称和分店信息
        const [baseName, location] = restaurantName.split('（');
        const branch = location ? location.replace('）', '') : '';
        
        // 构建搜索关键词
        const searchKeyword = branch.includes('上海') ? 
            `${baseName} ${branch}` : 
            `${baseName} 上海${branch}`;
        
        // 使用餐厅名称进行地址搜索
        const response = await mcp_amap_amap_sse_maps_text_search({
            keywords: searchKeyword,
            city: "上海"
        });

        if (response && response.pois && response.pois.length > 0) {
            // 找到最匹配的结果
            const bestMatch = response.pois[0];
            return {
                address: bestMatch.address || bestMatch.pname + bestMatch.cityname + bestMatch.adname + bestMatch.address,
                location: bestMatch.location
            };
        }
        
        // 如果没找到，尝试只用基本名称搜索
        if (baseName !== searchKeyword) {
            const fallbackResponse = await mcp_amap_amap_sse_maps_text_search({
                keywords: baseName,
                city: "上海"
            });
            
            if (fallbackResponse && fallbackResponse.pois && fallbackResponse.pois.length > 0) {
                const fallbackMatch = fallbackResponse.pois[0];
                return {
                    address: fallbackMatch.address || fallbackMatch.pname + fallbackMatch.cityname + fallbackMatch.adname + fallbackMatch.address,
                    location: fallbackMatch.location
                };
            }
        }
        
        return null;
    } catch (error) {
        console.error('获取地址信息失败:', error);
        return null;
    }
}

// 更新所有餐厅的地址信息
async function updateAllRestaurantLocations() {
    const updatedRestaurants = [];
    let successCount = 0;
    let failCount = 0;
    
    for (let restaurant of restaurants) {
        console.log(`正在获取 ${restaurant.name} 的地址信息...`);
        const locationInfo = await getRestaurantLocation(restaurant.name);
        
        if (locationInfo) {
            updatedRestaurants.push({
                ...restaurant,
                address: locationInfo.address,
                location: locationInfo.location
            });
            console.log(`✅ 成功获取 ${restaurant.name} 的地址信息`);
            successCount++;
        } else {
            updatedRestaurants.push(restaurant);
            console.log(`❌ 未找到 ${restaurant.name} 的地址信息`);
            failCount++;
        }
        
        // 添加延时以避免请求过快
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // 更新 restaurants 数组
    restaurants.length = 0;
    restaurants.push(...updatedRestaurants);
    
    // 将更新后的数据打印到控制台，方便复制
    console.log('\n更新完成统计：');
    console.log(`✅ 成功：${successCount} 家餐厅`);
    console.log(`❌ 失败：${failCount} 家餐厅`);
    console.log('\n更新后的餐厅数据:');
    console.log(JSON.stringify(restaurants, null, 2));
    
    return updatedRestaurants;
}

// 生成高德地图链接
export function generateMapLink(restaurant) {
    if (!restaurant.location) {
        return null;
    }
    return `https://uri.amap.com/marker?position=${restaurant.location}&name=${encodeURIComponent(restaurant.name)}`;
}

export { searchRestaurant }; 