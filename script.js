// 為「刷新狀態」按鈕添加點擊事件處理器
//document.getElementById('refreshStatus').
// addEventListener('click', function() {
//     alert('正在刷新列印機狀態...'); // 顯示提醒訊息，告知正在刷新列印機狀態
// });

// 為「啟動列印」按鈕添加點擊事件處理器
// 為「壓線頭」按鈕添加點擊事件
document.getElementById('Button1').addEventListener('click', function() {
    alert('已在施壓線頭作業！'); // 顯示提醒訊息，告知施壓線頭作業已啟動
});

// 為「進料」按鈕添加點擊事件
document.getElementById('Button2').addEventListener('click', function() {
    alert('已在施按進料作業！'); // 顯示提醒訊息，告知進料作業已啟動
});

// 為「確定」按鈕添加點擊事件
document.getElementById('Button3').addEventListener('click', function() {
    alert('已在施按確定作業！'); // 顯示提醒訊息，告知確定作業已啟動
});
