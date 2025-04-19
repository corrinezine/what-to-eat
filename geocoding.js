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
            
            // 生成高德地图链接
            const amapUrl = `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(name)}&src=mypage&coordinate=gaode&callnative=0`;
            
            return {
                address: geocode.formatted_address,
                coordinates: {
                    lng: parseFloat(lng),
                    lat: parseFloat(lat)
                },
                location: `🗺️ ${amapUrl}`
            };
        }
        return null;
    } catch (error) {
        console.error(`Error geocoding ${name}:`, error);
        return null;
    }
}

// 批量更新餐厅位置信息
async function updateRestaurantLocations(restaurants) {
    const updatedRestaurants = [];
    
    for (const restaurant of restaurants) {
        const originalName = typeof restaurant === 'object' ? restaurant.name.text : restaurant;
        
        if (typeof restaurant === 'string') {
            const result = await geocodeAddress(restaurant);
            if (result) {
                updatedRestaurants.push({
                    name: {
                        text: restaurant,
                        link: `https://www.dianping.com/searchshop?keyword=${encodeURIComponent(restaurant)}`,
                        style: 'text-decoration: underline;'
                    },
                    address: result.address,
                    coordinates: result.coordinates,
                    location: result.location
                });
            } else {
                updatedRestaurants.push({
                    name: {
                        text: restaurant,
                        link: `https://www.dianping.com/searchshop?keyword=${encodeURIComponent(restaurant)}`,
                        style: 'text-decoration: underline;'
                    }
                });
            }
        } else {
            updatedRestaurants.push(restaurant);
        }
    }
    
    return updatedRestaurants;
}

export { geocodeAddress, updateRestaurantLocations }; 