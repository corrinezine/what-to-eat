// 存储已经显示过的餐厅
let displayedRestaurants = new Set();

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
    const resultDiv = document.getElementById('result');
    if (!resultDiv || !restaurant) return;

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
                    <img src="assets/打开地图按钮.png" alt="打开地图" class="map-button">
                </a>
            </div>
        `;
    }
    
    resultDiv.innerHTML = html;
}

// 获取随机餐厅（排除已关闭的餐厅）
function getRandomRestaurant() {
    if (!window.restaurants || !Array.isArray(window.restaurants)) {
        console.error('餐厅数据未正确加载');
        return null;
    }

    // 如果所有餐厅都已显示过，重置记录
    const openRestaurants = window.restaurants.filter(r => !r.status || r.status === "营业中");
    if (displayedRestaurants.size >= openRestaurants.length) {
        displayedRestaurants.clear();
    }

    // 从未显示的营业中餐厅中随机选择
    const availableRestaurants = window.restaurants.filter(r => 
        (!r.status || r.status === "营业中") && !displayedRestaurants.has(r)
    );
    
    if (availableRestaurants.length === 0) {
        return null;
    }
    
    const randomIndex = Math.floor(Math.random() * availableRestaurants.length);
    const selected = availableRestaurants[randomIndex];
    
    // 添加到已显示集合
    displayedRestaurants.add(selected);
    
    return selected;
}

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 初始化餐厅数据
        if (window.restaurants && Array.isArray(window.restaurants)) {
            window.restaurants.forEach(restaurant => {
                if (!restaurant.source) {
                    restaurant.source = "推拿熊";
                }
                if (!restaurant.status) {
                    restaurant.status = "营业中";  // 默认状态为营业中
                }
            });
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
            console.error('页面元素未找到');
            return;
        }

        // 处理按钮点击
        function handleClick() {
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
                    // 获取随机餐厅
                    const restaurant = getRandomRestaurant();
                    
                    // 显示结果
                    if (restaurant) {
                        displayRestaurant(restaurant);
                    } else {
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
                }
            }, 1000);
        }

        // 添加点击事件监听
        button.addEventListener('click', handleClick);

        // 监听动画结束事件
        table.addEventListener('animationend', () => {
            table.classList.remove('spinning');
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