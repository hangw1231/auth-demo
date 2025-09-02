const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
    fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: "cbc89867a271d4b8fb156d1df69ca1cd",
            redirect_uri: "https://127.0.0.1:5500/auth-demo/kakao-callback.html",
            code: code,
        }),
    })
        .then((res) => res.json())
        .then((tokenData) => {
            return fetch("https://kapi.kakao.com/v2/user/me", {
                headers: {
                    Authorization: `Bearer ${tokenData.access_token}`,
                },
            });
        })
        .then((res) => res.json())
        .then((userData) => {
            const nickname = userData.kakao_account.profile.nickname;
            const email = userData.kakao_account.email;

            // 사용자 정보를 localStorage에 저장
            localStorage.setItem("nickname", nickname);
            localStorage.setItem("email", email);
            localStorage.setItem("isLoggedIn", "true");

            // index 페이지로 이동
            window.location.href = "../index.html";
        })
        .catch((err) => {
            console.error("카카오 로그인 실패", err);
            alert("로그인 실패");
        });
}
