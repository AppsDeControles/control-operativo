/* Service worker: recibe las notificaciones cuando la app está cerrada */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({"apiKey": "AIzaSyD7clqRkEe_ju9-Ug_CZjhdcXagzcssqCw", "authDomain": "control-operativo-92087.firebaseapp.com", "projectId": "control-operativo-92087", "storageBucket": "control-operativo-92087.firebasestorage.app", "messagingSenderId": "98724467445", "appId": "1:98724467445:web:78224d9d2d1da335186bbc"});
firebase.messaging();          // los avisos traen título y texto: el navegador los muestra solos y al tocarlos abre la app
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
