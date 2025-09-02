Kakao.init('debc7bfc39cfb47ebaee225fca4c278f');
Kakao.isInitialized();

/* console.log(kakao.isInitialized()); */

document.getElementById("kakao-login-btn").addEventListener('click', () => {
    Kakao.Auth.authorize({
        redirectUri: 'http://127.0.0.1:5500/kakao-callback.html'
    })
})