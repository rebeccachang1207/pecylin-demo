
document.addEventListener('DOMContentLoaded', function () {
    //- facebook
    document.querySelectorAll("button.btn-fb").forEach(btn => {
        btn.addEventListener("click", () => {
            const shareUrl = encodeURIComponent(window.location.href); // 要分享的網址
            const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

            window.open(
                fbUrl,
                "fb-share-dialog",
                "width=800,height=600"
            );
        });
    });

    //- line
    document.querySelectorAll("button.btn-shareLink").forEach(btn => {
        btn.addEventListener("click", () => {
            const shareUrl = encodeURIComponent(window.location.href); // 要分享的網址
            const lineUrl = `https://social-plugins.line.me/lineit/share?url=${shareUrl}`;
            window.open(lineUrl);
        });
    });
    
    //- line
    document.querySelectorAll("button.btn-shareLink").forEach(btn => {
        writeClipboardText(window.location.href);
    });

    async function writeClipboardText(text) {
        try {
          await navigator.clipboard.writeText(text);
        } catch (error) {
          console.error(error.message);
        }
    }

});

// 離開 result.html 時清除分數
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('quizScores');
    localStorage.removeItem('quizAnswers');
});

