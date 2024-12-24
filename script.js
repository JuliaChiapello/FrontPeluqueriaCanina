const menuBoton = document.getElementById('menu-boton');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBoton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });