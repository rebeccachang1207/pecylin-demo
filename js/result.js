
document.addEventListener('DOMContentLoaded', function () {
    //- facebook
    document.querySelectorAll("button.btn-fb").forEach(btn => {
        btn.addEventListener("click", () => {
            const shareUrl = encodeURIComponent(window.location.href); // 要分享的網址
            const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
            window.open(fbUrl);
        });
    });

    //- line
    document.querySelectorAll("button.btn-line").forEach(btn => {
        btn.addEventListener("click", () => {
            const shareUrl = encodeURIComponent(window.location.href); // 要分享的網址
            const lineUrl = `https://social-plugins.line.me/lineit/share?url=${shareUrl}`;
            window.open(lineUrl);
        });
    });
    
    //- shareLink
    document.querySelectorAll("button.btn-shareLink").forEach(btn => {
        btn.addEventListener("click", () => {
            writeClipboardText(window.location.href);
        });
    });

    async function writeClipboardText(text) {
        try {
            await navigator.clipboard.writeText(text);
            if (!document.querySelector('.toast')) {
                Toast.show('已複製連結到剪貼簿！');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

});

class Toast {
    constructor(message, duration = 3000) {
        this.message = message;
        this.duration = duration;
        this.toastElement = null;
    }
    show() {
        this.toastElement = document.createElement('div');
        this.toastElement.className = 'toast';
        this.toastElement.textContent = this.message;
        document.body.appendChild(this.toastElement);

        setTimeout(() => {
            this.hide();
        }, this.duration);
    }
    hide() {
        if (this.toastElement) {
            this.toastElement.remove();
            this.toastElement = null;
        }
    }
    static show(message, duration = 3000) {
        const toast = new Toast(message, duration);
        toast.show();
    }
}

// 離開 result.html 時清除分數
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('quizScores');
    localStorage.removeItem('quizAnswers');
});

