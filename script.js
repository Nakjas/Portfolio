document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Smooth Scrolling for same-page anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetElement = document.querySelector(this.getAttribute('href'));
            // 只有当目标元素在当前页面时才执行平滑滚动
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // 点击后关闭移动端菜单
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                     mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});

