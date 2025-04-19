import { restaurants } from './data.js';

// 存储已经显示过的餐厅
let displayedRestaurants = new Set();

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const button = document.getElementById('button');
    const table = document.getElementById('table');
    const result = document.getElementById('result');
    const startHint = document.querySelector('.start-hint');

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

    // 显示餐厅信息的函数
    function displayRestaurant(restaurant) {
        const resultDiv = document.getElementById('result');
        const restaurantName = restaurant.name.split('（')[0]; // 获取餐厅名称
        const location = restaurant.name.match(/（(.+)）/); // 提取位置信息
        
        let displayName = restaurantName;
        if (location && location[1]) {
            displayName += `（${location[1]}）`;
        }
        
        resultDiv.innerHTML = `
            <h2>${displayName}</h2>
            <p>${restaurant.review}</p>
            <p class="source">来自${restaurant.source}</p>
        `;
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
}); 