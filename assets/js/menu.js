document.addEventListener('DOMContentLoaded', () => {
        const menuPrincipal = document.getElementById('menu');
        const html=`
        <a class="navbar-brand logo" href="/"> <img class="logo" src="../assets/images/logo.png"/> </a>
        <div class="social-media">
            <a href="https://instagram.com/ospatricios.mg" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/5535988027379" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61556133123814" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="mailto:contato@ospatricios.com.br"><i class="fa-regular fa-envelope"></i></a>
        </div>

        <div class="header-right gitan-medium">
            <a class="navbar-item" href="/cardapio/">Cardápio</a>
            <a class="navbar-item" href="/vinhos/">Carta de Vinhos</a>
            <a class="navbar-item" href="#team">Nossa História</a>
            <a class="navbar-item" href="#pricing">Contato</a>
            <a href="https://themewagon.com/themes/project-app-showasing-onepage-bootstrap-template-free/">
                <button class="header-btn"> Reservas</button>
            </a>
        </div> \n`;

        menuPrincipal.innerHTML = html;
    });