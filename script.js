import { restaurants } from './data.js';

// 获取DOM元素
const table = document.getElementById('table');
const result = document.getElementById('result');
const randomButton = document.getElementById('randomButton');
const startHint = document.querySelector('.start-hint');

// 记录已经显示过的餐厅
let shownRestaurants = new Set();
let isFirstClick = true;

// 随机选择餐厅的函数
function getRandomRestaurant() {
    // 如果所有餐厅都显示过了，重置记录
    if (shownRestaurants.size >= restaurants.length) {
        shownRestaurants.clear();
    }

    // 获取未显示过的餐厅
    const availableRestaurants = restaurants.filter(restaurant => !shownRestaurants.has(restaurant.name));
    const randomIndex = Math.floor(Math.random() * availableRestaurants.length);
    const selectedRestaurant = availableRestaurants[randomIndex];

    // 记录已显示的餐厅
    shownRestaurants.add(selectedRestaurant.name);

    return selectedRestaurant;
}

// 显示餐厅信息的函数
function displayRestaurant(restaurant) {
    let locationText = restaurant.location ? `\n📍 ${restaurant.location}` : '';
    let recommendationsText = restaurant.recommendations.length > 0 
        ? `\n\n推荐菜品：\n${restaurant.recommendations.join('、')}`
        : '';
    
    result.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p>${restaurant.cuisine}${locationText}${recommendationsText}</p>
    `;
}

// 点击按钮时的处理函数
function handleClick() {
    // 如果是第一次点击，隐藏提示文字
    if (isFirstClick) {
        startHint.style.display = 'none';
        isFirstClick = false;
    }

    // 添加旋转动画
    table.classList.add('spinning');
    
    // 禁用按钮
    randomButton.disabled = true;
    
    // 1秒后停止旋转并显示结果
    setTimeout(() => {
        table.classList.remove('spinning');
        const restaurant = getRandomRestaurant();
        displayRestaurant(restaurant);
        randomButton.disabled = false;
    }, 1000);
}

// 添加点击事件监听器
randomButton.addEventListener('click', handleClick); 