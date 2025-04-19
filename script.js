// 存储已经显示过的餐厅
let displayedRestaurants = new Set();

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const button = document.getElementById('startButton');
    const table = document.querySelector('.table');
    const result = document.getElementById('result');
    const startHint = document.querySelector('.start-hint');
    const updateButton = document.getElementById('updateLocations');

    // 随机选择餐厅
    function getRandomRestaurant() {
        // 如果所有餐厅都已显示过，重置记录
        if (displayedRestaurants.size >= restaurants.length) {
            displayedRestaurants.clear();
        }

        // 从未显示的餐厅中随机选择
        const availableRestaurants = restaurants.filter(restaurant => !displayedRestaurants.has(restaurant));
        const randomIndex = Math.floor(Math.random() * availableRestaurants.length);
        const selected = availableRestaurants[randomIndex];
        
        // 添加到已显示集合
        displayedRestaurants.add(selected);
        
        return selected;
    }

    // 处理按钮点击
    function handleClick() {
        // 禁用按钮
        button.disabled = true;
        
        // 隐藏提示文字
        startHint.style.display = 'none';
        
        // 添加旋转动画
        table.style.animation = 'spin 1s ease-out';
        
        // 清空结果区域
        result.innerHTML = '';
        
        // 1秒后显示结果
        setTimeout(() => {
            // 停止旋转
            table.style.animation = 'none';
            
            // 获取随机餐厅
            const restaurant = getRandomRestaurant();
            
            // 显示结果
            displayRestaurant(restaurant);
            
            // 启用按钮
            button.disabled = false;
        }, 1000);
    }

    // 添加点击事件监听
    button.addEventListener('click', handleClick);

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
}); 