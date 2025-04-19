// 存储已经显示过的餐厅
let displayedRestaurants = new Set();

// 调试函数：检查数据加载
function checkDataLoading() {
    console.log('检查餐厅数据加载状态：', {
        restaurantsExists: !!window.restaurants,
        isArray: Array.isArray(window.restaurants),
        count: window.restaurants ? window.restaurants.length : 0,
        firstItem: window.restaurants && window.restaurants.length > 0 ? window.restaurants[0] : null
    });
}

// 生成地图链接
function generateMapLink(restaurant) {
    if (restaurant && restaurant.location) {
        const [longitude, latitude] = restaurant.location.split(',');
        return `https://uri.amap.com/marker?position=${longitude},${latitude}&name=${encodeURIComponent(restaurant.name)}`;
    }
    return null;
}

// 显示餐厅信息
function displayRestaurant(restaurant) {
    console.log('正在显示餐厅信息：', restaurant);
    const resultDiv = document.getElementById('result');
    if (!resultDiv || !restaurant) {
        console.error('显示餐厅信息失败：', {
            resultDivExists: !!resultDiv,
            restaurantExists: !!restaurant
        });
        return;
    }

    const mapLink = generateMapLink(restaurant);
    
    let html = `
        <h2>${restaurant.name}</h2>
        <p class="review">${restaurant.review || ''}</p>
        ${restaurant.price ? `<p class="price">人均：${restaurant.price}</p>` : ''}
        <p class="source">来源：${restaurant.source || '推拿熊'}</p>
        ${restaurant.status && restaurant.status !== "营业中" ? `<p class="status">${restaurant.status}</p>` : ''}
    `;
    
    if (mapLink && (!restaurant.status || restaurant.status === "营业中")) {
        html += `
            <div class="map-link">
                <a href="${mapLink}" target="_blank">
                    <img src="./assets/打开地图按钮.png" alt="打开地图" class="map-button">
                </a>
            </div>
        `;
    }
    
    resultDiv.innerHTML = html;
    console.log('餐厅信息显示完成');
}

// 获取随机餐厅（排除已关闭的餐厅）
function getRandomRestaurant() {
    console.log('开始获取随机餐厅');
    if (!window.restaurants || !Array.isArray(window.restaurants)) {
        console.error('餐厅数据未正确加载', {
            restaurantsExists: !!window.restaurants,
            isArray: Array.isArray(window.restaurants)
        });
        return null;
    }

    // 如果所有餐厅都已显示过，重置记录
    const openRestaurants = window.restaurants.filter(r => !r.status || r.status === "营业中");
    console.log('营业中的餐厅数量：', openRestaurants.length);
    
    if (displayedRestaurants.size >= openRestaurants.length) {
        console.log('重置已显示餐厅列表');
        displayedRestaurants.clear();
    }

    // 从未显示的营业中餐厅中随机选择
    const availableRestaurants = window.restaurants.filter(r => 
        (!r.status || r.status === "营业中") && !displayedRestaurants.has(r)
    );
    
    console.log('可选择的餐厅数量：', availableRestaurants.length);
    
    if (availableRestaurants.length === 0) {
        console.log('没有可用的餐厅');
        return null;
    }
    
    const randomIndex = Math.floor(Math.random() * availableRestaurants.length);
    const selected = availableRestaurants[randomIndex];
    
    console.log('选中的餐厅：', selected);
    
    // 添加到已显示集合
    displayedRestaurants.add(selected);
    
    return selected;
}

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，开始初始化');
    checkDataLoading();
    
    try {
        // 初始化餐厅数据
        if (window.restaurants && Array.isArray(window.restaurants)) {
            console.log('开始初始化餐厅数据');
            window.restaurants.forEach(restaurant => {
                if (!restaurant.source) {
                    restaurant.source = "推拿熊";
                }
                if (!restaurant.status) {
                    restaurant.status = "营业中";  // 默认状态为营业中
                }
            });
            console.log('餐厅数据初始化完成');
        } else {
            console.error('餐厅数据未正确加载');
            return;
        }

        // 获取DOM元素
        const button = document.getElementById('button');
        const prompt = document.getElementById('prompt');
        const result = document.getElementById('result');
        const table = document.querySelector('.table');
        const startHint = document.querySelector('.start-hint');
        const updateButton = document.getElementById('updateLocations');

        if (!button || !prompt || !result || !table) {
            console.error('页面元素未找到', {
                buttonExists: !!button,
                promptExists: !!prompt,
                resultExists: !!result,
                tableExists: !!table
            });
            return;
        }

        console.log('DOM元素获取成功');

        // 处理按钮点击
        function handleClick() {
            console.log('按钮被点击');
            // 禁用按钮
            button.disabled = true;
            
            // 添加旋转动画到餐桌
            table.classList.add('spinning');
            
            // 隐藏提示文字
            prompt.style.opacity = '0';
            
            // 清空结果区域
            result.innerHTML = '';
            
            // 1秒后显示结果
            setTimeout(() => {
                try {
                    console.log('开始生成结果');
                    // 获取随机餐厅
                    const restaurant = getRandomRestaurant();
                    
                    // 显示结果
                    if (restaurant) {
                        displayRestaurant(restaurant);
                    } else {
                        console.log('没有获取到餐厅信息');
                        result.innerHTML = '<p>暂无可用餐厅信息</p>';
                    }
                } catch (error) {
                    console.error('显示结果时出错:', error);
                    result.innerHTML = '<p>抱歉，出现了一些问题</p>';
                } finally {
                    // 移除旋转动画
                    table.classList.remove('spinning');
                    
                    // 启用按钮
                    button.disabled = false;
                    console.log('结果显示完成');
                }
            }, 1000);
        }

        // 添加点击事件监听
        button.addEventListener('click', handleClick);
        console.log('点击事件监听器添加完成');

        // 监听动画结束事件
        table.addEventListener('animationend', () => {
            table.classList.remove('spinning');
            console.log('动画结束');
        });

        // 添加更新地址信息按钮的事件监听
        if (updateButton) {
            updateButton.addEventListener('click', async () => {
                updateButton.disabled = true;
                updateButton.textContent = '正在更新...';
                try {
                    await updateAllRestaurantLocations();
                    updateButton.textContent = '更新完成';
                    setTimeout(() => {
                        updateButton.textContent = '更新地址信息';
                        updateButton.disabled = false;
                    }, 2000);
                } catch (error) {
                    console.error('更新地址信息失败:', error);
                    updateButton.textContent = '更新失败';
                    setTimeout(() => {
                        updateButton.textContent = '更新地址信息';
                        updateButton.disabled = false;
                    }, 2000);
                }
            });
        }
    } catch (error) {
        console.error('初始化时出错:', error);
    }
}); 