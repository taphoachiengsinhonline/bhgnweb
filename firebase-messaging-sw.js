// File: public/firebase-messaging-sw.js

// Import Firebase script (Dùng bản compat cho Service Worker)
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Điền cấu hình Firebase của bạn vào đây (Lấy ở Firebase Console)

const firebaseConfig = {
  apiKey: "AIzaSyBuaZcfRwEyVAixXfGQote9XC93bzeL7Yw",
  authDomain: "taphoachiengsinh.firebaseapp.com",
  projectId: "taphoachiengsinh",
  storageBucket: "taphoachiengsinh.firebasestorage.app",
  messagingSenderId: "85815319835",
  appId: "1:85815319835:web:70d6d14927c36037da47be",
  measurementId: "G-2PWXQR4QQ2"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Lắng nghe thông báo khi Web đang CHẠY NGẦM hoặc TẮT TAB
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Đã nhận thông báo ngầm ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icon.png' // Icon hiện trên thông báo web
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});