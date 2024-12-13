// 為「刷新狀態」按鈕添加點擊事件處理器
document.getElementById('refreshStatus').addEventListener('click', function() {
    alert('正在刷新列印機狀態...'); // 顯示提醒訊息，告知正在刷新列印機狀態
});

// 為「啟動列印」按鈕添加點擊事件處理器
document.getElementById('startPrint').addEventListener('click', function() {
    alert('已啟動列印作業！'); // 顯示提醒訊息，告知列印作業已啟動
});

// 為「停止列印」按鈕添加點擊事件處理器
document.getElementById('stopPrint').addEventListener('click', function() {
    alert('已停止列印作業！'); // 顯示提醒訊息，告知列印作業已停止
});
