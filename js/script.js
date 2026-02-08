// Menu hambúrguer
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.centro');
    const overlay = document.getElementById('menu-overlay');
    const btnMobile = document.getElementById('btn1-mobile');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
            menu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Fechar menu ao clicar no overlay
        if (overlay) {
            overlay.addEventListener('click', function () {
                closeMenu();
            });
        }

        // Fechar menu ao clicar em um link ou botão
        const menuItems = menu.querySelectorAll('li, #btn1-mobile');
        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                closeMenu();
            });
        });

        // Fechar menu ao pressionar ESC
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });

        function closeMenu() {
            menu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Ajustar altura do hero image em mobile
    function adjustHeroImage() {
        const heroImg = document.querySelector('.hero_img');
        if (window.innerWidth <= 768 && heroImg) {
            heroImg.style.height = 'auto';
        }
    }

    // Executar ao carregar e redimensionar
    adjustHeroImage();
    window.addEventListener('resize', adjustHeroImage);
});