// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;

// Выводим username на экран
if (user && user.username) {
    document.getElementById('username').innerText = user.username;
} else {
    document.getElementById('username').innerText = 'Username не найден';
}

// Показываем основную кнопку, если нужно
tg.MainButton.show();
