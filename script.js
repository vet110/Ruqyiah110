// جافا سكربت للتحكم في زر التوسع
const toggleButton = document.getElementById('toggleButton');
const secondaryButtons = document.getElementById('secondaryButtons');

toggleButton.addEventListener('click', () => {
    if (secondaryButtons.style.display === "none" || secondaryButtons.style.display === "") {
        secondaryButtons.style.display = "flex";
    } else {
        secondaryButtons.style.display = "none";
    }
});

// عرض المحتوى أسفل الأزرار عند الضغط عليها
const sections = document.querySelectorAll('.secondary-button');
sections.forEach(section => {
    section.addEventListener('click', (e) => {
        const contentId = `content${e.target.id.replace('section', '')}`;
        const content = document.getElementById(contentId);
        
      // إخفاء المحتويات الأخرى
        const allContents = document.querySelectorAll('.content-section');
        allContents.forEach(content => {
            if (content !== content) {
                content.style.display = 'none';
            }
        });

        // عرض المحتوى المطلوب
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

// إعدادات PWA للتثبيت
let deferredPrompt;
const installAppDiv = document.getElementById('installApp');

// اكتشاف ما إذا كان المتصفح يدعم تثبيت تطبيق ويب
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // منع عرض التثبيت التلقائي
    deferredPrompt = e; // حفظ الحدث لعرضه لاحقاً
    installAppDiv.innerHTML = '<button onclick="installApp()">تثبيت التطبيق</button>';
});

// دالة لتثبيت التطبيق
function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt(); // عرض نافذة التثبيت
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('تم تثبيت التطبيق');
            } else {
                console.log('لم يتم تثبيت التطبيق');
            }
            deferredPrompt = null; // إلغاء الحدث بعد التثبيت
        });
    }
}



